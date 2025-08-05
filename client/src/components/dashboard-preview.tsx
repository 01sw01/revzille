import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gauge, Sliders, TrendingUp, Users, BarChart3, User } from "lucide-react";

export default function DashboardPreview() {
  const features = [
    {
      icon: Gauge,
      title: "Performance Monitoring",
      description: "Real-time cluster health, JVM metrics, search latency (p95/p99), and resource utilization with ML-based anomaly detection."
    },
    {
      icon: Sliders,
      title: "Infrastructure Management",
      description: "Auto-scaling policies, hot-warm-cold tier management, snapshot schedules, and security policy configuration via UI."
    },
    {
      icon: TrendingUp,
      title: "Query & Index Analytics",
      description: "Query performance profiling, slow query analysis, index size optimization, and shard allocation insights."
    },
    {
      icon: Users,
      title: "Multi-tenant Operations",
      description: "RBAC with field-level security, audit logging, cost allocation by team, and cross-cluster search management."
    }
  ];

  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful 
            <span className="gradient-text"> management dashboard</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor, manage, and scale your Elasticsearch clusters with our intuitive dashboard. 
            Real-time metrics, automated alerts, and self-service controls.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Everything at your fingertips</h3>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button className="bg-primary-500 text-white hover:bg-primary-600">
                Try Dashboard
              </Button>
            </div>
          </div>
          
          <div className="relative">
            {/* Dashboard mockup */}
            <Card className="overflow-hidden shadow-2xl border border-gray-200">
              {/* Dashboard header */}
              <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <h4 className="text-white font-semibold">RevaZille Dashboard</h4>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Dashboard content */}
              <CardContent className="p-6">
                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-lg p-4 text-white">
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-green-100 text-sm">Active Clusters</div>
                    <div className="text-xs text-green-200 mt-1">3 auto-scaling</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg p-4 text-white">
                    <div className="text-2xl font-bold">142ms</div>
                    <div className="text-blue-100 text-sm">Avg Query Time</div>
                    <div className="text-xs text-blue-200 mt-1">P95: 245ms</div>
                  </div>
                </div>
                
                {/* Chart placeholder */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h5 className="font-semibold text-gray-800 mb-4">Performance Metrics</h5>
                  <div className="h-32 bg-gradient-to-r from-primary-200 to-primary-300 rounded opacity-60 flex items-center justify-center">
                    <BarChart3 className="h-12 w-12 text-primary-600" />
                  </div>
                </div>
                
                {/* Cluster list */}
                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-800">Cluster Health & Alerts</h5>
                  <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div>
                        <span className="text-sm font-medium">prod-search-01</span>
                        <div className="text-xs text-gray-600">3 nodes • 500GB • AWS us-east-1</div>
                      </div>
                    </div>
                    <span className="text-xs text-green-600 font-medium">Healthy</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div>
                        <span className="text-sm font-medium">analytics-dev</span>
                        <div className="text-xs text-gray-600">ML job running • High CPU usage</div>
                      </div>
                    </div>
                    <span className="text-xs text-yellow-600 font-medium">Scaling</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <div>
                        <span className="text-sm font-medium">logs-retention</span>
                        <div className="text-xs text-gray-600">Hot-warm tier • Snapshot in progress</div>
                      </div>
                    </div>
                    <span className="text-xs text-purple-600 font-medium">Archiving</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
