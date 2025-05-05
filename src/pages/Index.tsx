
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DevotionalCard from "@/components/DevotionalCard";
import VerseCard from "@/components/VerseCard";

const TEMPLES = [
  {
    id: "1",
    title: "Tirumala Venkateswara Temple",
    excerpt: "The richest temple in the world, dedicated to Lord Venkateswara, an incarnation of Lord Vishnu who appeared in Kali Yuga.",
    scripture: "Skanda Purana",
    date: "May 5, 2025",
    imageUrl: "https://images.unsplash.com/photo-1621415814107-22ee442edf10?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Sri Padmavathi Temple",
    excerpt: "Dedicated to Goddess Padmavathi, consort of Lord Venkateswara, located in Tiruchanur near Tirupati.",
    scripture: "Padma Purana",
    date: "May 4, 2025",
    imageUrl: "https://images.unsplash.com/photo-1609619385002-f40f1f48a5cc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Sri Kalahasti Temple",
    excerpt: "Famous for Rahu-Ketu pooja, this ancient temple is dedicated to Lord Shiva and is one of the Panchabhoota Sthalas.",
    scripture: "Shiva Purana",
    date: "May 3, 2025",
    imageUrl: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=800&auto=format&fit=crop"
  }
];

const SLOKA_OF_THE_DAY = {
  verse: "Om Namo Venkatesaya Namah Shivaya Cha, Sudarshanam Chakra Hastaya Abhaya Pradaya Cha",
  reference: "Venkatesa Stotram, Verse 1",
  background: "https://images.unsplash.com/photo-1583216986290-f2444882bd46?q=80&w=800&auto=format&fit=crop"
};

const Index = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  
  useEffect(() => {
    updateGreeting();
    const timer = setInterval(updateGreeting, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, []);
  
  const updateGreeting = () => {
    const now = new Date();
    const hours = now.getHours();
    
    let greeting;
    if (hours < 12) {
      greeting = "Suprabhatam";
    } else if (hours < 18) {
      greeting = "Shubh Dopahar";
    } else {
      greeting = "Shubh Sandhya";
    }
    
    setCurrentTime(greeting);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-devotional-900 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583216787361-410c3256298a?q=80&w=2000&auto=format&fit=crop')" }}
          ></div>
          <div className="devotional-container relative z-10 py-24 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                {currentTime}, <br />Tirumala Tirupati Experience
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Explore sacred temples, offerings, and ancient slokas of Lord Venkateswara
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Button asChild size="lg" className="bg-white text-devotional-900 hover:bg-white/90">
                  <Link to="/temples">Explore Temples</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/puja-offerings">Puja Offerings</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Feature Temple */}
        <section className="py-16 bg-white">
          <div className="devotional-container">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="text-3xl md:text-4xl font-cormorant font-semibold text-devotional-800">
                Featured Temple
              </h2>
              <Link 
                to="/temples" 
                className="text-devotional-600 hover:text-devotional-800 flex items-center transition-colors"
              >
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-full overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1621415814107-22ee442edf10?q=80&w=800&auto=format&fit=crop" 
                  alt="Tirumala Venkateswara Temple"
                  className="w-full h-full object-cover"
                  style={{ height: "500px" }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="mb-4 text-sm text-devotional-500">
                  {TEMPLES[0].date}
                </div>
                <h3 className="devotional-title">
                  {TEMPLES[0].title}
                </h3>
                <p className="verse-text mb-6 text-devotional-700">
                  "Om Namo Venkatesaya, Namaha Shivaya Cha, Sudarshanam Chakra Hastaya, Abhaya Pradaya Cha"
                </p>
                <p className="scripture-reference mb-6">
                  Venkatesa Stotram
                </p>
                <p className="devotional-text mb-8 text-devotional-600">
                  Lord Venkateswara, also known as Balaji or Srinivasa, resides on the seven hills of Tirumala in Andhra Pradesh. 
                  This sacred temple attracts millions of devotees yearly who come to seek blessings and fulfill their vows. 
                  The deity is believed to have appeared in Kali Yuga to bless his devotees and provide salvation.
                  The temple is renowned for its magnificent architecture, spiritual significance and elaborate rituals.
                </p>
                <Button asChild className="w-fit bg-devotional-600 hover:bg-devotional-700">
                  <Link to={`/temples/${TEMPLES[0].id}`}>Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sacred Temples */}
        <section className="py-16 bg-devotional-50">
          <div className="devotional-container">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="text-3xl md:text-4xl font-cormorant font-semibold text-devotional-800">
                Sacred Temples
              </h2>
              <Link 
                to="/temples" 
                className="text-devotional-600 hover:text-devotional-800 flex items-center transition-colors"
              >
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TEMPLES.map(temple => (
                <DevotionalCard key={temple.id} {...temple} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Sloka of the Day */}
        <section className="py-16 bg-white">
          <div className="devotional-container">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="text-3xl md:text-4xl font-cormorant font-semibold text-devotional-800">
                Sloka of the Day
              </h2>
              <Link 
                to="/daily-sloka" 
                className="text-devotional-600 hover:text-devotional-800 flex items-center transition-colors"
              >
                More Slokas <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="h-96 max-w-4xl mx-auto">
              <VerseCard 
                verse={SLOKA_OF_THE_DAY.verse} 
                reference={SLOKA_OF_THE_DAY.reference} 
                background={SLOKA_OF_THE_DAY.background}
              />
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-devotional-700 to-devotional-900 text-white">
          <div className="devotional-container text-center">
            <h2 className="text-3xl md:text-4xl font-cormorant font-semibold mb-6">
              Begin Your Divine Journey Today
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
              Plan temple visits, explore sacred rituals, and discover ancient slokas that connect you to divine wisdom.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-devotional-900 hover:bg-white/90">
                <Link to="/puja-offerings">Puja Offerings</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/temples">Explore Temples</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
