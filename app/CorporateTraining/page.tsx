'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, CheckCircle } from 'lucide-react';

export default function CorporateTraining() {
  const [activeTab, setActiveTab] = useState('overview');

  const programs = [
    {
      title: 'Sales Team Transformation',
      duration: '4-6 weeks',
      investment: 'RWF 2,800,000',
      description: 'Structured immersion for your entire sales team to close more deals, fast.',
      ideal: 'B2B & B2C teams (5-50 reps)',
      outcomes: ['30-day deal increase', 'Unified messaging', 'CRM adoption', 'Pipeline discipline'],
    },
    {
      title: 'Sales Leadership Mastery',
      duration: '3-4 weeks',
      investment: 'RWF 1,200,000',
      description: 'For managers, team leads, heads of sales. Learn to build dashboards and coach effectively.',
      ideal: 'Sales managers & leaders',
      outcomes: ['Forecast accuracy', 'Effective coaching', 'Rep retention', 'Accountability'],
    },
    {
      title: 'Full Bundle',
      duration: 'Ongoing',
      investment: 'RWF 9,500,000',
      description: 'Complete transformation: Team training + Leadership + Ongoing advisory.',
      ideal: 'Companies serious about scale',
      outcomes: ['All programs', 'Monthly retainer', 'Direct coach access', 'Continuous improvement'],
    },
  ];

  const assessmentSteps = [
    {
      num: '01',
      title: 'Quick Assessment Call',
      desc: '30 min with Coach Ezra to understand your team, market, and goals.',
    },
    {
      num: '02',
      title: 'Sales Audit',
      desc: 'We analyze your sales process, pipeline, and team performance data.',
    },
    {
      num: '03',
      title: 'Custom Proposal',
      desc: 'Tailored recommendation with investment, timeline, and expected ROI.',
    },
    {
      num: '04',
      title: 'Onboarding & Start',
      desc: 'Kick-off meeting, materials sent, programme begins within 1 week.',
    },
  ];

  return (
    <main className="min-h-screen bg-ek-black pt-32 pb-20">
      {/* Breadcrumb */}
      {/* <div className="px-[5%] mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-ek-text hover:text-ek-gold transition-colors text-sm font-heading font-bold uppercase tracking-[0.08em]"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div> */}

      <div className="max-w-6xl mx-auto px-[5%]">
        {/* Header */}
        <div className="mb-16">
          <div className="section-tag">Corporate Solutions</div>
          <h1 className="text-5xl md:text-6xl font-display text-ek-white leading-tight mb-6">
            Transform Your<br />
            Sales Team
          </h1>
          <p className="text-lg text-ek-text max-w-3xl">
            Custom programmes designed for corporate teams who want to close more deals, reduce churn, and hit revenue targets. Real training. Real market conditions. Real results.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 md:gap-8 border-b border-ek-border mb-12 overflow-x-auto">
          {['overview', 'programmes', 'process'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 font-heading font-bold text-sm uppercase tracking-[0.08em] transition-colors whitespace-nowrap ${activeTab === tab
                ? 'text-ek-gold border-b-2 border-ek-gold'
                : 'text-ek-text hover:text-ek-gold'
                }`}
            >
              {tab === 'overview' && 'Overview'}
              {tab === 'programmes' && 'Programmes'}
              {tab === 'process' && 'Assessment Process'}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Left */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-heading font-black text-ek-white mb-6">
                Why Companies Choose EK Capital
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-ek-gold text-2xl flex-shrink-0">🎯</div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-ek-white mb-2">
                      Real Market Training
                    </h3>
                    <p className="text-ek-text">
                      We don&apos;t teach theory. Every session is anchored in your actual business, your real customers, and your market conditions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-ek-gold text-2xl flex-shrink-0">📊</div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-ek-white mb-2">
                      Measurable Results
                    </h3>
                    <p className="text-ek-text">
                      Track performance before and after. Most clients see improved close rates within 30 days.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-ek-gold text-2xl flex-shrink-0">🏢</div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-ek-white mb-2">
                      Proven System
                    </h3>
                    <p className="text-ek-text">
                      Built on 8+ years of experience. The EK12PS™ framework works for B2B, B2C, and everything in between.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-ek-gold text-2xl flex-shrink-0">👥</div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-ek-white mb-2">
                      Direct Coach Access
                    </h3>
                    <p className="text-ek-text">
                      You get Coach Ezra, not a junior trainer. Direct access, real accountability, visible results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Stats Card */}
            <div className="bg-ek-card border border-ek-border p-8 h-fit">
              <h3 className="font-heading font-black text-lg text-ek-white mb-8">
                By The Numbers
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="font-display text-4xl text-ek-gold mb-2">500+</div>
                  <p className="text-sm text-ek-text">Sales professionals trained</p>
                </div>
                <div>
                  <div className="font-display text-4xl text-ek-gold mb-2">50+</div>
                  <p className="text-sm text-ek-text">Corporate team programmes</p>
                </div>
                <div>
                  <div className="font-display text-4xl text-ek-gold mb-2">8+</div>
                  <p className="text-sm text-ek-text">Years of proven results</p>
                </div>
                <div>
                  <div className="font-display text-4xl text-ek-gold mb-2">30</div>
                  <p className="text-sm text-ek-text">Days to see measurable change</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Programmes Tab */}
        {activeTab === 'programmes' && (
          <div>
            <h2 className="text-4xl font-heading font-black text-ek-white mb-12">
              Available Programmes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {programs.map((prog, idx) => (
                <div key={idx} className="bg-ek-card border border-ek-border p-8 hover:border-ek-gold transition-colors">
                  <h3 className="font-heading font-black text-xl text-ek-white mb-4">
                    {prog.title}
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-xs text-ek-gold font-heading font-bold uppercase tracking-[0.1em]">
                        Duration
                      </p>
                      <p className="text-sm text-ek-text">{prog.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-ek-gold font-heading font-bold uppercase tracking-[0.1em]">
                        Investment
                      </p>
                      <p className="text-lg font-heading font-black text-ek-white">
                        {prog.investment}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-ek-gold font-heading font-bold uppercase tracking-[0.1em]">
                        Ideal For
                      </p>
                      <p className="text-sm text-ek-text">{prog.ideal}</p>
                    </div>
                  </div>
                  <p className="text-sm text-ek-text mb-6">{prog.description}</p>
                  <div className="border-t border-ek-border pt-6">
                    <p className="text-xs text-ek-gold font-heading font-bold uppercase tracking-[0.1em] mb-3">
                      Key Outcomes
                    </p>
                    <ul className="space-y-2">
                      {prog.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-ek-text">
                          <CheckCircle size={16} className="text-ek-gold flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center bg-ek-gold/10 border border-ek-gold p-12">
              <h3 className="font-heading font-black text-2xl text-ek-white mb-4">
                Not sure which programme is right?
              </h3>
              <p className="text-ek-text mb-8 max-w-2xl mx-auto">
                Schedule a free assessment call. We&apos;ll audit your situation and recommend exactly what your team needs.
              </p>
              <Link href="/contact" className="btn-primary inline-block">
                Schedule Free Assessment →
              </Link>
            </div>
          </div>
        )}

        {/* Process Tab */}
        {activeTab === 'process' && (
          <div>
            <h2 className="text-4xl font-heading font-black text-ek-white mb-12">
              How The Assessment Works
            </h2>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {assessmentSteps.map((step, idx) => (
                <div key={idx} className="bg-ek-card border border-ek-border p-8">
                  <div className="font-display text-5xl text-ek-border mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-ek-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ek-text leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* What We Look For */}
            <div className="bg-ek-card border border-ek-border p-12 mb-16">
              <h3 className="font-heading font-black text-2xl text-ek-white mb-8">
                What We Analyse In The Audit
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-heading font-bold text-ek-gold mb-4 uppercase tracking-[0.08em] text-sm">
                    Sales Process
                  </h4>
                  <ul className="space-y-3 text-sm text-ek-text">
                    <li>• Pipeline visibility</li>
                    <li>• Forecasting accuracy</li>
                    <li>• Deal velocity</li>
                    <li>• Objection handling</li>
                    <li>• Closing consistency</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-ek-gold mb-4 uppercase tracking-[0.08em] text-sm">
                    Team Performance
                  </h4>
                  <ul className="space-y-3 text-sm text-ek-text">
                    <li>• Individual rep metrics</li>
                    <li>• Activity vs outcomes</li>
                    <li>• Skill gaps</li>
                    <li>• Morale & retention</li>
                    <li>• Growth potential</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-ek-gold mb-4 uppercase tracking-[0.08em] text-sm">
                    Business Context
                  </h4>
                  <ul className="space-y-3 text-sm text-ek-text">
                    <li>• Market & competition</li>
                    <li>• Customer profile</li>
                    <li>• Sales cycle length</li>
                    <li>• Pricing & packaging</li>
                    <li>• Revenue targets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-ek-gold mb-4 uppercase tracking-[0.08em] text-sm">
                    Leadership
                  </h4>
                  <ul className="space-y-3 text-sm text-ek-text">
                    <li>• Coaching skills</li>
                    <li>• Accountability systems</li>
                    <li>• Performance tracking</li>
                    <li>• Team development</li>
                    <li>• Vision alignment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-ek-card border border-ek-border p-12 mb-16">
              <h3 className="font-heading font-black text-2xl text-ek-white mb-8">
                Timeline
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="font-heading font-black text-ek-gold flex-shrink-0">Day 1</div>
                  <div className="text-sm text-ek-text">Assessment call scheduled</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-heading font-black text-ek-gold flex-shrink-0">Days 2-5</div>
                  <div className="text-sm text-ek-text">Data collection & analysis. May include team calls, CRM review, performance metrics.</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-heading font-black text-ek-gold flex-shrink-0">Days 6-7</div>
                  <div className="text-sm text-ek-text">Custom proposal delivered. Includes: findings, recommendations, investment, expected ROI.</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-heading font-black text-ek-gold flex-shrink-0">Day 8+</div>
                  <div className="text-sm text-ek-text">Programme onboarding & commencement (if approved).</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="font-heading font-black text-2xl text-ek-white mb-4">
                Ready For Your Assessment?
              </h3>
              <p className="text-ek-text mb-8">
                Schedule your free assessment call with Coach Ezra.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Book Assessment →
                </Link>
                <a
                  href="https://wa.me/250XXXXXXXX?text=Hi+Coach+Ezra%2C+I+want+a+corporate+assessment+for+my+team."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp Instead
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}