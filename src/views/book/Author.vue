<template>
  <div class="author">
    <div class="author-title">author</div>
    <div class="author-content">
      {{ this[COMMAND.AUTHOR_FILTER] }} | {{ this[COMMAND.AUTHOR] }} |
      {{ store.getter(COMMAND.AUTHOR_FILTER) }} |
      {{ store.get(COMMAND.AUTHOR) }}
    </div>
  </div>
</template>

<script>
import StoreHandler from "@/store/handler/StoreHandler";
import {
  authorState,
  authorGetters,
  COMMAND,
} from "@/store/modules/book/author";

export default {
  name: "AUTHOR",
  data: () => ({
    COMMAND: COMMAND,
    store: new StoreHandler("book/author"),
  }),
  computed: {
    ...authorState([COMMAND.AUTHOR]),
    ...authorGetters([COMMAND.AUTHOR_FILTER]),
  },
  mounted() {
    this.store.set(COMMAND.AUTHOR);
  },
};
</script>
