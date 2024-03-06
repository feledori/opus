import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import "./global.css";

export { ErrorBoundary } from "expo-router";

// SETUP
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [isFontLoaded] = useFonts({
		SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	});

	useEffect(() => {
		if (isFontLoaded) SplashScreen.hideAsync();
	}, [isFontLoaded]);

	if (!isFontLoaded) return null;

	return <App />;
}

function App() {
	return <Stack />;
}
