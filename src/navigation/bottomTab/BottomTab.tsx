import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LinearGradient from "react-native-linear-gradient";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";

// Icons (can be SVG or from react-native-vector-icons)
import HomeSvg from "../../assets/homesquid.svg";
import HeartSvg from "../../assets/heartsvg.svg";
import ProfileSvg from "../../assets/profilegreensvg.svg";
import DailySvg from "../../assets/daily.svg";

// Screens
import Home from "../../screens/home/Home";
import Favorite from "../../screens/favorite/Favorite";
import Profile from "../../screens/profile/Profile";
import Daily from "../../screens/daily/Daily";
import { Fonts } from "../../utils/fonts";

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: Platform.OS === "ios" ? 80 : 70,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#fff",
          elevation: 8,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarButton: (props) => (
            <AnimatedTabButton {...props} label="Home" Icon={HomeSvg} />
          ),
        }}
      />
      <Tab.Screen
        name="Daily"
        component={Daily}
        options={{
          tabBarButton: (props) => (
            <AnimatedTabButton {...props} label="Daily" Icon={DailySvg} />
          ),
        }}
      />

      {/* Floating Center Button */}
      <Tab.Screen
        name="Add"
        component={Daily}
        options={{
          tabBarButton: (props) => <AnimatedCenterButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorite}
        options={{
          tabBarButton: (props) => (
            <AnimatedTabButton {...props} label="Favorites" Icon={HeartSvg} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarButton: (props) => (
            <AnimatedTabButton {...props} label="Profile" Icon={ProfileSvg} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// 🔹 Tab Button with Reanimated Animations
function AnimatedTabButton({ onPress, label, Icon, accessibilityState }: any) {
  const focused = accessibilityState?.selected ?? false;
  const scale = useSharedValue(focused ? 1.2 : 1);
  const translateY = useSharedValue(focused ? -5 : 0);

  React.useEffect(() => {
    scale.value = withSpring(focused ? 1.2 : 1, { damping: 12, stiffness: 120 });
    translateY.value = withSpring(focused ? -5 : 0, { damping: 12, stiffness: 120 });
  }, [focused]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { translateY: translateY.value }],
  }));

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.tabButton}>
      <Animated.View style={[animatedStyle]}>
        {focused ? (
          <LinearGradient colors={["#f472b6", "#ec4899"]} style={styles.activeCircle}>
            <Icon width={24} height={24} fill="#fff" />
          </LinearGradient>
        ) : (
          <Icon width={24} height={24} fill="#999" />
        )}
      </Animated.View>
      <Animated.Text
        style={[
          styles.label,
          { color: focused ? "#ec4899" : "#999" },
          animatedStyle,
        ]}
      >
        {label}
      </Animated.Text>
    </TouchableOpacity>
  );
}

// 🔹 Floating Center Button
function AnimatedCenterButton({ onPress }: any) {
  const scale = useSharedValue(1);

  const handlePress = () => {
    scale.value = withSpring(0.85, { damping: 5, stiffness: 150 }, () => {
      scale.value = withSpring(1, { damping: 5, stiffness: 150 });
    });

    onPress?.();
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[styles.centerWrapper, animatedStyle]}>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.9}>
        <LinearGradient colors={["#f472b6", "#ec4899"]} style={styles.centerButton}>
          <Text style={styles.plus}>+</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 5,
  },
  label: {
    fontSize: 11,
    marginTop: 3,
    fontFamily: Fonts.PoppinsRegular,
  },
  activeCircle: {
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  centerWrapper: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
  },
  centerButton: {
    width: 65,
    height: 65,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  plus: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 2,
  },
});

export default BottomTab;
