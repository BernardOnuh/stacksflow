'use client';

import { useState, useEffect } from 'react';
import {
  ArrowRight,
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
  Play,
  Sparkles,
  Bot,
  Cpu,
  Brain,
} from 'lucide-react';

// Constants
const DOCS_URL = 'https://web3nova-bb969d43.mintlify.app/api-reference';
const NAVIGATION_LINKS = {
  docs: DOCS_URL,
  pricing: DOCS_URL,
  support: DOCS_URL,
};

// Logo Component
interface LogoProps {
  className?: string;
}

const USDCLogo = ({ className = 'w-8 h-8' }: LogoProps) => (
  <svg
    className={className}
    viewBox="0 0 2000 2000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  
  </svg>
);

// Navigation Component
interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navigation = ({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) => (
  <>
    <nav className="bg-white/80 backdrop-blur-xl border-b border-orange-200/40 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <USDCLogo className="w-8 h-8 md:w-10 md:h-10" />
            <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              StacksFlow
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href={NAVIGATION_LINKS.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Docs
            </a>
            <a
              href={NAVIGATION_LINKS.pricing}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Pricing
            </a>
            <a
              href={NAVIGATION_LINKS.support}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Support
            </a>
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white px-6 py-2.5 rounded-full font-semibold flex items-center space-x-2 shadow-lg shadow-orange-500/30 transition-all hover:shadow-xl"
            >
              <span>Get API Key</span>
              <ArrowRight className="w-4 h-4" />
            </a>
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
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg block text-center"
            >
              Get API Key
            </a>
          </div>
        </div>
      )}
    </nav>
  </>
);

// Hero Section Component
const HeroSection = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Hero Content */}
      <div className="order-2 lg:order-1">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 border border-orange-200/50">
          <Bot className="w-4 h-4" />
          <span>AI-POWERED SETTLEMENT • </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Your bridge to the{' '}
          <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 bg-clip-text text-transparent">
            Bitcoin economy
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
          Bring Circle-backed USDC to Stacks in one API call. AI agents handle routing, verification, and settlement. Zero complexity. Production-ready in minutes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 shadow-xl shadow-orange-500/30 transform hover:scale-105 transition-all"
          >
            <span>Start Building</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-300 hover:border-orange-500 hover:bg-orange-50 text-gray-700 hover:text-orange-600 px-8 py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 transition-all"
          >
            <Play className="w-5 h-5" />
            <span>View Docs</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span>5-minute setup</span>
          </div>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="relative order-1 lg:order-2">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
        <div className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-amber-600 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute border-2 border-white rounded-full"
                style={{
                  width: `${(i + 1) * 80}px`,
                  height: `${(i + 1) * 80}px`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: 0.1 - i * 0.01,
                }}
              ></div>
            ))}
          </div>
          <div className="relative z-10 flex items-center justify-center">
            <div className="animate-bounce">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 sm:p-8">
                <div className="bg-white rounded-full p-6 sm:p-8 shadow-2xl">
                  <div className="text-orange-500 text-6xl sm:text-7xl font-bold">₿</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-white/95 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2 shadow-lg">
            <div className="text-xs text-gray-600 mb-1">Live Settlements</div>
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              $2.4M
            </div>
          </div>
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-white/95 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2 shadow-lg">
            <div className="text-xs text-gray-600 mb-1">Builders</div>
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              1,200+
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Feature Card Component
interface FeatureCardProps {
  icon: React.ComponentType<{ className: string }>;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 hover:bg-white/15 transition-all hover:border-white/40">
    <div className="bg-white/20 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6">
      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
    </div>
    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-orange-100 text-sm sm:text-base">{description}</p>
  </div>
);

// AI Agent Section Component
const AIAgentSection = () => (
  <section className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 py-16 sm:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6">
          <Brain className="w-4 h-4" />
          <span>INTELLIGENT AUTOMATION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          AI Agents Solve the Complexity
        </h2>
        <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto">
          Smart routing, auto verification, and error recovery. Our AI agents run 24/7, ensuring 99.9% settlement success.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <FeatureCard
          icon={Cpu}
          title="Smart Routing"
          description="Real-time network analysis selects optimal paths. Lowest fees, fastest execution, guaranteed."
        />
        <FeatureCard
          icon={Shield}
          title="Auto Verification"
          description="Every transaction verified against Circle's xReserve. 1:1 backing guaranteed before settlement."
        />
        <FeatureCard
          icon={Zap}
          title="Error Recovery"
          description="Automatic retry with adjusted parameters. 99.9% success rate without manual intervention."
        />
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full">
          <Bot className="w-5 h-5" />
          <span className="font-semibold">Trained on 10M+ cross-chain settlements</span>
        </div>
      </div>
    </div>
  </section>
);

