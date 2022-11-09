<template id="Notification">
  <div class="notification">
    <v-alert class="inner-alert" :class="notification.fadeOutClass" v-for="notification in notifications"
      :color="colors[notification.type]" :text="notification.text">

    </v-alert>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useNotificationStore } from "../../stores/notifications";
import { NotificationType } from "../../stores/notifications";

const notificationStore = useNotificationStore();
const notifications = computed(() => notificationStore.notifications)
const colors = {
  [NotificationType.INFO]: "rgb(33,150,243)",
  [NotificationType.SUCCESS]: "rgb(76,175,80)",
  [NotificationType.WARNING]: "rgb(251,140,0)",
  [NotificationType.ERROR]: "rgb(229,115,115)",
}

</script>
<style scoped>
.inner-alert {
  margin-bottom: 5px;
  color: white;
}

.v-alert__prepend {
  display: none;
}

.notification {
  text-align: center;
  position: fixed;
  /* max-width: 300px; */
  right: 20px;
  top: 20px;
  z-index: 999;
}

.fade {
  animation: moveout 0.5s 0.5s ease forwards;
}

@keyframes moveout {
  from {
    right: 19px;
  }

  to {
    right: -320px;
  }
}
</style>