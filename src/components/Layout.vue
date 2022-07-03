<template>
  <section class='px-5' :class='colStyle'>
    <slot />
  </section>
</template>

<script>
export default {
  props: ['cols'],
  computed: {
    colStyle() {
      switch (this.cols) {
        case '1': return '';
        case '2': return 'grid grid-cols-2 gap-3';
        case '3': return 'grid grid-cols-3 gap-3';
        default: return '';
      }
    },
  },
};
</script>
