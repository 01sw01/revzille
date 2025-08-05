import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gauge, Sliders, TrendingUp, Users, BarChart3, User } from "lucide-react";

export default function DashboardPreview() {
  const features = [
    {
      icon: Gauge,
      title: "Real-time Monitoring",
      description: "Track cluster health, performance metrics, and resource utilization in real-time with customizable alerts."
    },
    {
      icon: Sliders,
      title: "Self-service Controls",
      description: "Scale resources, configure security settings, and manage backups without waiting for support tickets."
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Deep insights into query performance, index optimization, and usage patterns to maximize efficiency."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Role-based access controls, audit logs, and shared dashboards for seamless team workflows."
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
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-green-100 text-sm">Active Clusters</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg p-4 text-white">
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-blue-100 text-sm">Uptime</div>
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
                  <h5 className="font-semibold text-gray-800">Recent Activity</h5>
                  <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm">production-search scaled up</span>
                    </div>
                    <span className="text-xs text-gray-500">2 min ago</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-sm">Backup completed</span>
                    </div>
                    <span className="text-xs text-gray-500">15 min ago</span>
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
