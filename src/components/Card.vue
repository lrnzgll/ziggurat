<template>
  <div class='rounded-md bg-white drop-shadow-md px-6 py-4 my-3 w-full h-fit'>
    <h3 class='font-semibold text-lg mb-2'>{{title}}</h3>
    <slot />
  </div>
</template>

<script>
export default {
  props: ['title'],
};
</script>