// Stats Section Component
const StatsSection = () => {
  const stats = [
    { label: 'Active Builders', value: '1,200+' },
    { label: 'Daily Volume', value: '$2.4M' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'Avg Settlement', value: '3.2s' },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Feature Item Component
interface FeatureItemProps {
  icon: React.ComponentType<{ className: string }>;
  title: string;
  description: string;
  features: string[];
}

const FeatureItem = ({ icon: Icon, title, description, features }: FeatureItemProps) => (
  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 transform hover:-translate-y-2">
    <div className="bg-gradient-to-br from-orange-100 to-amber-50 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-orange-600" />
    </div>
    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 text-sm sm:text-base mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature) => (
        <li key={feature} className="flex items-start space-x-2 text-gray-600 text-sm sm:text-base">
          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI Settlement Agents',
      description: 'Intelligent routing and gas optimization, fully automated.',
      features: ['Auto-retry failed txs', 'Gas optimization', 'Real-time status'],
    },
    {
      icon: Shield,
      title: 'Circle xReserve Trust',
      description: 'Real USDC backed by Circle with cryptographic attestations.',
      features: ['Proof of reserves', 'No exploits possible', 'Direct integration'],
    },
    {
      icon: Code,
      title: 'Developer-First API',
      description: 'Clean API with full TypeScript support and webhooks.',
      features: ['TypeScript SDK', 'Webhooks', '5-min integration'],
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for builders
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">Everything you need in one API</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => (
            <FeatureItem
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              features={feature.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Code Section Component
const CodeSection = () => (
  <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Ship faster</h2>
        <p className="text-lg sm:text-xl text-gray-400">From Ethereum to Stacks in 10 lines</p>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-8 overflow-x-auto shadow-2xl border border-gray-700 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-gray-500 text-xs sm:text-sm">settlement.ts</div>
        </div>
        <pre className="text-green-400 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">{`import { USDCxClient } from '@stacks/usdcx';

const client = new USDCxClient({
  apiKey: process.env.USDCX_API_KEY
});

const settlement = await client.bridge({
  amount: '1000.00',
  fromChain: 'ethereum',
  toChain: 'stacks',
  autoSettle: true
});

console.log('Settled:', settlement.txId);`}</pre>
      </div>

      <div className="text-center">
        <a
          href={DOCS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg shadow-xl shadow-orange-500/30 transition-all hover:shadow-2xl inline-block"
        >
          View Documentation
        </a>
      </div>
    </div>
  </section>
);

// Use Case Card Component
interface UseCaseCardProps {
  icon: React.ComponentType<{ className: string }>;
  title: string;
  description: string;
}

const UseCaseCard = ({ icon: Icon, title, description }: UseCaseCardProps) => (
  <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 sm:p-8 border border-orange-200 hover:border-orange-300 hover:shadow-xl transition-all">
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
    </div>
    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm sm:text-base">{description}</p>
  </div>
);

// Use Cases Section Component
const UseCasesSection = () => {
  const useCases = [
    {
      icon: TrendingUp,
      title: 'DeFi Protocols',
      description: 'Bring Ethereum liquidity to Stacks. Enable lending, borrowing, and trading with real USDC.',
    },
    {
      icon: Globe,
      title: 'Payment Platforms',
      description: 'Accept USDC payments, settle on Bitcoin. Perfect for cross-border transactions.',
    },
    {
      icon: Rocket,
      title: 'Web3 Apps',
      description: 'Build with stable USDC. Gaming, social tipping, creator monetization.',
    },
    {
      icon: Users,
      title: 'Enterprise',
      description: 'Treasury management and B2B settlements with enterprise compliance.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for every use case
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">From DeFi to payments</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {useCases.map((useCase) => (
            <UseCaseCard
              key={useCase.title}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => (
  <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl"></div>
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
        <Sparkles className="w-4 h-4" />
        <span>JOIN BUILDERS </span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
        Start building now
      </h2>
      <p className="text-lg sm:text-xl text-orange-100 mb-8 sm:mb-12 leading-relaxed">
        Bitcoin economy. Circle-backed USDC. One API. No credit card. No complexity. Just ship.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={DOCS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-orange-600 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 flex items-center justify-center space-x-2 shadow-2xl transform hover:scale-105 transition-all"
        >
          <span>Get API Key</span>
          <ArrowRight className="w-5 h-5" />
        </a>
        <a
          href={DOCS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 backdrop-blur-sm flex items-center justify-center space-x-2 transition-all"
        >
          <span>Explore Docs</span>
        </a>
      </div>
    </div>
  </section>
);

// Footer Link Section Component
interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
}

const FooterSection = ({ title, links }: FooterSectionProps) => (
  <div>
    <h4 className="text-white font-semibold mb-4 text-sm">{title}</h4>
    <ul className="space-y-3 text-xs sm:text-sm">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="text-gray-400 hover:text-orange-400 transition-colors"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// Footer Component
const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'API Reference', href: DOCS_URL, external: true },
        { label: 'SDK', href: DOCS_URL, external: true },
        { label: 'Pricing', href: DOCS_URL, external: true },
        { label: 'Status', href: DOCS_URL, external: true },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Docs', href: DOCS_URL, external: true },
        { label: 'Guides', href: DOCS_URL, external: true },
        { label: 'Examples', href: DOCS_URL, external: true },
        { label: 'Support', href: DOCS_URL, external: true },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Privacy', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <USDCLogo className="w-8 h-8" />
              <div className="text-white text-lg font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                USDCx
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-500">
              AI-powered USDC settlement for Bitcoin Layer 2.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <FooterSection key={section.title} title={section.title} links={section.links} />
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm gap-4">
          <div>© 2025 Stacks USDCx. All rights reserved.</div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-500">All systems operational</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Global Styles
const GlobalStyles = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

    body {
      font-family: 'Inter', sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Space Grotesk', sans-serif;
    }

    code,
    pre {
      font-family: 'JetBrains Mono', monospace;
    }
  `}</style>
);

// Main App Component
export default function StacksLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 overflow-hidden">
      <GlobalStyles />
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <AIAgentSection />
      <StatsSection />
      <FeaturesSection />
      <CodeSection />
      <UseCasesSection />
      <CTASection />
      <Footer />
    </div>
  );
}