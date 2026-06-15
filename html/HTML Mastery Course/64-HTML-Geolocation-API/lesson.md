# Module 64: HTML Geolocation API

## Overview
The Geolocation API allows web applications to access the user's geographical location information through the browser. It provides a secure, privacy-preserving way to determine device position using various sources (GPS, Wi-Fi, IP geolocation, cellular triangulation). This module covers the complete Geolocation API, including position requests, watchPosition, error handling, privacy considerations, and practical applications.

## Section 1: Introduction to Geolocation

### What is the Geolocation API?
The Geolocation API is a W3C standard that provides a scriptable interface for accessing the geographic location of the hosting device. It is part of the HTML5 specification and is supported in all modern browsers.

Key characteristics:
- **Permission-based**: Users must explicitly grant location access
- **Privacy-focused**: No location data is sent without user consent
- **Multi-source**: Uses GPS, Wi-Fi, cellular, and IP information
- **One-shot or continuous**: Single position requests or real-time tracking

### Common Use Cases
- Mapping and navigation
- Location-based services (nearby places, weather)
- Geotagging content (photos, posts)
- Proximity detection
- Asset tracking
- Context-aware applications

## Section 2: Checking for Support

Before using the Geolocation API, check if the browser supports it:

```javascript
if ('geolocation' in navigator) {
  // Geolocation is supported
} else {
  // Fall back to IP-based geolocation or show error
  console.log('Geolocation is not supported by this browser.');
}
```

## Section 3: Getting the Current Position

### getCurrentPosition()
The primary method for obtaining a single position fix:

```javascript
navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
```

### Success Callback
The success callback receives a Position object:

```javascript
navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const accuracy = position.coords.accuracy; // meters
  const altitude = position.coords.altitude; // meters, null if unavailable
  const altitudeAccuracy = position.coords.altitudeAccuracy; // meters
  const heading = position.coords.heading; // degrees, null if unavailable
  const speed = position.coords.speed; // m/s, null if unavailable
  const timestamp = position.timestamp; // when the position was acquired

  console.log(`Latitude: ${lat}, Longitude: ${lng}`);
  console.log(`Accuracy: ${accuracy}m`);
});
```

### Position Object Properties

| Property | Type | Description |
|----------|------|-------------|
| `coords.latitude` | double | Latitude in decimal degrees |
| `coords.longitude` | double | Longitude in decimal degrees |
| `coords.accuracy` | double | Accuracy of lat/lng in meters |
| `coords.altitude` | double or null | Altitude in meters above sea level |
| `coords.altitudeAccuracy` | double or null | Accuracy of altitude in meters |
| `coords.heading` | double or null | Heading in degrees clockwise from true north |
| `coords.speed` | double or null | Speed in meters per second |
| `timestamp` | DOMTimeStamp | Time when position was acquired |

### Error Callback
```javascript
navigator.geolocation.getCurrentPosition(
  (position) => { /* success */ },
  (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED: // 1
        console.log('User denied the request for geolocation.');
        break;
      case error.POSITION_UNAVAILABLE: // 2
        console.log('Location information is unavailable.');
        break;
      case error.TIMEOUT: // 3
        console.log('The request to get user location timed out.');
        break;
      default: // 0
        console.log('An unknown error occurred.');
        break;
    }
  }
);
```

### Options Object
```javascript
const options = {
  enableHighAccuracy: true,  // Use GPS for better accuracy (more power)
  timeout: 10000,            // Max time (ms) to wait for position
  maximumAge: 300000         // Accept cached position up to 5 minutes old (0 = disable cache)
};

navigator.geolocation.getCurrentPosition(success, error, options);
```

## Section 4: Watching Position Changes

### watchPosition()
Continuously monitors the device position:

```javascript
const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback, options);
```

Returns a numeric ID that can be used to cancel watching.

### clearWatch()
Stops position monitoring:

```javascript
navigator.geolocation.clearWatch(watchId);
```

### Example: Real-time Tracking
```javascript
let watchId = null;

function startTracking() {
  if ('geolocation' in navigator) {
    watchId = navigator.geolocation.watchPosition(
      (position) => {
        updateMap(position.coords.latitude, position.coords.longitude);
        displaySpeed(position.coords.speed);
      },
      (error) => console.error('Watch error:', error.message),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }
}

function stopTracking() {
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
}
```

## Section 5: Privacy and User Experience

### Permission Handling
The browser requests permission the first time Geolocation is accessed:

```javascript
button.addEventListener('click', () => {
  // Trigger permission request on user interaction
  navigator.geolocation.getCurrentPosition(success, error);
});
```

Best practice: Always call Geolocation methods in response to a user gesture (click, tap) so the permission prompt is expected.

### Check Permission State
```javascript
if (navigator.permissions && navigator.permissions.query) {
  navigator.permissions.query({ name: 'geolocation' }).then((result) => {
    if (result.state === 'granted') {
      // Permission already granted
    } else if (result.state === 'prompt') {
      // Will prompt on first request
    } else if (result.state === 'denied') {
      // Permission denied — show explanation
    }
    result.addEventListener('change', () => {
      console.log('Permission state changed:', result.state);
    });
  });
}
```

