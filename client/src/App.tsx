import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Elasticsearch from "@/pages/elasticsearch";
import Kibana from "@/pages/kibana";
import MachineLearning from "@/pages/machine-learning";
import Security from "@/pages/security";
import Pricing from "@/pages/pricing";
import SearchSolutions from "@/pages/solutions/search";
import ObservabilitySolutions from "@/pages/solutions/observability";
import SecuritySolutions from "@/pages/solutions/security";
import EnterpriseSolutions from "@/pages/solutions/enterprise";
import NotFound from "@/pages/not-found";
import TrialSignup from "@/pages/trial-signup";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/elasticsearch" component={Elasticsearch} />
      <Route path="/kibana" component={Kibana} />
      <Route path="/machine-learning" component={MachineLearning} />
      <Route path="/security" component={Security} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/solutions/search" component={SearchSolutions} />
      <Route path="/solutions/observability" component={ObservabilitySolutions} />
      <Route path="/solutions/security" component={SecuritySolutions} />
      <Route path="/solutions/enterprise" component={EnterpriseSolutions} />
      <Route path="/trial-signup" component={TrialSignup} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
