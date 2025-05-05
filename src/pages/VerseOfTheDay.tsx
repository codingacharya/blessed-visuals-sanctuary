
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VerseCard from "@/components/VerseCard";
import { Button } from "@/components/ui/button";

const SLOKAS = [
  {
    id: "1",
    verse: "Om Namo Venkatesaya Namah Shivaya Cha, Sudarshanam Chakra Hastaya Abhaya Pradaya Cha",
    reference: "Venkatesa Stotram, Verse 1",
    background: "https://images.unsplash.com/photo-1583216787361-410c3256298a?q=80&w=800&auto=format&fit=crop",
    topic: "devotion"
  },
  {
    id: "2",
    verse: "Karacharana Kritam Vak Kayajam Karmajam Va, Sravananayanajam Va Manasam Va Aparadham",
    reference: "Venkateswara Suprabhatam",
    background: "https://images.unsplash.com/photo-1621415814107-22ee442edf10?q=80&w=800&auto=format&fit=crop",
    topic: "forgiveness"
  },
  {
    id: "3",
    verse: "Venkatadri Samam Sthanam Brahmande Nasti Kinchana, Venkateso Samo Devo Na Bhuto Na Bhavishyati",
    reference: "Tirumala Shatakam",
    background: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=800&auto=format&fit=crop",
    topic: "glory"
  },
  {
    id: "4",
    verse: "Achyutam Kesavam Rama Narayanam, Krishna Damodaram Vasudevam Harim",
    reference: "Vishnu Sahasranamam",
    background: "https://images.unsplash.com/photo-1609619385002-f40f1f48a5cc?q=80&w=800&auto=format&fit=crop",
    topic: "names"
  },
  {
    id: "5",
    verse: "Govindeti Sada Snanam, Govindeti Sada Japam, Govindeti Sada Dhyanam, Sarva Papa Pranashanam",
    reference: "Govinda Ashtakam",
    background: "https://images.unsplash.com/photo-1583216986290-f2444882bd46?q=80&w=800&auto=format&fit=crop",
    topic: "purification"
  },
  {
    id: "6",
    verse: "Sri Venkatesa Mahatmyam Yah Pathet Bhaktisanyutah, Sarvan Kaman Avapnoti Venkatesanugrahat",
    reference: "Venkatesa Mahatmyam",
    background: "https://images.unsplash.com/photo-1605759438489-c2f44d0a4522?q=80&w=800&auto=format&fit=crop",
    topic: "blessing"
  }
];

const TOPICS = ["all", "devotion", "forgiveness", "glory", "names", "purification", "blessing"];

const VerseOfTheDay = () => {
  const [selectedTopic, setSelectedTopic] = useState("all");
  
  const filteredSlokas = selectedTopic === "all" 
    ? SLOKAS 
    : SLOKAS.filter(sloka => sloka.topic === selectedTopic);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-devotional-800 text-white py-16">
          <div className="devotional-container text-center">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold mb-4">
              Daily Sloka
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Find spiritual wisdom in sacred Sanskrit slokas dedicated to Lord Venkateswara.
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
        
        {/* Slokas Grid */}
        <section className="py-16 bg-gray-50">
          <div className="devotional-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredSlokas.map(sloka => (
                <div key={sloka.id} className="h-80">
                  <VerseCard
                    verse={sloka.verse}
                    reference={sloka.reference}
                    background={sloka.background}
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
              Receive Daily Slokas
            </h2>
            <p className="text-devotional-600 mb-6">
              Subscribe to receive a sacred sloka in your inbox every morning to start your day with divine blessings.
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
