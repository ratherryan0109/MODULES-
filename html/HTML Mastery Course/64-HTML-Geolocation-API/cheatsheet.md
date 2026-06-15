# HTML Geolocation API Cheatsheet

## Browser Support
```javascript
if ('geolocation' in navigator) {
  // Supported
} else {
  // Fallback to IP geolocation
}
```

## Request Current Position
```javascript
navigator.geolocation.getCurrentPosition(success, error, options);
```

## Success Callback
```javascript
function success(position) {
  const c = position.coords;
  c.latitude;        // Decimal degrees
  c.longitude;       // Decimal degrees
  c.accuracy;        // Meters (±)
  c.altitude;        // Meters, or null
  c.altitudeAccuracy;// Meters, or null
  c.heading;         // Degrees from true north, or null
  c.speed;           // m/s, or null
  position.timestamp; // When position was acquired
}
```

## Error Callback
```javascript
function error(err) {
  switch (err.code) {
    case err.PERMISSION_DENIED:      // 1
    case err.POSITION_UNAVAILABLE:   // 2
    case err.TIMEOUT:                // 3
  }
}
```

## Options
```javascript
const options = {
  enableHighAccuracy: false, // true = GPS (more battery)
  timeout: 10000,            // ms before error
  maximumAge: 300000         // ms cache allowed
};
```

## Continuous Tracking
```javascript
const watchId = navigator.geolocation.watchPosition(success, error, options);

// Stop tracking
navigator.geolocation.clearWatch(watchId);
```

## Permission Check
```javascript
navigator.permissions.query({ name: 'geolocation' }).then(result => {
  result.state; // 'granted' | 'denied' | 'prompt'

  result.addEventListener('change', () => {
    console.log('Permission:', result.state);
  });
});
```

## Haversine Distance (meters)
```javascript
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const toRad = d => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat/2)**2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
```

## Bearing (degrees)
```javascript
function bearing(lat1, lon1, lat2, lon2) {
  const toRad = d => d * Math.PI / 180;
  const toDeg = r => r * 180 / Math.PI;
  const dLon = toRad(lon2 - lon1);
  const y = Math.sin(dLon) * Math.cos(toRad(lat2));
  const x = Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) -
            Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(dLon);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}
```

## Reverse Geocoding (OpenStreetMap)
```javascript
async function reverseGeocode(lat, lng) {
  const resp = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
  );
  const data = await resp.json();
  return data.display_name;
}
```

## IP Geolocation Fallback
```javascript
async function ipGeolocation() {
  const resp = await fetch('https://ipapi.co/json/');
  const data = await resp.json();
  return {
    latitude: data.latitude,
    longitude: data.longitude,
    accuracy: 50000, // ~50km
    city: data.city,
    region: data.region,
    country: data.country_name
  };
}
```

## Security
- Requires HTTPS or localhost
- Always triggers permission prompt on first use
- Call from user gesture (click) for best UX
- Respect denied permission — don't re-prompt

## Best Practices
- Explain why location is needed before asking
- Use `enableHighAccuracy: false` when GPS precision is unnecessary
- Set `timeout` to avoid hanging requests
- Use `maximumAge` to cache positions and reduce battery drain
- Clear watches when leaving a page
- Provide fallback for unsupported browsers
- Test with Chrome DevTools Sensors panel

## Error Codes
| Code | Constant | Meaning |
|------|----------|---------|
| 1 | PERMISSION_DENIED | User denied request |
| 2 | POSITION_UNAVAILABLE | Location not found |
| 3 | TIMEOUT | Request timed out |

## Browser Support
- Chrome 5+
- Firefox 3.5+
- Safari 5+
- Edge 12+
- All modern mobile browsers
