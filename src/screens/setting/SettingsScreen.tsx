// SettingsScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import ScreenWrapper from "../../wrapper/ScreenWrapper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const navigation = useNavigation()

  const handlePress = async ()=>{
    navigation.navigate("Onboarding")
    await AsyncStorage.clear()
  }

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <Text style={styles.header}>Settings</Text>

        {/* Preferences */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>

          <View style={styles.item}>
            <View style={styles.itemLeft}>
              {/* <Icon name="notifications-outline" size={20} color="#1976D2" /> */}
              <View style={styles.itemTextWrapper}>
                <Text style={styles.itemTitle}>Push Notifications</Text>
                <Text style={styles.itemSubtitle}>
                  Get notified about new quotes and features
                </Text>
              </View>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
            />
          </View>

          <View style={styles.item}>
            <View style={styles.itemLeft}>
              {/* <Icon name="moon-outline" size={20} color="#673AB7" /> */}
              <View style={styles.itemTextWrapper}>
                <Text style={styles.itemTitle}>Dark Mode</Text>
                <Text style={styles.itemSubtitle}>Switch to dark theme</Text>
              </View>
            </View>
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>
        </View>

        {/* App Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App</Text>

          <View style={styles.item}>
            <View style={styles.itemLeft}>
              {/* <Icon name="color-palette-outline" size={20} color="#E91E63" /> */}
              <View style={styles.itemTextWrapper}>
                <Text style={styles.itemTitle}>Theme Colors</Text>
                <Text style={[styles.itemSubtitle, { color: "gray" }]}>
                  Coming Soon
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.item}>
            <View style={styles.itemLeft}>
              {/* <Icon name="lock-closed-outline" size={20} color="#4CAF50" /> */}
              <View style={styles.itemTextWrapper}>
                <Text style={styles.itemTitle}>Privacy Settings</Text>
                <Text style={styles.itemSubtitle}>
                  Manage your data and privacy
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>

          <TouchableOpacity style={styles.item}>
            <View style={styles.itemLeft}>
              {/* <Icon name="help-circle-outline" size={20} color="#FFC107" /> */}
              <View style={styles.itemTextWrapper}>
                <Text style={styles.itemTitle}>Help & Support</Text>
                <Text style={styles.itemSubtitle}>
                  Get help and contact support
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={handlePress}>
            <View style={styles.itemLeft}>
              {/* <Icon name="log-out-outline" size={20} color="#F44336" /> */}
              <View style={styles.itemTextWrapper}>
                <Text style={[styles.itemTitle, { color: "#F44336" }]}>
                  Sign Out
                </Text>
                <Text style={styles.itemSubtitle}>
                  Log out of your account
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>QuoteVibe v1.0.0</Text>
          <Text style={styles.footerText}>
            Made with <Text style={{ color: "red" }}>❤</Text> for quote lovers
          </Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  section: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "gray",
    marginBottom: 8,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  itemTextWrapper: {
    marginLeft: 12,
    flex: 1,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
  },
  itemSubtitle: {
    fontSize: 12,
    color: "gray",
    marginTop: 2,
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: "gray",
  },
});

export default SettingsScreen;
