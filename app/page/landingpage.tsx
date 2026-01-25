'use client';

import { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowLeftRight,
  Zap,
  Shield,
  Code,
  Menu,
  X,
  Rocket,
  TrendingUp,
  Users,
  Globe,
  CheckCircle,
  Sparkles,
  Bot,
  Cpu,
  Brain,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

// Constants
const DOCS_URL = 'https://web3nova-bb969d43.mintlify.app/';
const NAVIGATION_LINKS = {
  docs: DOCS_URL,
  pricing: DOCS_URL,
  support: DOCS_URL,
  api: DOCS_URL,
  guides: DOCS_URL,
  blog: DOCS_URL,
  contact: DOCS_URL,
};

// Stacks Logo Component
interface LogoProps {
  className?: string;
}

const StacksLogo = ({ className = 'w-8 h-8' }: LogoProps) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="stacksGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F77F00" />
        <stop offset="100%" stopColor="#FCBF49" />
      </linearGradient>
    </defs>
    <rect x="40" y="40" width="50" height="50" fill="url(#stacksGradient)" rx="4" />
    <rect x="40" y="105" width="50" height="50" fill="url(#stacksGradient)" rx="4" />
    <rect x="105" y="72.5" width="50" height="50" fill="url(#stacksGradient)" rx="4" />
  </svg>
);

// Bridge Animation Component
interface BridgeAnimatorProps {
  isSwapping: boolean;
  fromChain: 'ethereum' | 'stacks';
}

const BridgeAnimator = ({ isSwapping, fromChain }: BridgeAnimatorProps) => {
  return (
    <div className="relative h-64 flex items-center justify-between px-6">
      {/* From Chain */}
      <div className={`flex flex-col items-center space-y-4 transition-all duration-500 ${isSwapping && fromChain === 'ethereum' ? 'opacity-50' : 'opacity-100'}`}>
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg transition-transform ${isSwapping && fromChain === 'ethereum' ? 'scale-95' : 'scale-100'}`}>
          <svg className="w-12 h-12 text-white" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 2L2 9v8c0 7 14 12 14 12s14-5 14-12V9l-14-7zm0 4l9.5 5v6c0 4.5-9.5 8.5-9.5 8.5S6.5 21.5 6.5 17v-6L16 6z" />
          </svg>
        </div>
        <span className="text-sm font-semibold text-gray-700">Ethereum</span>
        <div className="text-center">
          <p className="text-xs text-gray-600 mb-1">USDC</p>
          <p className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text">1,000</p>
        </div>
      </div>

      {/* Bridge Animation */}
      <div className="flex flex-col items-center space-y-4">
        <div className={`relative w-16 h-16 ${isSwapping ? 'animate-spin' : ''}`} style={{
          animationDuration: isSwapping ? '2s' : '0s'
        }}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <ArrowLeftRight className="w-8 h-8 text-orange-500" />
            </div>
          </div>
        </div>
        <span className="text-xs font-medium text-orange-600 animate-pulse">
          {isSwapping ? 'Bridging...' : 'Ready'}
        </span>
      </div>

      {/* To Chain */}
      <div className={`flex flex-col items-center space-y-4 transition-all duration-500 ${isSwapping && fromChain === 'stacks' ? 'opacity-50' : 'opacity-100'}`}>
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-lg transition-transform ${isSwapping && fromChain === 'stacks' ? 'scale-95' : 'scale-100'}`}>
          <StacksLogo className="w-12 h-12" />
        </div>
        <span className="text-sm font-semibold text-gray-700">Stacks</span>
        <div className="text-center">
          <p className="text-xs text-gray-600 mb-1">USDCx</p>
          <p className="text-xl font-bold text-transparent bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text">1,000</p>
        </div>
      </div>
    </div>
  );
};

