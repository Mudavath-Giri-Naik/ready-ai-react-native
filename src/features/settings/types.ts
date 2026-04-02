export interface User {
  id: string;
  name: string;
  phone: string;
  avatarUrl: string;
}

export interface MenuItem {
  id: string;
  label: string;
}

export const SETTINGS_MENU_ITEMS: MenuItem[] = [
  { id: "notifications", label: "Notifications" },
  { id: "privacy", label: "Privacy" },
  { id: "help", label: "Help & Support" },
  { id: "about", label: "About" },
  { id: "rate", label: "Rate the App" },
];
