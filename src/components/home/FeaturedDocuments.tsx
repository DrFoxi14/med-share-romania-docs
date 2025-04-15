
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DocumentCard, { DocumentCardProps } from "../documents/DocumentCard";

// Sample data (in a real app, this would come from the backend)
const featuredDocuments: DocumentCardProps[] = [
  {
    id: "1",
    title: "Anatomy of the Heart - Comprehensive Guide",
    description: "A detailed study guide covering the anatomy of the heart, including chambers, valves, and major vessels.",
    category: "Anatomy",
    university: "UMF Bucharest",
    year: 2,
    uploadDate: "2023-10-15",
    downloads: 128,
    rating: 4.7,
    fileType: "pdf"
  },
  {
    id: "2",
    title: "Pharmacology Notes - Antibiotics",
    description: "Comprehensive notes on antibiotics, including mechanisms of action, side effects, and clinical applications.",
    category: "Pharmacology",
    university: "UMF Cluj-Napoca",
    year: 3,
    uploadDate: "2023-09-22",
    downloads: 95,
    rating: 4.5,
    fileType: "docx"
  },
  {
    id: "3",
    title: "Clinical Neurology Exam Preparation",
    description: "Practice questions and case studies for the clinical neurology final exam.",
    category: "Neurology",
    university: "UMF Iași",
    year: 5,
    uploadDate: "2023-11-05",
    downloads: 217,
    rating: 4.9,
    fileType: "pdf"
  }
];

const FeaturedDocuments = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-umf-primary">
            Featured Documents
          </h2>
          <Link to="/documents">
            <Button variant="outline" className="border-umf-primary text-umf-primary hover:bg-umf-primary hover:text-white">
              View All
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredDocuments.map((doc) => (
            <DocumentCard key={doc.id} {...doc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedDocuments;
