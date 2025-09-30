import { Link } from "wouter";
import { Building } from "lucide-react";

export default function Footer() {
  const productLinks = [
    { title: "Elasticsearch", href: "/elasticsearch" },
    { title: "Kibana", href: "/kibana" },
   // { title: "Machine Learning", href: "/machine-learning" },
    { title: "Security", href: "/security" }
  ];

  const solutionLinks = [
    { title: "Search Applications", href: "/solutions/search" },
    { title: "Observability", href: "/solutions/observability" },
    { title: "Security Analytics", href: "/solutions/security" },
    { title: "Enterprise Search", href: "/solutions/enterprise" }
  ];

  const companyLinks = [
    { title: "About Us", href: "/about" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
    { title: "Support", href: "/support" }
  ];

  const resourceLinks = [
    { title: "Documentation", href: "/docs" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "Migration Guide", href: "/migration" },
    { title: "Blog", href: "/blog" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Building className="h-8 w-8 text-primary-400 mr-3" />
              <div>
                <h3 className="text-xl font-bold text-white">RevaZille</h3>
                <p className="text-sm text-gray-400">by RevaLogix</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Fully managed Elasticsearch cloud service with enterprise-grade security, 
              performance, and support across multiple cloud providers.
            </p>
            <p className="text-gray-500 text-xs">
              © 2025 RevaLogix. All rights reserved.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4">Features</h4>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
              {solutionLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          {/*<div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>*/}

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 text-sm text-gray-400 mb-4 md:mb-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="hover:text-white transition-colors">
                Security
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              Made with ❤️ for enterprise search and analytics
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}