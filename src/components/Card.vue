<template>
  <div class='rounded-md bg-white drop-shadow-md px-6 py-4 my-3 w-full h-fit flex items-center'>
    <div class='inline flex-none mr-6' v-show="icon">
      <img :src="icon" class='bg-white h-16 w-16 p-3 drop-shadow-md rounded-full' alt="" />
    </div>
    <div>
      <h3 class='font-semibold text-lg mb-2'>{{title}}</h3>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'icon'],
};
</script>
