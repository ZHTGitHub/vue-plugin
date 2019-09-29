<template>
  <div>
    <a-modal
      :title="title"
      v-model="visible"
      @ok="handleOk"
    >
      <p>{{ content }}</p>
    </a-modal>
  </div>
</template>
<script>
  export default {
    name: 'Modal',
    props: {
      msg: String
    },
    data() {
      return {
        visible: false,
        title: '',
        content: ''
      }
    },
    methods: {
      showModal() {
        this.visible = true
      },
      handleOk(e) {
        console.log(e);
        this.visible = false
      }
    }
  }
</script>

