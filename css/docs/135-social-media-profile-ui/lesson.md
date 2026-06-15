# Module 135: Social Media Profile UI

## Introduction
Social media profiles combine personal branding, content feeds, and interactive elements. This module builds a complete profile page with cover photo, avatar, tabs, and post feed.

## Learning Objectives
- Design profile headers with cover/avatar overlap
- Build tab navigation for profile sections
- Create post cards with interactions
- Implement story rings with gradient borders
- Make profiles responsive across devices

## Key CSS Patterns
```css
.profile-header { position: relative; }
.cover-photo { height: 300px; object-fit: cover; border-radius: 0 0 1rem 1rem; }
.avatar { width: 150px; height: 150px; border-radius: 50%; border: 4px solid white; margin-top: -75px; position: relative; z-index: 2; }
.story-ring { width: 64px; height: 64px; border-radius: 50%; padding: 3px; background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
.story-ring img { width: 100%; height: 100%; border-radius: 50%; border: 2px solid white; }
```

## Responsive Approach
- Mobile: Smaller cover, stacked layout, compact tabs
- Tablet: Standard profile with 2-column feed
- Desktop: Full profile with side-panel suggestions

## Accessibility
- aria-label on tab buttons
- role="tablist", role="tab", role="tabpanel"
- aria-selected on active tab
- Alt text on avatars and cover

## Summary Notes
- Negative margin technique overlaps avatar with cover
- Gradient borders for story rings
- Tab panels should be keyboard navigable
- Post cards need consistent spacing
- Follow/unfollow button with hover state
