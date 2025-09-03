// FavoritesScreen.tsx
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // 👈 for navigation
import BackArrowSvg from "../../assets/arrowback.svg";
import CopySvg from "../../assets/copy.svg";
import ShareSvg from "../../assets/share.svg";
import HeartSvg from "../../assets/heartsvg.svg";
import ScreenWrapper from "../../wrapper/ScreenWrapper";
import { Fonts } from "../../utils/fonts";

export default function FavoritesScreen() {
  const navigation = useNavigation();

  const favorites = [
    {
      text: "A true friend is someone who thinks you are good egg even though he knows you are slightly cracked.",
    },
    {
      text: "Friendship is the only cement that will ever hold the world together.",
    },
    {
      text: "Good friends are like stars. You dont always see them, but you know they are always there.",
    },
  ];

  return (
       <ScreenWrapper>
      {/* Header */}
      <View >

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowSvg width={22} height={22} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Favorites</Text>
        <Text style={styles.headerSubtitle}>{favorites.length} saved quotes</Text>
      </View>

      {/* List of Favorite Quotes */}
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {favorites.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.quoteText}>"{item.text}"</Text>

            {/* Actions */}
            <View style={styles.actions}>
              <TouchableOpacity style={styles.actionBtn}>
                <CopySvg width={18} height={18} />
                <Text style={[styles.actionText, { color: "#2563eb" }]}>
                  Copy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}>
                <ShareSvg width={18} height={18} />
                <Text style={[styles.actionText, { color: "#16a34a" }]}>
                  Share
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: "auto" }}>
                <HeartSvg width={20} height={20} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
       </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 8,
    color: "#111",
    fontFamily:Fonts.Brothers,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
    marginLeft: "auto",
    fontFamily:Fonts.PoppinsRegular,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
  },
  quoteText: {
    fontSize: 14,
    color: "#222",
    marginBottom: 10,
    fontFamily:Fonts.PoppinsRegular,
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  actionText: {
    marginLeft: 4,
    fontSize: 13,
    fontWeight: "500",
    fontFamily:Fonts.PoppinsRegular,
  },
});
