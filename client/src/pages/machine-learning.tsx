import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  TrendingUp, 
  Search, 
  AlertTriangle, 
  Eye, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Zap,
  Clock,
  Target,
  Activity
} from "lucide-react";

export default function MachineLearningPage() {
  const mlCapabilities = [
    {
      icon: TrendingUp,
      title: "Anomaly Detection",
      description: "Detect unusual patterns in time series, populations, and categories",
      features: [
        "Real-time anomaly detection",
        "Historical analysis",
        "Population-based detection",
        "Custom sensitivity settings",
        "Multi-metric correlation"
      ]
    },
    {
      icon: Target,
      title: "Forecasting",
      description: "Predict future trends and values based on historical data",
      features: [
        "Single and multi-metric forecasting",
        "Confidence intervals and bounds",
        "Seasonal pattern recognition",
        "Long-term trend analysis",
        "Forecast accuracy scoring"
      ]
    },
    {
      icon: Search,
      title: "Data Frame Analytics",
      description: "Advanced analytics using supervised and unsupervised learning",
      features: [
        "Classification and regression",
        "Outlier detection",
        "Feature importance analysis",
        "Custom training datasets",
        "Model performance metrics"
      ]
    },
    {
      icon: Brain,
      title: "Natural Language Processing",
      description: "Extract insights from text using machine learning",
      features: [
        "Named entity recognition",
        "Sentiment analysis",
        "Language detection",
        "Text classification",
        "Custom model training"
      ]
    }
  ];

  const useCases = [
    {
      title: "IT Operations",
      description: "Monitor system health and predict failures",
      examples: [
        "Server performance anomalies",
        "Network traffic predictions",
        "Capacity planning",
        "Incident prevention"
      ]
    },
    {
      title: "Security Analytics",
      description: "Detect threats and analyze security events",
      examples: [
        "User behavior analytics",
        "Threat hunting",
        "Malware detection",
        "Fraud prevention"
      ]
    },
    {
      title: "Business Intelligence",
      description: "Gain insights from business data patterns",
      examples: [
        "Sales forecasting",
        "Customer behavior analysis",
        "Market trend prediction",
        "Revenue optimization"
      ]
    },
    {
      title: "IoT & Sensor Data",
      description: "Analyze real-time sensor and device data",
      examples: [
        "Predictive maintenance",
        "Environmental monitoring",
        "Quality control",
        "Energy optimization"
      ]
    }
  ];

  const mlWorkflow = [
    {
      step: 1,
      title: "Data Preparation",
      description: "Ingest and prepare your data for analysis",
      details: [
        "Automated data cleaning",
        "Feature engineering",
        "Data validation",
        "Schema detection"
      ]
    },
    {
      step: 2,
      title: "Model Training",
      description: "Train machine learning models on your dataset",
      details: [
        "Algorithm selection",
        "Hyperparameter tuning",
        "Cross-validation",
        "Performance evaluation"
      ]
    },
    {
      step: 3,
      title: "Deployment",
      description: "Deploy models for real-time inference",
      details: [
        "Model deployment",
        "A/B testing",
        "Performance monitoring",
        "Automatic retraining"
      ]
    },
    {
      step: 4,
      title: "Monitoring",
      description: "Monitor model performance and accuracy",
      details: [
        "Drift detection",
        "Accuracy tracking",
        "Alert configuration",
        "Model updates"
      ]
    }
  ];

  const performanceMetrics = [
    {
      icon: Zap,
      title: "Training Speed",
      value: "10x",
      description: "Faster than traditional ML platforms"
    },
    {
      icon: Clock,
      title: "Real-time Inference",
      value: "<100ms",
      description: "Average prediction latency"
    },
    {
      icon: Activity,
      title: "Model Accuracy",
      value: "95%+",
      description: "Average accuracy across use cases"
    },
    {
      icon: BarChart3,
      title: "Data Processing",
      value: "TB/hour",
      description: "Training data throughput"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Machine Learning</span>
              <br />Built for Scale
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Unlock the power of your data with built-in machine learning capabilities. 
              Detect anomalies, forecast trends, and gain insights without the complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-500 text-white hover:bg-primary-600">
                Start ML Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-500 text-primary-600">
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ML Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced ML Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              Pre-built machine learning models ready to deploy on your data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mlCapabilities.map((capability, index) => (
              <Card key={index} className="border border-gray-200 hover:border-primary-300 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <capability.icon className="h-5 w-5 text-purple-600" />
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

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ML Use Cases Across Industries
            </h2>
            <p className="text-lg text-gray-600">
              Real-world applications powered by machine learning analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-sm text-gray-600 flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ML Workflow */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              End-to-End ML Workflow
            </h2>
            <p className="text-lg text-gray-600">
              From data preparation to production deployment in a unified platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mlWorkflow.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  {phase.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
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
              Enterprise-grade performance for mission-critical ML workloads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-lg font-medium text-gray-900 mb-1">{metric.title}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ML Dashboard Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ML Analytics Dashboard
            </h2>
            <p className="text-lg text-gray-600">
              Monitor model performance and insights in real-time
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">ML Analytics Overview</h3>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-green-600">Live</Badge>
                  <Button size="sm" variant="outline">
                    <Brain className="h-4 w-4 mr-2" />
                    Models
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">47</div>
                  <div className="text-green-100 text-sm">Active Models</div>
                  <div className="text-xs text-green-200">12 anomaly detection</div>
                </div>
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">2.4K</div>
                  <div className="text-blue-100 text-sm">Anomalies Detected</div>
                  <div className="text-xs text-blue-200">Last 24 hours</div>
                </div>
                <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">94.7%</div>
                  <div className="text-purple-100 text-sm">Model Accuracy</div>
                  <div className="text-xs text-purple-200">Average across jobs</div>
                </div>
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">18TB</div>
                  <div className="text-orange-100 text-sm">Data Processed</div>
                  <div className="text-xs text-orange-200">This month</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Model Performance</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Server anomaly detection</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '96%'}}></div>
                        </div>
                        <span className="text-sm font-medium">96%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Sales forecasting</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '91%'}}></div>
                        </div>
                        <span className="text-sm font-medium">91%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">User behavior analysis</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: '87%'}}></div>
                        </div>
                        <span className="text-sm font-medium">87%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Recent Alerts</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2" />
                        <span>CPU usage spike detected</span>
                      </div>
                      <span className="text-gray-500">5 min ago</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 text-blue-500 mr-2" />
                        <span>Forecast model updated</span>
                      </div>
                      <span className="text-gray-500">12 min ago</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Training job completed</span>
                      </div>
                      <span className="text-gray-500">28 min ago</span>
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
            Start Your ML Journey Today
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Deploy machine learning models and start gaining insights from your data immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Try ML Features
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-primary-700">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}