
import { Link } from "react-router-dom";
import { BookOpen, Mail, GitHub } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-umf-primary" />
              <span className="text-xl font-semibold text-umf-primary">UMF Docs</span>
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              A platform for medical students across Romania to share and access educational resources.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/documents" className="text-sm text-gray-600 hover:text-umf-primary">
                  All Documents
                </Link>
              </li>
              <li>
                <Link to="/upload" className="text-sm text-gray-600 hover:text-umf-primary">
                  Upload Document
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-gray-600 hover:text-umf-primary">
                  Categories
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-900 mb-3">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-sm text-gray-600 hover:text-umf-primary">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-sm text-gray-600 hover:text-umf-primary">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-gray-600 hover:text-umf-primary">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-900 mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-umf-primary">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-umf-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-umf-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} UMF Docs. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-umf-primary">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-umf-primary">
              <GitHub className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
