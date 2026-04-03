# Ready! — Implementation Notes

## Overview
Ready! is a React Native (Expo) interview-practice app with an auth flow, a question-driven home feed, a session-result experience, and a profile/settings area. The implementation uses TypeScript, React Navigation, Reanimated, Expo Image, and FlashList to keep core interactions smooth and predictable. Data is driven by local JSON mocks, with screen-level state kept intentionally lightweight.

## Architecture Decisions

### Feature-based folder structure
The app is organized by feature (`auth`, `home`, `session-result`, `settings`, `store`) rather than by technical layer. This keeps each feature’s screens/types/components colocated and easier to reason about in isolation. Shared primitives and cross-cutting concerns are centralized in `components/ui`, `navigation`, and `theme`, which scales better as features grow without creating import sprawl.

### Navigation strategy
Navigation is structured as **Root Stack → Auth Stack / Main Tabs → SessionResult screen**, with route types centralized in `navigation/types.ts` for compile-time safety. Login and logout both use `CommonActions.reset` so auth boundaries do not leave stale back-stack history. This gives a clean and deterministic transition between authenticated and unauthenticated routes.

### Data layer
The data layer is intentionally mock-first using JSON files under `src/mock-data` (questions, user, session results, companies). JSON is imported directly into screens, then transformed minimally in-screen (`useMemo` for list shaping in Home). No global state library was required because the current app flows are mostly read-only data + local UI state.

### Component design
Shared UI includes a reusable `AppLogo` and themed typography/color/spacing tokens. List-heavy content uses dedicated components (`QuestionCard`, tab content components in session results), with `React.memo` applied to the question card to reduce unnecessary rerenders. Theme tokens are used in many places, while a few screen-specific constants are still kept locally for pixel-match tuning.

## Screen-by-Screen Decisions

### Splash
Splash is intentionally simple: a centered vector logo plus timed transition to Welcome. A short delay is used to present brand identity while fonts and initial navigation context are ready.

### Welcome
Welcome presents brand, hero visual, and primary CTA with gradient styling + haptic feedback. The implementation uses `welcome_screen_girl.png` (not GIF) and a clean, focused CTA area. Floating company badges were not added; the hero was kept minimal to prioritize readability and CTA clarity.

### Login
Login uses a 6-cell OTP UI with auto-focus progression per digit, backspace navigation to previous cell, and auto-submit behavior once all cells are filled. Continue triggers loading feedback, haptics, keyboard dismissal, and `CommonActions.reset` to Main on success. Layout uses fixed positioning to match the design closely.

### Home
Home uses `FlashList` (with `estimatedItemSize`) and animated cells for feed performance and smoother entry transitions. The `QuestionCard` supports three visual states (`done`, `start`, `upcoming`) and an expanded inline action panel (Feedback / AI VS AI). The prior bottom-sheet approach exists as a component but current UX uses inline expansion. `React.memo`, `useCallback`, and `useMemo` are used on key rendering and handler paths.

### Session Result
Session Result implements a lightweight two-tab switcher without an additional tab library. `SmartSummaryTab` uses `ScrollView` for variable-length prose content. `KeyMomentsTab` includes a mock audio-player UI and key-moments list rendering for timeline-style feedback.

### Settings
Settings reads user fields from mock JSON, displays profile/actions cards, and includes a trial upsell section. Menu actions are rendered as grouped rows in scrollable cards. Logout uses `CommonActions.reset` to return to Auth cleanly.

## Bonus Features Implemented
- **Custom animated tab bar hide/reveal on scroll** — Reanimated shared value + scroll direction logic in `home-screen` and `tab-bar-context` integration.
- **Animated social-proof counter** — incremental display animation that simulates live completion count updates in Home.
- **Press micro-interactions + haptics** — applied across CTA actions, question interactions, and navigation affordances.
- **Fully vectorized app logo component** — scalable `AppLogo` variants (`default` and `brand`) for cross-screen consistency.
- **Inline question expansion UX** — contextual detail/actions directly in feed instead of forcing screen transitions.

## Trade-offs and Known Limitations
- Gradient text on the “Ready!” logo was approximated with flat orange text + subtle shadow; full masked gradient text was intentionally avoided for implementation simplicity.
- Several screens still use hardcoded layout measurements and local color constants for visual fidelity; this reduces responsiveness on extreme form factors.
- `QuestionBottomSheet` remains in code but is currently not the active interaction pattern on Home.
- Accessibility metadata (labels/roles/hints) is not exhaustive yet across all interactive elements.
- Store tab is currently a placeholder screen and does not yet have a production feature surface.

## What I Would Improve With More Time
1. **Complete design-token migration.** I would move remaining local color/spacing/font literals into semantic theme tokens and remove duplicate screen-level palettes. This would make dark mode/theming and future visual refreshes significantly safer.

2. **Accessibility hardening pass.** I would add `accessibilityLabel`, `accessibilityRole`, and `accessibilityHint` across all Pressables/TextInputs, then verify with VoiceOver/TalkBack flows for OTP entry, tab switching, and logout.

3. **Extract Home domain logic into hooks.** Home currently combines animation, data shaping, and UI state in one large screen. I would split into hooks (`useHomeFeedData`, `useHomeFeedAnimations`, `useQuestionSelection`) to improve testability and maintainability.

4. **Remove or reintroduce bottom-sheet path cleanly.** Since inline expansion is active, I would either delete the unused bottom-sheet implementation or re-enable it behind a clear feature flag to avoid dead code drift.

5. **Expand session playback behavior from static mock to real controls.** I would add real play/pause state, seek position, and highlighted key-moment sync for a more credible feedback experience.

6. **Add baseline automated checks.** I would add a stable ESLint flat config, formatting checks, and a small test suite for navigation transitions and OTP input behaviors to prevent regressions.

## Libraries Added Beyond Starter
- `@react-navigation/native`, `@react-navigation/native-stack`, `@react-navigation/bottom-tabs` — app navigation architecture.
- `react-native-reanimated` — high-performance tab/feed animations.
- `@shopify/flash-list` — performant feed rendering in Home.
- `expo-image` — improved image performance/caching over core RN image.
- `expo-haptics` — tactile feedback for key interactions.
- `expo-linear-gradient` — branded gradient buttons/progress visuals.
- `@gorhom/bottom-sheet` — reusable bottom-sheet component support.
- `@expo-google-fonts/inter`, `@expo-google-fonts/onest` — brand typography.

## Assumptions About the Figma Design
- **Logo gradient treatment:** interpreted as a flat/solid implementation for consistency and lower complexity.
- **Hero visual behavior on Welcome:** implemented as a static hero image (no animated badges/floating elements).
- **Home interaction model:** selected inline card expansion as the primary pattern instead of modal/bottom-sheet for faster context retention.
- **Session tabs:** implemented with custom Pressables rather than a tab library, assuming simple two-state behavior was sufficient.
- **Settings trial card shadows/stripes:** approximated to match intended depth and brand tone; exact blend values may differ from Figma export.
- **Store tab scope:** treated as out-of-scope placeholder in this phase.

## Testing Approach
Manual testing focused on the primary user journey and interaction quality:
- Auth flow: Splash → Welcome → Login OTP fill → Main reset behavior.
- Home flow: scrolling performance, question selection/expand-collapse, feedback navigation to Session Result.
- Session Result flow: tab switching between Smart Summary and Key Moments, close/back behavior.
- Settings flow: profile rendering from mock JSON and logout reset to Auth.

In this environment, validation was code-level and static (TypeScript compile + source review). Device-level visual and interaction QA should be run on at least one iOS simulator and one Android emulator before release.
