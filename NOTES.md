# Ready! AI — Project Documentation & Notes

## Architecture & Organization

### Feature-Based Folder Structure
The project follows a strict feature-based module pattern. This ensures maximum scalability and decoupling between independent application modules:

```text
src/
├── components/         # Shared generic UI (atoms/molecules like AppLogo)
├── features/           # Core feature modules
│   ├── auth/           # Login, Welcome, OTP logic
│   ├── home/           # Main feed, QuestionCards, Social proof
│   ├── session-result/ # Feedback breakdown, Smart summary, Key moments
│   ├── settings/       # User profile, Trial cards, Logout
│   └── store/          # Storefront (placeholder)
├── navigation/         # Routing configurations & custom Tab Bar
├── theme/              # Global design tokens (colors, typography, spacing)
└── mock-data/          # Static JSON assets (questions, results, users)
```

#### Why This Works
- **Isolation**: Screens, components, and types for each domain are colocated, reducing cross-feature coupling.
- **Scalability**: Adding a new feature is as simple as creating a new folder in `features/` without disrupting the rest of the app.
- **Type Safety**: Navigation contracts and feature-specific types are explicit and centralized.

### Navigation Strategy
- **Root Stack**: Orchestrates the top-level transition between Auth and Main application states.
- **Auth Stack**: Handles Splash → Welcome → Login.
- **Main Tabs**: Bottom navigation with a custom, scroll-aware animated tab bar.
- **Session Result**: A modal-like screen accessible from the Home feed.

> [!NOTE]
> `CommonActions.reset` is strictly used at login/logout boundaries to prevent stale back-stack behavior and ensure a clean user session. Route types are centralized in `navigation/types.ts`.

### Data & State Management
- **Local Data**: The app consumes local JSON mock files for questions, results, users, and companies.
- **Flow**: Data flows from JSON imports → Screen-level shaping (using `useMemo` where needed) → Typed component props.
- **State**: React state and hooks are utilized for UI logic; no heavy global state library was required for the current scope.

---

## Screen-by-Screen Breakdown

| Screen | Key Decisions & Implementation |
| :--- | :--- |
| **Splash** | Simple branded entry with timed navigation to keep UX focused and predictable. |
| **Welcome** | Primary CTA with gradient and haptic feedback. Used static image (`welcome_screen_girl.png`) for performance. |
| **Login** | 6-cell OTP with auto-focus forward, backspace navigation, and auto-submit upon completion. |
| **Home** | `FlashList` implementation for high-performance scrolling. Supports inline question expansion and Reanimated motion. |
| **Session Result** | Custom two-tab switcher (Smart Summary / Key Moments) without extra libraries. |
| **Settings** | Renders user info from mock JSON with action cards and logout functionality. |

---

## Bonus Features & Polish
- **Dynamic Tab Bar**: Scroll-aware visibility (hides on scroll down, reveals on scroll up).
- **Social Proof**: Animated counter in the Home feed for simulated real-time user activity.
- **Haptic Feedback**: Micro-interactions utilizing `expo-haptics` for a premium tactile feel.
- **Performance**: Optimized list rendering via `@shopify/flash-list` with `estimatedItemSize`.
- **Entrance Animations**: Cascading `FadeInDown` transitions for feed items on pull-to-refresh.

---

## Trade-offs & Assumptions

### Design Choices
- **Ready! Gradient**: Approximated with flat/shadowed styling to avoid extra native module complexity (no `MaskedView`).
- **Progress vs Settings**: Figma showed inconsistent labels; "Settings" was chosen to match the README specification.
- **AppLogo**: Added a `variant` prop (`brand`/`default`) to support both header and splash/welcome variants.

### Known Limitations
- **Store Tab**: Currently functions as a placeholder.
- **Accessibility**: Partial coverage; full labels, roles, and hints are prioritized for future iterations.
- **Bottom Sheet**: `QuestionBottomSheet` exists but current Home UX favors inline expansion for a smoother flow.

---

## Technical Stack
- **Routing**: `@react-navigation` (Native, Stack, Bottom-Tabs)
- **Animation**: `react-native-reanimated`
- **Lists**: `@shopify/flash-list`
- **UI/UX**: `expo-image`, `expo-haptics`, `expo-linear-gradient`
- **Typography**: Inter & Onest Google Fonts

---

## Future Roadmap
- [ ] **Complete Token Migration**: Map remaining hardcoded values to semantic theme tokens.
- [ ] **Accessibility Audit**: Validate with VoiceOver/TalkBack and add exhaustive hints.
- [ ] **Audio Realism**: Implement actual play/pause logic for session playback synced with moments.
- [ ] **Home Decomposition**: Refactor selection and data logic into focused custom hooks.
- [ ] **Tooling Baseline**: Add ESLint flat config and focused tests for OTP and auth reset flows.

---

## Verification & Testing
Manual testing was conducted across the following flows:
1. **Auth Flow**: Splash → Welcome → Login (OTP validity) → Main reset.
2. **Home Interaction**: List performance, inline expansion, feedback navigation.
3. **Session Experience**: Tab switching and back behavior.
4. **Settings**: Logout flow and reset.

> [!TIP]
> Current validation was code-level/static. Final pre-release QA should run on at least one physical iOS device and one Android device to validate animations.
