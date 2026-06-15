# CSS Cheatsheet — Social Media Profile UI

## Profile Header (Cover + Avatar)
```css
.cover-photo { height: 300px; overflow: hidden; }
.cover-photo img { width: 100%; height: 100%; object-fit: cover; }
.avatar { width: 120px; height: 120px; border-radius: 50%; border: 4px solid white; margin-top: -60px; position: relative; z-index: 2; }
@media (min-width: 768px) { .avatar { position: absolute; left: 1rem; top: -80px; } }
```

## Profile Info
```css
.profile-stats { display: flex; gap: 2rem; font-size: 0.9rem; }
.profile-stats dt { font-weight: 700; display: inline; }
.profile-stats dd { display: inline; color: #65676b; }
```

## Story Rings
```css
.story-ring { width: 64px; height: 64px; border-radius: 50%; padding: 3px; background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
.story-ring img { width: 100%; height: 100%; border-radius: 50%; border: 2px solid white; object-fit: cover; }
.stories { display: flex; gap: 0.75rem; overflow-x: auto; }
.stories::-webkit-scrollbar { height: 0; }
```

## Tabs
```css
.tabs { display: flex; border-bottom: 1px solid #dadde1; }
.tab { padding: 0.75rem 1rem; font-weight: 500; color: #65676b; border: none; background: none; cursor: pointer; border-bottom: 3px solid transparent; transition: all 0.2s; white-space: nowrap; }
.tab.active { color: #1877f2; border-bottom-color: #1877f2; font-weight: 600; }
```

## Post Card
```css
.post-card { background: white; border-radius: 8px; padding: 1rem; box-shadow: 0 1px 2px rgba(0,0,0,0.1); }
.post-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; }
.post-avatar { width: 40px; height: 40px; border-radius: 50%; overflow: hidden; }
.post-actions { display: flex; gap: 1rem; padding-top: 0.5rem; border-top: 1px solid #dadde1; }
.post-action { display: flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.75rem; border-radius: 4px; border: none; background: none; cursor: pointer; font-weight: 500; color: #65676b; }
.post-action:hover { background: #f0f2f5; }
```

## Buttons
```css
.btn-follow { background: #1877f2; color: white; padding: 0.5rem 1.5rem; border-radius: 6px; font-weight: 600; border: none; cursor: pointer; }
.btn-message { background: #f0f2f5; padding: 0.5rem 1.5rem; border-radius: 6px; font-weight: 600; border: none; cursor: pointer; }
```

## Top Bar
```css
.top-bar { background: white; border-bottom: 1px solid #dadde1; padding: 0.5rem 1rem; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; }
```
