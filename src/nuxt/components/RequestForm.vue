<template>
  <cm7-form :fields="fields" @submit="$emit('submit', $event)"/>
</template>

<script>
export default {
  data: () => ({
    fields: {
      name: {
        label: 'Name',
        placeholder: 'Your name',
      },
      email: {
        label: 'Email',
        placeholder: 'Your email',
        type: 'email',
      },
      songLink: {
        label: 'Song link',
        placeholder: 'Place a link to the song (youtube, spotify...)',
        validator: 'isLink',
      },
      content: {
        label: 'Content',
        placeholder: 'Say “hi” to Jason!',
        type: 'textarea',
        optional: true,
      },
    },
  }),
};
</script>

<style lang="scss" scoped>
</style>
