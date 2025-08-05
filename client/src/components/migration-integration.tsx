import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRightLeft, 
  TrendingDown, 
  CheckCircle, 
  Clock,
  Shield,
  Database,
  Zap
} from "lucide-react";

export default function MigrationIntegration() {
  const migrationPaths = [
    {
      from: "Splunk",
      logo: "S",
      logoColor: "bg-black",
      savings: "Up to 60%",
      timeframe: "2-4 weeks",
      features: [
        "SPL to Elasticsearch query translation",
        "Dashboard and alert migration",
        "Historical data transfer with validation",
        "User training and knowledge transfer"
      ]
    },
    {
      from: "New Relic",
      logo: "NR",
      logoColor: "bg-green-600",
      savings: "Up to 50%",
      timeframe: "1-3 weeks",
      features: [
        "APM data pipeline migration",
        "Infrastructure monitoring setup",
        "Custom dashboards recreation",
        "Alert policy conversion"
      ]
    },
    {
      from: "Datadog",
      logo: "DD",
      logoColor: "bg-purple-600",
      savings: "Up to 45%",
      timeframe: "2-3 weeks",
      features: [
        "Metrics and log aggregation migration",
        "Custom dashboard conversion",
        "Monitoring and alerting setup",
        "Cost optimization analysis"
      ]
    },
    {
      from: "Self-hosted ELK",
      logo: "ELK",
      logoColor: "bg-yellow-600",
      savings: "Operational efficiency",
      timeframe: "1-2 weeks",
      features: [
        "Cluster configuration migration",
        "Index template and mapping transfer",
        "Plugin and integration setup",
        "Performance optimization"
      ]
    }
  ];

  const integrationOptions = [
    {
      icon: Database,
      title: "Data Sources",
      description: "Connect 200+ data sources and platforms",
      integrations: ["AWS CloudWatch", "Azure Monitor", "Google Cloud Logging", "Kubernetes", "Docker", "Apache Kafka"]
    },
    {
      icon: Shield,
      title: "Security Tools",
      description: "Integrate with existing security infrastructure",
      integrations: ["CrowdStrike", "Splunk Phantom", "IBM QRadar", "Palo Alto", "Fortinet", "Check Point"]
    },
    {
      icon: Zap,
      title: "DevOps Tools",
      description: "Seamless CI/CD and infrastructure integration",
      integrations: ["Jenkins", "GitLab", "Terraform", "Ansible", "Prometheus", "Grafana"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Seamless 
            <span className="gradient-text"> migration & integration</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Migrate from existing solutions with minimal downtime and risk. Our certified experts 
            handle the entire process while you focus on your business.
          </p>
        </div>

        {/* Migration Paths */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Proven Migration Paths
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {migrationPaths.map((path, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 ${path.logoColor} rounded-lg flex items-center justify-center mr-3`}>
                        <span className="text-white font-bold text-sm">{path.logo}</span>
                      </div>
                      <ArrowRightLeft className="h-5 w-5 text-gray-400 mx-2" />
                      <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">RZ</span>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">From {path.from}</h4>
                  
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-green-600 border-green-300">
                      <TrendingDown className="h-3 w-3 mr-1" />
                      {path.savings}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {path.timeframe}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-sm text-gray-600">
                    {path.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full mt-4 text-primary-600 border-primary-300 hover:bg-primary-50">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Integration Options */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Enterprise Integrations
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {integrationOptions.map((option, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h4>
                <p className="text-gray-600 mb-4">{option.description}</p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {option.integrations.map((integration, integrationIndex) => (
                    <Badge key={integrationIndex} variant="outline" className="text-xs">
                      {integration}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Migration Process */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Zero-Risk Migration Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Assessment</h4>
              <p className="text-sm text-gray-600">Analyze current infrastructure and create migration plan</p>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                2
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Setup</h4>
              <p className="text-sm text-gray-600">Deploy RevaZille environment with optimized configuration</p>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Migration</h4>
              <p className="text-sm text-gray-600">Transfer data and configurations with validation</p>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Optimization</h4>
              <p className="text-sm text-gray-600">Fine-tune performance and train your team</p>
            </div>
          </div>
          
          <div className="mt-8">
            <Button size="lg" className="bg-primary-500 text-white hover:bg-primary-600">
              Schedule Migration Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}