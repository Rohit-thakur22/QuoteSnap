// quotesData.js
export type Category =
  | "Friendly"
  | "Romantic"
  | "Flirty"
  | "Motivational"
  | "Funny"
  | "Sad"
  | "Attitude"
  | "Wisdom";

export interface Quote {
  id: string;
  text: string;
}

export const quotesData = {
  Friendly: [
    { id: "1", text: "A true friend is someone who sees the pain in your eyes while everyone else believes the smile on your face." },
    { id: "2", text: "Friendship is the only cement that will ever hold the world together." },
    { id: "3", text: "Good friends are like stars; you don’t always see them but you know they’re always there." },
    { id: "4", text: "A real friend is one who walks in when the rest of the world walks out." },
    { id: "5", text: "Friends are the family you choose for yourself." },
    { id: "6", text: "True friendship comes when silence between two people is comfortable." },
    { id: "7", text: "Friendship multiplies the good of life and divides the evil." },
    { id: "8", text: "A friend is someone who makes it easy to believe in yourself." },
    { id: "9", text: "One loyal friend is worth ten thousand relatives." },
    { id: "10", text: "Friendship is born at that moment when one person says to another: ‘You too? I thought I was the only one.’" }
  ],

  Romantic: [
    { id: "1", text: "In your smile, I see something more beautiful than the stars." },
    { id: "2", text: "You are the source of my joy, the center of my world, and the whole of my heart." },
    { id: "3", text: "Every love story is beautiful, but ours is my favorite." },
    { id: "4", text: "I am happiest when I’m right next to you." },
    { id: "5", text: "You are the one I’ve been waiting for all my life." }
  ],

  Flirty: [
    { id: "1", text: "Do you believe in love at first sight—or should I walk by again?" },
    { id: "2", text: "Are you a magician? Because whenever I look at you, everyone else disappears." },
    { id: "3", text: "I’m not a photographer, but I can picture us together." },
    { id: "4", text: "Do you have a map? Because I keep getting lost in your eyes." },
    { id: "5", text: "If kisses were snowflakes, I’d send you a blizzard." }
  ],

  Motivational: [
    { id: "1", text: "The future depends on what you do today." },
    { id: "2", text: "Don’t watch the clock; do what it does. Keep going." },
    { id: "3", text: "Success is not final, failure is not fatal: it is the courage to continue that counts." },
    { id: "4", text: "Push yourself, because no one else is going to do it for you." },
    { id: "5", text: "Dream big and dare to fail." }
  ],

  Funny: [
    { id: "1", text: "I’m on a seafood diet. I see food and I eat it." },
    { id: "2", text: "Why don’t scientists trust atoms? Because they make up everything!" },
    { id: "3", text: "Life is short. Smile while you still have teeth." },
    { id: "4", text: "I’m not lazy, I’m just on energy-saving mode." },
    { id: "5", text: "My bed is a magical place where I suddenly remember everything I forgot to do." }
  ],

  Sad: [
    { id: "1", text: "Tears come from the heart and not from the brain." },
    { id: "2", text: "It’s sad when someone you know becomes someone you knew." },
    { id: "3", text: "Heavy hearts, like heavy clouds in the sky, are best relieved by the letting of a little water." },
    { id: "4", text: "Sometimes, you have to smile to hide your fears and laugh to hide your tears." },
    { id: "5", text: "Behind every sweet smile, there is a bitter sadness that no one can ever see and feel." }
  ],

  Attitude: [
    { id: "1", text: "I don’t have an attitude problem, I just have a personality you can’t handle." },
    { id: "2", text: "My attitude is based on how you treat me." },
    { id: "3", text: "I’m not special, I’m a limited edition." },
    { id: "4", text: "Excellence is not a skill, it’s an attitude." },
    { id: "5", text: "Don’t confuse my personality with my attitude. My personality is who I am, my attitude depends on who you are." }
  ],

  Wisdom: [
    { id: "1", text: "The only true wisdom is in knowing you know nothing." },
    { id: "2", text: "In the middle of every difficulty lies opportunity." },
    { id: "3", text: "Knowing yourself is the beginning of all wisdom." },
    { id: "4", text: "Wise men speak because they have something to say; fools because they have to say something." },
    { id: "5", text: "The journey of a thousand miles begins with a single step." }
  ],
};
