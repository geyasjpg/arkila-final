import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ARKILATEMP',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '594735441069-7q4poomd0dsqflg0oeqrqiadbaqam7ji.apps.googleusercontent.com.apps.googleusercontent.com',
      forceCodeForRefreshToken : true

},
  }
};

export default config;
