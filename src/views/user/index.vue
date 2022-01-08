<template>
  <div class="user">
    <div class="user-title">user</div>
    <div class="user-content">
      {{ this[COMMAND.USER] }} |
      {{ store.get(COMMAND.USER) }}
    </div>
  </div>
</template>

<script>
import StoreHandler from "@/store/handler/StoreHandler";
import { userState, COMMAND } from "@/store/modules/user";

export default {
  name: "USER",
  data: () => ({
    COMMAND: COMMAND,
    store: new StoreHandler("user"),
  }),
  computed: {
    ...userState([COMMAND.USER]),
  },
  methods: {},
  mounted() {
    this.store.set(COMMAND.USER);
  },
};
</script>
