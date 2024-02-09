import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import React, { useEffect, useState } from "react";
import { preventAutoHideAsync } from "expo-splash-screen";
import auth from "@react-native-firebase/auth";
import { Text } from "react-native";
import Home from "./home";

preventAutoHideAsync();

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  return (
    <GluestackUIProvider config={config}>
      <Home />
    </GluestackUIProvider>
  );
}
