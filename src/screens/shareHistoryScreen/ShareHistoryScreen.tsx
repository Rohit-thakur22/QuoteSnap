// ShareHistory.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import ScreenWrapper from "../../wrapper/ScreenWrapper";
import BackArrowSvg from "../../assets/arrowback.svg";
import CustomSvg from "../../assets/custom.svg";
import ShareSvg from "../../assets/share.svg";

export default function ShareHistory({ navigation }: any) {
  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
             <BackArrowSvg width={22} height={22} />
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <View style={styles.iconBg}>
                          <ShareSvg width={22} height={22} />

            </View>
            <Text style={styles.headerTitle}>Share History</Text>
          </View>

          <Text style={styles.subText}>0 quotes shared</Text>
        </View>

        {/* Empty State */}
        <View style={styles.emptyState}>
                <ShareSvg width={22} height={22} />
          <Text style={styles.emptyTitle}>No shares yet</Text>
          <Text style={styles.emptySubtitle}>
            Quotes you share will appear here so you can easily find them again
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Sharing</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },

  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
  },
  headerCenter: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },
  iconBg: {
    backgroundColor: "#2B8CFF",
    padding: 6,
    borderRadius: 8,
    marginRight: 6,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  subText: {
    marginLeft: "auto",
    fontSize: 12,
    color: "#666",
  },

  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    paddingHorizontal: 30,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 6,
    color: "#222",
  },
  emptySubtitle: {
    fontSize: 13,
    color: "gray",
    textAlign: "center",
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#2B8CFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
