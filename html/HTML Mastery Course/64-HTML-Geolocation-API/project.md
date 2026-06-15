# Module 64 Project: Location-Based Weather & Activity Planner

## Project Overview
Build a comprehensive location-based application that uses the Geolocation API to determine the user's position, fetches weather data, and provides activity recommendations based on location and weather conditions. The app includes real-time tracking, geofencing for weather alerts, and a trip planner.

## Learning Objectives
- Integrate the Geolocation API with external weather APIs
- Implement real-time position tracking with watchPosition
- Build a geofencing alert system for weather conditions
- Create a trip planner with location-based waypoints
- Handle permission states and fallback gracefully
- Calculate distances and bearings between coordinates
- Visualize location data with canvas-rendered maps
- Persist user preferences and saved locations

## Requirements

### Core Features

1. **Current Weather Dashboard**
   - Get user location via geolocation
   - Fetch weather data from OpenWeatherMap or WeatherAPI (free tier)
   - Display: temperature, feels-like, humidity, wind speed, conditions icon
   - Show location name (reverse geocoded)
   - Location accuracy indicator (GPS vs IP)
   - Manual location entry fallback (city search)

2. **Activity Recommendations**
   - Based on weather conditions, suggest activities:
     - Sunny > 25°C: Beach, hiking, cycling
     - Rainy: Museums, cafes, indoor sports
     - Snowy: Skiing, ice skating
     - Cloudy: Walking, photography
   - Filter activities by distance from user
   - Display activity cards with icons and descriptions

3. **Real-Time Weather Tracker**
   - watchPosition monitors location changes
   - Weather updates when moving between areas
   - Notification when entering a different weather zone
   - Tracking log with timestamp, location, and conditions

4. **Geofencing Weather Alerts**
   - Define geofence zones with custom weather thresholds
   - Example: Alert when entering zone with > 80% rain chance
   - Visual map showing active geofences
   - Alert history log

5. **Trip Planner**
   - Add waypoints with coordinates
   - Calculate total trip distance
   - Get weather forecast for each waypoint
   - Reorder waypoints via drag-and-drop
   - Export/import trip as JSON

### UI Requirements
- Clean, modern weather app aesthetic
- Weather icons (use emoji or CSS/SVG icons)
- Status bar (GPS signal, last update time, permission state)
- Responsive: desktop and mobile layouts
- Loading states and error screens
- Dark mode toggle

### Technical Requirements
- Use the Geolocation API for position data
- Use a free weather API (OpenWeatherMap, WeatherAPI, or Visual Crossing)
- Reverse geocoding via Nominatim (OpenStreetMap)
- All data fetching via async/await with error handling
- localStorage persistence for saved locations, geofences, trips
- Single HTML file with embedded CSS and JavaScript
- No external frameworks or libraries

## Suggested Architecture

### Data Flow
```
Geolocation API → Position → Weather API → Display Dashboard
                              ↓
                         Activity Engine → Recommended Activities
                              ↓
                    Geofence Monitor → Weather Alerts
```

### State Management
```javascript
const state = {
  position: null,           // Current position
  weather: null,            // Current weather data
  locationName: '',         // Reverse geocoded
  activities: [],           // Recommended activities
  trackHistory: [],         // {lat, lng, timestamp}
  geofences: [],            // {id, name, lat, lng, radius, threshold}
  trips: [],                // {id, name, waypoints: []}
  isTracking: false,
  watchId: null,
  darkMode: false,
  unitPreference: 'metric', // metric / imperial
};
```

### API Integration
```javascript
const API = {
  // Weather
  async getWeather(lat, lng) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    const resp = await fetch(url);
    return resp.json();
  },

  // Reverse geocoding
  async getLocationName(lat, lng) {
    const resp = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );
    const data = await resp.json();
    return data.display_name;
  },

  // IP geolocation fallback
  async getIPLocation() {
    const resp = await fetch('https://ipapi.co/json/');
    return resp.json();
  }
};
```

### Activity Engine
```javascript
const ActivityEngine = {
  rules: [
    { condition: (w) => w.main.temp > 30 && w.weather[0].main === 'Clear',
      activities: ['Go to the beach', 'Visit a water park', 'Stay hydrated indoors'] },
    { condition: (w) => w.main.temp > 20 && w.weather[0].main === 'Clear',
      activities: ['Hiking', 'Cycling', 'Outdoor photography'] },
    { condition: (w) => w.weather[0].main === 'Rain',
      activities: ['Visit a museum', 'Read at a cafe', 'Indoor climbing gym'] },
    // More rules...
  ],

  getRecommendations(weather) {
    return this.rules
      .filter(rule => rule.condition(weather))
      .flatMap(rule => rule.activities);
  }
};
```

## Implementation Guide

### Step 1: HTML Structure
Create layout: header (title, location, permissions), main dashboard (weather, activities), and panels (tracker, geofences, trip planner).

### Step 2: Geolocation Module
Implement getCurrentPosition with error handling, permission checks, and IP fallback.

### Step 3: Weather API Integration
Connect to weather API, parse responses, handle errors (rate limiting, network issues).

### Step 4: Dashboard Rendering
Display weather data, activity recommendations, and location info.

### Step 5: Tracking Mode
Implement watchPosition with throttle, tracking log, and moving animation.

### Step 6: Geofencing
Define, create, and monitor geofences with enter/exit detection.

### Step 7: Trip Planner
Add waypoints, calculate distances, get forecasts, implement drag-and-drop reorder.

### Step 8: Persistence
Save preferences, geofences, and trips to localStorage.

### Step 9: Polish
Add dark mode, responsive design, loading states, and error handling.

## Keyboard Shortcuts
| Key | Action |
|-----|--------|
| G | Refresh location |
| W | Refresh weather |
| T | Toggle tracking |
| D | Toggle dark mode |
| S | Save current location |
| Escape | Close modals/panels |

## Bonus Features
- **Hourly forecast**: Show next 24 hours of weather
- **UV index and air quality**: Additional environmental data
- **Sunrise/sunset times**: Based on location
- **Weather map**: Show radar overlay for current conditions
- **Multi-location**: Save and switch between favorite locations
- **Weather history**: Show past weather for current location
- **Severe weather warnings**: API-based severe weather alerts
- **Share weather**: Generate shareable weather card

## Validation Checklist
- [ ] Current location displays accurately
- [ ] Weather data fetches and displays correctly
- [ ] Activity recommendations match weather conditions
- [ ] Permission handling works (granted, denied, prompt)
- [ ] IP fallback works when GPS unavailable
- [ ] Real-time tracking updates position and weather
- [ ] Geofences trigger alerts on enter/exit
- [ ] Trip planner with waypoints and distances works
- [ ] Data persists across page reloads
- [ ] Responsive design works on mobile and desktop
- [ ] Dark mode toggle functions correctly
- [ ] All errors handled with user-friendly messages

## Submission
Submit a single `index.html` file with embedded CSS and JavaScript. Include a README with your weather API key setup instructions and screenshots.
