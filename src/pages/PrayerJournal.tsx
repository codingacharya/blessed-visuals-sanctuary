
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrayerCard from "@/components/PrayerCard";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";

interface Prayer {
  id: string;
  title: string;
  content: string;
  date: string;
}

const PrayerJournal = () => {
  const [prayers, setPrayers] = useState<Prayer[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newPrayer, setNewPrayer] = useState({ title: "", content: "" });
  
  // Load prayers from localStorage on component mount
  useEffect(() => {
    const savedPrayers = localStorage.getItem("prayers");
    if (savedPrayers) {
      setPrayers(JSON.parse(savedPrayers));
    } else {
      // Example prayer
      const examplePrayer = {
        id: "example-1",
        title: "Guidance for the Week Ahead",
        content: "Dear Lord,\n\nAs I begin this new week, I ask for your wisdom and guidance in all my decisions. Help me to prioritize what truly matters and to be a light to those around me.\n\nThank you for your faithful presence in my life.",
        date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
      };
      setPrayers([examplePrayer]);
      localStorage.setItem("prayers", JSON.stringify([examplePrayer]));
    }
  }, []);
  
  // Save prayers to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("prayers", JSON.stringify(prayers));
  }, [prayers]);
  
  const handleSubmitPrayer = () => {
    if (!newPrayer.title || !newPrayer.content) {
      toast.error("Please provide both a title and content for your prayer.");
      return;
    }
    
    const currentDate = new Date().toLocaleDateString("en-US", { 
      month: "long", 
      day: "numeric", 
      year: "numeric" 
    });
    
    const prayer: Prayer = {
      id: crypto.randomUUID(),
      title: newPrayer.title,
      content: newPrayer.content,
      date: currentDate
    };
    
    setPrayers([prayer, ...prayers]);
    setNewPrayer({ title: "", content: "" });
    setIsDialogOpen(false);
    toast.success("Prayer added successfully!");
  };
  
  const handleUpdatePrayer = (id: string, title: string, content: string) => {
    setPrayers(prayers.map(prayer => 
      prayer.id === id ? { ...prayer, title, content } : prayer
    ));
    toast.success("Prayer updated successfully!");
  };
  
  const handleDeletePrayer = (id: string) => {
    setPrayers(prayers.filter(prayer => prayer.id !== id));
    toast.success("Prayer deleted successfully!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-devotional-800 text-white py-16">
          <div className="devotional-container text-center">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold mb-4">
              Prayer Journal
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Create, save, and reflect on your prayers as you deepen your connection with God.
            </p>
          </div>
        </section>
        
        {/* Prayer Journal Content */}
        <section className="py-16 bg-gray-50">
          <div className="devotional-container">
            <div className="flex justify-end mb-8">
              <Button 
                onClick={() => setIsDialogOpen(true)} 
                className="bg-devotional-600 hover:bg-devotional-700"
              >
                <Plus className="h-4 w-4 mr-2" /> Add New Prayer
              </Button>
            </div>
            
            {prayers.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-devotional-800 mb-4">Your prayer journal is empty</h3>
                <p className="text-devotional-600 mb-6">
                  Start by adding your first prayer using the "Add New Prayer" button.
                </p>
                <Button 
                  onClick={() => setIsDialogOpen(true)} 
                  className="bg-devotional-600 hover:bg-devotional-700"
                >
                  <Plus className="h-4 w-4 mr-2" /> Add New Prayer
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {prayers.map(prayer => (
                  <PrayerCard 
                    key={prayer.id} 
                    id={prayer.id}
                    title={prayer.title}
                    content={prayer.content}
                    date={prayer.date}
                    onUpdate={handleUpdatePrayer}
                    onDelete={handleDeletePrayer}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Scripture Inspiration */}
        <section className="py-16 bg-white">
          <div className="devotional-container text-center">
            <h2 className="text-3xl font-cormorant font-semibold text-devotional-800 mb-8">
              Scripture for Prayer Inspiration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-devotional-50 p-6 rounded-lg">
                <p className="verse-text mb-4 text-devotional-700">
                  "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."
                </p>
                <p className="scripture-reference">
                  Philippians 4:6
                </p>
              </div>
              <div className="bg-devotional-50 p-6 rounded-lg">
                <p className="verse-text mb-4 text-devotional-700">
                  "Devote yourselves to prayer, being watchful and thankful."
                </p>
                <p className="scripture-reference">
                  Colossians 4:2
                </p>
              </div>
              <div className="bg-devotional-50 p-6 rounded-lg">
                <p className="verse-text mb-4 text-devotional-700">
                  "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus."
                </p>
                <p className="scripture-reference">
                  1 Thessalonians 5:16-18
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Add Prayer Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New Prayer</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="title" className="text-right">
                Title
              </label>
              <Input
                id="title"
                placeholder="Prayer title..."
                className="col-span-3"
                value={newPrayer.title}
                onChange={(e) => setNewPrayer({ ...newPrayer, title: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="content" className="text-right">
                Prayer
              </label>
              <Textarea
                id="content"
                placeholder="Write your prayer..."
                className="col-span-3 min-h-[150px]"
                value={newPrayer.content}
                onChange={(e) => setNewPrayer({ ...newPrayer, content: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              className="bg-devotional-600 hover:bg-devotional-700" 
              onClick={handleSubmitPrayer}
            >
              Save Prayer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PrayerJournal;
