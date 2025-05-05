
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DevotionalCard from "@/components/DevotionalCard";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const DEVOTIONALS = [
  {
    id: "1",
    title: "Finding Peace in Troubled Times",
    excerpt: "When the world around us seems chaotic, God's peace surpasses all understanding and guards our hearts and minds.",
    scripture: "Philippians 4:6-7",
    date: "May 5, 2025",
    imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=800&auto=format&fit=crop",
    tags: ["peace", "anxiety", "trust"]
  },
  {
    id: "2",
    title: "The Power of Thankfulness",
    excerpt: "Gratitude shifts our perspective from what we lack to the abundance that God has provided, transforming our hearts.",
    scripture: "1 Thessalonians 5:18",
    date: "May 4, 2025",
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop",
    tags: ["gratitude", "thankfulness", "perspective"]
  },
  {
    id: "3",
    title: "Walking by Faith",
    excerpt: "Faith means taking the next step even when you don't see the whole staircase, trusting in God's guidance.",
    scripture: "2 Corinthians 5:7",
    date: "May 3, 2025",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    tags: ["faith", "trust", "guidance"]
  },
  {
    id: "4",
    title: "The Gift of Grace",
    excerpt: "Grace is the unmerited favor of God that reminds us His love isn't based on our performance but on His character.",
    scripture: "Ephesians 2:8-9",
    date: "May 2, 2025",
    imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=800&auto=format&fit=crop",
    tags: ["grace", "salvation", "love"]
  },
  {
    id: "5",
    title: "Living as Light",
    excerpt: "As followers of Christ, we are called to shine His light in a world that often feels dark and hopeless.",
    scripture: "Matthew 5:14-16",
    date: "May 1, 2025",
    imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=800&auto=format&fit=crop",
    tags: ["light", "witness", "purpose"]
  },
  {
    id: "6",
    title: "The Joy of the Lord",
    excerpt: "True joy comes not from our circumstances but from our relationship with God who is our strength.",
    scripture: "Nehemiah 8:10",
    date: "April 30, 2025",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
    tags: ["joy", "strength", "perspective"]
  }
];

const Devotionals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Extract all unique tags
  const allTags = Array.from(
    new Set(DEVOTIONALS.flatMap(dev => dev.tags))
  ).sort();
  
  // Filter devotionals based on search and selected tag
  const filteredDevotionals = DEVOTIONALS.filter(dev => {
    const matchesSearch = 
      dev.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dev.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dev.scripture.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesTag = selectedTag ? dev.tags.includes(selectedTag) : true;
    
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
              Daily Devotionals
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Explore our collection of devotionals to nurture your spiritual growth and deepen your faith journey.
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
                  placeholder="Search devotionals..."
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
        
        {/* Devotionals Grid */}
        <section className="py-16 bg-gray-50">
          <div className="devotional-container">
            {filteredDevotionals.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-devotional-800 mb-2">No devotionals found</h3>
                <p className="text-devotional-600">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDevotionals.map(devotional => (
                  <DevotionalCard 
                    key={devotional.id} 
                    id={devotional.id}
                    title={devotional.title}
                    excerpt={devotional.excerpt}
                    scripture={devotional.scripture}
                    date={devotional.date}
                    imageUrl={devotional.imageUrl}
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
