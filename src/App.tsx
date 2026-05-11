import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ProjectsProvider } from "@/lib/projects-context";
import { AdminAuthProvider } from "@/lib/admin-auth";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/NotFound";
import SmoothScroll from "@/components/SmoothScroll";
import AdministrativeCoordination from "@/pages/AdministrativeCoordination";
import WebDevelopment from "@/pages/WebDevelopment";
import TechnicalConsulting from "@/pages/TechnicalConsulting";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ProjectsProvider>
        <AdminAuthProvider>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<NotFound />} />
             <Route
  path="/administrative-coordination"  element={<AdministrativeCoordination />}/>
          <Route path="/web-development" element={<WebDevelopment />} />
                       <Route path="/TechnicalConsulting" element={<TechnicalConsulting />} />

             
             
              </Routes>
            </Layout>
            <SmoothScroll />
          </BrowserRouter>
        </AdminAuthProvider>
      </ProjectsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
