export interface User {
  id: string;
  name: string;
  phone: string;
  avatarUrl: string;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: ReturnType<typeof require>;
}

export const SETTINGS_MENU_ITEMS: MenuItem[] = [
  { id: "notifications", label: "Notifications", icon: require("../../../assets/Vector5.svg") },
  { id: "privacy", label: "Privacy", icon: require("../../../assets/Vector2.svg") },
  { id: "help", label: "Help & Support", icon: require("../../../assets/Vector6.svg") },
  { id: "about", label: "About", icon: require("../../../assets/Vector8.svg") },
  { id: "rate", label: "Rate the App", icon: require("../../../assets/Vector9.svg") },
];
