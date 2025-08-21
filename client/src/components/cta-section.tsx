import { Button } from "@/components/ui/button";
import { Rocket, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to supercharge your search infrastructure?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          Join thousands of developers who trust RevaZille for their Elasticsearch needs. 
          Start your free trial today and experience the difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/trial-signup">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-50 text-lg px-8 py-4">
              <Rocket className="mr-2 h-5 w-5" />
              Start Free Trial
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Demo
          </Button>
        </div>
        
        <div className="mt-8 text-primary-200 text-sm">
          No credit card required • 14-day free trial • Cancel anytime
        </div>
      </div>
    </section>
  );
}
