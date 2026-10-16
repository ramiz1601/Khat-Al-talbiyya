import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { Shield, Award, HeartHandshake, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { openQuoteModal } = useRouter();

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      desc: 'Every trip begins with safety — trained drivers, regularly maintained vehicles, strict speed compliance, and comprehensive Qatar road regulations adherence.'
    },
    {
      icon: Award,
      title: 'Quality Service',
      desc: 'We hold ourselves to a premium standard on every trip, whether it is a hot meal delivery, a parcel route, or a VIP executive airport transfer.'
    },
    {
      icon: HeartHandshake,
      title: 'Customer Commitment',
      desc: 'We build long-term partnerships with individuals and businesses by being reliable, responsive, transparent, and simple to work with.'
    }
  ];

  return (
    <main className="bg-white text-ink">
      {/* Hero Section with Doha skyline backdrop */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-16 lg:px-24 bg-paper/60 border-b border-border/70">
        <img
          src="/assets/doha-obfoc-0V.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-multiply"
        />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            About Our Company
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-[-0.02em] sm:text-7xl max-w-4xl">
            Reliable Transportation Built on Trust & Punctuality
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-base">
            Operating from Doha, <strong>Khat Al Talbiyya Transportation</strong> provides comprehensive delivery logistics, passenger shuttle transport, executive limousine services, and heavy freight moving across the State of Qatar.
          </p>
        </div>
      </section>

      {/* Core Mission & Story */}
      <section className="px-6 py-20 sm:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gold">
              Our Qatar Operations
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl tracking-tight text-ink">
              Dedicated to Moving Qatar Forward
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink/75">
              Founded to meet the growing need for dependable, compliant, and professional transportation in Qatar, Khat Al Talbiyya serves restaurants, e-commerce retailers, corporations, hotels, and private clients.
            </p>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink/75">
              We manage a modern fleet engineered for Qatar's climate and urban geography — with temperature-controlled delivery boxes, dual high-capacity air-conditioning for passenger comfort, and certified safety equipment.
            </p>

            <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-ink/80">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                <span>Fully compliant with Qatar Ministry of Transport standards</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                <span>Defensive-driving certified and background-verified drivers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                <span>24/7 central dispatch desk supporting all municipalities</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="rounded-full bg-ink px-8 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-white hover:bg-gold hover:text-ink transition shadow"
              >
                Work With Us
              </button>
              <Link
                to="/services"
                className="rounded-full border border-border bg-paper px-6 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-ink hover:bg-white transition"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-3xl border border-border bg-paper p-8 sm:p-12">
            <img
              src="/assets/limo-D2WpX9aQ.png"
              alt="Khat Al Talbiyya limousine"
              loading="lazy"
              className="max-h-72 w-auto object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.18)]"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-t border-border/70 bg-paper px-6 py-20 sm:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              What Defines Us
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl tracking-tight">
              Our Core Principles
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-white p-8 transition hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold mb-5">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink/70">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
