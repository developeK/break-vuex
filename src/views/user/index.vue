<template>
  <div class="user">
    <div class="user-title">user</div>
    <div class="user-content">
      {{ users }}
    </div>
  </div>
</template>

<script>
import { userState, userActions } from "@/store/modules/user";

export default {
  name: "USER",
  computed: {
    ...userState(["users"]),
  },
  methods: {
    ...userActions(["setUsers"]),
  },
  mounted() {
    this.setUsers();
  },
};
</script>
