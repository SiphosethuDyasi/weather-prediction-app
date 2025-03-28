export const apikey: string = 'edac6f29c8ee470fa5071028252202';

export type WeatherCondition = 
  | 'Partly cloudy'
  | 'Moderate rain'
  | 'Patchy rain possible'
  | 'Sunny'
  | 'Clear'
  | 'Overcast'
  | 'Cloudy'
  | 'Light rain'
  | 'Moderate rain at times'
  | 'Heavy rain'
  | 'Heavy rain at times'
  | 'Moderate or heavy freezing rain'
  | 'Moderate or heavy rain shower'
  | 'Moderate or heavy rain with thunder'
  | 'other';

export const weatherImages: Record<WeatherCondition, any> = {
  'Partly cloudy': require('../assets/images/partlycloudy.png'),
  'Moderate rain': require('../assets/images/moderaterain.png'),
  'Patchy rain possible': require('../assets/images/moderaterain.png'),
  'Sunny': require('../assets/images/sun.png'),
  'Clear': require('../assets/images/sun.png'),
  'Overcast': require('../assets/images/cloud.png'),
  'Cloudy': require('../assets/images/cloud.png'),
  'Light rain': require('../assets/images/moderaterain.png'),
  'Moderate rain at times': require('../assets/images/moderaterain.png'),
  'Heavy rain': require('../assets/images/heavyrain.png'),
  'Heavy rain at times': require('../assets/images/heavyrain.png'),
  'Moderate or heavy freezing rain': require('../assets/images/heavyrain.png'),
  'Moderate or heavy rain shower': require('../assets/images/heavyrain.png'),
  'Moderate or heavy rain with thunder': require('../assets/images/heavyrain.png'),
  'other': require('../assets/images/moderaterain.png'),
};

  export const getWeatherImage = (condition: string | undefined): any => {
    return weatherImages[condition as keyof typeof weatherImages] || weatherImages['other'];
  };
