<template>
<section>
    <Hero pageTitle="Get In Touch"/>
    <section class="contact py-3 mt-1">
    <h2>Send Me A Message</h2>
    <p>
      If you have any queries, just shoot me a message.
    </p>
    <section class="d-flex justify-content-center">
      <section class="form-wrapper py-4 px-2 border border-3 shadow rounded-plus col-md-9 col-sm-10 col-11 col-lg-4 mt-3">
        <form class="form-horizontal px-md-4 mx-2" action="/contact?sent=true" name="contactForm" method="POST" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        @submit.prevent="sendMessage">
          <input type="hidden" name="form-name" value="contactForm">
          <section class="form-group mb-2 pb-2">
            <label for="" class="form-label d-flex">Name</label>
            <input @blur="fields.fullName.meta.touched = true" :class="{ 'p-invalid': !fieldIsValid('fullName') }" class="form-control py-275" type="text" placeholder="E.g. Jane Done" name="contactName" v-model="fullName">
            <small v-if="!fieldIsValid('fullName')" class="d-flex">tot</small>
          </section>
          <section class="form-group mb-2 pb-2">
            <label for="contactEmail" class="form-label d-flex">Email</label>
            <input @blur="fields.email.meta.touched = true" :class="{ 'p-invalid': !fieldIsValid('email') }" class="form-control py-275" type="email" placeholder="E.g. someone@example.com" name="contactEmail" v-model="email">
            <!-- <small v-if="fields.email.meta.touched && (vldtr.email && (!vldtr.email.valid))" class="d-flex">tot</small> -->
            <small v-if="!fieldIsValid('email')" class="d-flex">tot</small>
          </section>
          <section class="form-group mb-2 pb-2">
            <label for="" class="form-label d-flex">Subject</label>
            <select @blur="fields.subjectLine.meta.touched = true" :class="{ 'p-invalid': !fieldIsValid('subjectLine') }" class="form-select py-275" name="subjectLine" id="" v-model="currentSubjectLine">
              <option v-for="(subject, index) in subjectLines" :key="index" :value="subject.value">
                {{ subject.text }}
              </option>
            </select>
            <small v-if="!fieldIsValid('subjectLine')"  class="d-flex">tot</small>
          </section>
          <section class="form-group mb-2 pb-2">
            <label for="message" class="form-label d-flex">Message</label>
            <textarea @blur="fields.message.meta.touched = true" :class="{ 'p-invalid': !fieldIsValid('message') }" class="form-control" id="message" name="message" v-model="message"></textarea>
            <small v-if="!fieldIsValid('message')"  class="d-flex">tot</small>
          </section>
          <button class="btn btn-secondary w-100 rounded-pill py-275 text-uppercase" type="submit" :disabled="!canSubmit">Send Message</button>
        </form>
      </section>
    </section>
  </section>
</section>
</template>

<script>
import { computed, onMounted, reactive, toRefs, ref, watch } from 'vue';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

export default {
    setup() {
        const pageData = reactive({
            fullName: "",
            email: "",
            currentSubjectLine: "",
            message: "", 
            formSubmitted: false
        });

          const subjectLines =  [
                { text: "-- Select a subject line --", value: "" },
                { text: "Work Arrangement", value: "work" },
                { text: "Freelance Project", value: "project" },
                { text: "Other/General", value: "other" }
            ];

        let canSubmit = ref(false);
        let vldtr = ref({});
        // Setup Validation Schema
        const valSchema = yup.object({
          fullName: yup.string().required().label("Name"),
          email: yup.string().required().email().label("Email"),
          subjectLine: yup.string().required().label("Subject Line"),
          message: yup.string().required().label("Message")
        });

        // Add Schema to form
        const formConfig = useForm({
          validationSchema: valSchema
        });
  
        // Handle submission
        const sendMessage =  async () => {
          pageData.formSubmitted = true;
          formConfig.setValues({
            fullName: pageData.fullName,
            email: pageData.email,
            subjectLine: pageData.currentSubjectLine,
            message: pageData.message
          });

          if (!canSubmit.value) {
            return;
          }
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
              console.log(fields[fieldName].meta.touched, vldtr.value[fieldName]);
              if (fields[fieldName].meta.touched) {
                if (vldtr.value[fieldName]) {
                  return vldtr.value[fieldName].valid
                }
              }

              return !fields[fieldName].meta.touched;
              // return !(fields[fieldName].meta.touched) && ((!vldtr.value[fieldName]) && (vldtr.value[fieldName].valid));
          };
        });

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
          // console.log(vldtr.value);
        });
        
        
        return { ...toRefs(pageData), sendMessage, canSubmit, subjectLines, formConfig, vldtr, fields, fieldIsValid };
    }
}
</script>

<style scoped>
.py-275 {
    padding-top: 0.75rem!important;
    padding-bottom: 0.75rem!important;
}
.rounded-plus {
  border-radius: .5rem !important;
}

#message {
  height: 8rem;
}
</style>