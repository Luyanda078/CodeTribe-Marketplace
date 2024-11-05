// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Info Section */}
          <div className="mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-2">mLab Southern Africa</h5>
            <p className="mb-4">CodeTribe Academy. <br/>mLab is a tech-centred business<br/> that prepares innovators and entrepreneurs for <br/>opportunities within the digital economy</p>
            <p>Unit 1, 3201 Fj Sithole Road, Imbali, Pietermaritzburg, 3201</p>
            <p>Email: luyandashamase5@mail.com</p>
            <p>Phone: (078) 868-0553</p>
          </div>
        
          
          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
            <ul>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Social Media Section */}
          <div className="mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Facebook</a><br/>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Twitter</a><br/>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Instagram</a><br/>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} CodeTribe Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
