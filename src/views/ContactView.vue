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
        <form class="form-horizontal px-md-4 mx-2" action="/contact?sent=true" name="contactForm" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contactForm">
          <section class="form-group mb-2 pb-2">
            <label for="" class="form-label d-flex">Name</label>
            <input class="form-control py-275" type="text" placeholder="E.g. Jane Done" name="contactName">
          </section>
          <section class="form-group mb-2 pb-2">
            <label for="" class="form-label d-flex">Email</label>
            <input class="form-control py-275" type="text" placeholder="E.g. someone@example.com" name="contactEmail">
          </section>
          <section class="form-group mb-2 pb-2">
            <label for="" class="form-label d-flex">Subject</label>
            <select class="form-select py-275" name="subjectLine" id="">
              <option v-for="(subject, index) in subjectLines" :key="index" :value="subject.value">
                {{ subject.text }}
              </option>
            </select>
          </section>
          <section class="form-group mb-2 pb-2">
            <label for="message" class="form-label d-flex">Message</label>
            <textarea class="form-control" id="message" name="message"></textarea>
          </section>
          <button class="btn btn-secondary w-100 rounded-pill py-275 text-uppercase" type="submit">Send Message</button>
        </form>
      </section>
    </section>
  </section>
</section>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
    setup() {
        const pageData = reactive({
            subjectLines: [
                { text: "-- Select a subject line --", value: "" },
                { text: "Work Arrangement", value: "work" },
                { text: "Freelance Project", value: "project" },
                { text: "Other/General", value: "other" }
            ]
        });
        return { ...toRefs(pageData) };
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