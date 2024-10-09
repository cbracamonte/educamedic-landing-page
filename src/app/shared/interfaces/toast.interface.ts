export interface IToastMessage {
  type: "success" | "error" | "warning" | "info";
  message: string;
}
