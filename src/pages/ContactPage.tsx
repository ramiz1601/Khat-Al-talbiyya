import React from 'react';
import { InquiryForm } from '../components/InquiryForm';
import { MapPin, Mail, Phone, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <main className="bg-white text-ink">
      {/* Header */}
      <section className="px-6 py-20 sm:px-16 lg:px-24 bg-paper/60 border-b border-border/70">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Get In Touch
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-[-0.02em] sm:text-7xl">
            Contact & Inquiries
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink/70 sm:text-base">
            Have a question about our delivery logistics, passenger shuttle services, executive limousines, or fleet outsourcing in Qatar? Reach out through the form below, direct WhatsApp, or phone.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="px-6 py-20 sm:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-12 items-start">
          {/* Left Column (5 cols): Verified Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl border border-border bg-paper p-8">
              <h2 className="font-display text-2xl text-ink">
                Qatar Operations Desk
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-ink/70 leading-relaxed">
                Our central dispatch and corporate relations team operates directly out of Doha, providing 24/7 client coordination across all Qatar municipalities.
              </p>

              <div className="mt-8 space-y-5 text-sm text-ink/80">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-ink">
                      Location
                    </h4>
                    <p className="mt-0.5 text-xs text-ink/70">
                      Doha, State of Qatar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-ink">
                      Email Inquiries
                    </h4>
                    <a
                      href="mailto:info@khataltalbiyya.com"
                      className="mt-0.5 block text-xs font-semibold text-gold hover:underline"
                    >
                      info@khataltalbiyya.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-ink">
                      Direct Phone
                    </h4>
                    <a
                      href="tel:+97444000000"
                      className="mt-0.5 block text-xs font-semibold text-ink hover:text-gold transition"
                    >
                      +974 4400 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-800">
                      Instant WhatsApp
                    </h4>
                    <a
                      href="https://wa.me/97444000000?text=Hello%20Khat%20Al%20Talbiyya,%20I%20would%20like%20to%20inquire%20about%20transportation%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 inline-block text-xs font-bold text-emerald-700 underline"
                    >
                      Chat with Dispatch Desk (+974)
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/70 space-y-3">
                <div className="flex items-center gap-2 text-xs text-ink/70">
                  <Clock className="h-4 w-4 text-gold shrink-0" />
                  <span>24 Hours Daily Scheduled Operations</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-ink/70">
                  <ShieldCheck className="h-4 w-4 text-gold shrink-0" />
                  <span>Compliant & Insured Commercial Carrier</span>
                </div>
              </div>
            </div>

            {/* Quick response note */}
            <div className="rounded-2xl border border-gold/40 bg-gold/10 p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold">
                Fast Corporate Turnaround
              </h4>
              <p className="mt-1 text-xs text-ink/80 leading-relaxed">
                For urgent passenger transfers or short-notice corporate courier contracts, contacting our desk via phone or WhatsApp provides immediate operational dispatch.
              </p>
            </div>
          </div>

          {/* Right Column (7 cols): The Full Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-paper p-8 sm:p-10 shadow-sm">
              <span className="rounded-full bg-ink/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink/70">
                Official Business Inquiry
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink">
                Request a Transportation Proposal
              </h2>
              <p className="mt-2 mb-8 text-xs sm:text-sm text-ink/70">
                Fill in your operational details below. Submissions are routed directly to our Qatar dispatch team.
              </p>

              <InquiryForm isModal={false} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
