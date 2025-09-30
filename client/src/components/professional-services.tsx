import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Wrench, 
  TrendingUp, 
  Shield, 
  Database, 
  ArrowRightLeft, 
  CheckCircle,
  Clock,
  Award
} from "lucide-react";

export default function ProfessionalServices() {
  const services = [
   /* {
      icon: Database,
      title: "Implementation & Migration",
      description: "Expert-led deployment and migration from existing solutions",
      features: [
        "Splunk to Elasticsearch migration with 60% cost savings",
        "New Relic to Elastic Cloud data pipeline setup",
        "Legacy system modernization and data transformation",
        "Zero-downtime migration strategies"
      ],
      popular: false
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Maximize efficiency and reduce operational costs",
      features: [
        "Query performance tuning and index optimization",
        "Resource right-sizing and cost optimization",
        "Custom ingest pipeline development",
        "Capacity planning and scaling strategies"
      ],
      popular: true
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise security implementation and audit",
      features: [
        "RBAC and field-level security configuration",
       /*
         "SAML/LDAP integration and SSO setup",
       // "Compliance audit and remediation (SOC2, GDPR)",
        "Security monitoring and threat detection"
      ],
      popular: false
    }*/
  ];

  const supportTiers = [
    {
      name: "Standard Support",
      response: "Business hours",
      coverage: "8x5 coverage",
      features: ["Email & ticket support", "Community resources", "Documentation access"]
    },
    {
      name: "Priority Support",
      response: "< 4 hours",
      coverage: "24x7 coverage",
      features: ["Phone & email support", "Named support engineer", "Health checks"]
    },
    {
      name: "Enterprise Support",
      response: "< 1 hour",
      coverage: "24x7 coverage",
      features: ["Dedicated support team", "Architecture reviews", "Emergency escalation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional services by 
            <span className="gradient-text">  experts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of  Elasticsearch engineers and solution architects 
            ensure successful deployment, optimization, and ongoing operations.
          </p>
        </div>

        {/* Professional Services Grid */}
        {/*<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className={`relative ${service.popular ? 'border-2 border-primary-500 shadow-lg' : 'border border-gray-200 shadow-sm'}`}>
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary-500 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${service.popular ? 'bg-primary-500 text-white hover:bg-primary-600' : 'border border-primary-500 text-primary-600 hover:bg-primary-50'}`}
                  variant={service.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>*/}

        {/* Expert Team Section */}
       {/* <div className="bg-primary-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Certified Elasticsearch Experts
              </h3>
              <p className="text-gray-600 mb-6">
                Our team holds the highest level of Elasticsearch certifications and has delivered 
                solutions across industries including healthcare, financial services, e-commerce, and technology.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm font-medium">Elastic Certified Engineers</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm font-medium">Solution Architects</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm font-medium">24/7 Support Available</span>
                </div>
                <div className="flex items-center">
                  <Wrench className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm font-medium">DevOps & DevSecOps</span>
                </div>
              </div>
              
              <Button className="bg-primary-500 text-white hover:bg-primary-600">
                Consult with Experts
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Migration Success Rate</h4>
                <div className="flex items-center">
                  <div className="bg-green-500 h-2 rounded-full mr-3" style={{width: '95%'}}></div>
                  <span className="text-sm font-medium text-green-600">99.5%</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Average Cost Reduction</h4>
                <div className="flex items-center">
                  <div className="bg-blue-500 h-2 rounded-full mr-3" style={{width: '60%'}}></div>
                  <span className="text-sm font-medium text-blue-600">40-60%</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Client Satisfaction</h4>
                <div className="flex items-center">
                  <div className="bg-purple-500 h-2 rounded-full mr-3" style={{width: '98%'}}></div>
                  <span className="text-sm font-medium text-purple-600">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>*/}

        {/* Support Tiers */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Support Options</h3>
          <p className="text-gray-600">Choose the level of support that matches your business requirements</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportTiers.map((tier, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-gray-900 mb-2">{tier.name}</h4>
                <div className="text-2xl font-bold text-primary-600 mb-1">{tier.response}</div>
                <div className="text-sm text-gray-600 mb-4">{tier.coverage}</div>
                
                <ul className="space-y-2 text-sm text-gray-600">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
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
  );
}