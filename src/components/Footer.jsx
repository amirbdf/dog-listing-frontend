// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center max-w-screen-lg">
        <div className="text-white font-fredoka text-sm">
          &copy; {new Date().getFullYear()} Kalbi. All rights reserved.
        </div>
        
        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link href="/privacy-policy"
             className="text-white hover:text-gray-200">Privacy Policy
          </Link>
          <Link href="/terms-of-service"
             className="text-white hover:text-gray-200">Terms of Service
          </Link>
          <Link href="/contact"
             className="text-white hover:text-gray-200">Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
