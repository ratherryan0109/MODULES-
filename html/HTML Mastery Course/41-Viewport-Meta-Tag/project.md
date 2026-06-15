# Mini Project: Mobile-First App Layout with Safe Areas

## Overview

Build a mobile-app-style layout that demonstrates proper viewport configuration, safe area handling, and dynamic viewport units. The app should have a status bar area, header, scrollable content, and bottom tab navigation.

## Requirements

1. Viewport meta tag with `viewport-fit=cover`
2. Header with `env(safe-area-inset-top)` padding
3. Bottom tab bar with `env(safe-area-inset-bottom)` padding
4. Content area using `100dvh` for proper keyboard handling
5. At least 4 tabs (Home, Search, Favorites, Profile)
6. Scrollable content in each tab view
7. Interactive tab switching with JavaScript
8. Proper ARIA labels on interactive elements
9. Test on a real notched device (iPhone X+ or Android equivalent)

## Steps

1. Create HTML with viewport tag and safe area settings
2. Build the app shell (status bar, header, content, tabs)
3. Apply safe area environment variables
4. Add JavaScript for tab switching
5. Test on mobile device with keyboard and notches

## Submission Checklist

- [ ] `width=device-width, initial-scale=1.0, viewport-fit=cover`
- [ ] `env(safe-area-inset-*)` for padding
- [ ] `100dvh` for full-height layout
- [ ] 4+ bottom tab items
- [ ] Tab switching logic
- [ ] ARIA labels on tabs
- [ ] `font-size: 16px` on form inputs
- [ ] Works on notched devices
- [ ] Works with virtual keyboard open
