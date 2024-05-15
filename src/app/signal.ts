import OneSignal from 'react-onesignal';

export default async function runOneSignal() {
  await OneSignal.init({ appId: 'b40b7cc7-13dc-4662-8b48-efa668f9b72a', allowLocalhostAsSecureOrigin: true});
  OneSignal.Slidedown.promptPush();
}