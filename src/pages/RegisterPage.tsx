
import Layout from "@/components/layout/Layout";
import RegisterForm from "@/components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-umf-primary text-center mb-8">Join UMF Docs</h1>
        <RegisterForm />
      </div>
    </Layout>
  );
};

export default RegisterPage;
