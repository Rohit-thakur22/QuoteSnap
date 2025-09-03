import React, { useEffect, useState } from "react";
import { Keyboard, Platform, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

// Icons
import ProfileSvg from "../../assets/profilegreensvg.svg";
import HomeSvg from "../../assets/homesquid.svg";
import HeartSvg from "../../assets/heartsvg.svg";
import DailySvg from "../../assets/daily.svg";

// Screens
import Home from "../../screens/home/Home";
import Favorite from "../../screens/favorite/Favorite";
import Profile from "../../screens/profile/Profile";
import Daily from "../../screens/daily/Daily";
import { Fonts } from "../../utils/fonts";

const Tab = createBottomTabNavigator();

function BottomTab() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardVisible(true)
    );
    const hideListener = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardVisible(false)
    );

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",

        // Hide tab bar when keyboard opens
        tabBarStyle: [
          styles.tabWrapper,
          isKeyboardVisible && Platform.OS === "android"
            ? { display: "none" }
            : null,
        ],

        // Text colors
        tabBarActiveTintColor: "#9810fa",
        tabBarInactiveTintColor: "#b0b4bd",

        // Font style
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: Fonts.PoppinsRegular,
        },

        // Custom background with gradient border
        tabBarBackground: () => (
          <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
            {/* Gradient Top Border */}
            <LinearGradient
              colors={["#f472b6", "#a855f7"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2, // border thickness
              }}
            />
          </View>
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <HomeSvg width={24} height={24} />,
        }}
      />

      <Tab.Screen
        name="Daily"
        component={Daily}
        options={({ route }) => {
          const display = getRouteName(route);
          return {
            tabBarLabel: "Daily",
            tabBarStyle: [
              styles.tabWrapper,
              display === "none" ? { display: "none" } : null,
            ],
            tabBarIcon: () => <DailySvg width={24} height={24} />,
          };
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorite}
        options={({ route }) => {
          const display = getRouteName(route);
          return {
            tabBarLabel: "Favorites",
            tabBarStyle: [
              styles.tabWrapper,
              display === "none" ? { display: "none" } : null,
            ],
            tabBarIcon: () => <HeartSvg width={24} height={24} />,
          };
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => <ProfileSvg width={24} height={24} />,
        }}
      />
    </Tab.Navigator>
  );
}

const getRouteName = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  if (
    routeName?.includes("EmployeeDetail") ||
    routeName?.includes("CompanyDetail") ||
    routeName?.includes("EditSlots") ||
    routeName?.includes("AssignTimeSlot")
  ) {
    return "none";
  }
  return "flex";
};

export default BottomTab;

const styles = StyleSheet.create({
  tabWrapper: {
    backgroundColor: "#ffffff",
    borderTopWidth: 0, // disable default border
    height: Platform.OS === "ios" ? 90 : 70,
    paddingTop: 9,
    paddingBottom: Platform.OS === "ios" ? 10 : 10,
  },
});
