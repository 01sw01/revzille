import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Zap, 
  Target, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  ShoppingCart,
  FileText,
  Globe,
  Users,
  Star,
  Filter
} from "lucide-react";

export default function SearchSolutionsPage() {
  const searchFeatures = [
    {
      icon: Search,
      title: "Full-Text Search",
      description: "Advanced text search with relevance scoring and highlighting",
      features: [
        "BM25 relevance scoring",
        "Multi-field search",
        "Fuzzy matching and typo tolerance",
        "Search result highlighting",
        "Autocomplete and suggestions"
      ]
    },
    {
      icon: Filter,
      title: "Faceted Search",
      description: "Interactive filters and facets for refined search results",
      features: [
        "Dynamic facet generation",
        "Range and date filters",
        "Multi-select filtering",
        "Nested facet hierarchies",
        "Real-time result counts"
      ]
    },
    {
      icon: Target,
      title: "Personalization",
      description: "Tailored search experiences based on user behavior",
      features: [
        "User preference learning",
        "Behavioral scoring",
        "Click-through optimization",
        "A/B testing framework",
        "Real-time personalization"
      ]
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description: "Deep insights into search performance and user behavior",
      features: [
        "Search analytics dashboard",
        "Query performance metrics",
        "User engagement tracking",
        "Conversion rate analysis",
        "Search result optimization"
      ]
    }
  ];

  const useCases = [
    {
      icon: ShoppingCart,
      title: "E-commerce Product Search",
      description: "Build powerful product discovery experiences that drive sales",
      features: [
        "Product catalog search",
        "Visual search capabilities",
        "Inventory-aware results",
        "Price and availability filters",
        "Recommendation engine"
      ],
      metrics: [
        { label: "Conversion increase", value: "35%" },
        { label: "Search accuracy", value: "98%" },
        { label: "Response time", value: "<50ms" }
      ]
    },
    {
      icon: FileText,
      title: "Content Management",
      description: "Enable users to find content quickly across your organization",
      features: [
        "Document search and indexing",
        "Metadata extraction",
        "Content type filtering",
        "Version control integration",
        "Access control enforcement"
      ],
      metrics: [
        { label: "Content discovery", value: "60% faster" },
        { label: "User satisfaction", value: "4.8/5" },
        { label: "Search coverage", value: "99.5%" }
      ]
    },
    {
      icon: Globe,
      title: "Website Search",
      description: "Comprehensive site search that understands your content",
      features: [
        "Web crawler integration",
        "Dynamic content indexing",
        "Multi-language support",
        "Mobile optimization",
        "SEO-friendly results"
      ],
      metrics: [
        { label: "Bounce rate reduction", value: "25%" },
        { label: "Page views increase", value: "40%" },
        { label: "Time on site", value: "+3 minutes" }
      ]
    }
  ];

  const technicalCapabilities = [
    {
      category: "Search Engine",
      features: [
        "Elasticsearch-powered indexing",
        "Real-time search updates",
        "Distributed search architecture",
        "Auto-scaling capabilities",
        "Multi-language analysis"
      ]
    },
    {
      category: "APIs & SDKs",
      features: [
        "RESTful search APIs",
        "GraphQL support",
        "JavaScript SDK",
        "Python client library",
        "Mobile SDK support"
      ]
    },
    {
      category: "Integration",
      features: [
        "CMS integration plugins",
        "E-commerce platform connectors",
        "Database synchronization",
        "Webhook notifications",
        "Third-party API support"
      ]
    },
    {
      category: "Performance",
      features: [
        "Sub-50ms query response",
        "99.99% uptime SLA",
        "Auto-scaling infrastructure",
        "Global CDN distribution",
        "Real-time monitoring"
      ]
    }
  ];

  const industryExamples = [
    {
      industry: "Retail & E-commerce",
      company: "Fashion Retailer",
      challenge: "Low product discovery and conversion rates",
      solution: "Implemented AI-powered product search with visual similarity",
      results: ["45% increase in conversion", "60% reduction in bounce rate", "2.3x increase in average order value"]
    },
    {
      industry: "Media & Publishing",
      company: "News Organization",
      challenge: "Users couldn't find relevant articles across large content archive",
      solution: "Deployed semantic search with content categorization",
      results: ["70% faster content discovery", "85% user satisfaction", "40% increase in page views"]
    },
    {
      industry: "Healthcare",
      company: "Medical Research Institute",
      challenge: "Researchers struggled to find relevant studies and papers",
      solution: "Built specialized medical search with terminology recognition",
      results: ["80% faster research", "95% accuracy in results", "50% reduction in research time"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Search Applications</span>
              <br />That Convert
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Build powerful search experiences that help users find exactly what they're looking for. 
              From e-commerce product discovery to enterprise content search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-500 text-white hover:bg-primary-600">
                Start Building Search
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-500 text-primary-600">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Search Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Search Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to build world-class search experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {searchFeatures.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:border-primary-300 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((featureItem, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {featureItem}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Search Solutions by Use Case
            </h2>
            <p className="text-lg text-gray-600">
              Tailored search experiences for different industries and applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardHeader>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="h-5 w-5 text-primary-600" />
                    </div>
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {useCase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Performance Metrics</h4>
                    <div className="space-y-2">
                      {useCase.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{metric.label}</span>
                          <Badge variant="outline" className="text-green-600 border-green-300">
                            {metric.value}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
     {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Architecture
            </h2>
            <p className="text-lg text-gray-600">
              Enterprise-grade search infrastructure built for scale and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalCapabilities.map((category, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Industry Examples */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real results from organizations that transformed their search experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industryExamples.map((example, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-3">{example.industry}</Badge>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{example.company}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-1">Challenge</h4>
                    <p className="text-sm text-gray-600">{example.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-1">Solution</h4>
                    <p className="text-sm text-gray-600">{example.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {example.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm">
                          <Star className="h-4 w-4 text-yellow-500 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search Demo */}
      {/*<section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Interactive Search Experience
            </h2>
            <p className="text-lg text-gray-600">
              See how our search technology delivers instant, relevant results
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
            <div className="bg-white rounded-lg p-6">
              <div className="mb-6">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search for products, articles, or documents..."
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <Search className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">&lt; 50ms</div>
                  <div className="text-sm text-gray-600">Average Response</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Search Accuracy</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">10M+</div>
                  <div className="text-sm text-gray-600">Queries/Month</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Globe className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-1">
                  <h4 className="font-medium text-gray-900 mb-3">Search Filters</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm">Category</span>
                      <span className="text-xs text-gray-500">12 options</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm">Price Range</span>
                      <span className="text-xs text-gray-500">$0 - $500+</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm">Availability</span>
                      <span className="text-xs text-gray-500">In Stock</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="font-medium text-gray-900 mb-3">Search Results</h4>
                  <div className="space-y-3">
                    <div className="p-3 border border-gray-200 rounded-lg">
                      <div className="font-medium text-gray-900">Sample Product 1</div>
                      <div className="text-sm text-gray-600">High-quality search result with relevance highlighting</div>
                      <div className="flex items-center mt-2">
                        <Badge variant="outline" className="mr-2">In Stock</Badge>
                        <span className="text-sm text-gray-500">98% relevance</span>
                      </div>
                    </div>
                    <div className="p-3 border border-gray-200 rounded-lg">
                      <div className="font-medium text-gray-900">Sample Product 2</div>
                      <div className="text-sm text-gray-600">Another relevant result with semantic matching</div>
                      <div className="flex items-center mt-2">
                        <Badge variant="outline" className="mr-2">Limited Stock</Badge>
                        <span className="text-sm text-gray-500">95% relevance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Search?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Start building powerful search applications that your users will love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Let's Work Together
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-primary-700">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}