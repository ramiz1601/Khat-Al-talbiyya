import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { SERVICES_DATA, TransportationService } from '../data/servicesData';
import { InquiryForm } from '../components/InquiryForm';
import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck,
  Building,
  Car,
  ChevronRight
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const { openQuoteModal } = useRouter();
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="font-display text-4xl text-ink">Service Not Found</h1>
        <p className="mt-4 text-sm text-ink/70">
          The requested transportation service category could not be located.
        </p>
        <div className="mt-8">
          <Link
            to="/services"
            className="rounded-full bg-ink px-6 py-3 text-xs font-bold uppercase tracking-wider text-white"
          >
            Back to All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white text-ink">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-border/70 bg-paper py-3 px-6 sm:px-16 lg:px-24 text-xs font-medium text-ink/60">
        <div className="mx-auto max-w-7xl flex items-center gap-2">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/services" className="hover:text-ink">Services</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-gold font-semibold">{service.title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-paper px-6 py-16 sm:px-16 lg:px-24 border-b border-border/70">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink/60 hover:text-ink mb-4"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Services
            </Link>

            <span className="block rounded-full bg-gold/15 w-fit px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold mb-3">
              {service.tag}
            </span>

            <h1 className="font-display text-4xl sm:text-6xl tracking-tight text-ink">
              {service.title}
            </h1>

            <p className="mt-3 text-base sm:text-lg font-medium text-ink/80">
              {service.headline}
            </p>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink/70">
              {service.fullDesc}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openQuoteModal(service.title)}
                className="rounded-full bg-gold px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-ink hover:brightness-105 shadow cursor-pointer transition"
              >
                Request a Quote for {service.shortTitle}
              </button>
              <a
                href="#quote-form"
                className="rounded-full border border-border bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-ink hover:bg-paper transition"
              >
                Jump to Inquiry Form ↓
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-white p-8 shadow-sm">
            {service.vehicleImg ? (
              <img
                src={service.vehicleImg}
                alt={service.title}
                className="max-h-72 w-auto object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]"
              />
            ) : (
              <img
                src={service.heroImg}
                alt={service.title}
                className="h-72 w-full object-cover rounded-xl"
              />
            )}
            <div className="mt-4 text-center">
              <span className="text-xs font-bold tracking-wider uppercase text-gold">
                Licensed Qatar Transportation Service
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Specs */}
      <section className="px-6 py-20 sm:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-3">
          {/* Left Column (2 cols): Details, Vehicles, Scope */}
          <div className="lg:col-span-2 space-y-12">
            {/* Vehicle Types */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl tracking-tight text-ink flex items-center gap-2">
                <Car className="h-6 w-6 text-gold" />
                Dedicated Vehicles & Equipment
              </h2>
              <p className="mt-2 text-sm text-ink/70">
                Vehicles assigned to this category meet rigorous safety, maintenance, and Qatar Ministry of Transport standards.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.vehicleTypes.map((vt, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border bg-paper p-5 transition hover:shadow-sm"
                  >
                    <h3 className="font-bold text-sm text-ink tracking-wide">
                      {vt.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink/70">
                      {vt.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Service Benefits */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl tracking-tight text-ink flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-gold" />
                Key Operational Benefits
              </h2>

              <ul className="mt-6 space-y-3">
                {service.keyBenefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-white p-4 shadow-xs"
                  >
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-ink leading-snug">
                        {benefit}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qatar Operational Scope */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl tracking-tight text-ink flex items-center gap-2">
                <MapPin className="h-6 w-6 text-gold" />
                Operational Zones & Coverage
              </h2>

              <div className="mt-6 rounded-2xl border border-border bg-paper p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-gold mb-3">
                  Qatar-Wide Dispatch Capabilities:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-ink/80">
                  {service.operationalScope.map((scope, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                      <span>{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Suited For */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl tracking-tight text-ink flex items-center gap-2">
                <Building className="h-6 w-6 text-gold" />
                Recommended For
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.recommendedFor.map((rec, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-ink/80 shadow-xs"
                  >
                    {rec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (1 col): Direct Quote Form Embedded */}
          <div id="quote-form" className="lg:col-span-1">
            <div className="sticky top-28 rounded-3xl border border-border bg-paper p-6 sm:p-7 shadow-lg">
              <div className="mb-4">
                <span className="rounded-full bg-gold/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">
                  Inquiry & Quotation
                </span>
                <h3 className="mt-2 font-display text-2xl text-ink">
                  Request {service.shortTitle}
                </h3>
                <p className="mt-1 text-xs text-ink/65">
                  Direct submission to Khat Al Talbiyya dispatch desk.
                </p>
              </div>

              <InquiryForm
                initialService={service.title}
                isModal={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Navigation */}
      <section className="border-t border-border/70 bg-paper py-16 px-6 sm:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-wider text-gold mb-4">
            Explore Other Transportation Categories:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_DATA.filter((s) => s.id !== service.id).map((other) => (
              <Link
                key={other.slug}
                to={`/services/${other.slug}`}
                className="flex items-center justify-between rounded-xl border border-border bg-white p-4 hover:border-gold transition group shadow-xs"
              >
                <div>
                  <h4 className="text-xs font-bold text-ink group-hover:text-gold transition">
                    {other.title}
                  </h4>
                  <p className="text-[11px] text-ink/60 line-clamp-1">
                    {other.tag}
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 text-ink/40 group-hover:text-gold group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
