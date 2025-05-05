
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DevotionalCard from "@/components/DevotionalCard";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const TEMPLES = [
  {
    id: "1",
    title: "Tirumala Venkateswara Temple",
    excerpt: "The richest temple in the world, dedicated to Lord Venkateswara, an incarnation of Lord Vishnu who appeared in Kali Yuga.",
    scripture: "Skanda Purana",
    date: "May 5, 2025",
    imageUrl: "https://images.unsplash.com/photo-1621415814107-22ee442edf10?q=80&w=800&auto=format&fit=crop",
    tags: ["venkateswara", "vishnu", "tirumala"]
  },
  {
    id: "2",
    title: "Sri Padmavathi Temple",
    excerpt: "Dedicated to Goddess Padmavathi, consort of Lord Venkateswara, located in Tiruchanur near Tirupati.",
    scripture: "Padma Purana",
    date: "May 4, 2025",
    imageUrl: "https://images.unsplash.com/photo-1609619385002-f40f1f48a5cc?q=80&w=800&auto=format&fit=crop",
    tags: ["padmavathi", "goddess", "tiruchanur"]
  },
  {
    id: "3",
    title: "Sri Kalahasti Temple",
    excerpt: "Famous for Rahu-Ketu pooja, this ancient temple is dedicated to Lord Shiva and is one of the Panchabhoota Sthalas.",
    scripture: "Shiva Purana",
    date: "May 3, 2025",
    imageUrl: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=800&auto=format&fit=crop",
    tags: ["shiva", "kalahasti", "vayu"]
  },
  {
    id: "4",
    title: "Govindaraja Swamy Temple",
    excerpt: "One of the oldest temples in Tirupati, dedicated to Lord Govindaraja, a form of Lord Vishnu, built by the Cholas.",
    scripture: "Brahma Purana",
    date: "May 2, 2025",
    imageUrl: "https://images.unsplash.com/photo-1583216986290-f2444882bd46?q=80&w=800&auto=format&fit=crop",
    tags: ["govinda", "vishnu", "tirupati"]
  },
  {
    id: "5",
    title: "Kapila Theertham",
    excerpt: "The only Shiva temple at the foot of Tirumala hills, featuring a beautiful waterfall and cave temple.",
    scripture: "Skanda Purana",
    date: "May 1, 2025",
    imageUrl: "https://images.unsplash.com/photo-1605759438489-c2f44d0a4522?q=80&w=800&auto=format&fit=crop",
    tags: ["shiva", "waterfall", "kapila"]
  },
  {
    id: "6",
    title: "Sri Prasanna Venkateswara Swamy Temple",
    excerpt: "Located at Appalayagunta, this temple is dedicated to Lord Venkateswara in his prasanna (pleased) form.",
    scripture: "Varaha Purana",
    date: "April 30, 2025",
    imageUrl: "https://images.unsplash.com/photo-1585468491047-f02d6ee1caed?q=80&w=800&auto=format&fit=crop",
    tags: ["venkateswara", "prasanna", "appalayagunta"]
  }
];

const Devotionals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Extract all unique tags
  const allTags = Array.from(
    new Set(TEMPLES.flatMap(temple => temple.tags))
  ).sort();
  
  // Filter temples based on search and selected tag
  const filteredTemples = TEMPLES.filter(temple => {
    const matchesSearch = 
      temple.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      temple.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      temple.scripture.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesTag = selectedTag ? temple.tags.includes(selectedTag) : true;
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-devotional-800 text-white py-16">
          <div className="devotional-container text-center">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold mb-4">
              Sacred Temples
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Explore the divine temples of Tirumala Tirupati region and their spiritual significance.
            </p>
          </div>
        </section>
        
        {/* Search and Filter */}
        <section className="bg-white py-8 border-b">
          <div className="devotional-container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search temples..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button 
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedTag === null 
                      ? 'bg-devotional-700 text-white' 
                      : 'bg-gray-100 text-devotional-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedTag(null)}
                >
                  All
                </button>
                {allTags.map(tag => (
                  <button 
                    key={tag}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedTag === tag 
                        ? 'bg-devotional-700 text-white' 
                        : 'bg-gray-100 text-devotional-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Temples Grid */}
        <section className="py-16 bg-gray-50">
          <div className="devotional-container">
            {filteredTemples.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-devotional-800 mb-2">No temples found</h3>
                <p className="text-devotional-600">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTemples.map(temple => (
                  <DevotionalCard 
                    key={temple.id} 
                    id={temple.id}
                    title={temple.title}
                    excerpt={temple.excerpt}
                    scripture={temple.scripture}
                    date={temple.date}
                    imageUrl={temple.imageUrl}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Devotionals;
