import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Database, 
  Zap, 
  Shield, 
  BarChart3, 
  Clock,
  CheckCircle,
  ArrowRight,
  Cpu,
  Network,
  Globe
} from "lucide-react";

export default function ElasticsearchPage() {
  const deploymentOptions = [
    {
      title: "Elastic Cloud on AWS",
      description: "Deploy on Amazon Web Services with full integration",
      features: ["VPC peering", "AWS PrivateLink", "IAM integration", "CloudWatch monitoring"],
      regions: "25+ regions available"
    },
    {
      title: "Elastic Cloud on Azure",
      description: "Native Azure integration with enterprise security",
      features: ["Private endpoints", "Azure AD integration", "Azure Monitor", "Resource groups"],
      regions: "20+ regions available"
    },
    {
      title: "Elastic Cloud on GCP",
      description: "Google Cloud Platform with advanced networking",
      features: ["Private Connect", "Cloud IAM", "Cloud Logging", "VPC-native networking"],
      regions: "15+ regions available"
    },
    {
      title: "RevaLogix Private Cloud",
      description: "Dedicated infrastructure with maximum control",
      features: ["Dedicated hardware", "Custom networking", "Enhanced security", "Priority support"],
      regions: "Global deployment"
    }
  ];

  const useCases = [
    {
      icon: Search,
      title: "Search Applications",
      description: "Build powerful search experiences with relevance tuning",
      examples: ["E-commerce product search", "Content management", "Site search", "Document retrieval"]
    },
    {
      icon: BarChart3,
      title: "Observability & Analytics",
      description: "Monitor infrastructure and analyze application performance",
      examples: ["Log analytics", "APM monitoring", "Infrastructure metrics", "Business intelligence"]
    },
    {
      icon: Shield,
      title: "Security Analytics",
      description: "Detect threats and analyze security events in real-time",
      examples: ["SIEM solutions", "Threat hunting", "Compliance monitoring", "Incident response"]
    },
    {
      icon: Database,
      title: "Data Platform",
      description: "Centralized data storage and analysis for modern applications",
      examples: ["Data lake analytics", "Real-time dashboards", "Time series analysis", "Geospatial data"]
    }
  ];

  const technicalFeatures = [
    {
      category: "Search & Analytics",
      features: [
        "Full-text search with BM25 scoring",
        "Vector search for machine learning",
        "Aggregations and analytics",
        "Geospatial queries and mapping",
        "Graph analytics and exploration"
      ]
    },
    {
      category: "Machine Learning",
      features: [
        "Anomaly detection for time series",
        "Data frame analytics",
        "Natural language processing",
        "Classification and regression",
        "Outlier detection"
      ]
    },
    {
      category: "Security",
      features: [
        "Role-based access control (RBAC)",
        "Field and document level security",
        "SAML and LDAP integration",
        "API key management",
        "Audit logging and compliance"
      ]
    },
    {
      category: "Operations",
      features: [
        "Index lifecycle management",
        "Cross-cluster replication",
        "Snapshot and restore",
        "Alerting and notifications",
        "Performance monitoring"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Enterprise 
              <span className="gradient-text"> Elasticsearch</span>
              <br />Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Deploy production-ready Elasticsearch clusters with advanced security, machine learning, 
              and observability features. Built for enterprise scale with 99.99% uptime SLA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-500 text-white hover:bg-primary-600">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-500 text-primary-600">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Deploy Anywhere
            </h2>
            <p className="text-lg text-gray-600">
              Choose your preferred cloud provider or deploy on our private infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentOptions.map((option, index) => (
              <Card key={index} className="border border-gray-200 hover:border-primary-300 transition-colors">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Badge variant="outline" className="text-xs">
                    <Globe className="h-3 w-3 mr-1" />
                    {option.regions}
                  </Badge>
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
              Built for Every Use Case
            </h2>
            <p className="text-lg text-gray-600">
              From search applications to security analytics, Elasticsearch powers diverse workloads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                      <p className="text-gray-600 mb-4">{useCase.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="text-sm text-gray-600 bg-gray-50 rounded px-3 py-2">
                        {example}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Technical Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              Enterprise-grade features for search, analytics, security, and operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalFeatures.map((category, index) => (
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
      </section>

      {/* Performance Specs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Performance at Scale
            </h2>
            <p className="text-lg text-gray-600">
              Industry-leading performance metrics for enterprise workloads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1M+</div>
              <div className="text-gray-600">Documents/second ingestion</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">&lt;50ms</div>
              <div className="text-gray-600">Average query latency</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100TB+</div>
              <div className="text-gray-600">Maximum cluster size</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99.99%</div>
              <div className="text-gray-600">Uptime SLA guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Deploy Elasticsearch?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Start with a free trial or speak with our solution architects about your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Start Free Trial
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