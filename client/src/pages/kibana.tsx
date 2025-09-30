import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Search, 
  Shield, 
  Bell,
  Eye,
  Map,
  Brain,
  ArrowRight,
  CheckCircle,
  Layers,
  Filter
} from "lucide-react";

export default function KibanaPage() {
  const dashboardTypes = [
    {
      icon: BarChart3,
      title: "Analytics Dashboards",
      description: "Interactive visualizations for business intelligence and data exploration",
      features: [
        "Real-time data visualization",
        "Custom metric calculations",
        "Drill-down capabilities",
        "Export and sharing options"
      ]
    },
    {
      icon: Shield,
      title: "Security Dashboards",
      description: "Monitor security events and threat intelligence in real-time",
      features: [
        "SIEM event correlation",
        "Threat hunting workflows",
        "Compliance reporting",
        "Incident response tracking"
      ]
    },
    {
      icon: Eye,
      title: "Observability Dashboards",
      description: "Monitor infrastructure, applications, and user experience",
      features: [
        "APM service maps",
        "Infrastructure monitoring",
        "Log correlation",
        "SLA tracking"
      ]
    },
    {
      icon: TrendingUp,
      title: "Business Dashboards",
      description: "Track KPIs and business metrics with executive-level views",
      features: [
        "KPI monitoring",
        "Revenue analytics",
        "Customer insights",
        "Performance metrics"
      ]
    }
  ];

  const visualizationTypes = [
    { name: "Line Charts", icon: TrendingUp, description: "Time series and trend analysis" },
    { name: "Bar Charts", icon: BarChart3, description: "Comparative data visualization" },
    { name: "Pie Charts", icon: PieChart, description: "Proportional data representation" },
    { name: "Heat Maps", icon: Map, description: "Geographic and correlation data" },
    { name: "Data Tables", icon: Layers, description: "Detailed tabular views" },
    { name: "Gauges", icon: Filter, description: "Real-time metric indicators" }
  ];

  const mlFeatures = [
    {
      title: "Anomaly Detection",
      description: "Automatically detect unusual patterns in your data",
      capabilities: [
        "Time series anomaly detection",
        "Population analysis",
        "Categorization analysis",
        "Custom job configuration"
      ]
    },
    {
      title: "Forecasting",
      description: "Predict future trends based on historical data",
      capabilities: [
        "Single and multi-metric forecasting",
        "Confidence intervals",
        "Seasonal pattern recognition",
        "Alert on forecast deviations"
      ]
    },
    {
      title: "Data Frame Analytics",
      description: "Advanced analytics using machine learning techniques",
      capabilities: [
        "Classification algorithms",
        "Regression analysis",
        "Outlier detection",
        "Feature importance analysis"
      ]
    }
  ];

  const alertingCapabilities = [
    {
      icon: Bell,
      title: "Smart Alerting",
      description: "Intelligent threshold and anomaly-based alerts",
      features: [
        "Threshold-based alerts",
        "Anomaly detection alerts",
        "Composite conditions",
        "Alert suppression"
      ]
    },
    {
      icon: Brain,
      title: "Machine Learning Alerts",
      description: "ML-powered alerting for complex patterns",
      features: [
        "Pattern recognition",
        "Behavioral analysis",
        "Predictive alerting",
        "Custom ML jobs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Kibana</span> Analytics
              <br />& Visualization
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your data into actionable insights with interactive dashboards, 
              machine learning analytics, and real-time monitoring capabilities.
            </p>
            {/*<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-500 text-white hover:bg-primary-600">
                Explore Kibana
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-500 text-primary-600">
                View Demo
              </Button>
            </div>*/}
          </div>
        </div>
      </section>

      {/* Dashboard Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Purpose-Built Dashboards
            </h2>
            <p className="text-lg text-gray-600">
              Pre-configured dashboards for specific use cases and industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dashboardTypes.map((dashboard, index) => (
              <Card key={index} className="border border-gray-200 hover:border-primary-300 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <dashboard.icon className="h-5 w-5 text-primary-600" />
                    </div>
                    <CardTitle className="text-xl">{dashboard.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{dashboard.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {dashboard.features.map((feature, featureIndex) => (
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

      {/* Visualization Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rich Visualization Library
            </h2>
            <p className="text-lg text-gray-600">
              Choose from dozens of visualization types to tell your data story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visualizationTypes.map((viz, index) => (
              <Card key={index} className="bg-white border border-gray-200 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <viz.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{viz.name}</h3>
                  <p className="text-sm text-gray-600">{viz.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Learning Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Machine Learning Analytics
            </h2>
            <p className="text-lg text-gray-600">
              Built-in ML capabilities for advanced analytics and insights
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mlFeatures.map((feature, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <p className="text-gray-600">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alerting & Monitoring */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Intelligent Alerting
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed with smart alerts and proactive monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alertingCapabilities.map((capability, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <capability.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{capability.title}</h3>
                      <p className="text-gray-600 mb-4">{capability.description}</p>
                    </div>
                  </div>
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

      {/* Dashboard Preview */}
      {/*<section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Interactive Dashboard Experience
            </h2>
            <p className="text-lg text-gray-600">
              Explore data with drag-and-drop dashboard building and real-time collaboration
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Operations Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-green-600">Live</Badge>
                  <Button size="sm" variant="outline">
                    <Search className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">2.4M</div>
                  <div className="text-green-100 text-sm">Total Events</div>
                  <div className="text-xs text-green-200">↑ 12% from yesterday</div>
                </div>
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">98.7%</div>
                  <div className="text-blue-100 text-sm">System Health</div>
                  <div className="text-xs text-blue-200">All systems operational</div>
                </div>
                <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">156ms</div>
                  <div className="text-purple-100 text-sm">Response Time</div>
                  <div className="text-xs text-purple-200">P95: 245ms</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Traffic Patterns</h4>
                  <div className="h-32 bg-white rounded border flex items-center justify-center">
                    <BarChart3 className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Geographic Distribution</h4>
                  <div className="h-32 bg-white rounded border flex items-center justify-center">
                    <Map className="h-12 w-12 text-gray-400" />
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
            Start Building Dashboards Today
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Create powerful visualizations and gain insights from your data in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Try Kibana Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-primary-700">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}