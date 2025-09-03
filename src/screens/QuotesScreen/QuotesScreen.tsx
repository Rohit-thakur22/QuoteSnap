// QuotesScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
  Share,
} from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import Clipboard from "@react-native-clipboard/clipboard";
import ScreenWrapper from "../../wrapper/ScreenWrapper";
import { Category, Quote, quotesData } from "../../json/quotesData"; // ✅ import JSON
import CopySvg from "../../assets/copy.svg";
import BackSvg from "../../assets/arrowback.svg";
import ShareSvg from "../../assets/share.svg";
import HeartSvg from "../../assets/heartsvg.svg";
import { Fonts } from "../../utils/fonts";

const QuotesScreen = () => {
  const route = useRoute<RouteProp<{ params: { category: Category } }, "params">>();
const { category } = route?.params;

const [search, setSearch] = useState("");
const [favorites, setFavorites] = useState<string[]>([]);

const navigation = useNavigation()

const allQuotes: Quote[] = quotesData[category]; // ✅ now TypeScript is happy
const filteredQuotes = allQuotes.filter((q) =>
  q.text.toLowerCase().includes(search.toLowerCase())
);
  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const handleCopy = (text: string) => {
    Clipboard.setString(text);
  };

  const handleShare = async (text: string) => {
    try {
      await Share.share({ message: text });
    } catch (error) {
      console.log(error);
    }
  };

  const renderQuote = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Text style={styles.quoteText}>“{item.text}”</Text>
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#E3F2FD" }]}
          onPress={() => handleCopy(item.text)}
        >
          <CopySvg width={22} height={22} />
          <Text style={styles.buttonText}>Copy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#E8F5E9" }]}
          onPress={() => handleShare(item.text)}
        >
          <ShareSvg width={22} height={22} />
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
          <HeartSvg
            width={22}
            height={22}
            fill={favorites.includes(item.id) ? "red" : "gray"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Header */}
        <View style={{ flexDirection: "row", gap: 6 }}>
          <TouchableOpacity  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={()=>navigation.goBack()}>
          <BackSvg width={22} height={22} />

          </TouchableOpacity>
          <View>
            <Text style={styles.header}>{category}</Text>
            <Text style={styles.subHeader}>{filteredQuotes.length} quotes</Text>
          </View>
        </View>

        {/* Search Bar */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search quotes..."
          value={search}
          onChangeText={setSearch}
        />

        {/* Quotes List */}
        <FlatList
          data={filteredQuotes}
          keyExtractor={(item) => item.id}
          renderItem={renderQuote}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { fontSize: 20, marginBottom: 2 , fontFamily:Fonts.Brothers},
  subHeader: { fontSize: 14, color: "gray", marginBottom: 12 , fontFamily:Fonts.PoppinsRegular, },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    fontFamily:Fonts.PoppinsRegular,
  },
  card: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  quoteText: { fontSize: 14, marginBottom: 12, color: "#333" , fontFamily:Fonts.PoppinsRegular, },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginRight: 6,
  },
  buttonText: { fontSize: 12, marginLeft: 4, fontWeight: "600" , fontFamily:Fonts.PoppinsRegular, },
});

export default QuotesScreen;
