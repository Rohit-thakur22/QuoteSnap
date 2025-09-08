// Animated Home

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ScreenWrapper from "../../wrapper/ScreenWrapper";
import { useNavigation } from "@react-navigation/native";
const quotesGenerated = require("../../json/quotesGenerated.json");
import { Fonts } from "../../utils/fonts";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";


const images = {
  Friendly: require("../../assets/family.png"),
  Romantic: require("../../assets/love.png"),
  Flirty: require("../../assets/family.png"),
  Motivational: require("../../assets/Motivational.png"),
  Funny: require("../../assets/Funny.png"),
  Sad: require("../../assets/family.png"),
  Attitude: require("../../assets/family.png"),
  Wisdom: require("../../assets/family.png"),
  Kid: require("../../assets/Kid.png"),
  Life: require("../../assets/Life.png"),
  Naughty: require("../../assets/Naughty.png"),
  Party: require("../../assets/Party.png"),
  Music: require("../../assets/Music.png"),
  Parents: require("../../assets/Parents.png"),
  Rain: require("../../assets/Rain.png"),
  Pets: require("../../assets/Pets.png"),
  Lyrical: require("../../assets/Lyrical.png"),
  Lonely: require("../../assets/Lonely.png"),
  Hurt: require("../../assets/Hurt.png"),
  Exam: require("../../assets/Exam.png"),
  Family: require("../../assets/family.png"),
  Flirt: require("../../assets/Flirt.png"),
  God: require("../../assets/God.png"),
  Happiness: require("../../assets/Happiness.png"),
  Home: require("../../assets/Home.png"),
  Inspirational: require("../../assets/Inspirational.png"),
  Jealously: require("../../assets/Jealousy.png"),
  Love: require("../../assets/love.png"),
  Friends: require("../../assets/Friends.png"),
  Fitness: require("../../assets/Fitness.png"),
  Nature: require("../../assets/Nature.png"),
  Bike: require("../../assets/bike.png"),
  Brother: require("../../assets/brother.png"),
  Childhood: require("../../assets/childhood.png"),
  Cool: require("../../assets/cool.png"),
  Cute: require("../../assets/cute.png"),
  Dance: require("../../assets/dance.png"),
  Emotional: require("../../assets/emotional.png"),
};

// --- CATEGORY META ---
const categoryMeta: Record<string, { emoji: keyof typeof images; colors: [string, string] }> = {
  Friendly: { emoji: "Friendly", colors: ["#4facfe", "#00f2fe"] },
  Romantic: { emoji: "Romantic", colors: ["#ff6a88", "#ff99ac"] },
  Flirty: { emoji: "Flirty", colors: ["#f77062", "#fe5196"] },
  Motivational: { emoji: "Motivational", colors: ["#f7971e", "#ffd200"] },
  Funny: { emoji: "Funny", colors: ["#43e97b", "#38f9d7"] },
  Sad: { emoji: "Sad", colors: ["#667db6", "#0082c8"] },
  Attitude: { emoji: "Attitude", colors: ["#7f00ff", "#e100ff"] },
  Wisdom: { emoji: "Wisdom", colors: ["#00c6ff", "#0072ff"] },
  Kid: { emoji: "Kid", colors: ["#f6d365", "#fda085"] },
  Life: { emoji: "Life", colors: ["#00c6ff", "#0072ff"] },
  Naughty: { emoji: "Naughty", colors: ["#ff5858", "#f09819"] },
  Party: { emoji: "Party", colors: ["#ff9966", "#ff5e62"] },
  Music: { emoji: "Music", colors: ["#43cea2", "#185a9d"] },
  Parents: { emoji: "Parents", colors: ["#fbc2eb", "#a6c1ee"] },
  Rain: { emoji: "Rain", colors: ["#667db6", "#0082c8"] },
  Pets: { emoji: "Pets", colors: ["#56ab2f", "#a8e063"] },
  Lyrical: { emoji: "Lyrical", colors: ["#7f00ff", "#e100ff"] },
  Lonely: { emoji: "Lonely", colors: ["#2c3e50", "#4ca1af"] },
  Hurt: { emoji: "Hurt", colors: ["#b24592", "#f15f79"] },
  Exam: { emoji: "Exam", colors: ["#36d1dc", "#5b86e5"] },
  Family: { emoji: "Family", colors: ["#fdfbfb", "#ebedee"] },
  Flirt: { emoji: "Flirt", colors: ["#f77062", "#fe5196"] },
  God: { emoji: "God", colors: ["#ffecd2", "#fcb69f"] },
  Happiness: { emoji: "Happiness", colors: ["#f7971e", "#ffd200"] },
  Home: { emoji: "Home", colors: ["#00c6ff", "#0072ff"] },
  Inspirational: { emoji: "Inspirational", colors: ["#a1c4fd", "#c2e9fb"] },
  Jealously: { emoji: "Jealously", colors: ["#834d9b", "#d04ed6"] },
  Love: { emoji: "Love", colors: ["#ff9966", "#ff5e62"] },
  Friends: { emoji: "Friends", colors: ["#4facfe", "#00f2fe"] },
  Fitness: { emoji: "Fitness", colors: ["#56ccf2", "#2f80ed"] },
  Nature: { emoji: "Nature", colors: ["#56ab2f", "#a8e063"] },
  Bike: { emoji: "Bike", colors: ["#36d1dc", "#5b86e5"] },
  Brother: { emoji: "Brother", colors: ["#bdc3c7", "#2c3e50"] },
  Childhood: { emoji: "Childhood", colors: ["#f6d365", "#fda085"] },
  Cool: { emoji: "Cool", colors: ["#7f00ff", "#e100ff"] },
  Cute: { emoji: "Cute", colors: ["#fbc2eb", "#a6c1ee"] },
  Dance: { emoji: "Dance", colors: ["#ff9a9e", "#fecfef"] },
  Emotional: { emoji: "Emotional", colors: ["#667db6", "#0082c8"] },
};

