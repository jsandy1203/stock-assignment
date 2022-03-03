/* eslint-disable vue/multi-word-component-names */
<template>
  <div class="min-h-screen flex justify-center items-center bg-white">
    <div class="loader bg-white p-5 rounded-full flex space-x-3">
      <div class="w-5 h-5 bg-gray-700 rounded-full animate-bounce"></div>
      <div class="w-5 h-5 bg-gray-700 rounded-full animate-bounce"></div>
      <div class="w-5 h-5 bg-gray-700 rounded-full animate-bounce"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpinnerComponent",
};
</script>
