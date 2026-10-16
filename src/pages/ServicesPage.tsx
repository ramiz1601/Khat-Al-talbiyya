import React, { useState } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { SERVICES_DATA, TransportationService } from '../data/servicesData';
import { ArrowRight, Check, ChevronRight, Truck, Bike, PackageCheck, Crown, Users, Building2 } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { openQuoteModal } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.id === selectedCategory);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'food-retail-delivery':
        return Bike;
      case 'courier-parcel-logistics':
        return PackageCheck;
      case 'limousine-executive-transport':
        return Crown;
      case 'passenger-staff-transport':
        return Users;
      case 'heavy-cargo-moving':
        return Truck;
      case 'fleet-driver-outsourcing':
        return Building2;
      default:
        return Truck;
    }
  };

  return (
    <main className="bg-white text-ink">
      {/* Header Banner */}
      <section className="px-6 py-20 sm:px-16 lg:px-24 bg-paper/60 border-b border-border/70">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            What We Do
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-[-0.02em] sm:text-7xl">
            Our Transportation Services
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink/70 sm:text-base">
            Six comprehensive transportation and logistics categories designed to meet Qatar’s dynamic commercial, corporate, and private mobility requirements.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                selectedCategory === 'all'
                  ? 'bg-ink text-white'
                  : 'bg-white border border-border text-ink/70 hover:text-ink hover:bg-paper'
              }`}
            >
              All Services ({SERVICES_DATA.length})
            </button>
            {SERVICES_DATA.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedCategory(service.id)}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  selectedCategory === service.id
                    ? 'bg-ink text-white'
                    : 'bg-white border border-border text-ink/70 hover:text-ink hover:bg-paper'
                }`}
              >
                {service.shortTitle}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List with alternating layout (Approved design language) */}
      <div className="divide-y divide-border/70">
        {filteredServices.map((service, index) => {
          const Icon = getServiceIcon(service.id);
          const isOdd = index % 2 === 1;

          return (
            <section
              key={service.id}
              id={service.slug}
              className={`px-6 py-20 sm:px-16 lg:px-24 ${isOdd ? 'bg-paper' : 'bg-white'}`}
            >
              <div
                className={`mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 ${
                  isOdd ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Visual / Vehicle Container */}
                <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-white p-8 sm:p-12 shadow-sm">
                  {service.vehicleImg ? (
                    <img
                      src={service.vehicleImg}
                      alt={`${service.title} vehicle`}
                      loading="lazy"
                      className="max-h-72 w-auto object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] transition-transform hover:scale-105 duration-300"
                    />
                  ) : (
                    <img
                      src={service.heroImg}
                      alt={service.title}
                      loading="lazy"
                      className="h-72 w-full object-cover rounded-xl drop-shadow-sm"
                    />
                  )}
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                    {service.vehicleTypes.map((vt, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-paper px-3 py-1 text-[11px] font-semibold text-ink/80 border border-border/80"
                      >
                        {vt.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-gold">
                      {service.tag}
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-3xl tracking-[-0.01em] sm:text-5xl text-ink">
                    {service.title}
                  </h2>

                  <p className="mt-2 text-sm font-medium text-ink/60">
                    {service.headline}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-ink/75 sm:text-base">
                    {service.fullDesc}
                  </p>

                  {/* Key Benefits */}
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink/70 mb-3">
                      Key Service Highlights:
                    </p>
                    <ul className="grid gap-2.5 sm:grid-cols-1">
                      {service.keyBenefits.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/80">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold font-bold" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => openQuoteModal(service.title)}
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white transition hover:bg-gold hover:text-ink shadow cursor-pointer"
                    >
                      Request This Service
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-ink hover:bg-paper transition"
                    >
                      Full Details & Specs
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Quote Banner */}
      <section className="bg-ink px-6 py-16 text-center text-white sm:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl sm:text-5xl tracking-tight">
            Have a Specific Transportation Request?
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Whether you require an immediate one-way transfer, a monthly delivery fleet agreement, or heavy commercial freight, our dispatch team is ready to structure your contract.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="rounded-full bg-gold px-8 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-ink hover:brightness-110 transition shadow-lg"
            >
              Request Custom Quotation
            </button>
            <Link
              to="/contact"
              className="rounded-full border border-white/30 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-white hover:bg-white hover:text-ink transition"
            >
              Contact Operations Desk
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
