'use client';

import React, { useState } from 'react';

/**
 * Contact Form
 * Professional corporate inquiry form
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'general',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    // In production, this would send to a backend endpoint
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        inquiryType: 'general',
        message: '',
      });

      // Reset submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-green-900 mb-2">
          Thank you for your inquiry
        </h3>
        <p className="text-green-700">
          We have received your message and will respond within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-trionfo-primary mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-lg text-trionfo-secondary focus:outline-none focus:ring-2 focus:ring-trionfo-primary focus:border-transparent transition-all duration-200"
          placeholder="Your Name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-trionfo-primary mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-lg text-trionfo-secondary focus:outline-none focus:ring-2 focus:ring-trionfo-primary focus:border-transparent transition-all duration-200"
          placeholder="your@email.com"
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-trionfo-primary mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg text-trionfo-secondary focus:outline-none focus:ring-2 focus:ring-trionfo-primary focus:border-transparent transition-all duration-200"
          placeholder="Your Company"
        />
      </div>

      {/* Inquiry Type */}
      <div>
        <label htmlFor="inquiryType" className="block text-sm font-medium text-trionfo-primary mb-2">
          Inquiry Type
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg text-trionfo-secondary focus:outline-none focus:ring-2 focus:ring-trionfo-primary focus:border-transparent transition-all duration-200"
        >
          <option value="general">General Corporate Inquiry</option>
          <option value="banking">Banking & Financial</option>
          <option value="partnership">Partnerships & Acquisitions</option>
          <option value="legal">Legal & Compliance</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-trionfo-primary mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg text-trionfo-secondary focus:outline-none focus:ring-2 focus:ring-trionfo-primary focus:border-transparent transition-all duration-200 resize-none"
          placeholder="Your message here..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-trionfo-primary text-white py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:bg-slate-400 disabled:text-white disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  );
}
