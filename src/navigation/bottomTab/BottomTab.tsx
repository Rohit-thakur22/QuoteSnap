
import React, { useEffect, useState } from "react";
import { Keyboard, Platform, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileSvg from "../../assets/profilegreensvg.svg"
import HomeSvg from "../../assets/homesquid.svg"
import HeartSvg from "../../assets/heartsvg.svg"
import DailySvg from "../../assets/daily.svg"

// Icons

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Home from "../../screens/home/Home";
import Favorite from "../../screens/favorite/Favorite";
import Profile from "../../screens/profile/Profile";
import Daily from "../../screens/daily/Daily";

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
        animation:"fade",
        tabBarStyle: [
          styles.tabWrapper,
          isKeyboardVisible && Platform.OS === "android" ? { display: "none" } : null,
        ],
        tabBarActiveTintColor: "#9810fa",
        tabBarInactiveTintColor: "#b0b4bd",
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Poppins-Regular",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HomeSvg width={24} height={24} />
            ) : (
              <HomeSvg width={24} height={24} />
            ),
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
        styles.tabWrapper,   // <-- keep base style
        display === "none" ? { display: "none" } : null,
      ],
      tabBarIcon: ({ focused }) =>
        focused ? (
          <DailySvg width={24} height={24} />
        ) : (
          <DailySvg width={24} height={24} />
        ),
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
        styles.tabWrapper,   // <-- keep base style
        display === "none" ? { display: "none" } : null,
      ],
      tabBarIcon: ({ focused }) =>
        focused ? (
          <HeartSvg width={24} height={24} />
        ) : (
          <HeartSvg width={24} height={24} />
        ),
    };
  }}
/>

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ProfileSvg width={24} height={24} />
            ) : (
              <ProfileSvg width={24} height={24} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const getRouteName = (route:any) =>{
  const routeName = getFocusedRouteNameFromRoute(route)

  console.log("routeName" , routeName);
  
  if(routeName?.includes("EmployeeDetail") || routeName?.includes("CompanyDetail") ||  routeName?.includes("EditSlots") ||  routeName?.includes("AssignTimeSlot") ){
    return "none"
  }
  return 'flex'
}

export default BottomTab;

const styles = StyleSheet.create({
  tabWrapper: {
    // borderTopColor: COLORS.primary,
    backgroundColor: "#ffffffff",
    borderTopWidth: 2,
    borderColor:"#fd74b1",
    // borderTopColor: "red", // green line
    height: Platform.OS === "ios" ? 90 : 70,
    paddingTop:9,
    paddingBottom: Platform.OS === "ios" ? 10 : 10,
  },
});
