import React, { useEffect } from "react";
import { Image } from "react-native";

const Images: { [key: string]: any } = {
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

export default function PreloadImages() {
  useEffect(() => {
    Object.values(Images).forEach((img) => {
      const { uri } = Image.resolveAssetSource(img);
      Image.prefetch(uri); 
    });
  }, []);

  return null; 
}
