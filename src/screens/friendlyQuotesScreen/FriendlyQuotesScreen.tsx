// FriendlyQuotesScreen.tsx
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
import ScreenWrapper from "../../wrapper/ScreenWrapper";
import CopySvg from "../../assets/copy.svg"
import BackSvg from "../../assets/arrowback.svg"
import ShareSvg from "../../assets/share.svg"
import HeartSvg from "../../assets/heartsvg.svg"
import Clipboard from "@react-native-clipboard/clipboard";

const quotesData = [
  {
    id: "1",
    text: "A true friend is someone who thinks you are good egg even though he knows you are slightly cracked.",
  },
  {
    id: "2",
    text: "Friendship is the only cement that will ever hold the world together.",
  },
  {
    id: "3",
    text: "Good friends are like stars. You dont always see them, but you know they are always there.",
  },
  {
    id: "4",
    text: "A friend is one who knows you and loves you just the same.",
  },
  {
    id: "5",
    text: "Friends are the family you choose for yourself.",
  },
];

const FriendlyQuotesScreen = () => {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);

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
      await Share.share({
        message: text,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const filteredQuotes = quotesData.filter((q) =>
    q.text.toLowerCase().includes(search.toLowerCase())
  );

  const renderQuote = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Text style={styles.quoteText}>“{item.text}”</Text>

      <View style={styles.actionsRow}>
        {/* Copy Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#E3F2FD" }]}
          onPress={() => handleCopy(item.text)}
        >
          <CopySvg width={22} height={22}  />
          <Text style={styles.buttonText}>Copy</Text>
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#E8F5E9" }]}
          onPress={() => handleShare(item.text)}
        >
          <ShareSvg width={22} height={22} />
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>

        {/* Favorite Button */}
        <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
          <HeartSvg width={22} height={22} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Header */}
        <View style={{display:"flex"   , flexDirection: "row" , gap:6}}>
 <View>
           <BackSvg width={22} height={22}  />
        </View>
        <View >
<Text style={styles.header}>Friendly</Text>
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
           showsHorizontalScrollIndicator={false} 
           showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 2,
  },
  subHeader: {
    fontSize: 14,
    color: "gray",
    marginBottom: 12,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  quoteText: {
    fontSize: 14,
    marginBottom: 12,
    color: "#333",
  },
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
  buttonText: {
    fontSize: 12,
    marginLeft: 4,
    fontWeight: "600",
  },
});

export default FriendlyQuotesScreen;
