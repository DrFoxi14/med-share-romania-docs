
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Upload, 
  Home, 
  User, 
  LogIn, 
  Menu, 
  X 
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // In a real app, this would be determined by authentication state
  const isLoggedIn = false;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-umf-primary" />
            <span className="text-xl font-semibold text-umf-primary">UMF Docs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-umf-primary font-medium transition-colors">
              Home
            </Link>
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="text-gray-600 hover:text-umf-primary font-medium transition-colors">
                  Dashboard
                </Link>
                <Link to="/upload" className="text-gray-600 hover:text-umf-primary font-medium transition-colors">
                  Upload
                </Link>
                <Link to="/profile" className="text-gray-600 hover:text-umf-primary font-medium transition-colors">
                  Profile
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-umf-primary font-medium transition-colors">
                  Login
                </Link>
                <Link to="/register">
                  <Button className="bg-umf-primary hover:bg-umf-secondary text-white">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5 text-umf-primary" />
              <span>Home</span>
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BookOpen className="h-5 w-5 text-umf-primary" />
                  <span>Dashboard</span>
                </Link>
                <Link 
                  to="/upload" 
                  className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Upload className="h-5 w-5 text-umf-primary" />
                  <span>Upload</span>
                </Link>
                <Link 
                  to="/profile" 
                  className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5 text-umf-primary" />
                  <span>Profile</span>
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogIn className="h-5 w-5 text-umf-primary" />
                  <span>Login</span>
                </Link>
                <Link 
                  to="/register" 
                  className="w-full" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full bg-umf-primary hover:bg-umf-secondary">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
