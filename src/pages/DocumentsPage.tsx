
import Layout from "@/components/layout/Layout";
import DocumentGrid from "@/components/documents/DocumentGrid";

const DocumentsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-umf-primary mb-8">Browse Documents</h1>
        <DocumentGrid />
      </div>
    </Layout>
  );
};

export default DocumentsPage;
