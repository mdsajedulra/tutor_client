const Footer = () => {
    return (
      <footer className="bg-gray-100 mt-20 py-10 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">TutorLink 🎓</h2>
            <p className="text-sm text-gray-500 mt-2">
              A trusted platform to connect students with skilled tutors.
            </p>
          </div>
          <div>
            <h3 className="text-md font-semibold text-gray-600 mb-2">Quick Links</h3>
            <ul className="text-sm text-gray-500 space-y-1">
              <li><a href="/about">About Us</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold text-gray-600 mb-2">Connect</h3>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>Email: support@educonnect.com</li>
              <li>Phone: +880-1234-567890</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 mt-10">
          &copy; {new Date().getFullYear()} EduConnect. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  