### Privacy Best Practices
1. **Explain why you need location**: Show a descriptive message before requesting
2. **Use HTTPS**: Geolocation requires a secure context (HTTPS or localhost)
3. **Request on user action**: Don't request location on page load
4. **Respect denial**: If denied, degrade gracefully
5. **Minimum accuracy**: Use `enableHighAccuracy: false` when GPS precision isn't needed
6. **Cache appropriately**: Set `maximumAge` to reduce unnecessary requests
7. **Provide fallback**: IP geolocation or manual location entry

## Section 6: HTTPS Requirement

The Geolocation API is only available in secure contexts:

```html
<!-- Works -->
https://example.com
http://localhost
http://127.0.0.1
file:// (some browsers)

<!-- Does NOT work -->
http://example.com
```

Check if the context is secure:
```javascript
if (window.isSecureContext) {
  // HTTPS context — geolocation is available
} else {
  console.warn('Geolocation requires HTTPS');
}
```

## Section 7: Practical Applications

### Display on Map (using a static map API)
```javascript
function showOnMap(lat, lng) {
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=15&size=600x400&markers=${lat},${lng}`;
  document.getElementById('map').innerHTML = `<img src="${mapUrl}" alt="Map showing location">`;
}
```

### Calculate Distance Between Two Points (Haversine Formula)
```javascript
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371000; // Earth's radius in meters
  const toRad = (deg) => deg * Math.PI / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

### Reverse Geocoding (using a third-party API)
```javascript
async function reverseGeocode(lat, lng) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );
    const data = await response.json();
    return data.display_name;
  } catch (error) {
    console.error('Reverse geocoding failed:', error);
    return 'Unknown location';
  }
}
```

### Get Location as Readable Address
```javascript
async function getAddress(lat, lng) {
  const display = await reverseGeocode(lat, lng);
  document.getElementById('address').textContent = display;
}
```

## Section 8: Error Handling and Edge Cases

### Common Error Scenarios
```javascript
function handleGeolocationError(error) {
  let message = '';

  switch (error.code) {
    case error.PERMISSION_DENIED:
      message = 'Please enable location permissions in your browser settings.';
      // Show instructions or button to open settings
      break;
    case error.POSITION_UNAVAILABLE:
      message = 'Unable to determine your location. Check your GPS or Wi-Fi.';
      // Fall back to IP geolocation
      break;
    case error.TIMEOUT:
      message = 'Location request timed out. Try again in a better signal area.';
      // Retry with increased timeout
      break;
    default:
      message = 'An unexpected error occurred.';
      break;
  }

  showUserMessage(message);
  useFallbackGeolocation();
}
```

### Timeout Handling with Retry
```javascript
function getPositionWithRetry(maxRetries = 3) {
  let attempts = 0;

  function attempt() {
    navigator.geolocation.getCurrentPosition(
      (position) => { /* handle success */ },
      (error) => {
        if (error.code === error.TIMEOUT && attempts < maxRetries) {
          attempts++;
          console.log(`Retry ${attempts}/${maxRetries}`);
          attempt();
        } else {
          handleGeolocationError(error);
        }
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 }
    );
  }

  attempt();
}
```

### Fallback to IP Geolocation
```javascript
async function fallbackGeolocation() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return {
      latitude: data.latitude,
      longitude: data.longitude,
      accuracy: 50000, // IP geolocation accuracy is ~50km
      city: data.city,
      country: data.country_name
    };
  } catch {
    return null; // Complete failure — ask user to enter location manually
  }
}
```

## Section 9: Testing Geolocation

### Chrome DevTools
1. Open DevTools (F12)
2. Click the three-dot menu → More tools → Sensors
3. Set location: select from presets or enter custom coordinates
4. Enable "Override" to simulate location

### Programmatic Testing
```javascript
// In tests, mock the geolocation API
const mockPosition = {
  coords: {
    latitude: 40.7128,
    longitude: -74.0060,
    accuracy: 10,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null
  },
  timestamp: Date.now()
};

// Before tests
navigator.geolocation = {
  getCurrentPosition: (success) => success(mockPosition),
  watchPosition: (success) => {
    success(mockPosition);
    return 1;
  },
  clearWatch: () => {}
};
```

## Section 10: Performance Considerations

1. **Enable high accuracy only when needed**: GPS drains more battery
2. **Set appropriate timeouts**: Don't wait too long for a fix
3. **Use maximumAge**: Cache positions to avoid redundant GPS fixes
4. **Clear watches when not needed**: Stop tracking when leaving a page
5. **Batch updates**: In watchPosition, throttle updates if needed

```javascript
// Throttle position updates to once every 5 seconds
let lastUpdate = 0;
const minUpdateInterval = 5000;

navigator.geolocation.watchPosition((position) => {
  const now = Date.now();
  if (now - lastUpdate >= minUpdateInterval) {
    lastUpdate = now;
    processPosition(position);
  }
});
```

## Section 11: Browser Support

| Browser | Support |
|---------|---------|
| Chrome | Full support since v5 |
| Firefox | Full support since v3.5 |
| Safari | Full support since v5 |
| Edge | Full support since v12 |
| IE | Partial (v9+, no secure context requirement) |
| Mobile | Full support all modern mobile browsers |

## Summary

The Geolocation API provides secure, permission-based access to device location data. With `getCurrentPosition()` for one-time requests and `watchPosition()` for continuous tracking, developers can build location-aware applications ranging from maps and navigation to proximity alerts and geotagging. Always respect user privacy, handle errors gracefully, and provide fallback options for unsupported environments.
