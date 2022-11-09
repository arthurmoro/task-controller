import { defineStore } from "pinia";

export enum NotificationType {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
  INFO = "info",
}

export interface CustomNotification {
  id?: Date;
  type: NotificationType;
  text: string;
  timeInSeconds?: number;
  fadeOutClass?: string;
}

interface Notifications {
  notifications: CustomNotification[];
}

export const useNotificationStore = defineStore("notifications", {
  state: (): Notifications => {
    return {
      notifications: [],
    };
  },
  actions: {
    notify(newNotification: CustomNotification) {
      newNotification.id = new Date();
      this.notifications.push(newNotification);

      const delay = newNotification.timeInSeconds ? newNotification.timeInSeconds * 1000 : 3000;

      setTimeout(() => {
        this.notifications = this.notifications.map((notification) => {
          if (notification.id === newNotification.id) {
            return { ...notification, fadeOutClass: "fade" };
          } else {
            return notification;
          }
        });
      }, delay);

      setTimeout(() => {
        this.notifications = this.notifications.filter(
          (notification) => notification.id !== newNotification.id
        );
      }, delay + 1000);
    },
  },
});
