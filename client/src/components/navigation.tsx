import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const productMenuItems = [
    { title: "Elasticsearch", description: "Search and analytics engine", href: "/elasticsearch" },
    { title: "Kibana", description: "Data visualization and exploration", href: "/kibana" },
    { title: "Machine Learning", description: "AI-powered analytics", href: "/machine-learning" },
    { title: "Security", description: "SIEM and threat detection", href: "/security" }
  ];

  const solutionsMenuItems = [
    { title: "Search Applications", description: "Build powerful search experiences", href: "/solutions/search" },
    { title: "Observability", description: "Monitor and troubleshoot", href: "/solutions/observability" },
    { title: "Security Analytics", description: "Detect and respond to threats", href: "/solutions/security" },
    { title: "Enterprise Search", description: "Find information across your organization", href: "/solutions/enterprise" }
  ];

  const resourcesMenuItems = [
    { title: "Documentation", description: "Guides and API references", href: "/docs" },
    { title: "Case Studies", description: "Customer success stories", href: "/case-studies" },
    { title: "Migration Guide", description: "Move from other platforms", href: "/migration" },
    { title: "Support", description: "Get help when you need it", href: "/support" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">RevaZille</h1>
              <span className="text-xs text-gray-500">by RevaLogix</span>
            </div>
          </div>
          
          <div className="hidden md:block" ref={dropdownRef}>
            <div className="flex items-center space-x-8">
              <Link href="/" className={`text-gray-700 hover:text-primary-600 transition-colors font-medium ${location === '/' ? 'text-primary-600' : ''}`}>
                Home
              </Link>
              
              {/* Products Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('products')}
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors font-medium"
                >
                  Products
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openDropdown === 'products' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'products' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4">
                      {productMenuItems.map((item, index) => (
                        <Link 
                          key={index} 
                          href={item.href}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <div className="font-medium text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('solutions')}
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors font-medium"
                >
                  Solutions
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4">
                      {solutionsMenuItems.map((item, index) => (
                        <Link 
                          key={index} 
                          href={item.href}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <div className="font-medium text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/pricing" className={`text-gray-700 hover:text-primary-600 transition-colors font-medium ${location === '/pricing' ? 'text-primary-600' : ''}`}>
                Pricing
              </Link>

              {/* Resources Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('resources')}
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors font-medium"
                >
                  Resources
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'resources' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4">
                      {resourcesMenuItems.map((item, index) => (
                        <Link 
                          key={index} 
                          href={item.href}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <div className="font-medium text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link href="/trial-signup">
                <Button className="bg-primary-500 text-white hover:bg-primary-600">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-primary-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            
            <div className="border-t border-gray-100 pt-2">
              <div className="text-sm font-medium text-gray-500 mb-2">Products</div>
              {productMenuItems.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  className="block pl-4 py-2 text-gray-700 hover:text-primary-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-2">
              <div className="text-sm font-medium text-gray-500 mb-2">Solutions</div>
              {solutionsMenuItems.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  className="block pl-4 py-2 text-gray-700 hover:text-primary-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-2">
              <Link href="/pricing" className="block text-gray-700 hover:text-primary-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
            </div>

            <div className="border-t border-gray-100 pt-2">
              <div className="text-sm font-medium text-gray-500 mb-2">Resources</div>
              {resourcesMenuItems.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  className="block pl-4 py-2 text-gray-700 hover:text-primary-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/trial-signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-primary-500 text-white hover:bg-primary-600">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
