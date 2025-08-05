import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  X, 
  ArrowRight,
  Shield,
  Clock,
  Users,
  Database,
  Cpu,
  Network,
  Zap
} from "lucide-react";

export default function PricingPage() {
  const pricingTiers = [
    {
      name: "Developer",
      description: "Perfect for development and testing",
      price: "Free",
      period: "",
      popular: false,
      features: {
        "Cluster Configuration": {
          "Max Clusters": "1",
          "Max Nodes per Cluster": "3",
          "RAM per Node": "8GB",
          "vCPU per Node": "2",
          "Storage per Node": "32GB SSD"
        },
        "Features & Capabilities": {
          "Elasticsearch & Kibana": true,
          "Basic Monitoring": true,
          "REST API Access": true,
          "Machine Learning": false,
          "Advanced Security": false,
          "Cross-cluster Replication": false
        },
        "Support & SLA": {
          "Support Type": "Community",
          "Response Time": "Best effort",
          "Uptime SLA": "99%",
          "Expert Assistance": false
        }
      },
      cta: "Start Free"
    },
    {
      name: "Production",
      description: "For production workloads and teams",
      price: "$299",
      period: "/month",
      popular: true,
      features: {
        "Cluster Configuration": {
          "Max Clusters": "10",
          "Max Nodes per Cluster": "100",
          "RAM per Node": "32GB",
          "vCPU per Node": "8",
          "Storage per Node": "500GB SSD"
        },
        "Features & Capabilities": {
          "Elasticsearch & Kibana": true,
          "Advanced Monitoring": true,
          "REST API Access": true,
          "Machine Learning": true,
          "Advanced Security": true,
          "Cross-cluster Replication": true
        },
        "Support & SLA": {
          "Support Type": "24/7 Priority",
          "Response Time": "< 4 hours",
          "Uptime SLA": "99.9%",
          "Expert Assistance": true
        }
      },
      cta: "Start 14-Day Trial"
    },
    {
      name: "Enterprise",
      description: "Mission-critical applications at scale",
      price: "Custom",
      period: " pricing",
      popular: false,
      features: {
        "Cluster Configuration": {
          "Max Clusters": "Unlimited",
          "Max Nodes per Cluster": "1000+",
          "RAM per Node": "Custom",
          "vCPU per Node": "Custom",
          "Storage per Node": "Custom"
        },
        "Features & Capabilities": {
          "Elasticsearch & Kibana": true,
          "Advanced Monitoring": true,
          "REST API Access": true,
          "Machine Learning": true,
          "Advanced Security": true,
          "Cross-cluster Replication": true
        },
        "Support & SLA": {
          "Support Type": "Dedicated Team",
          "Response Time": "< 1 hour",
          "Uptime SLA": "99.99%",
          "Expert Assistance": true
        }
      },
      cta: "Contact Sales"
    }
  ];

  const additionalServices = [
    {
      icon: Users,
      title: "Professional Services",
      description: "Expert consulting and implementation",
      pricing: "Starting at $5,000"
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Enhanced security features and compliance",
      pricing: "From $500/month"
    },
    {
      icon: Database,
      title: "Data Migration",
      description: "Migrate from existing platforms",
      pricing: "Custom quote"
    },
    {
      icon: Clock,
      title: "Premium Support",
      description: "Dedicated support engineer",
      pricing: "From $2,000/month"
    }
  ];

  const deploymentPricing = [
    {
      provider: "AWS",
      regions: "25+ regions",
      basePrice: "$0.08/hour",
      features: ["VPC peering", "PrivateLink", "IAM integration"]
    },
    {
      provider: "Azure",
      regions: "20+ regions", 
      basePrice: "$0.09/hour",
      features: ["Private endpoints", "Azure AD", "Resource groups"]
    },
    {
      provider: "Google Cloud",
      regions: "15+ regions",
      basePrice: "$0.10/hour", 
      features: ["Private Connect", "Cloud IAM", "VPC native"]
    },
    {
      provider: "RevaLogix Private",
      regions: "Global",
      basePrice: "Custom",
      features: ["Dedicated hardware", "Custom networking", "Enhanced SLA"]
    }
  ];

  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <X className="h-4 w-4 text-gray-400" />
      );
    }
    return <span className="text-sm text-gray-900">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Transparent
              <span className="gradient-text"> Pricing</span>
              <br />Built for Scale
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Start free and scale as you grow. No hidden fees, no vendor lock-in. 
              Enterprise-grade features at every tier.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Tiers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'border-2 border-primary-500 shadow-xl' : 'border border-gray-200 shadow-sm'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary-500 text-white px-6 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600">{tier.period}</span>
                  </div>
                  <Button 
                    className={`w-full ${tier.popular ? 'bg-primary-500 text-white hover:bg-primary-600' : 'border border-primary-500 text-primary-600 hover:bg-primary-50'}`}
                    variant={tier.popular ? "default" : "outline"}
                  >
                    {tier.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardHeader>

                <CardContent className="pt-0">
                  {Object.entries(tier.features).map(([category, features]) => (
                    <div key={category} className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-3 border-b border-gray-200 pb-2">
                        {category}
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(features).map(([feature, value]) => (
                          <div key={feature} className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">{feature}</span>
                            {renderFeatureValue(value)}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cloud Provider Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Deploy on your preferred cloud with transparent, per-hour pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentPricing.map((provider, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{provider.provider}</h3>
                  <div className="text-2xl font-bold text-primary-600 mb-2">{provider.basePrice}</div>
                  <div className="text-sm text-gray-600 mb-4">per node/hour</div>
                  <Badge variant="outline" className="mb-4">{provider.regions}</Badge>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {provider.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
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

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600">
              Expert services to accelerate your implementation and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border border-gray-200 hover:border-primary-300 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <div className="text-lg font-bold text-primary-600">{service.pricing}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Calculate Your Costs
            </h2>
            <p className="text-lg text-gray-600">
              Estimate your monthly costs based on your specific requirements
            </p>
          </div>

          <Card className="bg-white border border-gray-200">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Compute</h3>
                  <p className="text-sm text-gray-600">CPU and memory resources</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Storage</h3>
                  <p className="text-sm text-gray-600">SSD storage and snapshots</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Network className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Network</h3>
                  <p className="text-sm text-gray-600">Data transfer and bandwidth</p>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-primary-500 text-white hover:bg-primary-600">
                  Launch Pricing Calculator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer a 14-day free trial for all paid plans. The Developer tier is free forever 
                  with basic features. No credit card required to start.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I change plans anytime?
                </h3>
                <p className="text-gray-600">
                  Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect 
                  at the next billing cycle, and we'll prorate any differences.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What's included in Enterprise pricing?
                </h3>
                <p className="text-gray-600">
                  Enterprise pricing includes dedicated infrastructure, custom SLAs, priority support, 
                  professional services, and volume discounts. Contact our sales team for a custom quote.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Start with our free tier or speak with our team about your specific requirements.
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