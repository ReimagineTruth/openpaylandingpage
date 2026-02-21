import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WalletPage from "./pages/WalletPage";
import SavingsPage from "./pages/SavingsPage";
import CardsPage from "./pages/CardsPage";
import LoansPage from "./pages/LoansPage";
import MerchantPage from "./pages/MerchantPage";
import PaymentsPage from "./pages/PaymentsPage";
import SecurityPage from "./pages/SecurityPage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import BlogPage from "./pages/BlogPage";
import CompliancePage from "./pages/CompliancePage";
import GDPRPage from "./pages/GDPRPage";
import FeedbackPage from "./pages/FeedbackPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/savings" element={<SavingsPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/loans" element={<LoansPage />} />
          <Route path="/merchant" element={<MerchantPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/gdpr" element={<GDPRPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
