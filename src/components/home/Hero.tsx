
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Upload, Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-gradient text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            Share and Discover Medical Resources
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-slide-in">
            Access high-quality educational materials from medical students 
            across all UMF universities in Romania.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Link to="/documents">
              <Button size="lg" className="bg-white text-umf-primary hover:bg-gray-100 w-full sm:w-auto">
                <Search className="h-5 w-5 mr-2" />
                Browse Documents
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" className="bg-umf-accent hover:bg-green-600 w-full sm:w-auto">
                <Upload className="h-5 w-5 mr-2" />
                Upload Your Notes
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 animate-fade-in">
              <BookOpen className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Verified Content</h3>
              <p className="text-sm opacity-90">
                Access quality materials uploaded by fellow medical students.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <Search className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Easy to Find</h3>
              <p className="text-sm opacity-90">
                Search by university, subject, or year to find exactly what you need.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Upload className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Contribute</h3>
              <p className="text-sm opacity-90">
                Share your notes and resources to help other medical students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
