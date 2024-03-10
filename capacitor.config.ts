import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ghalaguard.app',
  appName: 'GhalaGuard',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
