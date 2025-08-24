import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  Search, 
  Brain,
  CheckCircle,
  ArrowRight,
  Lock,
  UserCheck,
  FileText,
  Activity,
  Bell,
  TrendingUp
} from "lucide-react";

export default function SecurityAnalyticsSolutionsPage() {
  const securityCapabilities = [
    {
      icon: Shield,
      title: "SIEM & Security Operations",
      description: "Real-time security event monitoring and incident response",
      features: [
        "Security event correlation",
        "Threat intelligence integration",
        "Automated incident response",
        "Compliance reporting",
        "SOC dashboard integration"
      ]
    },
    {
      icon: Eye,
      title: "Threat Detection",
      description: "Advanced threat detection using machine learning and behavioral analysis",
      features: [
        "Behavioral anomaly detection",
        "Signature-based detection",
        "Machine learning models",
        "Zero-day threat identification",
        "Advanced persistent threat (APT) detection"
      ]
    },
    {
      icon: Search,
      title: "Threat Hunting",
      description: "Proactive threat hunting capabilities for security analysts",
      features: [
        "Custom query language",
        "Historical data analysis",
        "Indicator of compromise (IOC) tracking",
        "Threat hypothesis testing",
        "Security data exploration"
      ]
    },
    {
      icon: Brain,
      title: "Security Analytics",
      description: "AI-powered security analytics for faster threat identification",
      features: [
        "Risk scoring algorithms",
        "User behavior analytics (UBA)",
        "Entity behavior analytics (EBA)",
        "Predictive threat modeling",
        "Security metrics and KPIs"
      ]
    }
  ];

  const threatTypes = [
    {
      title: "Malware & Ransomware",
      description: "Detect and respond to malicious software attacks",
      detectionMethods: [
        "File hash analysis",
        "Behavioral pattern recognition",
        "Network traffic analysis",
        "Endpoint telemetry correlation"
      ],
      responseTime: "< 5 minutes",
      accuracy: "99.2%"
    },
    {
      title: "Insider Threats",
      description: "Identify suspicious behavior from internal users",
      detectionMethods: [
        "User behavior baseline analysis",
        "Privilege escalation detection",
        "Data access pattern monitoring",
        "Anomalous activity identification"
      ],
      responseTime: "< 10 minutes",
      accuracy: "95.8%"
    },
    {
      title: "Advanced Persistent Threats",
      description: "Long-term threat campaigns targeting your organization",
      detectionMethods: [
        "Multi-stage attack correlation",
        "Lateral movement detection",
        "Command and control identification",
        "Persistence mechanism analysis"
      ],
      responseTime: "< 15 minutes",
      accuracy: "94.5%"
    }
  ];

  const complianceFrameworks = [
    {
      name: "SOC 2",
      description: "Service Organization Control 2",
      coverage: ["Security", "Availability", "Processing Integrity", "Confidentiality"],
      automated: "95%"
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      coverage: ["Network Security", "Data Protection", "Access Control", "Monitoring"],
      automated: "90%"
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation",
      coverage: ["Data Processing", "Privacy Rights", "Breach Notification", "Consent Management"],
      automated: "85%"
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      coverage: ["Physical Safeguards", "Administrative Safeguards", "Technical Safeguards"],
      automated: "88%"
    }
  ];

  const useCase = [
    {
      industry: "Financial Services",
      challenge: "Detect fraudulent transactions and insider trading",
      solution: "Real-time transaction monitoring with ML-based fraud detection",
      results: [
        "99.7% fraud detection accuracy",
        "< 100ms transaction processing",
        "75% reduction in false positives",
        "$2.3M annual fraud prevention"
      ]
    },
    {
      industry: "Healthcare",
      challenge: "Protect patient data and ensure HIPAA compliance",
      solution: "Comprehensive data access monitoring and breach detection",
      results: [
        "100% HIPAA compliance achieved",
        "Zero patient data breaches",
        "90% faster incident response",
        "Complete audit trail visibility"
      ]
    },
    {
      industry: "Technology",
      challenge: "Secure cloud infrastructure and intellectual property",
      solution: "Cloud-native security monitoring with automated response",
      results: [
        "99.99% infrastructure uptime",
        "Zero successful data exfiltration",
        "60% reduction in security incidents",
        "Automated threat remediation"
      ]
    }
  ];

  const securityMetrics = [
    {
      icon: Bell,
      title: "Mean Time to Detection",
      value: "< 2 min",
      description: "Average time to identify security threats"
    },
    {
      icon: Activity,
      title: "Mean Time to Response",
      value: "< 10 min",
      description: "Average incident response time"
    },
    {
      icon: TrendingUp,
      title: "Threat Detection Rate",
      value: "99.5%",
      description: "Successful threat identification rate"
    },
    {
      icon: CheckCircle,
      title: "False Positive Rate",
      value: "< 2%",
      description: "Accuracy of security alerts"
    }
  ];

  const integrations = [
    {
      category: "SIEM Platforms",
      tools: ["Splunk", "IBM QRadar", "ArcSight", "LogRhythm", "AlienVault", "Sumo Logic"]
    },
    {
      category: "Endpoint Security",
      tools: ["CrowdStrike", "Carbon Black", "SentinelOne", "Symantec", "McAfee", "Trend Micro"]
    },
    {
      category: "Network Security",
      tools: ["Palo Alto", "Cisco ASA", "Fortinet", "Check Point", "pfSense", "SonicWall"]
    },
    {
      category: "Cloud Security",
      tools: ["AWS GuardDuty", "Azure Sentinel", "Google Chronicle", "Prisma Cloud", "CloudTrail"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Advanced
              <span className="gradient-text"> Security Analytics</span>
              <br />& SIEM Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Protect your organization with AI-powered threat detection, real-time security monitoring, 
              and automated incident response capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-500 text-white hover:bg-primary-600">
                Start Security Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-500 text-primary-600">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Security Operations
            </h2>
            <p className="text-lg text-gray-600">
              Full-spectrum security analytics from detection to response
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityCapabilities.map((capability, index) => (
              <Card key={index} className="border border-gray-200 hover:border-primary-300 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <capability.icon className="h-5 w-5 text-red-600" />
                    </div>
                    <CardTitle className="text-xl">{capability.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{capability.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
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

      {/* Threat Detection */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Threat Detection
            </h2>
            <p className="text-lg text-gray-600">
              AI-powered detection for modern security threats
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {threatTypes.map((threat, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{threat.title}</h3>
                  <p className="text-gray-600 mb-4">{threat.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Detection Methods</h4>
                    <ul className="space-y-1">
                      {threat.detectionMethods.map((method, methodIndex) => (
                        <li key={methodIndex} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {method}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary-600">{threat.responseTime}</div>
                      <div className="text-sm text-gray-600">Response Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{threat.accuracy}</div>
                      <div className="text-sm text-gray-600">Detection Accuracy</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Security Performance Metrics
            </h2>
            <p className="text-lg text-gray-600">
              Proven security effectiveness in enterprise environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {securityMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-8 w-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-lg font-medium text-gray-900 mb-1">{metric.title}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compliance & Regulatory Support
            </h2>
            <p className="text-lg text-gray-600">
              Automated compliance monitoring and reporting for major frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{framework.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{framework.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-green-600">{framework.automated}</div>
                    <div className="text-sm text-gray-600">Automated Coverage</div>
                  </div>
                  
                  <ul className="space-y-1 text-xs text-gray-500">
                    {framework.coverage.map((area, areaIndex) => (
                      <li key={areaIndex}>{area}</li>
                    ))}
                  </ul>
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
              Industry Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real-world security analytics implementations and results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCase.map((story, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4">{story.industry}</Badge>
                  
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

      {/* Integrations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Security Tool Integrations
            </h2>
            <p className="text-lg text-gray-600">
              Connect with your existing security infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((category, index) => (
              <Card key={index} className="bg-white border border-gray-200">
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

      {/* Security Dashboard Preview */}
      {/*<section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Security Operations Center Dashboard
            </h2>
            <p className="text-lg text-gray-600">
              Real-time security monitoring and threat intelligence
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Security Operations Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-red-600">High Alert</Badge>
                  <Button size="sm" variant="outline">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Active Threats
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-green-100 text-sm">Monitoring Active</div>
                  <div className="text-xs text-green-200">Global SOC</div>
                </div>
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-yellow-100 text-sm">Active Threats</div>
                  <div className="text-xs text-yellow-200">Under investigation</div>
                </div>
                <div className="bg-gradient-to-r from-red-400 to-red-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">1</div>
                  <div className="text-red-100 text-sm">Critical Alert</div>
                  <div className="text-xs text-red-200">Immediate attention</div>
                </div>
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">99.2%</div>
                  <div className="text-blue-100 text-sm">Detection Rate</div>
                  <div className="text-xs text-blue-200">Last 24 hours</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Threat Timeline</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span>Malware detected on endpoint</span>
                      </div>
                      <span className="text-gray-500">2 min ago</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                        <span>Suspicious login from new location</span>
                      </div>
                      <span className="text-gray-500">8 min ago</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        <span>Multiple failed authentication</span>
                      </div>
                      <span className="text-gray-500">15 min ago</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span>Threat contained and mitigated</span>
                      </div>
                      <span className="text-gray-500">1 hour ago</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Risk Indicators</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Malware detections</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                        <span className="text-sm font-medium">High</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Suspicious network activity</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{width: '60%'}}></div>
                        </div>
                        <span className="text-sm font-medium">Med</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Failed login attempts</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '25%'}}></div>
                        </div>
                        <span className="text-sm font-medium">Low</span>
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
            Secure Your Organization Today
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Deploy advanced security analytics and start protecting your assets immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Start Security Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-primary-700">
              Contact Security Expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}