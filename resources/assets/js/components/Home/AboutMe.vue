<template>
  <div class="panel panel-default">
    <div class="panel-heading">{{ title }}</div>
    <div class="panel-body">{{ content }}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'About me',
        content: 'this is About me page',
      };
    },
  };
</script>

<style>
  .panel {
    border-radius: 0;
  }
</style>