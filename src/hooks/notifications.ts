import { NotificationType, useNotificationStore } from "../stores/notifications";

type Notifier = (type: NotificationType, text: string, timeInSeconds?: number) => void;

export const useNotification = (): Notifier => {
  return (type: NotificationType, text: string, timeInSeconds?: number): void => {
    const notificationStore = useNotificationStore();
    notificationStore.notify({
      type,
      text,
      timeInSeconds,
    });
  };
};
