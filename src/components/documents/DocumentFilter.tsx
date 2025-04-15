
import { useState } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

// Sample data (in a real app, this would come from the backend)
const categories = [
  "All Categories", "Anatomy", "Biochemistry", "Cardiology", 
  "Dermatology", "Endocrinology", "Pharmacology", "Surgery"
];

const universities = [
  "All Universities", "UMF Bucharest", "UMF Cluj-Napoca", 
  "UMF Iași", "UMF Timișoara", "UMF Târgu Mureș", "UMF Craiova"
];

const studyYears = [
  "All Years", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6"
];

const sortOptions = [
  "Newest First", "Oldest First", "Most Downloaded", "Highest Rated"
];

interface DocumentFilterProps {
  onSearch: (filters: any) => void;
}

const DocumentFilter = ({ onSearch }: DocumentFilterProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [university, setUniversity] = useState("All Universities");
  const [year, setYear] = useState("All Years");
  const [sort, setSort] = useState("Newest First");
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = () => {
    const filters = {
      searchTerm,
      category: category === "All Categories" ? null : category,
      university: university === "All Universities" ? null : university,
      year: year === "All Years" ? null : year.replace("Year ", ""),
      sort
    };
    onSearch(filters);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Input
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
        
        <Button 
          variant="outline" 
          className="md:w-auto"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
        
        <Button 
          onClick={handleSearch}
          className="bg-umf-primary hover:bg-umf-secondary"
        >
          Search
        </Button>
      </div>
      
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 animate-fade-in">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={university} onValueChange={setUniversity}>
            <SelectTrigger>
              <SelectValue placeholder="University" />
            </SelectTrigger>
            <SelectContent>
              {universities.map((uni) => (
                <SelectItem key={uni} value={uni}>
                  {uni}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger>
              <SelectValue placeholder="Study Year" />
            </SelectTrigger>
            <SelectContent>
              {studyYears.map((yr) => (
                <SelectItem key={yr} value={yr}>
                  {yr}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger>
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

export default DocumentFilter;
