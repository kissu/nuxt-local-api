<template>
  <div>
    hi, this is the about page
    <nuxt-link to="/">index</nuxt-link>

    <pre>{{ x }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const call = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    const x = await call.json()
    console.log('working?', x)
    return { x }
  },
}
</script>
