
import Layout from "@/components/layout/Layout";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-umf-primary text-center mb-8">Login to UMF Docs</h1>
        <LoginForm />
      </div>
    </Layout>
  );
};

export default LoginPage;
