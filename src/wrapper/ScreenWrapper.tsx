import React from "react";
import {
  View,
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView as RNSafeAreaView,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  backgroundColor = "#fff",
}) => {
  const insets = useSafeAreaInsets();

  return Platform.OS === "ios" ? (
    // ✅ iOS: respects notch + bottom safe area
    <SafeAreaView style={[styles.iosWrapper, { backgroundColor }]}>
      {children}
    </SafeAreaView>
  ) : (
    // ✅ Android: add padding for status bar
    <RNSafeAreaView
      style={[
        styles.androidWrapper,
        { backgroundColor, paddingTop: StatusBar.currentHeight || 0 },
      ]}
    >
      {children}
    </RNSafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  iosWrapper: {
    flex: 1,
  },
  androidWrapper: {
    flex: 1,
    padding:16
  },
});
