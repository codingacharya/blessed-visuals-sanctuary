
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DevotionalCard from "@/components/DevotionalCard";
import VerseCard from "@/components/VerseCard";

const DEVOTIONALS = [
  {
    id: "1",
    title: "Finding Peace in Troubled Times",
    excerpt: "When the world around us seems chaotic, God's peace surpasses all understanding and guards our hearts and minds.",
    scripture: "Philippians 4:6-7",
    date: "May 5, 2025",
    imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "The Power of Thankfulness",
    excerpt: "Gratitude shifts our perspective from what we lack to the abundance that God has provided, transforming our hearts.",
    scripture: "1 Thessalonians 5:18",
    date: "May 4, 2025",
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Walking by Faith",
    excerpt: "Faith means taking the next step even when you don't see the whole staircase, trusting in God's guidance.",
    scripture: "2 Corinthians 5:7",
    date: "May 3, 2025",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
  }
];

const VERSE_OF_THE_DAY = {
  verse: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
  reference: "Proverbs 3:5-6",
  background: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop"
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
      greeting = "Good morning";
    } else if (hours < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
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
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2000&auto=format&fit=crop')" }}
          ></div>
          <div className="devotional-container relative z-10 py-24 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                {currentTime}, <br />Seek His Presence Today
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Daily devotionals and scripture to nurture your spiritual journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Button asChild size="lg" className="bg-white text-devotional-900 hover:bg-white/90">
                  <Link to="/devotionals">Browse Devotionals</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/prayer-journal">Start Prayer Journal</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Today's Devotional */}
        <section className="py-16 bg-white">
          <div className="devotional-container">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="text-3xl md:text-4xl font-cormorant font-semibold text-devotional-800">
                Today's Devotional
              </h2>
              <Link 
                to="/devotionals" 
                className="text-devotional-600 hover:text-devotional-800 flex items-center transition-colors"
              >
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-full overflow-hidden rounded-xl">
                <img 
                  src={DEVOTIONALS[0].imageUrl} 
                  alt={DEVOTIONALS[0].title}
                  className="w-full h-full object-cover"
                  style={{ height: "500px" }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="mb-4 text-sm text-devotional-500">
                  {DEVOTIONALS[0].date}
                </div>
                <h3 className="devotional-title">
                  {DEVOTIONALS[0].title}
                </h3>
                <p className="verse-text mb-6 text-devotional-700">
                  "Do not be anxious about anything, but in every situation, 
                  by prayer and petition, with thanksgiving, present your requests to God. 
                  And the peace of God, which transcends all understanding, 
                  will guard your hearts and your minds in Christ Jesus."
                </p>
                <p className="scripture-reference mb-6">
                  {DEVOTIONALS[0].scripture}
                </p>
                <p className="devotional-text mb-8 text-devotional-600">
                  In our fast-paced world filled with uncertainties, anxiety can easily take root in our hearts. 
                  But God offers us a beautiful alternative—a peace that surpasses all human understanding.
                  This peace isn't dependent on our circumstances but on our trust in Him. 
                  When we bring our concerns to God in prayer, rather than carrying the weight ourselves, 
                  we experience His peace guarding our hearts and minds.
                </p>
                <Button asChild className="w-fit bg-devotional-600 hover:bg-devotional-700">
                  <Link to={`/devotionals/${DEVOTIONALS[0].id}`}>Continue Reading</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recent Devotionals */}
        <section className="py-16 bg-devotional-50">
          <div className="devotional-container">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="text-3xl md:text-4xl font-cormorant font-semibold text-devotional-800">
                Recent Devotionals
              </h2>
              <Link 
                to="/devotionals" 
                className="text-devotional-600 hover:text-devotional-800 flex items-center transition-colors"
              >
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DEVOTIONALS.map(devotional => (
                <DevotionalCard key={devotional.id} {...devotional} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Verse of the Day */}
        <section className="py-16 bg-white">
          <div className="devotional-container">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="text-3xl md:text-4xl font-cormorant font-semibold text-devotional-800">
                Verse of the Day
              </h2>
              <Link 
                to="/verse-of-the-day" 
                className="text-devotional-600 hover:text-devotional-800 flex items-center transition-colors"
              >
                More Verses <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="h-96 max-w-4xl mx-auto">
              <VerseCard 
                verse={VERSE_OF_THE_DAY.verse} 
                reference={VERSE_OF_THE_DAY.reference} 
                background={VERSE_OF_THE_DAY.background}
              />
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-devotional-700 to-devotional-900 text-white">
          <div className="devotional-container text-center">
            <h2 className="text-3xl md:text-4xl font-cormorant font-semibold mb-6">
              Begin Your Spiritual Journey Today
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
              Create a prayer journal, explore devotionals, and discover verses that speak to your heart.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-devotional-900 hover:bg-white/90">
                <Link to="/prayer-journal">Start Prayer Journal</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/devotionals">Explore Devotionals</Link>
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
