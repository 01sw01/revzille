import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Database, Network, Shield, Zap, BarChart3 } from "lucide-react";

export default function TechnicalSpecs() {
  const architectureSpecs = [
    {
      icon: Database,
      category: "Storage Architecture",
      specs: [
        "Hot-Warm-Cold data tiers with automatic lifecycle management",
        "Searchable snapshots for cost-effective long-term retention",
        "Index lifecycle policies with automatic rollover",
        "Cross-cluster replication for disaster recovery"
      ]
    },
    {
      icon: Cpu,
      category: "Performance & Scaling",
      specs: [
        "Auto-scaling: 1 node to 100+ node clusters",
        "Sub-second query response times (<200ms p95)",
        "Ingest rates up to 1M documents/second",
        "Horizontal scaling with zero downtime"
      ]
    },
    {
      icon: Network,
      category: "Network & Connectivity",
      specs: [
        "AWS PrivateLink, Azure Private Endpoint, GCP Private Connect",
        "VPC peering and dedicated tenancy options",
        "IP filtering and traffic filters",
        "Load balancing with health checks"
      ]
    },
    {
      icon: Shield,
      category: "Security & Compliance",
      specs: [
        "TLS 1.3 encryption in transit and at rest",
        "SAML 2.0, LDAP, and OpenID Connect integration",
        "Role-based access control (RBAC) with field-level security",
        "SOC 2 Type II, ISO 27001, GDPR, HIPAA compliance"
      ]
    }
  ];

  const deploymentTemplates = [
    {
      name: "I/O Optimized",
      use_case: "Search & Analytics",
      specs: "High IOPS, SSD storage, optimized for query performance",
      memory_storage: "8:1 ratio"
    },
    {
      name: "Storage Optimized",
      use_case: "Log Analytics",
      specs: "Large disk capacity, cost-effective for retention",
      memory_storage: "4:1 ratio"
    },
    {
      name: "CPU Optimized",
      use_case: "Machine Learning",
      specs: "High-performance processors for ML workloads",
      memory_storage: "12:1 ratio"
    },
    {
      name: "Memory Optimized",
      use_case: "Real-time Analytics",
      specs: "Large RAM for in-memory operations and caching",
      memory_storage: "16:1 ratio"
    }
  ];

  return (
    <section id="technical-specs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Enterprise-grade 
            <span className="gradient-text"> technical architecture</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on proven infrastructure patterns with performance, security, and scalability 
            optimized for mission-critical workloads.
          </p>
        </div>

        {/* Architecture Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {architectureSpecs.map((category, index) => (
            <Card key={index} className="bg-white shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{spec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Deployment Templates */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Optimized Deployment Templates
          </h3>
          <p className="text-gray-600 text-center mb-8">
            Pre-configured hardware profiles optimized for specific use cases and workload patterns.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentTemplates.map((template, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-primary-300 transition-colors">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Badge variant="outline" className="mb-2">{template.name}</Badge>
                    <h4 className="font-semibold text-gray-900">{template.use_case}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{template.specs}</p>
                  <div className="bg-primary-50 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-primary-700">
                      Memory:Storage {template.memory_storage}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">99.99%</h4>
            <p className="text-gray-600">SLA-backed uptime with auto-failover</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">&lt;200ms</h4>
            <p className="text-gray-600">P95 query response time at scale</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">1M+</h4>
            <p className="text-gray-600">Documents per second ingest rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}