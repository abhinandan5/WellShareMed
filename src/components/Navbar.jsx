// src/components/Navbar.jsx
'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { FiUser, FiLogIn, FiLogOut, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwt_decode(token);
        setUser({
          role: decoded.role,
          name: decoded.name || "User",
          email: decoded.email,
          profilePic: decoded.profilePic || "/default-avatar.png"
        });
      } catch {
        setUser(null);
      }
    } else {
      setUser(null);
    }
    
    const handleScroll = () => {
      if (window.scrollY > 10) setScrolled(true);
      else setScrolled(false);
    };
    
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    router.push('/');
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Impact', href: '/stats' },
  ];

  if (user?.role === 'user') {
    navItems.push({ label: 'Dashboard', href: '/dashboard' });
  } else if (user?.role === 'admin') {
    navItems.push({ label: 'Admin', href: '/admin/dashboard' });
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-md py-2' 
        : 'bg-gradient-to-b from-green-50 to-teal-50 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
              WellShareMed.org
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-green-100 to-teal-100 text-green-700 font-semibold'
                    : 'text-gray-600 hover:text-teal-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3 relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 group"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow">
                    <img 
                      src={user.profilePic} 
                      alt={user.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/default-avatar.png";
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-teal-700">
                    {user.name}
                  </span>
                  <FiChevronDown className="text-gray-500 group-hover:text-teal-700" />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-50">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/dashboard/donor"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      My Donations
                    </Link>
                    <Link
                      href="/dashboard/needy"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      My Requests
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="flex items-center px-4 py-2 bg-white text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition-all text-sm font-medium"
                >
                  <FiLogIn className="mr-2" /> Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg hover:from-green-700 hover:to-teal-700 transition-all text-sm font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                      pathname === item.href
                        ? 'bg-gradient-to-r from-green-50 to-teal-50 text-green-700 font-semibold'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-4 pt-4 border-t border-gray-200">
                {user ? (
                  <div className="space-y-3">
                    <div className="flex items-center px-4 py-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img 
                          src={user.profilePic} 
                          alt={user.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/default-avatar.png";
                          }}
                        />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                    <Link
                      href="/dashboard"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/dashboard/donor"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
                    >
                      My Donations
                    </Link>
                    <Link
                      href="/dashboard/needy"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
                    >
                      My Requests
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-3 rounded-lg text-sm text-red-600 hover:bg-red-50"
                    >
                      <FiLogOut className="mr-2" /> Logout
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/auth/signin"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center px-4 py-3 bg-white text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition-all text-sm font-medium"
                    >
                      <FiLogIn className="mr-2" /> Login
                    </Link>
                    <Link
                      href="/auth/signup"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg hover:from-green-700 hover:to-teal-700 transition-all text-sm font-medium"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}