# Welcome to the Weather App 🌤️

## Features ✨
- Search for weather in any city worldwide.
- View **hourly** and **weekly** weather forecasts.
- Dynamic icons that reflect real-time weather conditions.
- Add cities to your **favourites** and view their details.

This is an [Expo](https://expo.dev) project.

## Demo 🎥

[Watch the app in action](https://github.com/SiphosethuDyasi/weather-prediction-app/issues/1)

## Installation  

### Prerequisites  
Ensure you have [Node.js](https://nodejs.org/) installed. 

### Get Started  

1. Clone the repository:  
   ```bash
   git clone https://github.com/SiphosethuDyasi/weather-prediction-app
   cd weather-prediction-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the app:
   ```bash
    npx expo start
   ```

4. Scan the QR code in the terminal using [Expo Go](https://expo.dev/go) to run the app on your device.

## API Usage 📡

This app fetches data from the Weather API to provide real-time weather updates.
- The API returns data in JSON format, including temperature, humidity, wind speed, and weather conditions.
- The app makes GET requests to fetch weather data for the searched city.
- Favourite cities are stored locally within the app.

## Technologies Used 🛠️
- **React Native** (Framework)
- **Expo** (App development & deployment)
- **Weather API** (Live weather data)
- **Async Storage** (For storing favourite cities locally)

## License 📜
This project is open-source and available under the MIT License.
