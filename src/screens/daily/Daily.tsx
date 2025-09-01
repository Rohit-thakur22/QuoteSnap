// FeaturedQuotes.tsx
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ScreenWrapper from "../../wrapper/ScreenWrapper";
import BackArrowSvg from "../../assets/arrowback.svg";
import StarSvg from "../../assets/star.svg";
import CopySvg from "../../assets/copy.svg";
import ShareSvg from "../../assets/share.svg";
import HeartSvg from "../../assets/heartsvg.svg";

export default function FeaturedQuotes() {
  const [activeTab, setActiveTab] = useState<"daily" | "trending">("daily");

  const todayQuotes = [
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
    },
  ];

  const trendingQuotes = [
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      text: "In three words I can sum up everything I have learned about life: it goes on.",
      author: "Robert Frost",
    },
    {
      text: "Life is what happens to you while you are busy making other plans.",
      author: "John Lennon",
    },
  ];

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <BackArrowSvg width={24} height={24} />
          <Text style={styles.headerTitle}>Featured Quotes</Text>
        </View>
        <Text style={styles.dateText}>Monday, September 1, 2025</Text>

        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "daily" && styles.activeTab]}
            onPress={() => setActiveTab("daily")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "daily" && styles.activeTabText,
              ]}
            >
              Daily Picks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === "trending" && styles.activeTab]}
            onPress={() => setActiveTab("trending")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "trending" && styles.activeTabText,
              ]}
            >
              Trending
            </Text>
          </TouchableOpacity>
        </View>

        {/* Daily Picks */}
        {activeTab === "daily" && (
          <>
            {/* Quote of the Day */}
            <LinearGradient
              colors={["#a18cd1", "#fbc2eb"]}
              style={styles.quoteCard}
            >
              <View style={styles.quoteHeader}>
                <StarSvg width={24} height={24} />
                <Text style={styles.quoteHeaderText}> Quote of the Day</Text>
              </View>
              <Text style={styles.quoteText}>
                "The only impossible journey is the one you never begin."
              </Text>
              <Text style={styles.authorText}>— Tony Robbins</Text>
            </LinearGradient>

            {/* Today’s Selection */}
            <Text style={styles.sectionTitle}>Today's Selection</Text>
            {todayQuotes.map((item, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.quoteTextSmall}>"{item.text}"</Text>
                <Text style={styles.authorSmall}>— {item.author}</Text>

                {/* Actions */}
                <View style={styles.actions}>
                  <TouchableOpacity style={styles.actionBtn}>
                    <CopySvg width={20} height={20} />
                    <Text style={styles.actionText}>Copy</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionBtn}>
                    <ShareSvg width={20} height={20} />
                    <Text style={[styles.actionText, { color: "#16a34a" }]}>
                      Share
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginLeft: "auto" }}>
                    <HeartSvg width={22} height={22} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </>
        )}

        {/* Trending */}
        {activeTab === "trending" && (
          <>
            <Text style={styles.sectionTitle}>🔥 Trending This Week</Text>
            <Text style={styles.subText}>
              Most shared and loved quotes by our community
            </Text>
            {trendingQuotes.map((item, index) => (
              <View key={index} style={styles.card}>
                <View style={styles.trendingRow}>
                  <View style={styles.circle}>
                    <Text style={styles.circleText}>{index + 1}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.quoteTextSmall}>"{item.text}"</Text>
                    <Text style={styles.authorSmall}>— {item.author}</Text>
                  </View>
                </View>

                {/* Actions */}
                <View style={styles.actions}>
                  <TouchableOpacity style={styles.actionBtn}>
                    <CopySvg width={20} height={20} />
                    <Text style={styles.actionText}>Copy</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionBtn}>
                    <ShareSvg width={20} height={20} />
                    <Text style={[styles.actionText, { color: "#16a34a" }]}>
                      Share
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginLeft: "auto" }}>
                    <HeartSvg width={22} height={22} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 8,
    color: "#222",
  },
  dateText: { fontSize: 14, color: "#666", marginBottom: 12 },

  tabs: {
    flexDirection: "row",
    backgroundColor: "#f3f4f6",
    borderRadius: 20,
    padding: 4,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 20,
  },
  activeTab: { backgroundColor: "#fff", elevation: 2 },
  tabText: { fontSize: 14, color: "#666" },
  activeTabText: { color: "#000", fontWeight: "600" },

  quoteCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
  },
  quoteHeader: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  quoteHeaderText: { color: "#fff", fontSize: 12, marginLeft: 4 },
  quoteText: { fontSize: 16, color: "#fff", fontWeight: "500", marginBottom: 8 },
  authorText: { fontSize: 14, color: "#fff", fontStyle: "italic" },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    color: "#333",
  },
  subText: { fontSize: 13, color: "#777", marginBottom: 12 },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
  },
  quoteTextSmall: { fontSize: 14, color: "#222", marginBottom: 6 },
  authorSmall: { fontSize: 13, color: "#666", fontStyle: "italic" },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  actionText: { marginLeft: 4, fontSize: 13, color: "#3b82f6" },

  trendingRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  circle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#f97316",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  circleText: { color: "#fff", fontSize: 12, fontWeight: "600" },
});
