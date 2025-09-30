import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Book, MessageCircle } from "lucide-react";

export default function SupportSection() {
  const supportOptions = [
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Get help from our team of Elasticsearch experts around the clock with guaranteed response times.",
      linkText: "Contact Support →"
    },
    {
      icon: Book,
      title: "Documentation",
      description: "Comprehensive guides, API references, and tutorials to help you get the most out of RevaZille.",
      linkText: "Browse Docs →"
    },
    {
      icon: MessageCircle,
      title: "Community",
      description: "Share knowledge, best practices, and solutions in our community forum.",
      linkText: "Join Community →"
    }
  ];

  const faqs = [
    {
      question: "How quickly can I deploy a cluster?",
      answer: "Most clusters are deployed within 5-10 minutes. Complex configurations may take up to 30 minutes."
    },
   /* {
      question: "Can I migrate existing Elasticsearch data?",
      answer: "Yes, we provide migration tools and expert assistance to help you move your existing data seamlessly."
    },*/
    {
      question: "What monitoring tools are included?",
      answer: "All plans include real-time monitoring, alerting, and optional Kibana dashboards for visual analytics."
    },
   /* {
      question: "How does pricing work for multi-cloud?",
      answer: "Pricing is consistent across all cloud providers. You only pay for the resources you use, regardless of the provider."
    },*/
    {
      question: "What security measures are in place?",
      answer: "All clusters include SSL encryption, IP whitelisting, access controls, and compliance-ready configurations."
    },
    {
      question: "Can I scale my cluster automatically?",
      answer: "Yes, RevaZille supports both manual and automatic scaling based on your performance and usage requirements."
    }
  ];

  return (
    <section id="support" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Expert 
            <span className="gradient-text"> support </span>
            when you need it
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get help from Elasticsearch experts, comprehensive documentation, 
            and a thriving community of developers.
          </p>
        </div>
        {/*
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <Card key={index} className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <option.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <a href="#" className="text-primary-600 font-semibold hover:text-primary-700">
                  {option.linkText}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>*/}
        
        {/* FAQ Section */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {faqs.slice(0, 3).map((faq, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              {faqs.slice(3, 6).map((faq, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
