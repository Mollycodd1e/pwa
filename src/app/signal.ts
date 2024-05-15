import OneSignal from 'react-onesignal'

export default async function runOneSignal() {
	await OneSignal.init({
		appId: 'c4f58ac6-03b8-4711-9f98-559eb7e625f0',
		safari_web_id: 'web.onesignal.auto.35f9fdf2-e602-4832-95b7-1c199bdb2bd7',
		allowLocalhostAsSecureOrigin: true,
	})
	OneSignal.Slidedown.promptPush()
}
s