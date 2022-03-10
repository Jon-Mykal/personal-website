<template>
<section>
    <Hero pageTitle="Get In Touch"/>
    <section class="contact">
    <h2>Send Me A Message</h2>
    <form name="contactForm" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contactForm">
      <section class="form-group">
         <label for="">Name</label>
         <input type="text" placeholder="E.g. Jane Done" name="contactName">
      </section>
      <section class="form-group">
         <label for="">Email</label>
         <input type="text" placeholder="E.g. someone@example.com" name="contactEmail">
      </section>
      <section class="form-group">
         <label for="">Subject</label>
         <select name="subjectLine" id="">
           <option v-for="(subject, index) in subjectLines" :key="index" :value="subject.value">
             {{ subject.text }}
           </option>
         </select>
      </section>
      <section class="form-group">
         <label for="message">Message</label>
         <textarea name="message"></textarea>
      </section>
      <button type="submit">Send Message</button>
    </form>
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
</style>