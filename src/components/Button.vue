<template>
  <button
    type='button'
    class='w-28 h-10 rounded-md shadow-lg active:shadow-inner flex justify-self-center text-white items-center justify-center cursor-pointer ease-in uppercase'
    :class="colorStyle">
      <p class='font-semibold'>{{text}}</p>
  </button>
</template>

<script>
export default {
  props: ['text', 'colour'],
  computed: {
    colorStyle() {
      if (this.colour === 'secondary') {
        return 'bg-orange-400 hover:bg-orange-500 active:bg-orange-600';
      }
      return 'bg-sky-500 hover:bg-sky-600 active:bg-sky-700';
    },
  },
};
</script>
