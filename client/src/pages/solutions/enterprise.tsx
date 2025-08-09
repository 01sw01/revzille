import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Search, 
  Users, 
  FileText, 
  Shield,
  CheckCircle,
  ArrowRight,
  Globe,
  Database,
  Zap,
  Clock,
  BarChart3,
  Lock
} from "lucide-react";

export default function EnterpriseSearchSolutionsPage() {
  const enterpriseFeatures = [
    {
      icon: Search,
      title: "Unified Search Experience",
      description: "Search across all enterprise data sources from a single interface",
      features: [
        "Federated search across systems",
        "Single sign-on integration",
        "Personalized search results",
        "Advanced query capabilities",
        "Mobile-optimized interface"
      ]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Comprehensive security controls for sensitive enterprise data",
      features: [
        "Role-based access control",
        "Data classification and tagging",
        "Audit trails and compliance",
        "Encryption at rest and in transit",
        "GDPR and privacy compliance"
      ]
    },
    {
      icon: Database,
      title: "Data Source Connectors",
      description: "Pre-built connectors for popular enterprise systems",
      features: [
        "Microsoft SharePoint integration",
        "Salesforce connector",
        "Confluence and Jira integration",
        "File system crawlers",
        "Database connectors"
      ]
    },
    {
      icon: Users,
      title: "Collaboration & Knowledge",
      description: "Enable knowledge sharing and collaboration across teams",
      features: [
        "Expert identification",
        "Knowledge base integration",
        "Social search features",
        "Content recommendations",
        "Team collaboration tools"
      ]
    }
  ];

  const dataSources = [
    {
      category: "Document Management",
      systems: ["SharePoint", "Box", "Dropbox", "Google Drive", "OneDrive", "Documentum"],
      icon: FileText
    },
    {
      category: "Customer Relationship",
      systems: ["Salesforce", "HubSpot", "Microsoft Dynamics", "ServiceNow", "Zendesk"],
      icon: Users
    },
    {
      category: "Collaboration Platforms",
      systems: ["Slack", "Microsoft Teams", "Confluence", "Jira", "Notion", "Asana"],
      icon: Building
    },
    {
      category: "Business Intelligence",
      systems: ["Tableau", "Power BI", "Looker", "Qlik Sense", "SAP Analytics", "Oracle BI"],
      icon: BarChart3
    }
  ];

  const useCases = [
    {
      title: "Knowledge Management",
      description: "Create a centralized knowledge hub for your organization",
      benefits: [
        "Reduce knowledge silos",
        "Accelerate employee onboarding",
        "Improve decision making",
        "Preserve institutional knowledge"
      ],
      metrics: [
        { label: "Knowledge access time", value: "80% faster" },
        { label: "Employee productivity", value: "35% increase" },
        { label: "Support ticket reduction", value: "45%" }
      ]
    },
    {
      title: "Customer Support",
      description: "Enable support teams to find answers quickly",
      benefits: [
        "Faster issue resolution",
        "Consistent support quality",
        "Self-service capabilities",
        "Knowledge base automation"
      ],
      metrics: [
        { label: "Resolution time", value: "60% faster" },
        { label: "Customer satisfaction", value: "4.8/5" },
        { label: "First-call resolution", value: "85%" }
      ]
    },
    {
      title: "Compliance & Legal",
      description: "Ensure regulatory compliance and legal discovery",
      benefits: [
        "Automated compliance monitoring",
        "Legal discovery capabilities",
        "Audit trail maintenance",
        "Risk assessment support"
      ],
      metrics: [
        { label: "Compliance efficiency", value: "70% improvement" },
        { label: "Legal discovery time", value: "50% reduction" },
        { label: "Risk identification", value: "95% accuracy" }
      ]
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "Assess your data landscape and define search requirements",
      duration: "2-4 weeks",
      deliverables: ["Data inventory", "Search strategy", "Implementation roadmap"]
    },
    {
      step: 2,
      title: "Data Integration",
      description: "Connect and index your enterprise data sources",
      duration: "4-8 weeks",
      deliverables: ["Data connectors", "Search indices", "Security configuration"]
    },
    {
      step: 3,
      title: "Customization & Testing",
      description: "Configure search experience and conduct user testing",
      duration: "2-4 weeks",
      deliverables: ["Search interface", "User training", "Performance testing"]
    },
    {
      step: 4,
      title: "Deployment & Support",
      description: "Launch enterprise search and provide ongoing support",
      duration: "1-2 weeks",
      deliverables: ["Production deployment", "User training", "Support documentation"]
    }
  ];

  const enterpriseMetrics = [
    {
      icon: Clock,
      title: "Implementation Time",
      value: "8-12 weeks",
      description: "From planning to production deployment"
    },
    {
      icon: Users,
      title: "User Adoption",
      value: "90%+",
      description: "Active user adoption within 6 months"
    },
    {
      icon: Zap,
      title: "Search Performance",
      value: "<50ms",
      description: "Average search response time"
    },
    {
      icon: Globe,
      title: "Data Coverage",
      value: "99%",
      description: "Enterprise data source coverage"
    }
  ];

  const successStories = [
    {
      company: "Global Technology Firm",
      industry: "Technology",
      challenge: "Engineers couldn't find technical documentation across 50+ repositories",
      solution: "Implemented unified search across code repositories, wikis, and documentation",
      results: [
        "70% reduction in time to find information",
        "90% developer adoption rate",
        "25% increase in code reuse",
        "$2.1M annual productivity savings"
      ]
    },
    {
      company: "Healthcare Organization",
      industry: "Healthcare",
      challenge: "Medical staff struggled to access patient information and research",
      solution: "Deployed secure search across EMR systems, research databases, and protocols",
      results: [
        "HIPAA-compliant search deployment",
        "60% faster clinical decision making",
        "99.9% search availability",
        "Complete audit trail compliance"
      ]
    },
    {
      company: "Financial Services Company",
      industry: "Financial Services",
      challenge: "Regulatory compliance required fast access to historical records",
      solution: "Built enterprise search with advanced security and compliance features",
      results: [
        "100% regulatory compliance achieved",
        "80% faster legal discovery",
        "Zero data security incidents",
        "$5M reduction in compliance costs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Enterprise Search</span>
              <br />for Modern Organizations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Unlock the knowledge within your organization with enterprise-grade search 
              that connects all your data sources, teams, and workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-500 text-white hover:bg-primary-600">
                Start Enterprise Search
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-500 text-primary-600">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Search Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              Built for the security, scale, and complexity of modern enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:border-primary-300 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="h-5 w-5 text-purple-600" />
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

      {/* Data Sources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Connect All Your Data Sources
            </h2>
            <p className="text-lg text-gray-600">
              Pre-built connectors for popular enterprise systems and platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataSources.map((source, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <source.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{source.category}</h3>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {source.systems.map((system, systemIndex) => (
                      <Badge key={systemIndex} variant="outline" className="text-xs mb-1">
                        {system}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              Transform how your organization finds and uses information
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Benefits</h4>
                    <ul className="space-y-1">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Impact Metrics</h4>
                    <div className="space-y-2">
                      {useCase.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{metric.label}</span>
                          <Badge variant="outline" className="text-purple-600 border-purple-300">
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

      {/* Implementation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Implementation Process
            </h2>
            <p className="text-lg text-gray-600">
              Structured approach to enterprise search deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center mb-4 text-white font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                  <div className="text-sm">
                    <Badge variant="outline" className="mb-3">{step.duration}</Badge>
                    <ul className="space-y-1 text-xs text-gray-500">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex}>• {deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise-Scale Performance
            </h2>
            <p className="text-lg text-gray-600">
              Proven results across large-scale enterprise deployments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {enterpriseMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-lg font-medium text-gray-900 mb-1">{metric.title}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real transformations from global organizations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{story.company}</h3>
                    <Badge variant="outline">{story.industry}</Badge>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-1">Challenge</h4>
                    <p className="text-sm text-gray-600">{story.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-1">Solution</h4>
                    <p className="text-sm text-gray-600">{story.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {story.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise Search Experience
            </h2>
            <p className="text-lg text-gray-600">
              Discover how enterprise search transforms information access
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
            <div className="bg-white rounded-lg p-6">
              <div className="mb-6">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search across all enterprise systems..."
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <Search className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                <div className="flex items-center mt-3 space-x-4 text-sm text-gray-600">
                  <span>Recent searches:</span>
                  <Badge variant="outline" className="text-xs cursor-pointer">company policy</Badge>
                  <Badge variant="outline" className="text-xs cursor-pointer">project roadmap</Badge>
                  <Badge variant="outline" className="text-xs cursor-pointer">client contract</Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Building className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Data Sources</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <FileText className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50M+</div>
                  <div className="text-sm text-gray-600">Documents Indexed</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Lock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Secure Access</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-1">
                  <h4 className="font-medium text-gray-900 mb-3">Data Sources</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
                      <span>SharePoint</span>
                      <Badge variant="outline" className="text-xs">2.3M docs</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
                      <span>Salesforce</span>
                      <Badge variant="outline" className="text-xs">156K records</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
                      <span>Confluence</span>
                      <Badge variant="outline" className="text-xs">89K pages</Badge>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="font-medium text-gray-900 mb-3">Search Results</h4>
                  <div className="space-y-3">
                    <div className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Q4 Financial Report</div>
                          <div className="text-sm text-gray-600">SharePoint • Finance Team • Updated 2 days ago</div>
                        </div>
                        <Badge variant="outline" className="text-xs">PDF</Badge>
                      </div>
                    </div>
                    <div className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Client Onboarding Process</div>
                          <div className="text-sm text-gray-600">Confluence • Operations • Updated 1 week ago</div>
                        </div>
                        <Badge variant="outline" className="text-xs">Wiki</Badge>
                      </div>
                    </div>
                    <div className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Enterprise Account - ABC Corp</div>
                          <div className="text-sm text-gray-600">Salesforce • Sales Team • Updated 3 hours ago</div>
                        </div>
                        <Badge variant="outline" className="text-xs">CRM</Badge>
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
            Transform Your Enterprise Search
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Connect all your enterprise data and empower your teams with intelligent search.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Start Enterprise Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-primary-700">
              Contact Enterprise Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}