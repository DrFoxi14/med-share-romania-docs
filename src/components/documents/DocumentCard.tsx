
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileText, Star } from "lucide-react";
import { Link } from "react-router-dom";

export interface DocumentCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  university: string;
  year: number;
  uploadDate: string;
  downloads: number;
  rating: number;
  fileType: "pdf" | "docx";
}

const DocumentCard = ({
  id,
  title,
  description,
  category,
  university,
  year,
  uploadDate,
  downloads,
  rating,
  fileType,
}: DocumentCardProps) => {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <FileText className={`h-5 w-5 mr-2 ${fileType === "pdf" ? "text-red-500" : "text-blue-500"}`} />
            <Badge variant="outline" className="bg-umf-light">
              {fileType.toUpperCase()}
            </Badge>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <Link to={`/document/${id}`} className="mt-2 hover:underline">
          <h3 className="font-semibold text-lg text-umf-primary line-clamp-2">{title}</h3>
        </Link>
        
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge className="bg-umf-secondary text-white hover:bg-umf-primary">{category}</Badge>
          <Badge variant="outline">{university}</Badge>
          <Badge variant="outline">Year {year}</Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </CardContent>
      
      <CardFooter className="pt-0 flex justify-between items-center">
        <div className="text-xs text-gray-500">
          <span>{new Date(uploadDate).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span>{downloads} downloads</span>
        </div>
        
        <Button 
          size="sm" 
          className="bg-umf-primary hover:bg-umf-secondary"
        >
          <Download className="h-4 w-4 mr-1" />
          Download
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DocumentCard;
