const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-50 to-teal-50 mt-2 py-8 border-t border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="text-center mb-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-3">
            WellShareMed
          </div>
          <p className="text-gray-600 text-sm max-w-md mx-auto">
            Saving lives, one medicine at a time 💊 • Making healthcare accessible through technology and community
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center space-x-6 mb-6">
          <a href="/" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Home</a>
          <a href="/finder" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Find Medicines</a>
          <a href="/donate" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Donate</a>
          <a href="/about" className="text-sm text-gray-600 hover:text-green-600 transition-colors">About</a>
          <a href="/contact" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Contact</a>
        </div>

        {/* Social media icons */}
        <div className="flex justify-center space-x-4 mb-6">
          {[
            { name: 'Twitter', icon: 'T' },
            { name: 'Facebook', icon: 'F' },
            { name: 'LinkedIn', icon: 'L' },
            { name: 'Instagram', icon: 'I' }
          ].map((social) => (
            <a 
              key={social.name} 
              href="#" 
              className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white flex items-center justify-center text-sm font-medium hover:from-green-600 hover:to-teal-600 transition-all transform hover:scale-110"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-green-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            © 2025 WellShareMed All rights reserved.
          </div>
          <div className="space-x-6">
            <a href="/privacy" className="hover:text-green-600 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-green-600 transition-colors">Terms of Service</a>
            <a href="/security" className="hover:text-green-600 transition-colors">Security</a>
          </div>
        </div>

        {/* Medical themed decoration */}
        <div className="flex justify-center mt-6 opacity-30">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;