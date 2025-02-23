
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-serif text-2xl font-semibold">Filmila</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            <Link to="/explore" className="text-sm font-medium hover:text-primary transition-colors">
              Explore
            </Link>
            <Link to="/genres" className="text-sm font-medium hover:text-primary transition-colors">
              Genres
            </Link>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/viewer/login">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link to="/filmmaker/login">
              <Button variant="default" size="sm">Filmmaker Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
