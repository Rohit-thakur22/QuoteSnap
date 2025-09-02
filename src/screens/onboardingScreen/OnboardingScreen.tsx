// OnboardingScreen.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Animated,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Welcome to QuoteVibe",
    subtitle:
      "Your daily dose of inspiration, motivation, and beautiful quotes awaits you",
    emoji: "✨",
    icon: "📝",
    colors: ["#8E2DE2", "#4A00E0"], // Purple gradient
  },
  {
    id: "2",
    title: "Express Your Soul",
    subtitle:
      "Find the perfect words for every emotion - from romantic whispers to motivational roars",
    emoji: "🥰",
    icon: "❤️",
    colors: ["#FF416C", "#FF4B2B"], // Pink gradient
  },
  {
    id: "3",
    title: "Share & Inspire",
    subtitle:
      "Spread positivity with one tap. Your favorite quotes are just a share away from touching hearts",
    emoji: "🚀",
    icon: "🔗",
    colors: ["#00c6ff", "#0072ff"], // Blue gradient
  },
  {
    id: "4",
    title: "Create Magic",
    subtitle:
      "Become a wordsmith! Write quotes that inspire thousands and leave your mark on the world",
    emoji: "🎨",
    icon: "✨",
    colors: ["#00b09b", "#96c93d"], // Green gradient
  },
  {
    id: "5",
    title: "What's your name?",
    subtitle: "Let's personalize your quote journey",
    emoji: "👤",
    icon: "👤",
    colors: ["#8E2DE2", "#4A00E0"], // Purple gradient
    input: true,
  },
];

const OnboardingScreen = ({ navigation }: any) => {
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [name, setName] = useState("");

 const handleContinue = async () => {
  if (currentIndex < slides.length - 1) {
    flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
  } else {
    await AsyncStorage.setItem("alreadyLaunched", "true");
    navigation.replace("MainTabs"); // Go to MainTabs after onboarding
  }
};


  const renderItem = ({ item }: any) => {
    return (
      <LinearGradient
        colors={item.colors}
        style={styles.slide}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Skip button */}
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.push("MainTabs")}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        {/* Icon */}
        <View style={styles.iconBox}>
          <Text style={styles.icon}>{item.icon}</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>
          {item.title} {item.emoji}
        </Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>{item.subtitle}</Text>

        {/* Input for last screen */}
        {item.input && (
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor="#ddd"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        )}
      </LinearGradient>
    );
  };

  return (
    <View style={styles.container}>
      {/* FlatList */}
      <Animated.FlatList
      style={{flex:1 }}
        ref={flatListRef}
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(ev) => {
          const index = Math.round(
            ev.nativeEvent.contentOffset.x / width
          );
          setCurrentIndex(index);
        }}
      />

      {/* Pagination dots */}
      <View style={styles.pagination}>
        {slides.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <View
              key={index}
              style={[
                styles.dot,
                { width: isActive ? 24 : 8, backgroundColor: isActive ? "#fff" : "rgba(255,255,255,0.5)" },
              ]}
            />
          );
        })}
      </View>

      {/* Continue button */}
      <TouchableOpacity style={styles.continueBtn} onPress={handleContinue}>
        <Text style={styles.continueText}>
          {currentIndex === slides.length - 1
            ? `Nice to meet you, ${name || "👋"}`
            : "Continue  >"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  slide: {
    width,
  flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  skipButton: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  skipText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  iconBox: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  icon: {
    fontSize: 36,
    color: "#fff",
  },
  title: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 20,
    opacity: 0.9,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 20,
    color: "#fff",
    textAlign: "center",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
    position: "absolute",
    bottom: 60,
    width: "100%",
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  continueBtn: {
    position: "absolute",
    bottom: 20,
    width:"85%",
    alignItems:"center",
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  continueText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
