import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Rocket, Plane, Aperture, Box } from 'lucide-react';
import { DRONE_CATEGORIES, COMPANY_NAME } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-aviation-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-aviation-accent" />
            <Link to="/" className="text-2xl font-bold text-white tracking-wider">
              {COMPANY_NAME}
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest">
              主页
            </Link>
            
            {/* Products Dropdown Group */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('drones')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest outline-none">
                <span>无人机产品</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'drones' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mega Menu Dropdown */}
              <div 
                className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-aviation-800 border border-slate-700 rounded-sm shadow-2xl overflow-hidden transition-all duration-300 origin-top ${
                  activeDropdown === 'drones' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}
              >
                <div className="grid grid-cols-2 gap-2 p-4">
                  {DRONE_CATEGORIES.map((cat) => (
                    <Link 
                      key={cat.id} 
                      to={`/category/${cat.id}`}
                      className="block p-4 rounded-sm hover:bg-slate-700 transition-colors group/item"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="bg-aviation-900 p-2 rounded-sm text-aviation-accent group-hover/item:text-white transition-colors">
                            {cat.id === 'fpv' && <Rocket className="h-5 w-5" />}
                            {cat.id === 'multi-rotor' && <Aperture className="h-5 w-5" />}
                            {cat.id === 'fixed-wing' && <Plane className="h-5 w-5" />}
                            {cat.id === 'vtol' && <Plane className="h-5 w-5 rotate-45" />}
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{cat.title}</h4>
                          <p className="text-slate-400 text-xs mt-1">{cat.subtitle}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/frames" className="text-slate-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest">
              定制机架
            </Link>
            <Link to="/leasing" className="text-slate-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest">
              租赁服务
            </Link>
          </div>

          {/* Call to Action */}
          <div className="hidden md:block">
             <Link to="/contact" className="px-5 py-2 text-sm font-medium text-aviation-900 bg-white hover:bg-slate-200 transition-colors rounded-sm">
                联系我们
             </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-aviation-900 border-t border-slate-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 text-base font-medium text-white hover:bg-slate-800 rounded-md">主页</Link>
          
          <div className="px-3 py-2">
            <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">无人机系列</div>
            <div className="space-y-1 pl-2 border-l-2 border-slate-700">
              {DRONE_CATEGORIES.map(cat => (
                <Link key={cat.id} to={`/category/${cat.id}`} className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/frames" className="block px-3 py-2 text-base font-medium text-white hover:bg-slate-800 rounded-md">定制机架</Link>
          <Link to="/leasing" className="block px-3 py-2 text-base font-medium text-white hover:bg-slate-800 rounded-md">租赁服务</Link>
          <Link to="/contact" className="block px-3 py-2 text-base font-medium text-aviation-accent hover:bg-slate-800 rounded-md">联系我们</Link>
        </div>
      </div>
    </nav>
  );
};