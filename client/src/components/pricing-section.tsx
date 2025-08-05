import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, Clock, RotateCcw } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for development and testing",
      price: "Free",
      period: "/month",
      features: [
        "1 Elasticsearch cluster",
        "2GB storage",
        "Basic Kibana dashboard",
        "Community support",
        "99% uptime SLA"
      ],
      buttonText: "Start Free",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      description: "For production workloads",
      price: "$99",
      period: "/month",
      features: [
        "5 Elasticsearch clusters",
        "100GB storage",
        "Advanced Kibana features",
        "Priority support",
        "99.9% uptime SLA",
        "Multi-cloud deployment"
      ],
      buttonText: "Start Trial",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Enterprise",
      description: "Custom solutions at scale",
      price: "Custom",
      period: " pricing",
      features: [
        "Unlimited clusters",
        "Custom storage limits",
        "Dedicated support team",
        "99.99% uptime SLA",
        "Custom security options",
        "Dedicated infrastructure"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent 
            <span className="gradient-text"> pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our free tier and scale as you grow. All plans include SLA-backed support and uptime guarantees.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'bg-primary-500 text-white border-2 border-primary-400 shadow-lg' : 'bg-white shadow-sm border border-gray-200'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </CardTitle>
                <p className={`mb-4 ${plan.popular ? 'text-primary-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                  <span className={`text-lg font-normal ${plan.popular ? 'text-primary-200' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className={`space-y-3 mb-8 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className={`mr-3 h-5 w-5 ${plan.popular ? 'text-primary-200' : 'text-green-500'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 font-semibold ${
                    plan.popular 
                      ? 'bg-white text-primary-600 hover:bg-gray-50' 
                      : plan.buttonVariant === 'outline'
                        ? 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50'
                        : 'bg-primary-500 text-white hover:bg-primary-600'
                  }`}
                  variant={plan.popular ? "secondary" : plan.buttonVariant}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Pricing Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            All plans include SSL encryption, automated backups, and 24/7 monitoring
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center">
              <Shield className="mr-2 h-4 w-4" />
              Enterprise-grade security
            </span>
            <span className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              No setup fees
            </span>
            <span className="flex items-center">
              <RotateCcw className="mr-2 h-4 w-4" />
              Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