// --- CATEGORIES ARRAY ---
const categories = Object.keys(quotesGenerated)
  .sort()
  .map((name) => {
    const meta = categoryMeta[name] ?? { emoji: "Friendly", colors: ["#4facfe", "#00f2fe"] };
    return { name, emoji: meta.emoji, colors: meta.colors };
  });

// --- HOME COMPONENT ---
export default function Home() {
  const navigation = useNavigation<any>();
  const [search, setSearch] = useState("");

  const handleCreatePress = (screenName: string) => {
    navigation.navigate(screenName);
  };

  const handleCardPress = (categoryName: string) => {
    navigation.navigate("QuotesScreen", { category: categoryName });
  };

  const filteredCategories = categories.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScreenWrapper>
      <FlatList
        data={filteredCategories}
        keyExtractor={(item) => item.name}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        removeClippedSubviews={false}
        getItemLayout={(data, index) => ({
          length: 150, // height of each row (adjust as per card size)
          offset: 150 * Math.floor(index / 3), // since 3 columns
          index,
        })}
        ListHeaderComponent={
          <View>
            {/* Header */}
            <View style={styles.header}>
              <View>
                <Text style={styles.greeting}>Hi, Quote 👋</Text>
                <Text style={styles.subtitle}>What inspires you today?</Text>
              </View>
              <Text style={styles.savedText}>0 saved 🔴</Text>
            </View>

            {/* Create Quote Button */}
            <TouchableOpacity
              style={styles.createButtonWrapper}
              onPress={() => handleCreatePress("createQuoteScreen")}
            >
              <LinearGradient colors={["#a18cd1", "#fbc2eb"]} style={styles.createButton}>
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

            {/* Section Title */}
            <Text style={styles.sectionTitle}>Browse Categories</Text>
          </View>
        }
        renderItem={({ item, index }) => (
          <CategoryCard
            item={item}
            index={index}
            onPress={() => handleCardPress(item.name)}
            quotesCount={quotesGenerated[item.name]?.length ?? 0}
          />
        )}
        initialNumToRender={18}
        windowSize={10}
        removeClippedSubviews
        scrollEventThrottle={16}
      />
    </ScreenWrapper>
  );
}

// --- CATEGORY CARD COMPONENT ---
const CategoryCard = React.memo(function CategoryCard({ item, index, onPress, quotesCount }:any) {
  return (
    <Animated.View style={[styles.card]}>
      <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
        <LinearGradient colors={item.colors} style={styles.cardInner}>
          <Image source={images[item.emoji]} style={{ width: 60, height: 60, marginBottom: 10 }} />
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardSubtitle}>{quotesCount} quotes</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
});

// --- STYLES ---
const styles = StyleSheet.create({
  scrollContainer: { paddingBottom: 60 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  greeting: { fontSize: 18, color: "#222", fontFamily: Fonts.Brothers },
  subtitle: { fontSize: 14, color: "#666", fontFamily: Fonts.PoppinsRegular },
  savedText: { marginLeft: "auto", fontSize: 14, color: "#e63946", fontFamily: Fonts.PoppinsRegular },
  createButton: { borderRadius: 12, paddingVertical: 14, alignItems: "center" },
  createButtonWrapper: { marginVertical: 12 },
  createText: { color: "#fff", fontWeight: "600", fontSize: 16, fontFamily: Fonts.PoppinsRegular },
  searchContainer: { flexDirection: "row", alignItems: "center", backgroundColor: "#f3f4f6", borderRadius: 12, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 16 },
  searchInput: { marginLeft: 8, flex: 1, fontSize: 14, color: "#000", fontFamily: Fonts.PoppinsRegular },
  sectionTitle: { fontSize: 16, fontWeight: "600", marginBottom: 12, fontFamily: Fonts.Brothers },
  card: { flex: 1, marginHorizontal: 6, marginBottom: 16, borderRadius: 18, overflow: "hidden", shadowColor: "#000", shadowOpacity: 0.15, shadowRadius: 6, shadowOffset: { width: 0, height: 4 }, elevation: 5 },
  cardInner: { paddingVertical: 28, paddingHorizontal: 12, borderRadius: 18, alignItems: "center" },
  cardTitle: { fontSize: 16, fontFamily: Fonts.PoppinsBold, color: "#fff" },
  cardSubtitle: { fontSize: 12, color: "#fff", marginTop: 4, fontFamily: Fonts.PoppinsRegular },
});
