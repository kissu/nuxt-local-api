<template>
  <div>
    <input id="name" v-model="name" type="text" name="name" />
    <button @click="callNuxtApi">try local Nuxt API</button>
    <div>
      Response from the backend:
      <pre>{{ response }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionList',
  data() {
    return {
      name: 'bob',
      response: {},
    }
  },
  methods: {
    async callNuxtApi() {
      const response = await this.$axios.$get(
        `/api/what-is-my-name/${this.name}`
      )
      this.response = response
    },
  },
}
</script>
