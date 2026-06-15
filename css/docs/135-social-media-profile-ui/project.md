# Project Specification: Social Media Profile UI

## Overview
Build a social media profile page called "Connect" with cover photo, avatar, bio, stats, stories, tabs, and post feed.

## Requirements
- Sticky top bar with logo, search, icons
- Cover photo with overlapping avatar
- Profile info (name, handle, bio, stats)
- Follow/Message action buttons
- Horizontal story ring bar
- Tab navigation (Posts, Photos, Videos, About, Friends)
- Post feed with author, content, image, and actions
- Responsive across all devices

## CSS Features
- Negative margin for avatar overlap
- Gradient border for story rings
- object-fit: cover for images
- Flexbox for stories, tabs, post layout
- Sticky positioning for top bar
- Hover effects on post actions
- Border-bottom active tab indicator

## Accessibility
- role='tablist', 'tab', 'tabpanel' for tabs
- aria-selected on active tab
- aria-label on icon buttons
- Alt text on avatars and cover
- Focus-visible outlines

## Project Structure
```
profile/
├── index.html
├── css/style.css
├── js/profile.js
└── assets/images/
```

## Grading
| Criteria | Points |
|----------|--------|
| Profile header (cover + avatar) | 25 |
| Story rings | 15 |
| Tab navigation | 15 |
| Post cards | 20 |
| Responsive design | 15 |
| Accessibility | 10 |
| **Total** | **100** |
