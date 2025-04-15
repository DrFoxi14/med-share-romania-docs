
import { useState } from "react";
import DocumentCard, { DocumentCardProps } from "./DocumentCard";
import DocumentFilter from "./DocumentFilter";

// Sample data (in a real app, this would come from the backend)
const sampleDocuments: DocumentCardProps[] = [
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
  },
  {
    id: "4",
    title: "Biochemistry - Lipid Metabolism",
    description: "Detailed notes on lipid metabolism pathways, including key enzymes and regulatory mechanisms.",
    category: "Biochemistry",
    university: "UMF Timișoara",
    year: 1,
    uploadDate: "2023-08-30",
    downloads: 156,
    rating: 4.3,
    fileType: "pdf"
  },
  {
    id: "5",
    title: "Surgery Techniques - Illustrated Guide",
    description: "Step-by-step illustrated guide to common surgical procedures for medical students.",
    category: "Surgery",
    university: "UMF Târgu Mureș",
    year: 4,
    uploadDate: "2023-10-28",
    downloads: 189,
    rating: 4.8,
    fileType: "pdf"
  },
  {
    id: "6",
    title: "Pathophysiology of Respiratory Diseases",
    description: "Comprehensive notes on the pathophysiology of common respiratory diseases and disorders.",
    category: "Pathophysiology",
    university: "UMF Craiova",
    year: 3,
    uploadDate: "2023-09-15",
    downloads: 132,
    rating: 4.6,
    fileType: "docx"
  }
];

const DocumentGrid = () => {
  const [documents, setDocuments] = useState(sampleDocuments);
  
  const handleSearch = (filters: any) => {
    // In a real app, this would trigger an API call with filters
    console.log("Searching with filters:", filters);
    
    // For demo purposes, let's just simulate filtering
    let filteredDocs = [...sampleDocuments];
    
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      filteredDocs = filteredDocs.filter(doc => 
        doc.title.toLowerCase().includes(term) || 
        doc.description.toLowerCase().includes(term) ||
        doc.category.toLowerCase().includes(term)
      );
    }
    
    if (filters.category) {
      filteredDocs = filteredDocs.filter(doc => doc.category === filters.category);
    }
    
    if (filters.university) {
      filteredDocs = filteredDocs.filter(doc => doc.university === filters.university);
    }
    
    if (filters.year) {
      filteredDocs = filteredDocs.filter(doc => doc.year === parseInt(filters.year));
    }
    
    // Sort the documents
    if (filters.sort) {
      switch (filters.sort) {
        case "Newest First":
          filteredDocs.sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());
          break;
        case "Oldest First":
          filteredDocs.sort((a, b) => new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime());
          break;
        case "Most Downloaded":
          filteredDocs.sort((a, b) => b.downloads - a.downloads);
          break;
        case "Highest Rated":
          filteredDocs.sort((a, b) => b.rating - a.rating);
          break;
      }
    }
    
    setDocuments(filteredDocs);
  };

  return (
    <div>
      <DocumentFilter onSearch={handleSearch} />
      
      {documents.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold text-gray-700">No documents found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <DocumentCard key={doc.id} {...doc} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DocumentGrid;
