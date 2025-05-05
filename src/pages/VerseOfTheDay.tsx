
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VerseCard from "@/components/VerseCard";
import { Button } from "@/components/ui/button";

const VERSES = [
  {
    id: "1",
    verse: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    reference: "Proverbs 3:5-6",
    background: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
    topic: "trust"
  },
  {
    id: "2",
    verse: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11",
    background: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=800&auto=format&fit=crop",
    topic: "hope"
  },
  {
    id: "3",
    verse: "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
    reference: "Joshua 1:9",
    background: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop",
    topic: "courage"
  },
  {
    id: "4",
    verse: "I can do all this through him who gives me strength.",
    reference: "Philippians 4:13",
    background: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    topic: "strength"
  },
  {
    id: "5",
    verse: "The LORD is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
    reference: "Psalm 23:1-3",
    background: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=800&auto=format&fit=crop",
    topic: "peace"
  },
  {
    id: "6",
    verse: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    reference: "Romans 8:28",
    background: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=800&auto=format&fit=crop",
    topic: "faith"
  }
];

const TOPICS = ["all", "trust", "hope", "courage", "strength", "peace", "faith"];

const VerseOfTheDay = () => {
  const [selectedTopic, setSelectedTopic] = useState("all");
  
  const filteredVerses = selectedTopic === "all" 
    ? VERSES 
    : VERSES.filter(verse => verse.topic === selectedTopic);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-devotional-800 text-white py-16">
          <div className="devotional-container text-center">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold mb-4">
              Verse of the Day
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Find inspiration and wisdom in scripture verses selected to uplift your spirit.
            </p>
          </div>
        </section>
        
        {/* Topic Filter */}
        <section className="bg-white py-8 border-b">
          <div className="devotional-container">
            <div className="flex flex-wrap justify-center gap-3">
              {TOPICS.map(topic => (
                <Button
                  key={topic}
                  variant={selectedTopic === topic ? "default" : "outline"}
                  className={
                    selectedTopic === topic 
                      ? "bg-devotional-600 hover:bg-devotional-700" 
                      : "border-devotional-200 text-devotional-700"
                  }
                  onClick={() => setSelectedTopic(topic)}
                >
                  {topic.charAt(0).toUpperCase() + topic.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Verses Grid */}
        <section className="py-16 bg-gray-50">
          <div className="devotional-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredVerses.map(verse => (
                <div key={verse.id} className="h-80">
                  <VerseCard
                    verse={verse.verse}
                    reference={verse.reference}
                    background={verse.background}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Email Subscription */}
        <section className="py-16 bg-white">
          <div className="devotional-container max-w-3xl text-center">
            <h2 className="text-3xl font-cormorant font-semibold text-devotional-800 mb-4">
              Receive Daily Verses
            </h2>
            <p className="text-devotional-600 mb-6">
              Subscribe to receive a verse in your inbox every morning to start your day with inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 flex-grow border border-gray-300 rounded-md sm:rounded-r-none focus:outline-none focus:ring-1 focus:ring-devotional-500 focus:border-devotional-500"
              />
              <Button className="bg-devotional-600 hover:bg-devotional-700 sm:rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VerseOfTheDay;
