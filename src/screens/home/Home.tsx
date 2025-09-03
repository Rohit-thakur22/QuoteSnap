
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ScreenWrapper from "../../wrapper/ScreenWrapper";
import { useNavigation } from "@react-navigation/native";
import { quotesData } from "../../json/quotesData";
import { Fonts } from "../../utils/fonts";

const categories = [
  { name: "Friendly",  emoji: "🤝", colors: ["#4facfe", "#00f2fe"] },
  { name: "Romantic",  emoji: "❤️", colors: ["#ff6a88", "#ff99ac"] },
  { name: "Flirty",  emoji: "😜", colors: ["#f77062", "#fe5196"] },
  { name: "Motivational", emoji: "💪", colors: ["#f7971e", "#ffd200"] },
  { name: "Funny", emoji: "😂", colors: ["#43e97b", "#38f9d7"] },
  { name: "Sad", emoji: "😢", colors: ["#667db6", "#0082c8"] },
  { name: "Attitude", emoji: "😎", colors: ["#7f00ff", "#e100ff"] },
  { name: "Wisdom",  emoji: "🧠", colors: ["#00c6ff", "#0072ff"] },
];

export default function Home() {
  const navigation = useNavigation()
const [search, setSearch] = useState("");

  const handleCreatePress = (screenName:string)=>{
    navigation.navigate(screenName)
  }
  
 const handleCardPress = (categoryName: string) => {
  navigation.navigate("QuotesScreen", { category: categoryName });
};

 // Filter categories based on search
  const filteredCategories = categories.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
        
          <View>
            <Text style={styles.greeting}>Hi, Quote 👋</Text>
            <Text style={styles.subtitle}>What inspires you today?</Text>
          </View>
          <Text style={styles.savedText}>0 saved 🔴</Text>
        </View>

        {/* Create Quote Button */}
        <TouchableOpacity style={{ marginVertical: 12 }} onPress={()=>handleCreatePress("createQuoteScreen")}>
          <LinearGradient
            colors={["#a18cd1", "#fbc2eb"]}
            style={styles.createButton}
          >
            <Text style={styles.createText}>+ Create Your Own Quote</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          
          <TextInput
            placeholder="Search categories..."
            style={styles.searchInput}
            placeholderTextColor="#999"
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
        </View>

        {/* Categories */}
        <Text style={styles.sectionTitle}>Browse Categories</Text>
        <View style={styles.grid}>
          {filteredCategories?.map((item, index) => (
            <TouchableOpacity key={index} style={styles.card} onPress={() => handleCardPress(item.name)}>
              <LinearGradient colors={item.colors} style={styles.cardInner}>
                <Text style={styles.cardEmoji}>{item.emoji}</Text>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardSubtitle}>{quotesData[item.name].length} quotes</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContainer: {  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  greeting: { fontSize: 18, color: "#222",  fontFamily:Fonts.Brothers},
  subtitle: { fontSize: 14, color: "#666" ,fontFamily:Fonts.PoppinsRegular, },
  savedText: { marginLeft: "auto", fontSize: 14, color: "#e63946" , fontFamily:Fonts.PoppinsRegular, },

  createButton: {
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  createText: { color: "#fff", fontWeight: "600", fontSize: 16  , fontFamily:Fonts.PoppinsRegular,},

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  searchInput: { marginLeft: 8, flex: 1, fontSize: 14, color: "#000" , fontFamily:Fonts.PoppinsRegular, },

  sectionTitle: { fontSize: 16, fontWeight: "600", marginBottom: 12 ,fontFamily:Fonts.Brothers },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    marginBottom: 16,
    borderRadius: 14,
    overflow: "hidden",
  },
  cardInner: {
    paddingVertical: 24,
    paddingHorizontal: 12,
    borderRadius: 14,
    alignItems: "center",
  },
  cardEmoji: { fontSize: 28, marginBottom: 8 },
  cardTitle: { fontSize: 16, 
    fontFamily:Fonts.PoppinsBold
    , color: "#fff" },
  cardSubtitle: { fontSize: 12, color: "#fff", marginTop: 4 , fontFamily:Fonts.PoppinsRegular, },
});
