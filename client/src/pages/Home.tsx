import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  SiDocker, SiLinux, SiPython, SiKubernetes, 
  SiAnsible, SiTerraform, SiJenkins, SiPrometheus, SiGrafana, 
  SiGit, SiLinkedin, SiGithub, SiCredly 
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { 
  Terminal, Server, Cloud, Code2, Network, 
  ChevronRight, ExternalLink, Mail, FileText,
  Menu, X
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Background Image (generated)
import bgImage from "@assets/generated_images/subtle_dark_cyber_grid_background_texture.png";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Path", href: "#learning-path" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-mono text-xl font-bold text-primary tracking-tighter cursor-pointer flex items-center gap-2" onClick={() => handleScrollTo("#hero")}>
          <Terminal className="h-5 w-5" />
          <span>~/farhan-mendhro</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name}
              onClick={() => handleScrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              {link.name}
            </button>
          ))}
          <Button variant="outline" className="font-mono text-xs ml-4 border-primary/20 text-primary hover:bg-primary/10">
            Resume <FileText className="ml-2 h-3 w-3" />
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l border-white/10">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <button 
                    key={link.name}
                    onClick={() => handleScrollTo(link.href)}
                    className="text-lg font-medium text-left hover:text-primary transition-colors font-mono"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      
      <div className="container px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for opportunities
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Farhan Mendhro
          </h1>
          
          <h2 className="text-xl md:text-3xl font-mono text-primary/90 font-medium">
            DevOps Engineer in Training
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building robust skills in <span className="text-white font-medium">Cloud Infrastructure</span>, <span className="text-white font-medium">Containerization</span> & <span className="text-white font-medium">Automation</span>. 
            Transitioning to reliable systems engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="font-mono text-base h-12 px-8 bg-primary hover:bg-primary/90 text-background font-bold" onClick={() => document.getElementById('learning-path')?.scrollIntoView({behavior: 'smooth'})}>
              View Learning Path
            </Button>
            <Button size="lg" variant="outline" className="font-mono text-base h-12 px-8 border-white/20 hover:bg-white/5" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Connect With Me
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronRight className="h-6 w-6 rotate-90" />
      </motion.div>
    </section>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3">
      <span className="text-primary font-mono">#</span> {title}
    </h2>
    {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
    <Separator className="mt-6 bg-white/10" />
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container px-6 max-w-5xl mx-auto">
        <SectionHeading title="About Me" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am currently transitioning into the world of <span className="text-primary font-medium">DevOps</span>, driven by a deep passion for infrastructure automation and building reliable, scalable systems.
            </p>
            <p>
              My journey started in <span className="text-white font-medium">August 2025</span>. Since then, I've been immersing myself in the modern cloud-native stack, learning to bridge the gap between development and operations.
            </p>
            <p>
              I believe in "Everything as Code" and am excited to solve complex infrastructure challenges.
            </p>
          </div>
          
          <Card className="bg-black/40 border-primary/20 backdrop-blur font-mono text-sm overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/5">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-muted-foreground">farhan@devops:~/profile</span>
            </div>
            <CardContent className="p-6 text-green-400">
              <p><span className="text-blue-400">const</span> <span className="text-yellow-400">currentFocus</span> = <span className="text-orange-400">"DevOps Engineering"</span>;</p>
              <p className="mt-2"><span className="text-blue-400">const</span> <span className="text-yellow-400">started</span> = <span className="text-orange-400">"August 2025"</span>;</p>
              <p className="mt-2"><span className="text-blue-400">let</span> <span className="text-yellow-400">goals</span> = [</p>
              <p className="pl-4 text-orange-400">"Automate Everything",</p>
              <p className="pl-4 text-orange-400">"Master Kubernetes",</p>
              <p className="pl-4 text-orange-400">"Build Reliable Infra"</p>
              <p>];</p>
              <p className="mt-4 animate-pulse">_</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const LearningPath = () => {
  const steps = [
    { title: "Linux & Networking", status: "completed", icon: <SiLinux className="h-6 w-6" />, date: "Aug 2024 - Oct 2024" },
    { title: "Docker & Containers", status: "completed", icon: <SiDocker className="h-6 w-6" />, date: "Nov 2024 - Jan 2025" },
    { title: "AWS Cloud Fundamentals", status: "in-progress", icon: <FaAws className="h-6 w-6" />, date: "Dec 2024 - Present" },
    { title: "Python for DevOps", status: "in-progress", icon: <SiPython className="h-6 w-6" />, date: "Feb 2025 - Present" },
    { title: "Kubernetes Orchestration", status: "upcoming", icon: <SiKubernetes className="h-6 w-6" />, date: "Upcoming" },
    { title: "Ansible Configuration", status: "upcoming", icon: <SiAnsible className="h-6 w-6" />, date: "Upcoming" },
    { title: "Terraform IaC", status: "upcoming", icon: <SiTerraform className="h-6 w-6" />, date: "Upcoming" },
    { title: "Jenkins CI/CD", status: "upcoming", icon: <SiJenkins className="h-6 w-6" />, date: "Upcoming" },
    { title: "Prometheus & Grafana", status: "upcoming", icon: <SiPrometheus className="h-6 w-6" />, date: "Upcoming" },
  ];

  return (
    <section id="learning-path" className="py-24">
      <div className="container px-6 max-w-5xl mx-auto">
        <SectionHeading title="Learning Path" subtitle="My roadmap to mastering DevOps" />
        
        <div className="relative border-l-2 border-primary/20 ml-6 md:ml-12 space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 ${
                step.status === 'completed' ? 'bg-primary border-primary' : 
                step.status === 'in-progress' ? 'bg-background border-primary animate-pulse' : 
                'bg-background border-muted-foreground'
              }`} />
              
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                <h3 className={`text-xl font-bold ${step.status === 'upcoming' ? 'text-muted-foreground' : 'text-white'}`}>
                  {step.title}
                </h3>
                <Badge variant={
                  step.status === 'completed' ? 'default' : 
                  step.status === 'in-progress' ? 'secondary' : 'outline'
                } className="w-fit font-mono text-xs uppercase">
                  {step.status.replace('-', ' ')}
                </Badge>
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground mb-4">
                <span className="text-xl opacity-70">{step.icon}</span>
                <span className="font-mono text-sm">{step.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const currentStack = [
    { name: "Docker", icon: <SiDocker className="h-8 w-8 text-blue-500" /> },
    { name: "AWS EC2/S3", icon: <FaAws className="h-8 w-8 text-orange-500" /> },
    { name: "Linux", icon: <SiLinux className="h-8 w-8 text-yellow-500" /> },
    { name: "Git", icon: <SiGit className="h-8 w-8 text-red-500" /> },
  ];

  const nextStack = [
    { name: "Python", icon: <SiPython className="h-8 w-8 text-blue-400" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="h-8 w-8 text-blue-600" /> },
    { name: "Ansible", icon: <SiAnsible className="h-8 w-8 text-white" /> },
    { name: "Terraform", icon: <SiTerraform className="h-8 w-8 text-purple-500" /> },
    { name: "Jenkins", icon: <SiJenkins className="h-8 w-8 text-gray-300" /> },
    { name: "Grafana", icon: <SiGrafana className="h-8 w-8 text-orange-400" /> },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/10">
      <div className="container px-6 max-w-5xl mx-auto">
        <SectionHeading title="Tech Stack" />
        
        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-mono text-primary mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Currently Learning & Using
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {currentStack.map((skill) => (
                <Card key={skill.name} className="bg-card/50 border-white/5 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    {skill.icon}
                    <span className="font-medium text-center">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-mono text-muted-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-muted-foreground/50"></span>
              Next Up
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {nextStack.map((skill) => (
                <Card key={skill.name} className="bg-card/20 border-white/5 opacity-70 hover:opacity-100 transition-opacity">
                  <CardContent className="p-4 flex flex-col items-center gap-3">
                    <div className="scale-75">{skill.icon}</div>
                    <span className="text-sm text-center">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="container px-6 max-w-5xl mx-auto">
        <SectionHeading title="Certifications & Badges" />
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-card to-card/50 border-white/10 overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <FaAws className="h-32 w-32" />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FaAws className="text-orange-500 h-8 w-8" />
                AWS Educate
              </CardTitle>
              <CardDescription>Cloud Computing Fundamentals</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4 marker:text-primary">
                <li>Cloud Computing 101</li>
                <li>AWS Cloud Practitioner Essentials (In Progress)</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full border border-white/10 hover:bg-white/5 gap-2" asChild>
                <a href="https://www.credly.com/users/farhan-mendhro/badges" target="_blank" rel="noopener noreferrer">
                  View on Credly <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>

          <div className="flex flex-col justify-center items-center text-center p-8 border border-dashed border-white/10 rounded-lg">
            <SiCredly className="h-16 w-16 text-muted-foreground/30 mb-4" />
            <h3 className="text-xl font-bold mb-2">More Coming Soon</h3>
            <p className="text-muted-foreground mb-6">Working towards AWS Certified Cloud Practitioner and Solutions Architect Associate.</p>
            <Button variant="outline" size="sm" asChild>
               <a href="https://www.credly.com/users/farhan-mendhro/badges" target="_blank" rel="noopener noreferrer">
                  Check My Credly Profile
               </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/10">
      <div className="container px-6 max-w-5xl mx-auto">
        <SectionHeading title="Projects" />
        
        <div className="border border-dashed border-white/20 rounded-xl p-12 flex flex-col items-center justify-center text-center bg-card/30">
          <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <Code2 className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Work in Progress</h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Projects are currently being built as I progress through my learning path. 
            Expect to see Dockerized applications, CI/CD pipelines, and IaC implementations here soon.
          </p>
          <div className="flex gap-4">
            <Button disabled variant="secondary" className="opacity-50 cursor-not-allowed">
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-12 border-t border-white/10 bg-black/20">
      <div className="container px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="font-mono text-xl font-bold text-white mb-2">Farhan Mendhro</div>
          <p className="text-sm text-muted-foreground">DevOps Engineer in Training</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-white transition-colors">
            <SiGithub className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-[#0A66C2] transition-colors">
            <SiLinkedin className="h-6 w-6" />
          </a>
          <a href="mailto:contact@farhan.dev" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </a>
          <a href="https://www.credly.com/users/farhan-mendhro/badges" target="_blank" className="text-muted-foreground hover:text-[#FF6B00] transition-colors">
            <SiCredly className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="container px-6 mx-auto mt-8 text-center text-xs text-muted-foreground/50 font-mono">
        © {new Date().getFullYear()} Farhan Mendhro. Built with React & Tailwind.
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <About />
      <LearningPath />
      <Skills />
      <Certifications />
      <Projects />
      <Footer />
    </div>
  );
}
