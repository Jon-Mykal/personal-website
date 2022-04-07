<template>
<section class="contact mb-4">
      
      <Toast position="bottom-center"/>
      <!-- <Dialog header="Status" :style="{width: '50%', maxWidth: '40rem'}" v-model:visible="showPopup" :modal="true">
        <ProgressSpinner c />

        <template #footer>
            <button class="btn btn-primary rounded-pill px-4" @click="showPopup = false">Ok</button>
        </template>
    </Dialog> -->
      <Hero pageTitle="Get In Touch"/>
      <section class="contact-channels pt-5 pb-1">
        <section class="container justify-content-center d-flex w-75">
          <section class="row gx-5 pt-5 pt-sm-0">
            <section class="col-12 col-sm-4" v-for="channel in contactChannels" :key="channel.name" @click="navigateToUrl(channel.url)">
              <section class="wrapper d-flex px-3 flex-column align-items-center my-md-5 pb-5 pt-2 pt-sm-5 pb-md-2 pt-md-0 channel">
                <section class="circle rounded-circle gw--shadow-circle-2-yellow-orange gw--border-main-blue d-flex justify-content-center align-items-center">
                  <font-awesome-icon :icon="channel.logo" />
                </section>
                <h5 class="pt-3">{{ channel.name }}</h5>
                
              </section>
            </section>
            
          </section>
        </section>
        <p class="pt-4">
          If you have any queries, just shoot me a message.
        </p>
      </section>
      <section class="contact-message py-3 mt-1 gw--bg-off-white-blue-pattern">
      <h3 class="py-3">Send Me A Message</h3>
      <section class="d-flex justify-content-center">
        <!-- <ProgressSpinner /> -->
        <section class="form-wrapper bg-white py-4 px-2 gw--shadow rounded-plus col-md-8 col-sm-10 col-11 col-lg-6 col-xl-5 col-xxl-4 mt-3" :class="isSubmitting ? 'opacity-375': ''">
          <form class="form-horizontal px-md-4 mx-2"  name="contactForm" ref="contactForm" method="POST" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
          autocomplete="off"
          @submit.prevent="sendMessage">
            <fieldset :disabled="isSubmitting">
              <input type="hidden" name="form-name" value="contactForm">
              <section class="form-group mb-2 pb-2">
                <label for="" class="form-label d-flex">Name</label>
                <input @blur="fields.fullName.meta.touched = true" :class="{ 'p-invalid': !fieldIsValid('fullName') }" class="form-control py-275" type="text" placeholder="E.g. Jane Doe" name="contactName" v-model="fullName">
                <small v-if="!fieldIsValid('fullName')" class="d-flex error">{{ showValMsg('fullName') }}</small>
              </section>
              <section class="form-group mb-2 pb-2">
                <label for="contactEmail" class="form-label d-flex">Email</label>
                <input @blur="fields.email.meta.touched = true" :class="{ 'p-invalid': !fieldIsValid('email') }" class="form-control py-275" type="email" placeholder="E.g. someone@example.com" name="contactEmail" autocomplete="off"  v-model="email">
                <!-- <small v-if="fields.email.meta.touched && (vldtr.email && (!vldtr.email.valid))" class="d-flex">tot</small> -->
                <small v-if="!fieldIsValid('email')" class="d-flex error">{{ showValMsg('email') }}</small>
              </section>
              <section class="form-group mb-2 pb-2">
                <label for="" class="form-label d-flex">Subject</label>
                <select @blur="fields.subjectLine.meta.touched = true" :class="{ 'p-invalid': !fieldIsValid('subjectLine') }" class="form-select py-275" name="subjectLine" id="" v-model="currentSubjectLine">
                  <option v-for="(subject, index) in subjectLines" :key="index" :value="subject.value">
                    {{ subject.text }}
                  </option>
                </select>
                <small v-if="!fieldIsValid('subjectLine')"  class="d-flex error">{{ showValMsg('subjectLine') }}</small>
              </section>
              <section class="form-group mb-2 pb-2">
                <label for="message" class="form-label d-flex">Message</label>
                <textarea @blur="fields.message.meta.touched = true" :class="{ 'p-invalid': !fieldIsValid('message') }" class="form-control" id="message" name="message" v-model="message"></textarea>
                <small v-if="!fieldIsValid('message')"  class="d-flex error">{{ showValMsg('message') }}</small>
              </section>
              <button class="btn gw--bg-main-blue w-100 rounded-pill py-275 text-uppercase" type="submit" :disabled="!canSubmit">Send Message</button>
            </fieldset>
          </form>
        </section>
      </section>
      </section>
</section>
</template>

<script>
import { computed, onBeforeMount, reactive, toRefs, ref, watch } from 'vue';
import { useField, useForm } from 'vee-validate';
import { useToast } from "primevue/usetoast";
import axios from 'axios';
import * as yup from 'yup';

