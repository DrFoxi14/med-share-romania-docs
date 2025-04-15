
import { Card, CardContent } from "@/components/ui/card";

const universities = [
  {
    name: "UMF Bucharest",
    logo: "🏛️",
    students: "12,000+",
    documents: "1,200+"
  },
  {
    name: "UMF Cluj-Napoca",
    logo: "🏛️",
    students: "9,000+",
    documents: "950+"
  },
  {
    name: "UMF Iași",
    logo: "🏛️",
    students: "8,500+",
    documents: "820+"
  },
  {
    name: "UMF Timișoara",
    logo: "🏛️",
    students: "7,800+",
    documents: "780+"
  },
  {
    name: "UMF Târgu Mureș",
    logo: "🏛️",
    students: "6,500+",
    documents: "650+"
  },
  {
    name: "UMF Craiova",
    logo: "🏛️",
    students: "5,700+",
    documents: "520+"
  }
];

const Universities = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-umf-primary mb-4">
            All UMF Universities Covered
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            UMF Docs connects students from all Romanian Universities of Medicine and Pharmacy,
            creating a nationwide network for sharing educational resources.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {universities.map((uni) => (
            <Card key={uni.name} className="card-hover border-t-4 border-t-umf-primary">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">{uni.logo}</div>
                  <h3 className="font-semibold text-lg mb-2">{uni.name}</h3>
                  <div className="flex justify-center space-x-6 mt-4 text-sm text-gray-600">
                    <div>
                      <p className="font-semibold text-umf-primary">{uni.students}</p>
                      <p>Students</p>
                    </div>
                    <div>
                      <p className="font-semibold text-umf-primary">{uni.documents}</p>
                      <p>Documents</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Universities;
