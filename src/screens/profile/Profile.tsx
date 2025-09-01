// ProfileScreen.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Replace with your actual SVG imports
import BackArrowSvg from "../../assets/arrowback.svg";
import SettingsSvg from "../../assets/settings.svg";
import EditSvg from "../../assets/edit.svg";
import ShareSvg from "../../assets/share.svg";
import HeartSvg from "../../assets/heartsvg.svg";
import CustomSvg from "../../assets/custom.svg";
import GoalSvg from "../../assets/goal.svg";
import CreateQuoteSvg from "../../assets/createquote.svg";
import HistorySvg from "../../assets/history.svg";
import BadgeSvg from "../../assets/badge.svg";
import ScreenWrapper from "../../wrapper/ScreenWrapper";

export default function Profile() {
  const navigation = useNavigation();


  const handleCreatePress = (screenName:string)=>{
    navigation.navigate(screenName)
  }

  return (
    <ScreenWrapper backgroundColor="#fafafa">
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
          <BackArrowSvg width={22} height={22} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={{ marginLeft: "auto" }} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={()=>handleCreatePress('settingsScreen')}>
          <SettingsSvg width={22} height={22} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>Q</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.username}>Quote Lover</Text>
            <Text style={styles.joined}>Joined September 2025</Text>
            <Text style={styles.bio}>
              “Spreading positivity, one quote at a time ✨”
            </Text>
          </View>
          <TouchableOpacity>
            <EditSvg width={20} height={20} />
          </TouchableOpacity>
        </View>

        {/* Stats Grid */}
        <View style={styles.gridRow}>
          <View style={[styles.statCard, { backgroundColor: "#f0f9ff" }]}>
            <ShareSvg width={20} height={20} />
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>Quotes Shared</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: "#fff1f2" }]}>
            <HeartSvg width={20} height={20} />
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>
        </View>
        <View style={styles.gridRow}>
          <View style={[styles.statCard, { backgroundColor: "#faf5ff" }]}>
            <CustomSvg width={20} height={20} />
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>Custom Quotes</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: "#fffbeb" }]}>
            <GoalSvg width={20} height={20} />
            <Text style={styles.statValue}>5/day</Text>
            <Text style={styles.statLabel}>Daily Goal</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <TouchableOpacity style={styles.actionCard} onPress={()=>handleCreatePress("createQuoteScreen")} >
          <CreateQuoteSvg width={22} height={22} />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.actionTitle}>Create New Quote</Text>
            <Text style={styles.actionSubtitle}>Share your wisdom</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard} onPress={()=>handleCreatePress("shareHistory")}>
          <HistorySvg width={22} height={22} />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.actionTitle}>Share History</Text>
            <Text style={styles.actionSubtitle}>View shared quotes</Text>
          </View>
        </TouchableOpacity>

        {/* Badge Section */}
        <View style={styles.badgeCard}>
          <BadgeSvg width={28} height={28} />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.badgeTitle}>Quote Enthusiast</Text>
            <Text style={styles.badgeSubtitle}>
              You’ve shared 0 quotes!
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  headerTitle: { fontSize: 18, fontWeight: "600", marginLeft: 8 },

  profileCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    alignItems: "center",
    marginBottom: 16,
    elevation: 2,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#e879f9",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: { color: "#fff", fontWeight: "700", fontSize: 18 },
  username: { fontSize: 16, fontWeight: "600", color: "#111" },
  joined: { fontSize: 13, color: "#666" },
  bio: { fontSize: 13, color: "#444", marginTop: 6, fontStyle: "italic" },

  gridRow: { flexDirection: "row", justifyContent: "space-between" },
  statCard: {
    flex: 1,
    borderRadius: 12,
    padding: 14,
    margin: 4,
    alignItems: "center",
  },
  statValue: { fontSize: 16, fontWeight: "700", marginVertical: 4 },
  statLabel: { fontSize: 13, color: "#444" },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginVertical: 10,
    color: "#111",
  },
  actionCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    alignItems: "center",
    elevation: 1,
  },
  actionTitle: { fontSize: 14, fontWeight: "600", color: "#111" },
  actionSubtitle: { fontSize: 12, color: "#666" },

  badgeCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    alignItems: "center",
    elevation: 1,
  },
  badgeTitle: { fontSize: 15, fontWeight: "600", color: "#111" },
  badgeSubtitle: { fontSize: 13, color: "#666" },
});