export default {
    setup() {
      const toast = useToast();
        const pageData = reactive({
            fullName: "",
            email: "",
            currentSubjectLine: "",
            message: "", 
            formSubmitted: false,
            showPopup: false,
            statusMessage: "",
            success: false,
            isSubmitting: false,
            navigateToUrl(url) {
              window.location.href = url;
            }
        });

        const contactForm = ref(null);

        const subjectLines =  [
              { text: "-- Select a subject line --", value: "" },
              { text: "Work Arrangement", value: "work" },
              { text: "Freelance Project", value: "project" },
              { text: "Other/General", value: "other" }
        ];

        const contactChannels = [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/gwong13/", logo: ["fab", "linkedin"], action: "VISIT"},
          { name: "GitHub", url: "https://github.com/Jon-Mykal", logo: ["fab", "github"], action: "VISIT"},
          { name: "Phone", url: "tel:+18768084984", logo: "phone", action: "CALL"},
        ]    

        let canSubmit = ref(false);
        let vldtr = ref({});
        // Setup Validation Schema
        const valSchema = yup.object({
          email: yup.string().required().email().label("Email"),
          fullName: yup.string().required().label("Name"),
          
          subjectLine: yup.string().required().label("Subject"),
          message: yup.string().required().label("Message")
        });

        // Add Schema to form
        const formConfig = useForm({
          validationSchema: valSchema
        });
  
        // Handle submission
        const sendMessage =  async () => {
          pageData.formSubmitted = true;
          pageData.isSubmitting = true;
          // formConfig.setValues({
          //   fullName: pageData.fullName,
          //   email: pageData.email,
          //   subjectLine: pageData.currentSubjectLine,
          //   message: pageData.message
          // });

          if (!canSubmit.value) {
            return;
          }
          let statusMessage = "";
          const formData = new FormData(contactForm.value);
          // console.log(formData);
          var formFields = [];
          formData.forEach((val, key) =>  {
            let field = `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
            formFields.push(field);
          });
          let encodedData = formFields.join("&");
          setTimeout(() => {
            axios.post("/", encodedData, { header: { "Content-Type": "application/x-www-form-urlencoded" }}).then((res) => {
              pageData.showPopup = true;
              pageData.success = true;
              pageData.isSubmitting = false;
              
              statusMessage = "Your message was sent. Thank you!";
              toast.add({ severity: 'success', summary: 'Notification', detail: statusMessage, life: 3500});
              pageData.fullName = "";
              pageData.email = "";
              pageData.message = "";
              pageData.currentSubjectLine = "";
              // console.log(res);
            })
            .catch(err => {
              pageData.showPopup = true;
              pageData.success = false;
              pageData.isSubmitting = false;
              statusMessage = "Your message was not sent. Reach me via any other method listed on this page.";
              toast.add({ severity: 'error', summary: 'Notification', detail: statusMessage, life: 3500});
              // console.log(err);
            });
          }, 2000);
        };

        // Grab fields to get individual meta-data
        // Best to match schema with field names and v-model names
        const fields = {
          fullName: useField('fullName'),
          email: useField('email'),
          subjectLine: useField('subjectLine'),
          message: useField('message')
        };

        const fieldIsValid = computed(() => {
          return (fieldName) => {
            // console.log(fields[fieldName].meta, vldtr.value[fieldName]["valid"]);
            // for(var key in vldtr.value[fieldName]) {
            //   console.log(vldtr.value[fieldName][key]);
            // }
              // console.log(fields[fieldName].meta.touched, vldtr.value[fieldName]);

              if (fields[fieldName].meta.touched && vldtr.value[fieldName].valid) {
                return true;
              }
              else if (fields[fieldName].meta.touched && !vldtr.value[fieldName].valid) {
                return false;
              }
              else {
                return true;
              }

              // if (vldtr.value[fieldName]) {
              //   return vldtr.value[fieldName].valid
              // }
              // return fields[fieldName].meta.touched;
              // return (!fields[fieldName].meta.touched) && (vldtr.value[fieldName]) && (vldtr.value[fieldName].valid);
              // return !(fields[fieldName].meta.touched) && ((!vldtr.value[fieldName]) && (vldtr.value[fieldName].valid));
          };
        });

        const showValMsg = computed(() => {
          return (fieldName) => {
            // vldtr.value[fieldName];
            const err = fields[fieldName].errorMessage;
            if (err.value) {
              return err.value.replace('"', '');
            }
            // console.log(err.value);
            
          }
        })

        // const hasBeenTouched = (fieldName) => {
        //   return useField(fieldName).meta.touched;
        // }
        // Watch for changes
        
        watch(pageData, async () => {
          formConfig.setValues({
            fullName: pageData.fullName,
            email: pageData.email,
            subjectLine: pageData.currentSubjectLine,
            message: pageData.message
          });
          vldtr.value = (await formConfig.validate()).results;
          canSubmit.value = formConfig.meta.value.valid;
        });
        
        onBeforeMount(async () => {
          vldtr.value = (await formConfig.validate()).results;
          // setTimeout(() => pageData.isSubmitting = true, 3500);
        });
        // If code was loaded
        // onMounted(async () => {
        //   formConfig.setValues({
        //     fullName: pageData.fullName,
        //     email: pageData.email,
        //     subjectLine: pageData.currentSubjectLine,
        //     message: pageData.message
        //   });
        //   vldtr.value = (await formConfig.validate()).results;
        //   canSubmit.value = formConfig.meta.value.valid;
        // })
        
        return { ...toRefs(pageData), sendMessage, canSubmit, subjectLines, formConfig, vldtr, fields, fieldIsValid, showValMsg, contactForm, contactChannels };
    }
}
</script>

<style scoped>
.py-275 {
    padding-top: 0.75rem!important;
    padding-bottom: 0.75rem!important;
}

.form-wrapper {
  transition: opacity .15s ease-in;
}

.form-control:disabled, .form-select:disabled {
  background-color: transparent;
}


.form-control, .form-select {
  border-color: var(--dark-blue-black);
}

.form-control:focus, .form-select:focus {
  border-color: var(--main-blue);
  box-shadow: none;
}

.opacity-375 {
  opacity: .375 !important;
}

.rounded-plus {
  border-radius: .5rem !important;
}

#message {
  height: 8rem;
}

.error {
  color: rgb(226, 5, 5);
}

.p-invalid {
  border-color: rgb(226, 5, 5);
}

.btn:disabled {
  pointer-events: initial;
  cursor: no-drop!important;
}

/* .contact-channels {
  
} */

.channel {
  cursor: pointer;
}

.circle {
  height: 7.5rem;
  width: 7.5rem;
  background: white;
}
</style>