<template>
  <div class="book">
    <div class="book-title">book</div>
    <div class="book-content">
      {{ books }}
    </div>
  </div>
</template>

<script>
import { bookState, bookActions } from "@/store/modules/book";

export default {
  name: "BOOK",
  computed: {
    ...bookState(["books"]),
  },
  methods: {
    ...bookActions(["setBooks"]),
  },
  mounted() {
    this.setBooks();
  },
};
</script>
