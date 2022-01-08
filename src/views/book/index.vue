<template>
  <div class="book">
    <div class="book-title">book</div>
    <div class="book-content">
      {{ this[COMMAND.BOOK] }} |
      {{ store.get(COMMAND.BOOK) }}
    </div>
  </div>
</template>

<script>
import StoreHandler from "@/store/handler/StoreHandler";
import { bookState, COMMAND } from "@/store/modules/book";

export default {
  name: "BOOK",
  data: () => ({
    COMMAND: COMMAND,
    store: new StoreHandler("book"),
  }),
  computed: {
    ...bookState([COMMAND.BOOK]),
  },
  methods: {},
  mounted() {
    this.store.set(COMMAND.BOOK);
  },
};
</script>
