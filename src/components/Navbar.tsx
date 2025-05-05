
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, BookOpen, Heart, BookMarked } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="devotional-container">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <BookMarked className="h-6 w-6 text-devotional-700" />
            <span className="font-cormorant text-2xl font-semibold text-devotional-800">
              Daily Grace
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-devotional-700 hover:text-devotional-900 transition-colors">
              Home
            </Link>
            <Link to="/devotionals" className="text-devotional-700 hover:text-devotional-900 transition-colors">
              Devotionals
            </Link>
            <Link to="/prayer-journal" className="text-devotional-700 hover:text-devotional-900 transition-colors">
              Prayer Journal
            </Link>
            <Link to="/verse-of-the-day" className="text-devotional-700 hover:text-devotional-900 transition-colors">
              Verse of the Day
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-devotional-700 hover:text-devotional-900 transition-colors py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/devotionals" 
                className="text-devotional-700 hover:text-devotional-900 transition-colors py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Devotionals
              </Link>
              <Link 
                to="/prayer-journal" 
                className="text-devotional-700 hover:text-devotional-900 transition-colors py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Prayer Journal
              </Link>
              <Link 
                to="/verse-of-the-day" 
                className="text-devotional-700 hover:text-devotional-900 transition-colors py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Verse of the Day
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
