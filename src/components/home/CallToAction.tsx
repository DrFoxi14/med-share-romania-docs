
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Upload, BookOpen } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="py-16 bg-umf-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to contribute to the community?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Share your notes, study guides, or research papers and help 
            fellow medical students across Romania excel in their studies.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-white text-umf-primary hover:bg-gray-100 w-full sm:w-auto">
                <Upload className="h-5 w-5 mr-2" />
                Start Uploading
              </Button>
            </Link>
            <Link to="/documents">
              <Button size="lg" variant="outline" className="border-white hover:bg-umf-secondary w-full sm:w-auto">
                <BookOpen className="h-5 w-5 mr-2" />
                Browse Documents
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
