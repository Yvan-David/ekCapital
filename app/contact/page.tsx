'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, ArrowLeft } from 'lucide-react';

export default function StrategyCall() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    challenge: '',
    preferredDate: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission (integrate with your backend)
  //   console.log('Form submitted:', formData);
  //   setSubmitted(true);
  //   setTimeout(() => {
  //     setSubmitted(false);
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       company: '',
  //       role: '',
  //       challenge: '',
  //       preferredDate: '',
  //       message: '',
  //     });
  //   }, 3000);
  // };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch('https://formspree.io/f/mykbpnly', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setShowToast(true);

      setTimeout(() => setShowToast(false), 3000);
      setSubmitted(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        challenge: '',
        preferredDate: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    alert('Network error. Try again.');
  }
};
  return (
    <main className="min-h-screen bg-ek-black pt-32 pb-20">
      {/* Toast */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-6 py-4 rounded shadow-lg animate-slideIn">
          ✅ Submitted successfully! We’ll contact you shortly.
        </div>
      )}
      {/* Breadcrumb */}
      <div className="px-[5%] mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-ek-text hover:text-ek-gold transition-colors text-sm font-heading font-bold uppercase tracking-[0.08em]"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-[5%]">
        {/* Header */}
        <div className="mb-16">
          <div className="section-tag">Book a Call</div>
          <h1 className="text-5xl md:text-6xl font-display text-ek-white leading-tight mb-6">
            Book Your<br />
            Strategy Call
          </h1>
          <p className="text-lg text-ek-text max-w-2xl">
            Schedule a 30-minute call with Coach Ezra to discuss your sales challenges and discover the right programme for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 bg-ek-card border border-ek-border p-8 md:p-12">
                {/* Name */}
                <div>
                  <label className="block text-sm font-heading font-bold text-ek-white mb-3 uppercase tracking-[0.08em]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-ek-black border border-ek-border text-ek-white px-4 py-3 font-body focus:outline-none focus:border-ek-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-heading font-bold text-ek-white mb-3 uppercase tracking-[0.08em]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-ek-black border border-ek-border text-ek-white px-4 py-3 font-body focus:outline-none focus:border-ek-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-heading font-bold text-ek-white mb-3 uppercase tracking-[0.08em]">
                    Phone Number (RW) *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-ek-black border border-ek-border text-ek-white px-4 py-3 font-body focus:outline-none focus:border-ek-gold transition-colors"
                    placeholder="+250 XXX XXX XXX"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-heading font-bold text-ek-white mb-3 uppercase tracking-[0.08em]">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full bg-ek-black border border-ek-border text-ek-white px-4 py-3 font-body focus:outline-none focus:border-ek-gold transition-colors"
                    placeholder="Your company"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-heading font-bold text-ek-white mb-3 uppercase tracking-[0.08em]">
                    Your Role *
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full bg-ek-black border border-ek-border text-ek-white px-4 py-3 font-body focus:outline-none focus:border-ek-gold transition-colors"
                  >
                    <option value="">Select your role</option>
                    <option value="CEO">CEO / Founder</option>
                    <option value="COO">COO / Operations Lead</option>
                    <option value="Sales Director">Sales Director</option>
                    <option value="Sales Manager">Sales Manager</option>
                    <option value="Sales Rep">Sales Rep</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Challenge */}
                <div>
                  <label className="block text-sm font-heading font-bold text-ek-white mb-3 uppercase tracking-[0.08em]">
                    What&apos;s Your Main Challenge? *
                  </label>
                  <select
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    required
                    className="w-full bg-ek-black border border-ek-border text-ek-white px-4 py-3 font-body focus:outline-none focus:border-ek-gold transition-colors"
                  >
                    <option value="">Select a challenge</option>
                    <option value="Low close rate">Low close rate</option>
                    <option value="Team consistency">Team consistency</option>
                    <option value="No sales system">No sales system</option>
                    <option value="High turnover">High rep turnover</option>
                    <option value="Revenue gap">Revenue gap</option>
                    <option value="Career development">Career development</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-sm font-heading font-bold text-ek-white mb-3 uppercase tracking-[0.08em]">
                    Preferred Call Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full bg-ek-black border border-ek-border text-ek-white px-4 py-3 font-body focus:outline-none focus:border-ek-gold transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-heading font-bold text-ek-white mb-3 uppercase tracking-[0.08em]">
                    Additional Notes
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-ek-black border border-ek-border text-ek-white px-4 py-3 font-body focus:outline-none focus:border-ek-gold transition-colors resize-none"
                    placeholder="Anything else you'd like Coach Ezra to know?"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-base font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110 active:translate-y-0"
                >
                  Schedule Call Now →
                </button>

                <p className="text-xs text-ek-text text-center">
                  We&apos;ll respond within 2 hours during business hours.
                </p>
              </form>
            ) : (
              <div className="bg-ek-gold/10 border border-ek-gold p-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h2 className="text-3xl font-heading font-black text-ek-gold mb-4">
                  Booking Received!
                </h2>
                <p className="text-ek-text mb-6">
                  Thank you for scheduling a strategy call. Coach Ezra will reach out via WhatsApp or email within 2 hours.
                </p>
                <Link href="/" className="btn-primary inline-block">
                  Back to Home →
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Call Details Card */}
            <div className="bg-ek-card border border-ek-border p-8 mb-8">
              <h3 className="font-heading font-black text-lg text-ek-white mb-6">
                What To Expect
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-ek-gold font-bold flex-shrink-0 mt-1">✓</span>
                  <span className="text-sm text-ek-text">
                    <strong className="text-ek-white">30-minute call</strong> with Coach Ezra
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ek-gold font-bold flex-shrink-0 mt-1">✓</span>
                  <span className="text-sm text-ek-text">
                    <strong className="text-ek-white">Honest assessment</strong> of your situation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ek-gold font-bold flex-shrink-0 mt-1">✓</span>
                  <span className="text-sm text-ek-text">
                    <strong className="text-ek-white">Personalized recommendation</strong> for your business
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ek-gold font-bold flex-shrink-0 mt-1">✓</span>
                  <span className="text-sm text-ek-text">
                    <strong className="text-ek-white">No sales pitch</strong> if it&apos;s not right
                  </span>
                </li>
              </ul>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-ek-card border border-ek-border p-8 mb-8">
              <h3 className="font-heading font-black text-lg text-ek-white mb-4">
                Prefer WhatsApp?
              </h3>
              <p className="text-sm text-ek-text mb-6">
                Message Coach Ezra directly for instant response.
              </p>
              <a
                href="https://wa.me/250790663142?text=Hi+Coach+Ezra%2C+I+want+to+book+a+strategy+call."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa w-full justify-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp Now
              </a>
            </div>

            {/* Contact Card */}
            <div className="bg-ek-card border border-ek-border p-8">
              <h3 className="font-heading font-black text-lg text-ek-white mb-4">
                Contact Details
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-ek-gold font-heading font-bold mb-1">Call</p>
                  <a href="tel:+250XXXXXXXXX" className="text-ek-text hover:text-ek-gold transition-colors">
                    +250 XXX XXX XXX
                  </a>
                </div>
                <div>
                  <p className="text-ek-gold font-heading font-bold mb-1">Location</p>
                  <p className="text-ek-text">Kigali, Rwanda</p>
                </div>
                <div>
                  <p className="text-ek-gold font-heading font-bold mb-1">Hours</p>
                  <p className="text-ek-text">Mon-Fri: 8am-6pm EAT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            <style jsx>{`
              @keyframes slideIn {
                from {
                  opacity: 0;
                  transform: translateX(40px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }

              .animate-slideIn {
                animation: slideIn 0.3s ease-out;
              }

              input[type="date"]::-webkit-calendar-picker-indicator {
                filter: invert(1);
                cursor: pointer;
              }
        
      `}</style>
    </main>
  );
}