
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-devotional-50 border-t border-gray-200 mt-16">
      <div className="devotional-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-devotional-800">Daily Grace</h3>
            <p className="mt-4 text-devotional-600">
              Nurturing your spiritual journey with daily devotionals, prayers, and scripture to inspire and encourage.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-devotional-800">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-devotional-600 hover:text-devotional-800 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/devotionals" className="text-devotional-600 hover:text-devotional-800 transition-colors">
                  Devotionals
                </Link>
              </li>
              <li>
                <Link to="/prayer-journal" className="text-devotional-600 hover:text-devotional-800 transition-colors">
                  Prayer Journal
                </Link>
              </li>
              <li>
                <Link to="/verse-of-the-day" className="text-devotional-600 hover:text-devotional-800 transition-colors">
                  Verse of the Day
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-devotional-800">Subscribe</h3>
            <p className="mt-4 text-devotional-600">
              Sign up to receive daily devotionals in your inbox.
            </p>
            <div className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-devotional-500 focus:border-devotional-500"
                />
                <button className="bg-devotional-700 hover:bg-devotional-800 text-white px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-devotional-600 text-sm">
              © {new Date().getFullYear()} Daily Grace. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-devotional-600 text-sm">Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span className="text-devotional-600 text-sm">for your spiritual journey</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
