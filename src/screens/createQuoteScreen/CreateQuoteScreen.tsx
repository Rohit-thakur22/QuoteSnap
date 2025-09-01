// CreateQuoteScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackArrowSvg from "../../assets/arrowback.svg";
import InspirationSvg from "../../assets/createquote.svg";
import LinearGradient from "react-native-linear-gradient"; // expo-linear-gradient for button bg
import DropDownPicker from "react-native-dropdown-picker"; // for category dropdown
import ScreenWrapper from "../../wrapper/ScreenWrapper";

export default function CreateQuoteScreen() {
  const navigation = useNavigation();
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState(null);
  const [open, setOpen] = useState(false);

  const inspirations = [
    "What's a life lesson you’ve learned recently?",
    "Share something that motivates you daily",
    "What would you tell your younger self?",
    "What's your philosophy on friendship?",
    "What does success mean to you?",
  ];

  return (
    <ScreenWrapper backgroundColor="#fafafa">
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowSvg width={22} height={22} />
        </TouchableOpacity>
        <View>
<View style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}>
  <LinearGradient
    colors={["#f472b6", "#a855f7"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.headerButton}
  >
    <InspirationSvg width={20} height={20} />
  </LinearGradient>

  <View style={{ marginLeft: 10 }}>
    <Text style={styles.headerTitle}>Create Quote</Text>
    <Text style={styles.subHeader}>Share your wisdom</Text>
  </View>
</View>

        </View>
       
      </View>
     

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        {/* Need Inspiration */}
        <View style={styles.inspirationCard}>
          <Text style={styles.sectionTitle}>Need Inspiration?</Text>
          {inspirations.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.inspirationBtn}
              onPress={() => setQuote(item)}
            >
              <Text style={styles.inspirationText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Your Quote */}
        <View style={styles.formCard}>
          <Text style={styles.sectionTitle}>Your Quote</Text>

          {/* Quote Input */}
          <Text style={styles.label}>Quote Text *</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Type your quote here..."
            multiline
            value={quote}
            onChangeText={setQuote}
            maxLength={280}
          />
          <Text style={styles.charCount}>{quote.length}/280 characters</Text>

          {/* Author */}
          <Text style={styles.label}>Author (Optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="Your name or 'Anonymous'"
            value={author}
            onChangeText={setAuthor}
          />

          {/* Category */}
         <View style={[styles.formCard, { zIndex: 1000, elevation: 1000 }]}>
  <Text style={styles.label}>Category *</Text>
  <DropDownPicker
    open={open}
    value={category}
    items={[
      { label: "Motivation", value: "motivation" },
      { label: "Friendship", value: "friendship" },
      { label: "Success", value: "success" },
      { label: "Funny", value: "Funny" },
      { label: "Romantic", value: "Romantic" },
      { label: "Attitude", value: "attitude" },
      { label: "Wisdom", value: "wisdom" },
      { label: "Sad", value: "sad" },
    ]}
    setOpen={setOpen}
    setValue={setCategory}
    style={styles.dropdown}
    placeholder="Choose a category"
    dropDownContainerStyle={styles.dropdownContainer}
  />
</View>

        </View>

        {/* Preview */}
        <View style={styles.previewCard}>
          <Text style={styles.sectionTitle}>Preview</Text>
          <Text style={styles.previewText}>
            {quote ? `"${quote}"` : '"Your quote will appear here..."'}
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <LinearGradient
        colors={["#f472b6", "#a855f7"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.buttonWrapper}
      >
        <TouchableOpacity
          onPress={() => console.log("Create Quote")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Create Quote</Text>
        </TouchableOpacity>
      </LinearGradient>
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
  subHeader: { fontSize: 14, color: "#666", marginBottom: 10 },

  inspirationCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
    elevation: 2,
  },
  sectionTitle: { fontSize: 15, fontWeight: "600", marginBottom: 10 },
  inspirationBtn: {
    backgroundColor: "#f3e8ff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
  },
  inspirationText: { fontSize: 13, color: "#4c1d95" },

  formCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
    elevation: 2,
  },
  label: { fontSize: 13, fontWeight: "500", marginTop: 10, marginBottom: 4 },
  textArea: {
    backgroundColor: "#f9fafb",
    borderRadius: 10,
    padding: 10,
    minHeight: 80,
    textAlignVertical: "top",
    fontSize: 14,
  },
  charCount: { fontSize: 11, color: "#999", marginTop: 4 },
  input: {
    backgroundColor: "#f9fafb",
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
  },
 dropdown: {
  borderRadius: 10,
  backgroundColor: "#f9fafb",
  borderColor: "#ddd",
  marginTop: 4,
  zIndex: 1000, // <--- added
},

dropdownContainer: {
  borderColor: "#ddd",
  borderRadius: 10,
  zIndex: 1000, // <--- increased
  elevation: 1000, // <--- for Android
},

  previewCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 80,
    elevation: 2,
  },
  previewText: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#333",
    marginTop: 6,
  },

  headerButton: {
  width: 40,
  height: 40,
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center",
},

  buttonWrapper: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 30,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});