// Navigation Component
interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navigation = ({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) => (
  <nav className="bg-white/80 backdrop-blur-xl border-b border-orange-200/40 sticky top-0 z-50 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <StacksLogo className="w-8 h-8 md:w-10 md:h-10" />
          <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
            Stacks Bridge
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <a
            href={NAVIGATION_LINKS.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-orange-600 font-medium transition-colors flex items-center space-x-1"
          >
            <span>Docs</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={NAVIGATION_LINKS.pricing}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-orange-600 font-medium transition-colors flex items-center space-x-1"
          >
            <span>Pricing</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={NAVIGATION_LINKS.support}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-orange-600 font-medium transition-colors flex items-center space-x-1"
          >
            <span>Support</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white px-6 py-2.5 rounded-full font-semibold flex items-center space-x-2 shadow-lg shadow-orange-500/30 transition-all hover:shadow-xl hover:shadow-orange-500/40">
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-orange-100 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <div className="lg:hidden bg-white border-t border-orange-200 py-4">
        <div className="px-4 space-y-4">
          <a
            href={NAVIGATION_LINKS.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-semibold text-gray-900 hover:text-orange-600"
          >
            Docs
          </a>
          <a
            href={NAVIGATION_LINKS.pricing}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-semibold text-gray-900 hover:text-orange-600"
          >
            Pricing
          </a>
          <a
            href={NAVIGATION_LINKS.support}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-semibold text-gray-900 hover:text-orange-600"
          >
            Support
          </a>
          <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    )}
  </nav>
);

// Hero Section Component
const HeroSection = () => {
  const [isSwapping, setIsSwapping] = useState(false);
  const [fromChain, setFromChain] = useState<'ethereum' | 'stacks'>('ethereum');

  const handleBridge = () => {
    setIsSwapping(true);
    setTimeout(() => {
      setIsSwapping(false);
    }, 2000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Hero Content */}
        <div className="order-2 lg:order-1 space-y-8">
          <div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 border border-orange-200/50">
              <Sparkles className="w-4 h-4" />
              <span>AI-POWERED BRIDGE • 2025</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
              Bridge USDC to{' '}
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 bg-clip-text text-transparent animate-pulse">
                Bitcoin's Layer 2
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Seamlessly move Circle-backed USDC between Ethereum and Stacks. Powered by AI agents, verified by xReserve, secured by cryptography. Production-ready.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Zap, text: 'Sub-second settlement' },
              { icon: Shield, text: '1:1 Circle backing' },
              { icon: CheckCircle, text: 'Zero slippage' },
              { icon: Cpu, text: 'AI-optimized routes' },
            ].map((feature) => (
              <div key={feature.text} className="flex items-center space-x-3 p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
                <feature.icon className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 shadow-xl shadow-orange-500/30 transform hover:scale-105 transition-all group">
              <span>Start Bridging</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-orange-300 hover:border-orange-500 hover:bg-orange-50 text-orange-700 px-8 py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 transition-all"
            >
              <span>View Docs</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Interactive Bridge */}
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-purple-200 to-orange-200 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100">
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-4 border-b border-orange-100">
                <h3 className="text-lg font-bold text-gray-900">Bridge Interface</h3>
              </div>

              {/* Bridge Content */}
              <div className="p-8">
                <BridgeAnimator isSwapping={isSwapping} fromChain={fromChain} />

                {/* Swap Button */}
                <div className="flex justify-center my-8">
                  <button
                    onClick={() => setFromChain(fromChain === 'ethereum' ? 'stacks' : 'ethereum')}
                    className="p-3 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 hover:from-orange-200 hover:to-amber-200 transition-all transform hover:scale-110"
                    disabled={isSwapping}
                  >
                    <ArrowLeftRight className="w-6 h-6 text-orange-600" />
                  </button>
                </div>

                {/* Bridge Button */}
                <button
                  onClick={handleBridge}
                  disabled={isSwapping}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  {isSwapping ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Bridging...</span>
                    </>
                  ) : (
                    <>
                      <span>Bridge Now</span>
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-orange-100">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-600">$2.4M</p>
                    <p className="text-xs text-gray-600 mt-1">24h Volume</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-600">1.2s</p>
                    <p className="text-xs text-gray-600 mt-1">Avg Time</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-600">99.9%</p>
                    <p className="text-xs text-gray-600 mt-1">Uptime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Feature Card Component
interface FeatureCardProps {
  icon: React.ComponentType<{ className: string }>;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl border border-orange-100 hover:border-orange-300 transition-all transform hover:-translate-y-2">
    <div className="bg-gradient-to-br from-orange-100 to-amber-50 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-orange-600" />
    </div>
    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 text-sm sm:text-base">{description}</p>
  </div>
);

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Sub-second settlements powered by AI agents analyzing network conditions in real-time.',
    },
    {
      icon: Shield,
      title: 'Fully Secured',
      description: 'Circle xReserve backing with cryptographic attestations. 1:1 USDC guarantee.',
    },
    {
      icon: Brain,
      title: 'AI-Optimized',
      description: 'Intelligent routing finds the cheapest path. Auto-retry on failures. 99.9% success rate.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Why Choose Stacks Bridge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The most advanced USDC bridge with AI agents, zero slippage, and instant settlement
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  const stats = [
    { value: '1,200+', label: 'Active Bridges' },
    { value: '$124M', label: 'Total Bridged' },
    { value: '99.9%', label: 'Success Rate' },
    { value: '1.2s', label: 'Avg Settlement' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-orange-100 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Use Cases Section Component
const UseCasesSection = () => {
  const useCases = [
    {
      icon: TrendingUp,
      title: 'DeFi Trading',
      description: 'Swap assets across chains instantly with best execution.',
    },
    {
      icon: Users,
      title: 'Cross-Border Payments',
      description: 'Send USDC globally with minimal fees and instant settlement.',
    },
    {
      icon: Rocket,
      title: 'Smart Contracts',
      description: 'Access liquidity for apps building on Stacks.',
    },
    {
      icon: Globe,
      title: 'Remittances',
      description: 'Low-cost international money transfers with zero slippage.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Built for Modern Finance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enable any use case with seamless USDC liquidity
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="group bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-orange-100 to-amber-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <useCase.icon className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
              <p className="text-gray-600 text-base">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => (
  <section className="py-20 sm:py-28 md:py-36 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
    </div>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
        Ready to Bridge?
      </h2>
      <p className="text-xl sm:text-2xl text-orange-100 mb-12 leading-relaxed">
        Join 1,200+ developers building on Stacks. Zero fees on first bridge.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button className="bg-white text-orange-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 flex items-center justify-center space-x-2 shadow-2xl transform hover:scale-105 transition-all">
          <span>Launch Bridge</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        <a
          href={DOCS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 flex items-center justify-center space-x-2 transition-all"
        >
          <span>Read Docs</span>
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      <p className="text-orange-100 text-sm">
        ✓ No credit card required • ✓ 5-minute setup • ✓ 24/7 support
      </p>
    </div>
  </section>
);

// Footer Component
const Footer = () => {
  const footerLinks = [
    { 
      title: 'Product', 
      links: [
        { label: 'API', href: NAVIGATION_LINKS.api, external: true }, 
        { label: 'Pricing', href: NAVIGATION_LINKS.pricing, external: true }, 
        { label: 'Status', href: DOCS_URL, external: true }
      ] 
    },
    { 
      title: 'Resources', 
      links: [
        { label: 'Docs', href: NAVIGATION_LINKS.docs, external: true }, 
        { label: 'Guides', href: NAVIGATION_LINKS.guides, external: true }, 
        { label: 'Support', href: NAVIGATION_LINKS.support, external: true }
      ] 
    },
    { 
      title: 'Company', 
      links: [
        { label: 'About', href: DOCS_URL, external: true }, 
        { label: 'Blog', href: NAVIGATION_LINKS.blog, external: true }, 
        { label: 'Contact', href: NAVIGATION_LINKS.contact, external: true }
      ] 
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <StacksLogo className="w-8 h-8" />
              <span className="text-white text-lg font-bold">Stacks Bridge</span>
            </div>
            <p className="text-sm text-gray-500">AI-powered USDC bridge for Bitcoin Layer 2.</p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm hover:text-orange-400 transition-colors flex items-center space-x-1"
                    >
                      <span>{link.label}</span>
                      {link.external && <ExternalLink className="w-3 h-3" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p>© 2025 Stacks Bridge. All rights reserved.</p>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Global Styles
const GlobalStyles = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 900;
    }

    button {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }

    .animate-shimmer {
      animation: shimmer 2s infinite;
    }
  `}</style>
);

// Main App Component
export default function StacksBridge() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 overflow-hidden">
      <GlobalStyles />
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <UseCasesSection />
      <CTASection />
      <Footer />
    </div>
  );
}