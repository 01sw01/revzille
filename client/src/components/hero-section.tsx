import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Server, Database, TrendingUp, Users, Rocket, Play } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section id="home" className="pt-16 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Fully Managed
            <span className="gradient-text"> Elasticsearch</span>
            <br />in the Cloud
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Deploy enterprise-grade Elasticsearch clusters with advanced machine learning, real-time analytics, 
            and security features. Get production-ready infrastructure in minutes with 99.99% SLA-backed uptime 
            across AWS, Azure, GCP, and our private cloud.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/trial-signup">
              <Button size="lg" className="bg-primary-500 text-white hover:bg-primary-600 text-lg px-8 py-4">
                <Rocket className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-primary-500 text-primary-600 hover:bg-primary-50 text-lg px-8 py-4">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Cloud Provider Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 mb-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-sm">
                AWS
              </div>
              <span className="font-medium">AWS</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">
                Az
              </div>
              <span className="font-medium">Azure</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white font-bold text-sm">
                G
              </div>
              <span className="font-medium">GCP</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded flex items-center justify-center text-white font-bold text-sm">
                R
              </div>
              <span className="font-medium">RevaLogix Cloud</span>
            </div>
          </div>
        </div>
         {/* Hero Dashboard Preview */}
       
       {/* <div className="relative">
          <Card className="overflow-hidden shadow-2xl border border-gray-200">
            
            <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-md px-3 py-1 text-sm text-gray-600">
                  dashboard.revazille.com
                </div>
              </div>
            </div>
            
            Dashboard content preview 
            <CardContent className="p-6 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card className="shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">Active Clusters</h3>
                      <Server className="h-5 w-5 text-primary-500" />
                    </div>
                    <div className="text-3xl font-bold text-primary-600">12</div>
                    <div className="text-sm text-gray-600">2 pending deployment</div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">Total Storage</h3>
                      <Database className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="text-3xl font-bold text-green-600">2.4TB</div>
                    <div className="text-sm text-gray-600">85% utilized</div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">Uptime</h3>
                      <TrendingUp className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600">99.9%</div>
                    <div className="text-sm text-gray-600">Last 30 days</div>
                  </CardContent>
                </Card>
              </div>
              
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">Recent Clusters</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <div>
                          <div className="font-medium">production-search</div>
                          <div className="text-sm text-gray-600">AWS US-East-1</div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">Running</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div>
                          <div className="font-medium">analytics-dev</div>
                          <div className="text-sm text-gray-600">GCP Europe-West</div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">Deploying</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
        */}
      </div>
    </section>
  );
}
