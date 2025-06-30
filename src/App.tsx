
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Layanan from "./pages/Layanan";
import Kontak from "./pages/Kontak";
import Karir from "./pages/Karir";
import Berita from "./pages/Berita";
import KebijakanPrivasi from "./pages/KebijakanPrivasi";
import SyaratKetentuan from "./pages/SyaratKetentuan";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/karir" element={<Karir />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/kebijakan-privasi" element={<KebijakanPrivasi />} />
          <Route path="/syarat-ketentuan" element={<SyaratKetentuan />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
