import { Card, CardContent } from "@/components/ui/card";
import { Search, Shield, BarChart3, Settings, History, Headphones, Cloud, CheckCircle, Eye, Sliders } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "Production-Ready Elasticsearch",
      description: "Deploy clusters with hot-warm-cold architecture, auto-scaling from 1GB to 10TB+, and sub-second query performance optimized for your workload."
    },
    {
      icon: Shield,
      title: "Zero-Trust Security",
      description: "RBAC, field-level security, SAML/LDAP integration, network isolation, and compliance certifications (SOC2, ISO27001, GDPR)."
    },
    {
      icon: BarChart3,
      title: "Advanced Machine Learning",
      description: "Anomaly detection, forecasting, and classification models with built-in Kibana ML jobs for real-time insights and alerting."
    },
    {
      icon: Settings,
      title: "Infrastructure as Code",
      description: "Deploy via Terraform, ARM templates, or REST APIs with customizable index templates, ingest pipelines, and retention policies."
    },
    {
      icon: History,
      title: "Enterprise Operations",
      description: "Automated snapshots to S3/Azure/GCS, cross-cluster replication, rolling upgrades, and performance monitoring with alerting."
    },
    {
      icon: Headphones,
      title: "Expert Professional Services",
      description: "Migration assistance, performance tuning, custom integrations, and 24/7 support from certified Elasticsearch engineers."
    }
  ];

  const cloudProviders = [
    {
      icon: Cloud,
      name: "RevaLogix Private Cloud",
      description: "Full control, low latency"
    },
    {
      icon: Cloud,
      name: "AWS",
      description: "Trusted by enterprise clients"
    },
    {
      icon: Cloud,
      name: "Azure",
      description: "Ideal for Microsoft ecosystems"
    },
    {
      icon: Cloud,
      name: "GCP",
      description: "Analytics-heavy workloads"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need for 
            <span className="gradient-text"> enterprise search</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From quick deployment to advanced configuration, RevaZille provides all the tools 
            your team needs to build powerful search and analytics solutions.
          </p>
        </div>
        
        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Multi-Cloud Section */}
        <div className="gradient-bg rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Multi-Cloud, Multi-Flexibility</h3>
              <p className="text-primary-100 mb-6 text-lg">
                Deploy across our private cloud or choose from AWS, Azure, and Google Cloud. 
                Optimize for cost, performance, and compliance — all from one platform.
              </p>
              <ul className="space-y-3">
                {cloudProviders.map((provider, index) => (
                  <li key={index} className="flex items-center">
                    <provider.icon className="h-5 w-5 text-primary-200 mr-3" />
                    <span><strong>{provider.name}:</strong> {provider.description}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-semibold mb-4">Unified Management Portal</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white/20 rounded-lg p-3">
                  <span className="text-sm">Real-time Metrics</span>
                  <BarChart3 className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between bg-white/20 rounded-lg p-3">
                  <span className="text-sm">Self-service Controls</span>
                  <Sliders className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between bg-white/20 rounded-lg p-3">
                  <span className="text-sm">Cross-cloud Visibility</span>
                  <Eye className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
