import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, StyleSheet, useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTab from "./navigation/bottomTab/BottomTab";
import CreateQuoteScreen from "./screens/createQuoteScreen/CreateQuoteScreen";
import ShareHistory from "./screens/shareHistoryScreen/ShareHistoryScreen";
import FriendlyQuotesScreen from "./screens/friendlyQuotesScreen/FriendlyQuotesScreen";
import SettingsScreen from "./screens/setting/SettingsScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnboardingScreen from "./screens/onboardingScreen/OnboardingScreen";


const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === "dark";

  const [firstLaunch, setFirstLaunch] = useState<null | boolean>(null);

  useEffect(() => {
    const checkLaunch = async () => {
      const value = await AsyncStorage.getItem("alreadyLaunched");
      if (value === null) {
        setFirstLaunch(true);
      } else {
        setFirstLaunch(false);
      }
    };
    checkLaunch();
  }, []);

  if (firstLaunch === null) {
    return null; // you can show SplashScreen or loader
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* {firstLaunch && (
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          )} */}
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="MainTabs" component={BottomTab} />
          <Stack.Screen name="createQuoteScreen" component={CreateQuoteScreen} />
          <Stack.Screen name="shareHistory" component={ShareHistory} />
          <Stack.Screen name="friendlyQuotesScreen" component={FriendlyQuotesScreen} />
          <Stack.Screen name="settingsScreen" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
