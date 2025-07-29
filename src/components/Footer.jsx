import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const socialIcons = {
  facebook: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  twitter: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
  instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  linkedin: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"
};

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <footer className={`bg-[#222831] text-[#748DAE] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center group"
            >
              {/* Logo */}
              <div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="z-50"
              >
                <Link to="/">
                  <img
                    src="/src/assets/logo.jpg"
                    alt="Logo"
                    className="h-12 w-auto"
                  />
                </Link>
              </div>
            </Link>
            <p className="text-[#748DAE] text-sm leading-relaxed">
              Providing exceptional healthcare services <br /> with care and compassion since 2005.
            </p>
            <div className="flex space-x-4">
              {Object.entries(socialIcons).map(([name, path]) => (
                <a
                  key={name}
                  href="#"
                  className="text-[#4E6688] hover:text-[#748DAE] transition-all duration-300 transform hover:scale-110 relative group"
                  aria-label={name}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#7b8ac2] group-hover:w-5 group-hover:-translate-x-1/2 transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#ffffff] border-b border-[#2A4759] pb-2 w-fit">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/services", label: "Services" },
                { path: "/refill", label: "Prescription Refill" },
                { path: "/appointment", label: "Book Appointment" },
              ].map((link) => (
                <li key={link.path} className="overflow-hidden">
                  <Link
                    to={link.path}
                    className="text-[#667694] hover:text-[#ffffff] transition-all duration-300 flex items-center group"
                  >
                    <span className="relative">
                      <span className="block w-0 h-px bg-[#7b8ac2] absolute bottom-0 left-0 group-hover:w-9 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
                      <span className="inline-block group-hover:translate-x-3 transition-transform duration-300">
                        {link.label}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#ffffff] border-b border-[#2A4759] pb-2 w-fit">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start group">
                <svg className="h-5 w-5 text-[#ffffff] mt-0.5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-[#7b8ac2] group-hover:text-[#ffffff] transition-colors duration-300">2717 Murfreesboro Pike B, Antioch, TN 37013, United States</p>
              </div>
              <div className="flex items-center group">
                <svg className="h-5 w-5 text-[#ffffff] mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-[#7b8ac2] group-hover:text-[#ffffff] transition-colors duration-300">+1 (615) 600 5116</p>
              </div>
              <div className="flex items-center group">
                <svg className="h-5 w-5 text-[#ffffff] mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:mervatmellak@yahoo.com" className="text-[#7b8ac2] group-hover:text-[#ffffff] transition-colors duration-300">
                  mervatmellak@yahoo.com
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-[#ffffff] mb-2">Subscribe to our newsletter</h4>
              <div className="flex group">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-[#2A4759] text-[#748DAE] text-sm rounded-l focus:outline-none focus:ring-1 focus:ring-[#7b8ac2] w-full transition-all duration-300 group-hover:bg-[#213448]"
                />
                <button className="bg-gradient-to-r from-[#113F67] to-[#2A4759] hover:from-[#213448] hover:to-[#113F67] text-white px-4 py-2 rounded-r text-sm font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#2A4759] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#4E6688] text-sm">
            © {new Date().getFullYear()} Good Shepherd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#4E6688] hover:text-[#748DAE] text-sm transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7b8ac2] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}