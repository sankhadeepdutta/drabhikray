import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { Icon: Facebook, href: 'https://facebook.com', label: 'Facebook' }
  ];

  return (
    <footer className="w-full border-t border-gray-200 bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 bg-gray-800 rounded"></div>
            <span className="text-gray-600 text-sm">
              © 2022 Company, Inc
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-6">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;