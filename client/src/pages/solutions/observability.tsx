import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Eye, 
  AlertTriangle, 
  BarChart3, 
  Zap,
  CheckCircle,
  ArrowRight,
  Server,
  Database,
  Network,
  Clock,
  TrendingUp,
  Shield
} from "lucide-react";

export default function ObservabilitySolutionsPage() {
  const observabilityPillars = [
    {
      icon: BarChart3,
      title: "Metrics & Monitoring",
      description: "Real-time metrics collection and monitoring across your entire infrastructure",
      features: [
        "Custom metrics dashboards",
        "Real-time alerting",
        "Historical trend analysis",
        "Multi-dimensional metrics",
        "Automatic anomaly detection"
      ]
    },
    {
      icon: Activity,
      title: "Distributed Tracing",
      description: "End-to-end visibility into requests across microservices and systems",
      features: [
        "Service dependency mapping",
        "Request flow visualization",
        "Performance bottleneck identification",
        "Error rate tracking",
        "Latency analysis"
      ]
    },
    {
      icon: Eye,
      title: "Log Analytics",
      description: "Centralized log aggregation and analysis for troubleshooting and insights",
      features: [
        "Structured and unstructured logs",
        "Real-time log streaming",
        "Pattern recognition",
        "Error correlation",
        "Custom log parsing"
      ]
    },
    {
      icon: Shield,
      title: "Infrastructure Monitoring",
      description: "Comprehensive monitoring of servers, containers, and cloud resources",
      features: [
        "Resource utilization tracking",
        "Container orchestration monitoring",
        "Cloud service integration",
        "Capacity planning insights",
        "Performance optimization"
      ]
    }
  ];

  const useCases = [
    {
      title: "Application Performance Monitoring",
      description: "Monitor application health and user experience in real-time",
      benefits: [
        "Faster incident resolution",
        "Improved user experience",
        "Proactive issue detection",
        "Performance optimization"
      ],
      metrics: [
        { label: "MTTR reduction", value: "75%" },
        { label: "Uptime improvement", value: "99.99%" },
        { label: "Alert accuracy", value: "95%" }
      ]
    },
    {
      title: "DevOps & SRE",
      description: "Enable teams to maintain reliable, scalable systems",
      benefits: [
        "Automated incident response",
        "Service level monitoring",
        "Deployment tracking",
        "Resource optimization"
      ],
      metrics: [
        { label: "Deployment velocity", value: "3x faster" },
        { label: "System reliability", value: "99.9%" },
        { label: "Cost optimization", value: "30%" }
      ]
    },
    {
      title: "Cloud Migration",
      description: "Gain visibility during cloud transformation and migration",
      benefits: [
        "Migration progress tracking",
        "Performance comparison",
        "Cost monitoring",
        "Risk mitigation"
      ],
      metrics: [
        { label: "Migration success rate", value: "98%" },
        { label: "Performance baseline", value: "Maintained" },
        { label: "Cost visibility", value: "100%" }
      ]
    }
  ];

  const integrations = [
    {
      category: "Infrastructure",
      tools: ["AWS CloudWatch", "Azure Monitor", "Google Cloud Monitoring", "Kubernetes", "Docker", "Prometheus"]
    },
    {
      category: "APM & Tracing",
      tools: ["Jaeger", "Zipkin", "OpenTelemetry", "New Relic", "Datadog", "AppDynamics"]
    },
    {
      category: "Log Sources",
      tools: ["Fluentd", "Logstash", "Filebeat", "Syslog", "Docker Logs", "CloudTrail"]
    },
    {
      category: "Alerting",
      tools: ["PagerDuty", "Slack", "Microsoft Teams", "JIRA", "ServiceNow", "Webhook"]
    }
  ];

  const architectureComponents = [
    {
      icon: Server,
      title: "Data Ingestion",
      description: "High-throughput data collection from multiple sources",
      capabilities: [
        "Real-time streaming ingestion",
        "Batch data processing",
        "Auto-scaling data pipelines",
        "Data transformation and enrichment"
      ]
    },
    {
      icon: Database,
      title: "Storage & Indexing",
      description: "Efficient storage and fast retrieval of observability data",
      capabilities: [
        "Time-series optimized storage",
        "Intelligent data retention",
        "Index lifecycle management",
        "Cross-cluster replication"
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics Engine",
      description: "Powerful analytics and correlation across all data types",
      capabilities: [
        "Real-time aggregations",
        "Machine learning insights",
        "Cross-data correlation",
        "Predictive analytics"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Alerting & Response",
      description: "Intelligent alerting and automated response workflows",
      capabilities: [
        "Smart alert routing",
        "Escalation policies",
        "Alert suppression",
        "Automated remediation"
      ]
    }
  ];

  const performanceMetrics = [
    {
      icon: Zap,
      title: "Data Ingestion",
      value: "1M+",
      description: "Events per second processing capacity"
    },
    {
      icon: Clock,
      title: "Query Response",
      value: "<100ms",
      description: "Average dashboard load time"
    },
    {
      icon: TrendingUp,
      title: "Data Retention",
      value: "2+ years",
      description: "Long-term historical analysis"
    },
    {
      icon: Network,
      title: "Availability",
      value: "99.99%",
      description: "Platform uptime guarantee"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Complete
              <span className="gradient-text"> Observability</span>
              <br />Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Gain deep insights into your applications and infrastructure with unified 
              monitoring, logging, and tracing capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-500 text-white hover:bg-primary-600">
                Start Monitoring
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-500 text-primary-600">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars of Observability */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Observability Stack
            </h2>
            <p className="text-lg text-gray-600">
              Metrics, traces, logs, and infrastructure monitoring in one unified platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {observabilityPillars.map((pillar, index) => (
              <Card key={index} className="border border-gray-200 hover:border-primary-300 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <pillar.icon className="h-5 w-5 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{pillar.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
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
              Observability Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              From application monitoring to infrastructure optimization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Benefits</h4>
                    <ul className="space-y-1">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Results</h4>
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

      {/* Architecture Components */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Platform Architecture
            </h2>
            <p className="text-lg text-gray-600">
              Scalable, reliable infrastructure designed for enterprise observability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architectureComponents.map((component, index) => (
              <Card key={index} className="border border-gray-200 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <component.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{component.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{component.description}</p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    {component.capabilities.map((capability, capIndex) => (
                      <li key={capIndex}>{capability}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Performance at Scale
            </h2>
            <p className="text-lg text-gray-600">
              Built to handle enterprise-scale observability workloads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-lg font-medium text-gray-900 mb-1">{metric.title}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Integrations
            </h2>
            <p className="text-lg text-gray-600">
              Connect with your existing tools and infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((category, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Observability Dashboard Preview */}
     {/*} <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unified Observability Dashboard
            </h2>
            <p className="text-lg text-gray-600">
              Get a complete view of your system health and performance
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">System Overview</h3>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-green-600">Healthy</Badge>
                  <Button size="sm" variant="outline">
                    <Activity className="h-4 w-4 mr-2" />
                    Live View
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">99.99%</div>
                  <div className="text-green-100 text-sm">System Uptime</div>
                  <div className="text-xs text-green-200">Last 30 days</div>
                </div>
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">1.2M</div>
                  <div className="text-blue-100 text-sm">Requests/Hour</div>
                  <div className="text-xs text-blue-200">Peak: 2.1M</div>
                </div>
                <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">127ms</div>
                  <div className="text-purple-100 text-sm">Avg Response Time</div>
                  <div className="text-xs text-purple-200">P95: 245ms</div>
                </div>
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">0.02%</div>
                  <div className="text-orange-100 text-sm">Error Rate</div>
                  <div className="text-xs text-orange-200">Target: &lt; 0.1%</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Service Health</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm">API Gateway</span>
                      </div>
                      <Badge variant="outline" className="text-green-600">Healthy</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm">User Service</span>
                      </div>
                      <Badge variant="outline" className="text-green-600">Healthy</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                        <span className="text-sm">Payment Service</span>
                      </div>
                      <Badge variant="outline" className="text-yellow-600">Warning</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm">Database Cluster</span>
                      </div>
                      <Badge variant="outline" className="text-green-600">Healthy</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Recent Alerts</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2" />
                        <span>High memory usage</span>
                      </div>
                      <span className="text-gray-500">3 min ago</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Deployment completed</span>
                      </div>
                      <span className="text-gray-500">15 min ago</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Activity className="w-4 h-4 text-blue-500 mr-2" />
                        <span>Auto-scaling triggered</span>
                      </div>
                      <span className="text-gray-500">1 hour ago</span>
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
            Start Monitoring Today
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get complete visibility into your applications and infrastructure in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Let's Work Together
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-primary-700">
              Book Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}