<template>
  <div class="author">
    <div class="author-title">author</div>
    <div class="author-content">
      {{ authors }}
    </div>
  </div>
</template>

<script>
import { authorState, authorActions } from '@/store/modules/book/author';

export default {
  name: 'AUTHOR',
  computed: {
    ...authorState(['authors']),
  },
  methods: {
    ...authorActions(['setAuthors']),
  },
  mounted() {
    this.setAuthors();
  },
};
</script>
