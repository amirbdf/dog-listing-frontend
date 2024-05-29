'use client';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold font-fredoka">
          Kalbi
        </Link>
        
        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link href="/dog-listings" className="text-white hover:text-gray-200">
            Dog Listings
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
          <Link href="/post-dog" className="text-white hover:text-gray-200">
            Post A Dog
          </Link>
          {/* Add more navigation links as needed */}
        </nav>
        
        {/* Login/Signup Button (Optional) */}
        
        </div>
    </header>
  );
};

export default Header;
