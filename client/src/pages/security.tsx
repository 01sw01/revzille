import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  Eye, 
  Bell, 
  Search, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  UserCheck,
  FileText,
  AlertTriangle,
  Activity
} from "lucide-react";

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Authentication & Authorization",
      description: "Enterprise-grade user management and access control",
      features: [
        "SAML 2.0 and LDAP integration",
        "Multi-factor authentication (MFA)",
        "Role-based access control (RBAC)",
        "API key management",
        "OpenID Connect support"
      ]
    },
    {
      icon: Shield,
      title: "Data Protection",
      description: "Comprehensive encryption and data security",
      features: [
        "TLS 1.3 encryption in transit",
        "AES-256 encryption at rest",
        "Field-level security",
        "Document-level security",
        "Key management service"
      ]
    },
    {
      icon: Eye,
      title: "Monitoring & Auditing",
      description: "Complete visibility into security events",
      features: [
        "Security audit logs",
        "Real-time threat detection",
        "Compliance reporting",
        "Access pattern analysis",
        "Anomaly detection"
      ]
    },
    {
      icon: UserCheck,
      title: "Identity Management",
      description: "Centralized identity and access management",
      features: [
        "Single sign-on (SSO)",
        "Identity federation",
        "User lifecycle management",
        "Privileged access management",
        "Session management"
      ]
    }
  ];

  const siemCapabilities = [
    {
      title: "Threat Detection",
      description: "Advanced analytics to identify security threats",
      capabilities: [
        "Behavioral analysis",
        "Threat intelligence integration",
        "Machine learning detection",
        "Real-time correlation"
      ]
    },
    {
      title: "Incident Response",
      description: "Streamlined workflows for security incidents",
      capabilities: [
        "Automated response actions",
        "Case management",
        "Forensic analysis",
        "Timeline reconstruction"
      ]
    },
    {
      title: "Compliance Management",
      description: "Meet regulatory requirements with automated reporting",
      capabilities: [
        "PCI DSS compliance",
        "GDPR data protection",
        "SOX reporting",
        "HIPAA audit trails"
      ]
    }
  ];

  const complianceStandards = [
    { name: "SOC 2 Type II", description: "Security, availability, and confidentiality" },
    { name: "ISO 27001", description: "Information security management" },
    { name: "PCI DSS", description: "Payment card industry standards" },
    { name: "GDPR", description: "General Data Protection Regulation" },
    { name: "HIPAA", description: "Healthcare information protection" },
    { name: "FedRAMP", description: "Federal risk and authorization management" }
  ];

  const securityMetrics = [
    {
      icon: Activity,
      title: "Threat Detection Rate",
      value: "99.7%",
      description: "Advanced threats detected and blocked"
    },
    {
      icon: Bell,
      title: "Mean Time to Detection",
      value: "< 2 min",
      description: "Average time to identify security events"
    },
    {
      icon: Shield,
      title: "Security Incidents",
      value: "0",
      description: "Successful breaches in last 12 months"
    },
    {
      icon: CheckCircle,
      title: "Compliance Score",
      value: "100%",
      description: "Adherence to security frameworks"
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
              Enterprise
              <span className="gradient-text"> Security</span>
              <br />& SIEM Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Protect your organization with comprehensive security analytics, threat detection, 
              and compliance management built on battle-tested Elasticsearch technology.
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

      {/* Security Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Security Framework
            </h2>
            <p className="text-lg text-gray-600">
              Multi-layered security controls to protect your data and infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:border-primary-300 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="h-5 w-5 text-red-600" />
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

      {/* SIEM Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced SIEM Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              Security information and event management with machine learning and automation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {siemCapabilities.map((capability, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl">{capability.title}</CardTitle>
                  <p className="text-gray-600">{capability.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {capability.capabilities.map((cap, capIndex) => (
                      <li key={capIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Metrics */}
     {/*} <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Security Performance Metrics
            </h2>
            <p className="text-lg text-gray-600">
              Real-world security effectiveness and performance indicators
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
      </section>*/}

      {/* Compliance Standards */}
     {/*} <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-lg text-gray-600">
              Meet regulatory requirements with built-in compliance frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="bg-white border border-gray-200 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{standard.name}</h3>
                  <p className="text-sm text-gray-600">{standard.description}</p>
                  <Badge variant="outline" className="mt-3 text-green-600 border-green-300">
                    Certified
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Dashboard Preview */}
     {/*} <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real-time Security Operations Center
            </h2>
            <p className="text-lg text-gray-600">
              Centralized security monitoring and incident management
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
                    Incidents
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">2,847</div>
                  <div className="text-green-100 text-sm">Events Processed</div>
                  <div className="text-xs text-green-200">Last hour</div>
                </div>
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-yellow-100 text-sm">Active Threats</div>
                  <div className="text-xs text-yellow-200">Under investigation</div>
                </div>
                <div className="bg-gradient-to-r from-red-400 to-red-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">1</div>
                  <div className="text-red-100 text-sm">Critical Alert</div>
                  <div className="text-xs text-red-200">Requires attention</div>
                </div>
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">98.7%</div>
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
                        <span>Suspicious login detected</span>
                      </div>
                      <span className="text-gray-500">2 min ago</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                        <span>Unusual network activity</span>
                      </div>
                      <span className="text-gray-500">5 min ago</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span>Vulnerability scan completed</span>
                      </div>
                      <span className="text-gray-500">12 min ago</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Top Risk Indicators</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Failed login attempts</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{width: '80%'}}></div>
                        </div>
                        <span className="text-sm font-medium">High</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Malware detections</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{width: '40%'}}></div>
                        </div>
                        <span className="text-sm font-medium">Med</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Data exfiltration</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '10%'}}></div>
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
      </section>*/}

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Secure Your Organization Today
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Deploy enterprise security analytics and start protecting your data in minutes.
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