<template>
  <section class="contact">
    <h2>Send Me A Message</h2>
    <form action="">
      <section class="form-group">
         <label for="">Name</label>
         <input type="text" placeholder="E.g. Jane Done">
      </section>
      <section class="form-group">
         <label for="">Email</label>
         <input type="text" placeholder="E.g. someone@example.com">
      </section>
      <section class="form-group">
         <label for="">Subject</label>
         <select name="" id="">
           <option v-for="(subject, index) in subjectLines" :key="index" :value="subject.value">
             {{ subject.text }}
           </option>
         </select>
      </section>
      <section class="form-group">
         <label for="message">Message</label>
         <textarea name="message"></textarea>
      </section>
    </form>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const pageData = reactive({
      subjectLines : [
        { text: "-- Select a subject line --", value:""},
        { text: "Work Arrangement", value: "work" },
        { text: "Freelance Project", value: "project"},
        { text: "Other/General", value:"other"}
      ]
    });


    return {...toRefs(pageData)}
  }
}
</script>

<style scoped>
</style>