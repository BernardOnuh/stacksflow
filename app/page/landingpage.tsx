'use client';

import { useState } from 'react';
import { ArrowRight, Zap, Shield, Code, Menu, X, Rocket, TrendingUp, Users, Globe, CheckCircle, Play, Sparkles, ChevronDown, Bot, Cpu, Brain } from 'lucide-react';

export default function StacksLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // USDC Logo SVG Component
  const USDCLogo = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 2000 2000" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1000 2000C1547.1 2000 2000 1547.1 2000 1000C2000 452.9 1547.1 0 1000 0C452.9 0 0 452.9 0 1000C0 1547.1 452.9 2000 1000 2000Z" fill="#2775CA"/>
      <path d="M1275 1167.5C1275 1065.83 1198.75 1041.67 1096.67 1025C1016.67 1011.67 1000 995.833 1000 941.667C1000 887.5 1029.17 870.833 1087.5 870.833C1137.5 870.833 1162.5 883.333 1179.17 920.833C1183.33 929.167 1191.67 933.333 1200 933.333H1262.5C1275 933.5 1283.33 925 1283.33 912.5V908.333C1270.83 854.167 1229.17 808.333 1170.83 795.833V720.833C1170.83 708.333 1162.5 700 1150 700H1037.5C1025 700 1016.67 708.333 1016.67 720.833V795C916.667 804.167 850 854.167 850 941.667C850 1037.5 920.833 1066.67 1020.83 1083.33C1095.83 1095.83 1116.67 1112.5 1116.67 1170.83C1116.67 1229.17 1079.17 1254.17 1016.67 1254.17C945.833 1254.17 920.833 1229.17 904.167 1183.33C900 1175 891.667 1170.83 883.333 1170.83H816.667C804.167 1170.83 795.833 1179.17 795.833 1191.67V1195.83C808.333 1254.17 841.667 1304.17 916.667 1329.17V1404.17C916.667 1416.67 925 1425 937.5 1425H1050C1062.5 1425 1070.83 1416.67 1070.83 1404.17V1329.17C1170.83 1316.67 1275 1270.83 1275 1167.5Z" fill="white"/>
      <path d="M1262.5 600C1262.5 558.333 1229.17 525 1187.5 525C1145.83 525 1112.5 558.333 1112.5 600C1112.5 641.667 1145.83 675 1187.5 675C1229.17 675 1262.5 641.667 1262.5 600ZM887.5 600C887.5 558.333 854.167 525 812.5 525C770.833 525 737.5 558.333 737.5 600C737.5 641.667 770.833 675 812.5 675C854.167 675 887.5 641.667 887.5 600ZM1475 1000C1475 737.5 1262.5 525 1000 525C737.5 525 525 737.5 525 1000C525 1262.5 737.5 1475 1000 1475C1262.5 1475 1475 1262.5 1475 1000ZM1370.83 1000C1370.83 1204.17 1204.17 1370.83 1000 1370.83C795.833 1370.83 629.167 1204.17 629.167 1000C629.167 795.833 795.833 629.167 1000 629.167C1204.17 629.167 1370.83 795.833 1370.83 1000Z" fill="white"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        code, pre {
          font-family: 'JetBrains Mono', monospace;
        }
      `}</style>

      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-xl border-b border-orange-200/60 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <USDCLogo className="w-8 h-8 md:w-10 md:h-10" />
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent font-['Space_Grotesk']">
                  Stacks USDCx
                </div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-orange-600 flex items-center space-x-1 font-medium transition-colors font-['Inter']">
                  <span>Learn</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-orange-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="#getting-started" className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-['Inter']">
                      Getting Started
                    </a>
                    <a href="#how-it-works" className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-['Inter']">
                      How It Works
                    </a>
                    <a href="#use-cases" className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-['Inter']">
                      Use Cases
                    </a>
                    <a href="#tutorials" className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-['Inter']">
                      Video Tutorials
                    </a>
                    <a href="#faq" className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-['Inter']">
                      FAQ
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="text-gray-700 hover:text-orange-600 flex items-center space-x-1 font-medium transition-colors font-['Inter']">
                  <span>Docs</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-orange-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="#api-reference" className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-['Inter']">
                      API Reference
                    </a>
                    <a href="#sdk-docs" className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-['Inter']">
                      SDK Documentation
                    </a>
                    <a href="#integration-guide" className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-['Inter']">
                      Integration Guide
                    </a>
                    <a href="#code-examples" className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-['Inter']">
                      Code Examples
                    </a>
                    <a href="#webhooks" className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-['Inter']">
                      Webhooks
                    </a>
                  </div>
                </div>
              </div>

              <a href="#pricing" className="text-gray-700 hover:text-orange-600 font-medium transition-colors font-['Inter']">Pricing</a>
              <a href="#support" className="text-gray-700 hover:text-orange-600 font-medium transition-colors font-['Inter']">Support</a>
              
              <button className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white px-6 py-2.5 rounded-full font-semibold flex items-center space-x-2 shadow-lg shadow-orange-500/30 transition-all hover:shadow-xl hover:shadow-orange-500/40 font-['Inter']">
                <span>Get API Key</span>
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
              <div>
                <div className="font-semibold text-gray-900 mb-2 font-['Space_Grotesk']">Learn</div>
                <div className="pl-4 space-y-2">
                  <a href="#getting-started" className="block text-sm text-gray-600 hover:text-orange-600 py-1 font-['Inter']">Getting Started</a>
                  <a href="#how-it-works" className="block text-sm text-gray-600 hover:text-orange-600 py-1 font-['Inter']">How It Works</a>
                  <a href="#use-cases" className="block text-sm text-gray-600 hover:text-orange-600 py-1 font-['Inter']">Use Cases</a>
                  <a href="#tutorials" className="block text-sm text-gray-600 hover:text-orange-600 py-1 font-['Inter']">Video Tutorials</a>
                  <a href="#faq" className="block text-sm text-gray-600 hover:text-orange-600 py-1 font-['Inter']">FAQ</a>
                </div>
              </div>
              
              <div>
                <div className="font-semibold text-gray-900 mb-2 font-['Space_Grotesk']">Docs</div>
                <div className="pl-4 space-y-2">
                  <a href="#api-reference" className="block text-sm text-gray-600 hover:text-orange-600 py-1 font-['Inter']">API Reference</a>
                  <a href="#sdk-docs" className="block text-sm text-gray-600 hover:text-orange-600 py-1 font-['Inter']">SDK Documentation</a>
                  <a href="#integration-guide" className="block text-sm text-gray-600 hover:text-orange-600 py-1 font-['Inter']">Integration Guide</a>
                  <a href="#code-examples" className="block text-sm text-gray-600 hover:text-orange-600 py-1 font-['Inter']">Code Examples</a>
                  <a href="#webhooks" className="block text-sm text-gray-600 hover:text-orange-600 py-1 font-['Inter']">Webhooks</a>
                </div>
              </div>

              <a href="#pricing" className="block font-semibold text-gray-900 hover:text-orange-600 py-1 font-['Space_Grotesk']">Pricing</a>
              <a href="#support" className="block font-semibold text-gray-900 hover:text-orange-600 py-1 font-['Space_Grotesk']">Support</a>
              
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg font-['Inter']">
                Get API Key
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 border border-orange-200/50 font-['Inter']">
              <Bot className="w-4 h-4" />
              <span>AI-POWERED SETTLEMENT AGENTS • 2025</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight font-['Space_Grotesk']">
              Your bridge to the{' '}
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                Bitcoin economy
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed font-['Inter']">
              Join the 2025 wave of builders bringing USDC liquidity from Ethereum to Bitcoin's Layer 2. One API call. Zero complexity. Powered by Circle's xReserve and <span className="font-semibold text-orange-600">AI settlement agents</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 shadow-xl shadow-orange-500/30 transform hover:scale-105 transition-all font-['Inter']">
                <span>Start Building</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 hover:border-orange-500 hover:bg-orange-50 text-gray-700 hover:text-orange-600 px-8 py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 transition-all font-['Inter']">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm text-gray-600 font-['Inter']">
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

          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-amber-600 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute border-2 border-white rounded-full animate-pulse"
                    style={{
                      width: `${(i + 1) * 80}px`,
                      height: `${(i + 1) * 80}px`,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${i * 0.2}s`
                    }}
                  ></div>
                ))}
              </div>
              <div className="relative z-10 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 sm:p-8 transform hover:scale-110 transition-transform">
                  <div className="bg-white rounded-full p-6 sm:p-8 shadow-2xl">
                    <div className="text-orange-500 text-6xl sm:text-7xl font-bold">₿</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-white/95 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2 shadow-lg">
                <div className="text-xs text-gray-600 mb-1 font-['Inter']">Live Settlements</div>
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent font-['Space_Grotesk']">$2.4M</div>
              </div>
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-white/95 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2 shadow-lg">
                <div className="text-xs text-gray-600 mb-1 font-['Inter']">Builders</div>
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent font-['Space_Grotesk']">1,200+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Section */}
      <section className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 font-['Inter']">
              <Brain className="w-4 h-4" />
              <span>INTELLIGENT AUTOMATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
              AI Agents Solve the Complexity
            </h2>
            <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto font-['Inter']">
              While you focus on building, our AI agents handle the heavy lifting—routing, verification, gas optimization, and error recovery. Completely autonomous.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 hover:bg-white/15 transition-all">
              <div className="bg-white/20 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">Smart Routing</h3>
              <p className="text-orange-100 text-sm sm:text-base font-['Inter']">
                AI agents analyze network conditions in real-time, selecting the optimal path for your cross-chain settlement. Lowest fees, fastest execution.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 hover:bg-white/15 transition-all">
              <div className="bg-white/20 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">Auto Verification</h3>
              <p className="text-orange-100 text-sm sm:text-base font-['Inter']">
                Every transaction is cryptographically verified against Circle's xReserve attestations. AI agents ensure 1:1 backing before settlement completes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 hover:bg-white/15 transition-all sm:col-span-2 lg:col-span-1">
              <div className="bg-white/20 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">Error Recovery</h3>
              <p className="text-orange-100 text-sm sm:text-base font-['Inter']">
                Failed transaction? Network congestion? AI agents automatically retry with adjusted parameters, ensuring 99.9% success rate without manual intervention.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-['Inter']">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">Powered by advanced ML models trained on 10M+ settlements</span>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Story Section */}
      <section className="bg-white py-16 sm:py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 font-['Inter']">
              <Users className="w-4 h-4" />
              <span>BUILDERS CLASS 2025</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-['Space_Grotesk']">Your journey starts here</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-['Inter']">
              From first API call to production-ready Bitcoin economy applications. Here's how builders are transforming cross-chain settlements in 2025.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100 rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:border-orange-300 transition-all transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <div className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">1</div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 font-['Space_Grotesk']">Day 1: The Spark</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base font-['Inter']">
                  You're building a DeFi app on Stacks. You need USDC liquidity from Ethereum. Traditional bridges? Complex, risky, expensive. You discover USDCx API.
                </p>
                <div className="text-orange-600 font-semibold text-sm sm:text-base font-['Inter']">
                  "Wait, it's really this simple?" - Every builder's first reaction
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100 rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:border-orange-300 transition-all transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <div className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">2</div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 font-['Space_Grotesk']">Week 1: The Build</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base font-['Inter']">
                  Five minutes to integrate. Your first test transaction settles in seconds. Circle's xReserve backing means zero trust assumptions. Your users get real USDC, not wrapped tokens.
                </p>
                <div className="text-orange-600 font-semibold text-sm sm:text-base font-['Inter']">
                  "Shipped cross-chain USDC in one sprint" - DeFi Builder
                </div>
              </div>
            </div>

            <div className="group sm:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100 rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:border-orange-300 transition-all transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <div className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">3</div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 font-['Space_Grotesk']">Month 1: The Scale</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base font-['Inter']">
                  Your app is live. Users are settling millions. AI agents handle routing, verification, and optimization automatically. You're focused on building features, not infrastructure.
                </p>
                <div className="text-orange-600 font-semibold text-sm sm:text-base font-['Inter']">
                  "$10M settled, zero manual interventions" - Payment Platform
                </div>
              </div>
            </div>
          </div>

          {/* User Story Quote */}
          <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <div className="text-5xl sm:text-6xl font-bold mb-4 sm:mb-6 opacity-50 font-['Space_Grotesk']">"</div>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 leading-relaxed font-['Space_Grotesk']">
                We were stuck choosing between slow bridges or risky wrapped tokens. USDCx API gave us Circle-backed USDC on Stacks in one API call. Our users don't even know they're crossing chains.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold flex-shrink-0 font-['Space_Grotesk']">
                  SC
                </div>
                <div>
                  <div className="font-bold text-base sm:text-lg font-['Space_Grotesk']">Sarah Chen</div>
                  <div className="text-orange-100 text-sm sm:text-base font-['Inter']">Lead Developer, StacksPay</div>
                  <div className="text-orange-200 text-xs sm:text-sm font-['Inter']">Builders Class 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-['Space_Grotesk']">Powering the 2025 Bitcoin builders</h2>
            <p className="text-lg sm:text-xl text-gray-400 font-['Inter']">Real numbers from real builders</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent mb-2 font-['Space_Grotesk']">
                1,200+
              </div>
              <div className="text-gray-400 text-sm sm:text-base font-['Inter']">Active Builders</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent mb-2 font-['Space_Grotesk']">
                $2.4M
              </div>
              <div className="text-gray-400 text-sm sm:text-base font-['Inter']">Daily Volume</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent mb-2 font-['Space_Grotesk']">
                99.9%
              </div>
              <div className="text-gray-400 text-sm sm:text-base font-['Inter']">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent mb-2 font-['Space_Grotesk']">
                3.2s
              </div>
              <div className="text-gray-400 text-sm sm:text-base font-['Inter']">Avg Settlement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Space_Grotesk']">Built for builders, powered by AI</h2>
            <p className="text-lg sm:text-xl text-gray-600 font-['Inter']">Everything you need to bring USDC to Bitcoin's Layer 2</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-orange-100 to-amber-50 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-orange-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 font-['Space_Grotesk']">AI Settlement Agents</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base font-['Inter']">
                Intelligent routing and optimization. Our AI agents handle cross-chain complexity, gas optimization, and settlement verification automatically.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-base font-['Inter']">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Auto-retry failed transactions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Gas price optimization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Real-time status updates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-orange-100 to-amber-50 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-orange-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 font-['Space_Grotesk']">Circle xReserve Trust</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base font-['Inter']">
                Real USDC, not wrapped tokens. Every USDCx is 1:1 backed by Circle with cryptographic attestations and multichain support.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-base font-['Inter']">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Cryptographic proof of reserves</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>No bridge exploits possible</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Direct Circle integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-br from-orange-100 to-amber-50 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-7 h-7 sm:w-8 sm:h-8 text-orange-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 font-['Space_Grotesk']">Developer-First API</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base font-['Inter']">
                Clean, well-documented API that just works. TypeScript SDK, webhooks, and comprehensive tooling for modern developers.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-base font-['Inter']">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>TypeScript & React SDK</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Webhook notifications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>5-minute integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-['Space_Grotesk']">Ship faster with less code</h2>
            <p className="text-lg sm:text-xl text-gray-400 font-['Inter']">From Ethereum to Stacks in 10 lines of code</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-8 overflow-x-auto shadow-2xl border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-500 text-xs sm:text-sm font-['JetBrains_Mono']">usdcx-bridge.ts</div>
            </div>
            <pre className="text-green-400 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto font-['JetBrains_Mono']">
{`// Initialize the USDCx client - Builders Class 2025
import { USDCxClient } from '@stacks/usdcx';

const client = new USDCxClient({
  apiKey: process.env.USDCX_API_KEY,
  network: 'mainnet'
});

// Bridge USDC with AI-powered settlement
const settlement = await client.bridge({
  amount: '1000.00',
  fromChain: 'ethereum',
  toChain: 'stacks',
  recipient: 'SP2X0TZ59D5SZ8ACQ6YMCHHNR2ZN51Z32E2CJ173',
  autoSettle: true,  // AI agent handles everything
  webhookUrl: 'https://yourapp.com/webhooks/settlement'
});

console.log(\`Settlement complete: \${settlement.txId}\`);
// Settlement complete: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb8

// That's it. USDC is now on Stacks as Circle-backed USDCx.`}
            </pre>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg shadow-xl shadow-orange-500/30 transition-all hover:shadow-2xl hover:shadow-orange-500/40 font-['Inter']">
              View Full Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Space_Grotesk']">Built for every use case</h2>
            <p className="text-lg sm:text-xl text-gray-600 font-['Inter']">From DeFi to payments, builders are using USDCx everywhere</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 sm:p-8 border border-orange-200 hover:border-orange-300 hover:shadow-xl transition-all">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-['Space_Grotesk']">DeFi Protocols</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base font-['Inter']">
                Bring deep Ethereum liquidity to your Stacks DeFi app. Enable lending, borrowing, and trading with real USDC.
              </p>
              <div className="text-orange-600 font-semibold text-xs sm:text-sm font-['Inter']">
                Example: DEX with $50M+ daily volume
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 sm:p-8 border border-orange-200 hover:border-orange-300 hover:shadow-xl transition-all">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-['Space_Grotesk']">Payment Platforms</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base font-['Inter']">
                Accept USDC payments from any chain, settle on Bitcoin. Perfect for cross-border payments and merchant solutions.
              </p>
              <div className="text-orange-600 font-semibold text-xs sm:text-sm font-['Inter']">
                Example: Global remittance platform
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 sm:p-8 border border-orange-200 hover:border-orange-300 hover:shadow-xl transition-all">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-['Space_Grotesk']">Web3 Apps</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base font-['Inter']">
                Build consumer apps with stable, familiar USDC. Gaming rewards, social tipping, creator monetization made easy.
              </p>
              <div className="text-orange-600 font-semibold text-xs sm:text-sm font-['Inter']">
                Example: Social platform with 100k users
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 sm:p-8 border border-orange-200 hover:border-orange-300 hover:shadow-xl transition-all">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-['Space_Grotesk']">Enterprise Solutions</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base font-['Inter']">
                Treasury management, supplier payments, and B2B settlements. Enterprise-grade infrastructure with compliance built-in.
              </p>
              <div className="text-orange-600 font-semibold text-xs sm:text-sm font-['Inter']">
                Example: Supply chain finance platform
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 font-['Inter']">
            <Sparkles className="w-4 h-4" />
            <span>JOIN 1,200+ BUILDERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 font-['Space_Grotesk']">
            Be part of Builders Class 2025
          </h2>
          <p className="text-lg sm:text-xl text-orange-100 mb-8 sm:mb-12 leading-relaxed font-['Inter']">
            The Bitcoin economy is happening now. Start building with Circle-backed USDC on Stacks today. No credit card. No complexity. Just ship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 sm:mb-8">
            <button className="bg-white text-orange-600 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 flex items-center justify-center space-x-2 shadow-2xl transform hover:scale-105 transition-all font-['Inter']">
              <span>Get Your API Key</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 backdrop-blur-sm flex items-center justify-center space-x-2 transition-all font-['Inter']">
              <Play className="w-5 h-5" />
              <span>Watch Live Demo</span>
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-orange-100 text-sm sm:text-base font-['Inter']">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>Free tier available</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 mb-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <USDCLogo className="w-8 h-8" />
                <div className="text-white text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent font-['Space_Grotesk']">
                  Stacks USDCx
                </div>
              </div>
              <p className="text-xs sm:text-sm mb-6 text-gray-500 max-w-sm font-['Inter']">
                Activating the Bitcoin economy with Circle-backed USDC. Built for the Builders Class of 2025.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm sm:text-base font-['Space_Grotesk']">Product</h4>
              <ul className="space-y-3 text-xs sm:text-sm font-['Inter']">
                <li><a href="#" className="hover:text-orange-400 transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">SDK Docs</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm sm:text-base font-['Space_Grotesk']">Resources</h4>
              <ul className="space-y-3 text-xs sm:text-sm font-['Inter']">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm sm:text-base font-['Space_Grotesk']">Company</h4>
              <ul className="space-y-3 text-xs sm:text-sm font-['Inter']">
                <li><a href="#" className="hover:text-orange-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm gap-4 font-['Inter']">
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
    </div>
  );
}