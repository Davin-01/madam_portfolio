import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Mail, ChevronDown, Globe, Users, Briefcase, Award, ArrowRight, Star, Sparkle } from 'lucide-react';
import pic1 from '../assets/madam.jpeg';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'leadership', 'impact', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // X (Twitter) Icon Component
  const XIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-800 backdrop-blur-xl shadow-2xl border-b border-yellow-500/30' : 'bg-gray-700'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center font-bold text-black text-sm shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition-transform">
                  <Sparkle size={20} />
                </div>
                <h1 className="text-xl font-bold text-yellow-500 group-hover:text-yellow-400 transition-colors">
                  Sarah Wahinya
                </h1>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2 bg-yellow-500/5 backdrop-blur-md rounded-full px-2 py-2 border border-yellow-500/20">
              {['home', 'about', 'leadership', 'impact', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 font-medium px-6 py-2 rounded-full ${
                    activeSection === item 
                      ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/30' 
                      : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-500/10'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Social Links Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <a 
                href="mailto:sarahwahinya1@gmail.com"
                className="p-2.5 bg-yellow-500/10 rounded-full border border-yellow-500/20 hover:bg-yellow-500/20 hover:border-yellow-500/40 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={18} className="text-yellow-500" />
              </a>
              <a 
                href="https://linkedin.com/in/sarah-wahinya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-yellow-500/10 rounded-full border border-yellow-500/20 hover:bg-yellow-500/20 hover:border-yellow-500/40 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-yellow-500" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-yellow-500/20 shadow-2xl">
            <div className="px-6 py-6 space-y-3">
              {['home', 'about', 'leadership', 'impact', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left py-3 px-4 capitalize transition-all rounded-lg font-medium ${
                    activeSection === item
                      ? 'bg-yellow-500 text-black'
                      : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-500/10'
                  }`}
                >
                  {item}
                </button>
              ))}
              <div className="pt-4 border-t border-yellow-500/20 flex gap-3">
                <a 
                  href="mailto:sarahwahinya1@gmail.com"
                  className="flex-1 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20 hover:bg-yellow-500/20 transition-all text-center"
                >
                  <Mail size={20} className="text-yellow-500 mx-auto" />
                </a>
                <a 
                  href="https://linkedin.com/in/sarah-wahinya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20 hover:bg-yellow-500/20 transition-all text-center"
                >
                  <Linkedin size={20} className="text-yellow-500 mx-auto" />
                </a>
                <a 
                  href="https://x.com/sarahwahinya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20 hover:bg-yellow-500/20 transition-all text-center"
                >
                  <XIcon size={20} className="text-yellow-500 mx-auto" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 p-0.5 shadow-2xl shadow-yellow-500/30">
              <div className="w-full h-full rounded-full bg-black overflow-hidden border-2 border-yellow-500/30">
                <img 
                  src={pic1}
                  alt="Sarah Wahinya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg border-2 border-black">
              <Globe className="text-black" size={24} />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-500">
            Sarah Wahinya
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-3">
            President, Stellar East Africa | Founder, Zu'Co Ltd
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Driving blockchain adoption across East Africa and building inclusive pathways 
            for African talent to thrive in global Web3
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="px-5 py-2 bg-yellow-500/10 rounded-full border border-yellow-500/30 text-yellow-500 font-medium">
              Blockchain Leader
            </span>
            <span className="px-5 py-2 bg-yellow-500/10 rounded-full border border-yellow-500/30 text-yellow-500 font-medium">
              Ecosystem Architect
            </span>
            <span className="px-5 py-2 bg-yellow-500/10 rounded-full border border-yellow-500/30 text-yellow-500 font-medium">
              Global Connector
            </span>
          </div>

          <div className="flex justify-center gap-4">
            <a 
              href="mailto:sarahwahinya1@gmail.com" 
              className="p-3 bg-yellow-500/10 rounded-full border border-yellow-500/30 hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all"
              aria-label="Email"
            >
              <Mail size={24} className="text-yellow-500" />
            </a>
            <a 
              href="https://linkedin.com/in/sarah-wahinya" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-yellow-500/10 rounded-full border border-yellow-500/30 hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-yellow-500" />
            </a>
            <a 
              href="https://x.com/sarahwahinya" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-yellow-500/10 rounded-full border border-yellow-500/30 hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all"
              aria-label="X (Twitter)"
            >
              <XIcon size={24} className="text-yellow-500" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="mt-12 animate-bounce"
          >
            <ChevronDown size={32} className="text-yellow-500" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-4 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-yellow-500">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                As an African woman, I'm on a mission to transform the blockchain landscape 
                across East Africa. Through my role as President of Stellar East Africa and as Founder 
                of Zu'Co Ltd, I'm bridging the gap between African innovation and global Web3 opportunities.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in the power of connection and collaboration. As a passionate traveler and 
                ecosystem architect, I've dedicated my career to creating inclusive pathways that enable 
                African talent to not just participate, but to lead in the global blockchain revolution.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My work focuses on education, community building, and creating sustainable blockchain 
                solutions that address real African challenges while connecting our innovators to the 
                world stage.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-yellow-500/5 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-500/10 rounded-lg">
                    <Globe size={28} className="text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-500">Global Vision</h3>
                    <p className="text-gray-400">Connecting African innovation with worldwide Web3 opportunities</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-yellow-500/5 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-500/10 rounded-lg">
                    <Users size={28} className="text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-500">Community First</h3>
                    <p className="text-gray-400">Building inclusive ecosystems for African blockchain talent</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-yellow-500/5 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-500/10 rounded-lg">
                    <Award size={28} className="text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-500">Impact Driven</h3>
                    <p className="text-gray-400">Creating real solutions for African challenges through blockchain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="min-h-screen flex items-center py-20 px-4 relative">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-yellow-500">Leadership</span> Roles
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-yellow-500/5 rounded-2xl border border-yellow-500/30 hover:border-yellow-500/50 transition-all">
              <div className="w-14 h-14 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6">
                <Globe size={28} className="text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">President</h3>
              <p className="text-xl text-yellow-500 mb-4">Stellar East Africa</p>
              <p className="text-gray-400 leading-relaxed">
                Leading the strategic vision and growth of Stellar's blockchain ecosystem across 
                East Africa. Fostering partnerships, driving adoption, and empowering developers 
                and businesses to build on the Stellar network.
              </p>
            </div>

            <div className="p-8 bg-yellow-500/5 rounded-2xl border border-yellow-500/30 hover:border-yellow-500/50 transition-all">
              <div className="w-14 h-14 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6">
                <Briefcase size={28} className="text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Founder & CEO</h3>
              <p className="text-xl text-yellow-500 mb-4">Zu'Co Ltd</p>
              <p className="text-gray-400 leading-relaxed">
                Building innovative blockchain solutions and consulting services that bridge 
                traditional African businesses with Web3 technologies. Creating sustainable 
                pathways for digital transformation and financial inclusion.
              </p>
            </div>
          </div>

          <div className="p-8 bg-yellow-500/5 rounded-2xl border border-yellow-500/20">
            <h3 className="text-2xl font-bold mb-8 text-center">Core Focus Areas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users size={24} className="text-yellow-500" />
                </div>
                <h4 className="font-semibold mb-2 text-yellow-500">Community Building</h4>
                <p className="text-sm text-gray-400">Growing vibrant blockchain communities across East Africa</p>
              </div>
              <div className="text-center p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award size={24} className="text-yellow-500" />
                </div>
                <h4 className="font-semibold mb-2 text-yellow-500">Education & Training</h4>
                <p className="text-sm text-gray-400">Empowering African talent with Web3 skills and knowledge</p>
              </div>
              <div className="text-center p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe size={24} className="text-yellow-500" />
                </div>
                <h4 className="font-semibold mb-2 text-yellow-500">Global Partnerships</h4>
                <p className="text-sm text-gray-400">Connecting African innovation with international opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="min-h-screen flex items-center py-20 px-4 relative">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Creating <span className="text-yellow-500">Impact</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 bg-yellow-500/5 rounded-xl border border-yellow-500/30 text-center hover:border-yellow-500/50 transition-all">
              <div className="text-5xl font-bold text-yellow-500 mb-2">1000+</div>
              <div className="text-gray-300">Developers Trained</div>
            </div>
            <div className="p-8 bg-yellow-500/5 rounded-xl border border-yellow-500/30 text-center hover:border-yellow-500/50 transition-all">
              <div className="text-5xl font-bold text-yellow-500 mb-2">50+</div>
              <div className="text-gray-300">Partnerships Formed</div>
            </div>
            <div className="p-8 bg-yellow-500/5 rounded-xl border border-yellow-500/30 text-center hover:border-yellow-500/50 transition-all">
              <div className="text-5xl font-bold text-yellow-500 mb-2">10</div>
              <div className="text-gray-300">Countries Reached</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-yellow-500/5 rounded-xl border-l-4 border-yellow-500 hover:bg-yellow-500/10 transition-all">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-3 text-yellow-500">
                <ArrowRight size={24} />
                Blockchain Adoption
              </h3>
              <p className="text-gray-400">
                Spearheading initiatives that make blockchain technology accessible and practical 
                for East African businesses, from SMEs to large enterprises, driving real-world adoption 
                and digital transformation.
              </p>
            </div>

            <div className="p-6 bg-yellow-500/5 rounded-xl border-l-4 border-yellow-500 hover:bg-yellow-500/10 transition-all">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-3 text-yellow-500">
                <ArrowRight size={24} />
                Talent Development
              </h3>
              <p className="text-gray-400">
                Creating comprehensive training programs and mentorship opportunities that equip 
                African developers and entrepreneurs with the skills needed to excel in the global 
                Web3 ecosystem.
              </p>
            </div>

            <div className="p-6 bg-yellow-500/5 rounded-xl border-l-4 border-yellow-500 hover:bg-yellow-500/10 transition-all">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-3 text-yellow-500">
                <ArrowRight size={24} />
                Financial Inclusion
              </h3>
              <p className="text-gray-400">
                Leveraging blockchain technology to create inclusive financial solutions that serve 
                the unbanked and underbanked populations across East Africa, promoting economic 
                empowerment and opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-4 relative">
        <div className="max-w-4xl mx-auto w-full text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's <span className="text-yellow-500">Connect</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Interested in blockchain adoption in East Africa? Looking to collaborate on Web3 initiatives? 
            Let's build the future together.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:sarahwahinya1@gmail.com" 
              className="p-6 bg-yellow-500/5 rounded-xl border border-yellow-500/30 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all group"
            >
              <Mail size={32} className="text-yellow-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-yellow-500">Email</h3>
              <p className="text-sm text-gray-400">sarah@sarahwahinya.com</p>
            </a>

            <a 
              href="https://linkedin.com/in/sarah-wahinya" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-yellow-500/5 rounded-xl border border-yellow-500/30 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all group"
            >
              <Linkedin size={32} className="text-yellow-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-yellow-500">LinkedIn</h3>
              <p className="text-sm text-gray-400">Connect professionally</p>
            </a>

            <a 
              href="https://x.com/sarahwahinya" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-yellow-500/5 rounded-xl border border-yellow-500/30 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all group"
            >
              <XIcon size={32} className="text-yellow-500 mx-auto" />
              <h3 className="font-semibold mb-2 text-yellow-500 mt-3">X (Twitter)</h3>
              <p className="text-sm text-gray-400">Follow my journey</p>
            </a>
          </div>

          <div className="p-8 bg-yellow-500/5 rounded-2xl border border-yellow-500/30">
            <h3 className="text-2xl font-bold mb-6">Available For</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-5 py-2 bg-black rounded-full border border-yellow-500/40 text-yellow-500 font-medium">Speaking Engagements</span>
              <span className="px-5 py-2 bg-black rounded-full border border-yellow-500/40 text-yellow-500 font-medium">Consulting</span>
              <span className="px-5 py-2 bg-black rounded-full border border-yellow-500/40 text-yellow-500 font-medium">Partnerships</span>
              <span className="px-5 py-2 bg-black rounded-full border border-yellow-500/40 text-yellow-500 font-medium">Mentorship</span>
              <span className="px-5 py-2 bg-black rounded-full border border-yellow-500/40 text-yellow-500 font-medium">Collaborations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-yellow-500/20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="text-yellow-500" size={16} />
            <p className="text-yellow-500 font-medium">&copy; 2025 Sarah Wahinya. All rights reserved.</p>
            <Star className="text-yellow-500" size={16} />
          </div>
          <p className="text-sm text-gray-400 mt-2">Building the future of blockchain in East Africa</p>
        </div>
      </footer>
    </div>
  );
}