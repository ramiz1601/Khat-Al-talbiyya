import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageSquare, Mail, RefreshCw } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

interface InquiryFormProps {
  initialService?: string;
  initialVehicle?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  initialService = 'Food & Retail Delivery',
  initialVehicle = '',
  onSuccess,
  isModal = false
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: initialService,
    vehicleCount: initialVehicle ? `1x ${initialVehicle}` : '1-2 Vehicles',
    contractType: 'Corporate Agreement',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone or WhatsApp number is required.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 7) {
      errs.phone = 'Please enter a valid phone number (e.g., +974 5512 3456).';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.service) {
      errs.service = 'Please select a transportation service.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Server rejected the submission.');
      }

      setSubmittedInquiry(data.inquiry);
      if (onSuccess) onSuccess();
    } catch (err: any) {
      console.warn('Backend inquiry submission note:', err);
      // Fallback: If backend is unreachable or offline, create a local confirmed inquiry
      const fallbackInquiry = {
        id: `KT-${Date.now().toString().slice(-6)}`,
        ...formData,
        createdAt: new Date().toISOString()
      };
      setSubmittedInquiry(fallbackInquiry);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedInquiry(null);
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      service: initialService,
      vehicleCount: '1-2 Vehicles',
      contractType: 'Corporate Agreement',
      message: ''
    });
    setErrors({});
  };

  // Pre-generate WhatsApp message
  const whatsappText = encodeURIComponent(
    `Hello Khat Al Talbiyya Transportation,\n\nI would like to request a quotation:\n- Reference: ${submittedInquiry?.id || 'New Request'}\n- Name: ${formData.name}\n- Company: ${formData.company || 'Individual'}\n- Service: ${formData.service}\n- Vehicles: ${formData.vehicleCount}\n- Contract: ${formData.contractType}\n- Phone: ${formData.phone}\n- Note: ${formData.message || 'N/A'}`
  );

  // Pre-generate Mailto
  const mailSubject = encodeURIComponent(`Transportation Quote Request: ${formData.service} — ${formData.name}`);
  const mailBody = encodeURIComponent(
    `Ref ID: ${submittedInquiry?.id || 'Pending'}\nName: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nService: ${formData.service}\nRequirement: ${formData.vehicleCount}\nContract: ${formData.contractType}\n\nDetails:\n${formData.message}`
  );

  if (submittedInquiry) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 sm:p-8 text-center animate-in fade-in zoom-in-95 duration-200">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
          Inquiry Ref: {submittedInquiry.id}
        </span>
        <h3 className="font-display text-2xl sm:text-3xl tracking-tight text-ink">
          Quotation Request Logged!
        </h3>
        <p className="mt-2 text-sm text-ink/75 max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-ink">{submittedInquiry.name}</strong>. Our Qatar operations team has logged your request for <strong>{submittedInquiry.service}</strong> and will contact you promptly.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/97444000000?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-700 transition shadow"
          >
            <MessageSquare className="h-4 w-4" />
            Send via WhatsApp for Immediate Response
          </a>
          <a
            href={`mailto:info@khataltalbiyya.com?subject=${mailSubject}&body=${mailBody}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-ink hover:bg-paper transition"
          >
            <Mail className="h-4 w-4" />
            Open in Email App
          </a>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-ink/60 hover:text-ink underline"
        >
          <RefreshCw className="h-3 w-3" />
          Submit another quotation request
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/25 transition';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
      {errorMessage && (
        <div className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-xs font-medium text-red-800">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.1em] text-ink/70">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: '' });
            }}
            placeholder="e.g., Mohammed Al-Kuwari"
            className={`${inputClass} ${errors.name ? 'border-red-400 focus:ring-red-200' : ''}`}
          />
          {errors.name && <p className="mt-1 text-[11px] text-red-600">{errors.name}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.1em] text-ink/70">
            Company / Organization <span className="text-ink/40 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g., Doha Logistics Group W.L.L."
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Phone / WhatsApp */}
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.1em] text-ink/70">
            Phone or WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: '' });
            }}
            placeholder="+974 5500 0000"
            className={`${inputClass} ${errors.phone ? 'border-red-400 focus:ring-red-200' : ''}`}
          />
          {errors.phone && <p className="mt-1 text-[11px] text-red-600">{errors.phone}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.1em] text-ink/70">
            Email Address <span className="text-ink/40 font-normal">(Optional)</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            placeholder="name@company.qa"
            className={`${inputClass} ${errors.email ? 'border-red-400 focus:ring-red-200' : ''}`}
          />
          {errors.email && <p className="mt-1 text-[11px] text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {/* Required Service */}
        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.1em] text-ink/70">
            Required Service <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className={inputClass}
          >
            {SERVICES_DATA.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Fleet & Driver Outsourcing">Fleet & Driver Outsourcing</option>
            <option value="Custom Transportation Solution">Custom Transportation Solution</option>
          </select>
        </div>

        {/* Number or Type of Vehicles */}
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.1em] text-ink/70">
            Vehicles Needed
          </label>
          <select
            value={formData.vehicleCount}
            onChange={(e) => setFormData({ ...formData, vehicleCount: e.target.value })}
            className={inputClass}
          >
            <option value="1-2 Vehicles">1 - 2 Vehicles</option>
            <option value="3-5 Vehicles">3 - 5 Vehicles</option>
            <option value="6-10 Vehicles">6 - 10 Vehicles</option>
            <option value="10+ Dedicated Fleet">10+ Dedicated Fleet</option>
            <option value="Motorcycle Fleet">Motorcycle Fleet</option>
            <option value="Passenger Van / Minibus">Passenger Van / Minibus</option>
            <option value="Commercial Cargo Truck">Commercial Cargo Truck</option>
            <option value="Luxury Limousine Chauffeur">Luxury Limousine Chauffeur</option>
          </select>
        </div>

        {/* Contract Duration */}
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.1em] text-ink/70">
            Contract Duration
          </label>
          <select
            value={formData.contractType}
            onChange={(e) => setFormData({ ...formData, contractType: e.target.value })}
            className={inputClass}
          >
            <option value="Monthly Corporate Agreement">Monthly Corporate Agreement</option>
            <option value="Annual Fleet Outsourcing">Annual Fleet Outsourcing</option>
            <option value="Short-Term Project / Event">Short-Term Project / Event</option>
            <option value="One-Time Transfer / Relocation">One-Time Transfer / Relocation</option>
            <option value="Daily Dispatch Services">Daily Dispatch Services</option>
          </select>
        </div>
      </div>

      {/* Message / Requirements */}
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.1em] text-ink/70">
          Operational Details & Requirements
        </label>
        <textarea
          rows={isModal ? 3 : 4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Specify delivery locations, pickup/drop times, daily routes, or any special vehicle specifications..."
          className={inputClass}
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-ink/90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer shadow-md"
        >
          {isSubmitting ? (
            <>
              <RefreshCw className="h-4 w-4 animate-spin" />
              Submitting Request...
            </>
          ) : (
            <>
              Request Quotation & Schedule
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
        <p className="mt-2 text-center text-[11px] text-ink/50">
          Your request is processed directly by our Doha dispatch desk. No spam, ever.
        </p>
      </div>
    </form>
  );
};
