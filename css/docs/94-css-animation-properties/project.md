# Mini Project: Animated Notification System

## Objective
Build a notification toast system that uses animation properties for enter, display, and exit states.

## Requirements
1. Toast slides in from right (translateX)
2. Stays visible for 3 seconds (animation-delay for exit)
3. Slides out to the right on exit
4. Multiple toasts stack with staggered delays
5. Pause on hover (animation-play-state: paused)
6. Different types: success, error, warning colors

## Stretch Goals
- Progress bar showing time remaining
- Dismiss button with click event
- Queue system for multiple notifications
- Custom easing for smooth enter/exit

## Evaluation
- Proper use of animation-fill-mode (forwards/both)
- Animation-play-state for hover pause
- Coordinated timing and delays
- Accessible (role="alert", aria-live)
