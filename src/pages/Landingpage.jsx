import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiUsers, FiBook, FiCode, FiX, FiMenu } from 'react-icons/fi';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import madam from '../assets/madam.jpeg?w=800&format=webp';

// Lazy-loaded components
const StellarAssistant = lazy(() => import('../components/StellarAssistant'));
const Countdown = lazy(() => import('react-countdown'));
const TwitterFeed = lazy(() => import('../components/TwitterFeed'));

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome Stellar Enthusiast!');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Geolocation detection
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const country = getMockCountry(position.coords);
          setWelcomeMessage(`Hello from ${country || 'East Africa'}!`);
        },
        () => setWelcomeMessage('Welcome Stellar Enthusiast!')
      );
    }
  }, []);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark mode system preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      setDarkMode(e.matches);
    });
  }, []);

  const focusAreas = [
    {
      icon: <FiUsers className="text-3xl mb-4 text-yellow-400" />,
      title: "Partnership Building",
      description: "Forging strategic alliances to expand Stellar's ecosystem across East Africa"
    },
    {
      icon: <FiBook className="text-3xl mb-4 text-yellow-400" />,
      title: "Education Initiatives",
      description: "Empowering developers and businesses through blockchain education programs"
    },
    {
      icon: <FiCode className="text-3xl mb-4 text-yellow-400" />,
      title: "Developer Ecosystem",
      description: "Connecting and supporting Stellar developers in the region"
    }
  ];

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const connectWallet = () => {
    setWalletConnected(true);
    setTimeout(() => {
      setWalletConnected(false);
    }, 3000);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 bg-white text-gray-900 dark:text-white font-sans transition-colors duration-500">
        {/* Animated Particles Background */}
        <div className="fixed inset-0 -z-10 opacity-20 dark:opacity-40">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              particles: {
                number: { value: 30, density: { enable: true, value_area: 800 } },
                color: { value: "#F5B700" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 4, random: true },
                line_linked: { enable: true, distance: 150, color: "#F5B700", opacity: 0.2, width: 1 },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: { enable: true, rotateX: 600, rotateY: 1200 }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: { enable: true, mode: "grab" },
                  onclick: { enable: true, mode: "push" },
                  resize: true
                },
                modes: {
                  grab: { distance: 140, line_linked: { opacity: 1 } },
                  push: { particles_nb: 4 }
                }
              },
              retina_detect: true
            }}
          />
        </div>

        {/* Navigation */}
        <motion.nav 
          className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 dark:bg-gray-900/90 bg-white/90 backdrop-blur-md shadow-sm' : 'py-6'}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="container mx-auto px-6 flex justify-between items-center">
            <motion.div 
              className="text-2xl font-bold tracking-tight"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-yellow-400">Stellar</span> East Africa
            </motion.div>
            
            <div className="hidden md:flex space-x-8 items-center">
              {['home', 'leadership', 'initiatives', 'contact'].map((section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  className={`relative px-1 py-2 transition-colors ${activeSection === section ? 'text-yellow-400' : 'text-gray-700 dark:text-gray-300 hover:text-yellow-400'}`}
                  onClick={() => setActiveSection(section)}
                  whileHover={{ y: -2 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full"
                      layoutId="navIndicator"
                    />
                  )}
                </motion.a>
              ))}

              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 ml-4"
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? '☀️' : '🌙'}
              </motion.button>

              <motion.button
                onClick={connectWallet}
                className={`px-4 py-2 rounded-lg font-medium ml-4 ${walletConnected ? 'bg-green-500 text-white' : 'bg-yellow-400 text-gray-900'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {walletConnected ? 'Connected ✓' : 'Connect Wallet'}
              </motion.button>
            </div>

            <button 
              className="md:hidden text-2xl z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div 
                  className="fixed inset-0 bg-gray-900/95 backdrop-blur-md flex flex-col items-center justify-center z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {['home', 'leadership', 'initiatives', 'contact'].map((section) => (
                    <motion.a
                      key={`mobile-${section}`}
                      href={`#${section}`}
                      className="text-2xl py-4 px-8 text-white hover:text-yellow-400"
                      onClick={() => {
                        setActiveSection(section);
                        setMobileMenuOpen(false);
                      }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * ['home', 'leadership', 'initiatives', 'contact'].indexOf(section) }}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </motion.a>
                  ))}
                  <div className="flex space-x-6 mt-8">
                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                      <FiGithub size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                      <FiLinkedin size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                      <FiTwitter size={24} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-yellow-400">Hi I'm Sarah Wahinya</span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                President, <span className="text-yellow-400">Stellar East Africa Community</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {welcomeMessage} Driving adoption and innovation of Stellar technology through partnerships, education, and ecosystem development across East Africa.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.a 
                  href="#initiatives" 
                  className="cta-primary flex items-center"
                  whileHover={{ y: -2, boxShadow: "0 8px 25px rgba(245, 183, 0, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Initiatives <FiArrowRight className="ml-2" />
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="cta-secondary flex items-center"
                  whileHover={{ y: -2, backgroundColor: "rgba(245, 183, 0, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Our Community
                </motion.a>
              </motion.div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img 
                  src={madam}
                  alt="Sarah Wahinya"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-yellow-400 shadow-xl hover:shadow-2xl hover:shadow-yellow-400/30 transition-all"
                />
                <div className="absolute -z-10 top-0 left-0 w-full h-full rounded-full bg-yellow-400/20 blur-xl animate-pulse" />
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-yellow-400 font-bold">Currently:</span>
                  <p className="text-sm">Leading Digital Transformation</p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-8 h-14 rounded-3xl border-2 border-yellow-400 flex justify-center p-1">
              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-scroll" />
            </div>
          </motion.div>
        </section>

        {/* Leadership Focus Areas */}
        <section id="leadership" className="py-20 dark:bg-gray-800/50 bg-gray-100 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Leadership <span className="text-yellow-400">Focus Areas</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Key priorities driving Stellar's growth in East Africa
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {focusAreas.map((area, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-yellow-400 transition-all group text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                >
                  {area.icon}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Initiatives */}
        <section id="initiatives" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Community <span className="text-yellow-400">Initiatives</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Programs driving Stellar adoption and education
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-yellow-400 transition-all"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6">
                    <FiBook className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Stellar Academy</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Comprehensive training programs for developers and businesses to build on the Stellar network.
                  </p>
                  <motion.a 
                    href="#" 
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn More <FiArrowRight className="ml-2" />
                  </motion.a>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-yellow-400 transition-all"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6">
                    <FiUsers className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Developer Connect</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Regular meetups and hackathons to foster collaboration among Stellar developers in the region.
                  </p>
                  <motion.a 
                    href="#" 
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Join Events <FiArrowRight className="ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Upcoming Events */}
            <motion.div 
              className="bg-gradient-to-r from-yellow-400/10 to-gray-800/10 dark:from-yellow-400/5 dark:to-gray-800/20 p-8 rounded-xl border border-gray-200 dark:border-gray-700 mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Upcoming Events</h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    <Suspense fallback="00">
                      <Countdown 
                        date={new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)} 
                        renderer={({ days }) => days}
                      />
                    </Suspense>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    <Suspense fallback="00">
                      <Countdown 
                        date={new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)} 
                        renderer={({ hours }) => hours}
                      />
                    </Suspense>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    <Suspense fallback="00">
                      <Countdown 
                        date={new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)} 
                        renderer={({ minutes }) => minutes}
                      />
                    </Suspense>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Minutes</div>
                </div>
              </div>
              <p className="text-center mt-6 text-gray-700 dark:text-gray-300">
                Until the next Stellar East Africa Hackathon in Nairobi
              </p>
            </motion.div>
          </div>
        </section>

        {/* Twitter Feed Section */}
        <section className="py-12 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-bold mb-8 text-center">Latest from <span className="text-yellow-400">Our Community</span></h3>
            <Suspense fallback={<div className="text-center py-8 text-yellow-400">Loading tweets...</div>}>
              <TwitterFeed username="StellarEastAfrica" limit={3} />
            </Suspense>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get <span className="text-yellow-400">Involved</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Join our growing community of developers and innovators
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Newsletter Signup</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full cta-primary mt-6 flex items-center justify-center"
                    whileHover={{ y: -2, boxShadow: "0 8px 25px rgba(245, 183, 0, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe <FiArrowRight className="ml-2" />
                  </motion.button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-yellow-400/10 p-3 rounded-lg mr-4">
                      <FiUsers className="text-yellow-400 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Community Forum</h4>
                      <p className="text-gray-600 dark:text-gray-400">Join discussions with other Stellar developers</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-yellow-400/10 p-3 rounded-lg mr-4">
                      <FiCode className="text-yellow-400 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">GitHub</h4>
                      <p className="text-gray-600 dark:text-gray-400">Contribute to our open-source projects</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-yellow-400/10 p-3 rounded-lg mr-4">
                      <FiBook className="text-yellow-400 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Documentation</h4>
                      <p className="text-gray-600 dark:text-gray-400">Learn how to build on Stellar</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 mt-8">
                  <a href="#" className="social-icon">
                    <FiGithub size={24} />
                  </a>
                  <a href="#" className="social-icon">
                    <FiLinkedin size={24} />
                  </a>
                  <a href="#" className="social-icon">
                    <FiTwitter size={24} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stellar Assistant Chatbot */}
        <Suspense fallback={null}>
          <StellarAssistant />
        </Suspense>

        {/* Footer */}
        <footer className="dark:bg-gray-900/80 bg-gray-100 backdrop-blur-md py-12 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold">
                  <span className="text-yellow-400">Stellar</span> East Africa
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Driving blockchain innovation across the region</p>
              </div>

              <div className="flex space-x-6">
                <a href="#" className="social-icon">
                  <FiGithub size={24} />
                </a>
                <a href="#" className="social-icon">
                  <FiLinkedin size={24} />
                </a>
                <a href="#" className="social-icon">
                  <FiTwitter size={24} />
                </a>
              </div>
            </div>

            <div className="border-t border-gray-300 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Stellar East Africa Community. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        
        .animate-scroll {
          animation: scroll 2s infinite;
        }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          background-color: #F5B700;
          color: #0D1A40;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.3s;
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          border: 2px solid #F5B700;
          color: #F5B700;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.3s;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(245, 183, 0, 0.1);
          color: #F5B700;
          transition: all 0.3s;
        }

        .social-icon:hover {
          background-color: rgba(245, 183, 0, 0.2);
          transform: translateY(-3px);
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

// Mock function for geolocation
const getMockCountry = (coords) => {
  const countries = ['Kenya', 'Tanzania', 'Uganda', 'Rwanda', 'Burundi', 'South Sudan'];
  return countries[Math.floor(Math.random() * countries.length)];
};

export default LandingPage;