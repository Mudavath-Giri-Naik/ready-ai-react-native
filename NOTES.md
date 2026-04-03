# Notes

## Trade-offs & Decisions

### Settings vs Progress Tab Label
The Figma design shows inconsistent labelling for the middle bottom tab — one screen shows "Settings" while another shows "Progress". I used **"Settings"** since the Settings screen is already implemented and matches the README spec. If the intended label is "Progress", the tab can be renamed in `main-navigator.tsx`.

### AppLogo Variant
The Home screen header shows "Ready!" (with exclamation mark) while the Welcome/Splash screens show the "Ready" + "ai" pill logo. I added a `variant` prop (`"default"` / `"brand"`) to the `AppLogo` component to support both use cases without duplicating the component.

### Question Card Expanded State
The expanded question detail appears as an overlay on top of the question list rather than pushing cards down. Tapping outside the overlay dismisses it. This matches the Figma "Open State" screenshot where Q2/Q3 are hidden behind the expansion.

### Gradient on "Ready" Text
A vertical gradient (#FF6D00 → #FF3900) was specified in Figma for the "Ready" text. Since implementing text gradients in React Native requires `expo-linear-gradient` + `MaskedView` (adding native dependencies), a flat #FF6D00 color is used instead. This is a known trade-off to avoid unnecessary native module complexity.

## What I Would Improve With More Time

- Animated transitions for the question card overlay (spring/fade using react-native-reanimated)
- Skeleton loading states for company logos
- Haptic feedback on button presses using expo-haptics
- Accessibility labels on all interactive elements
- Pull-to-refresh on the question list
- Proper OTP auto-fill on the Login screen

## Assumptions

- The "8" notification badge count is static/mock (no backend)
- Question card states are determined by position: Q1 = active, Q2 = start, Q3+ = upcoming
- The social proof banner always appears after the 3rd question
- The AI VS AI (LISTEN) button is non-functional (disabled state)
