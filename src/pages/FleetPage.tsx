import React, { useState } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { FLEET_DATA, FleetVehicle } from '../data/fleetData';
import { ArrowRight, Check, ShieldCheck, Thermometer, Users, Briefcase, Truck } from 'lucide-react';

export const FleetPage: React.FC = () => {
  const { openQuoteModal } = useRouter();
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Delivery', 'Executive', 'Transport', 'Cargo'];

  const filteredFleet = filterCategory === 'All'
    ? FLEET_DATA
    : FLEET_DATA.filter((v) => v.category === filterCategory);

  return (
    <main className="bg-white text-ink">
      {/* Header */}
      <section className="px-6 py-20 sm:px-16 lg:px-24 bg-paper/60 border-b border-border/70">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Our Vehicles & Equipment
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-[-0.02em] sm:text-7xl">
            The Dedicated Fleet
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink/70 sm:text-base">
            A modern, well-maintained fleet matched to every Qatar transport requirement — from rapid urban motorcycle couriers to high-capacity passenger shuttles, commercial freight trucks, and executive VIP limousines.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilterCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-ink text-white'
                    : 'bg-white border border-border text-ink/70 hover:text-ink hover:bg-paper'
                }`}
              >
                {cat === 'All' ? 'All Vehicles (5 Categories)' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="px-6 py-20 sm:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredFleet.map((vehicle) => (
            <article
              key={vehicle.id}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-paper transition hover:shadow-xl hover:border-gold/40 duration-200"
            >
              <div>
                {/* Vehicle Showcase Image Container */}
                <div className="relative flex aspect-[16/10] items-center justify-center bg-white p-6 border-b border-border/60 overflow-hidden">
                  <img
                    src={vehicle.img}
                    alt={vehicle.name}
                    loading="lazy"
                    className={`max-h-full w-auto object-contain transition-transform hover:scale-105 duration-300 ${
                      vehicle.isTransparentAsset
                        ? 'drop-shadow-[0_16px_16px_rgba(0,0,0,0.18)]'
                        : 'rounded-xl h-full w-full object-cover'
                    }`}
                  />
                  <span className="absolute top-3 left-3 rounded-full border border-gold/40 bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-gold shadow-xs">
                    {vehicle.tag}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-7">
                  <h2 className="text-xl font-bold tracking-tight text-ink">
                    {vehicle.name}
                  </h2>
                  <p className="mt-1 text-xs font-semibold text-gold uppercase tracking-wider">
                    {vehicle.tagline}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-ink/70">
                    {vehicle.desc}
                  </p>

                  {/* Specifications Card */}
                  <div className="mt-5 rounded-2xl border border-border/80 bg-white p-4 space-y-2 text-xs">
                    <div className="flex justify-between items-center pb-1.5 border-b border-border/50">
                      <span className="text-ink/60">Capacity:</span>
                      <span className="font-semibold text-ink">{vehicle.specs.capacity}</span>
                    </div>
                    <div className="flex justify-between items-center pb-1.5 border-b border-border/50">
                      <span className="text-ink/60">Climate System:</span>
                      <span className="font-semibold text-ink">{vehicle.specs.climateControl}</span>
                    </div>
                    <div className="flex justify-between items-center pb-1.5 border-b border-border/50">
                      <span className="text-ink/60">Cargo / Luggage:</span>
                      <span className="font-semibold text-ink">{vehicle.specs.cargoSpace}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ink/60">Drivetrain:</span>
                      <span className="font-semibold text-ink">{vehicle.specs.transmission}</span>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="mt-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-ink/60 mb-2">
                      Key Capabilities:
                    </p>
                    <ul className="space-y-1.5 text-xs text-ink/75">
                      {vehicle.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For */}
                  <div className="mt-4 pt-3 border-t border-border/60">
                    <p className="text-[11px] text-ink/60">
                      <strong className="text-ink">Recommended Use:</strong> {vehicle.idealFor}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-7 pt-0">
                <button
                  type="button"
                  onClick={() => openQuoteModal('Fleet Inquiry', vehicle.name)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-ink py-3 text-xs font-bold uppercase tracking-[0.1em] text-white hover:bg-gold hover:text-ink transition shadow-sm cursor-pointer"
                >
                  Request Quote for This Vehicle
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Fleet Standards & Regulatory Assurance */}
      <section className="border-t border-border/70 bg-paper px-6 py-20 sm:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Maintenance & Safety Standards
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl tracking-tight">
              Rigorous Qatar Compliance
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border bg-white p-6">
              <ShieldCheck className="h-8 w-8 text-gold mb-3" />
              <h3 className="font-bold text-sm text-ink">Istimara & Insurance</h3>
              <p className="mt-1.5 text-xs text-ink/70 leading-relaxed">
                Every vehicle holds active Qatar road registration, valid municipality approvals, and comprehensive commercial passenger/cargo insurance.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6">
              <Thermometer className="h-8 w-8 text-gold mb-3" />
              <h3 className="font-bold text-sm text-ink">High-Ambient AC</h3>
              <p className="mt-1.5 text-xs text-ink/70 leading-relaxed">
                Cooling systems engineered to withstand Qatar summer temperatures up to 50°C, safeguarding passenger comfort and sensitive goods.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6">
              <Users className="h-8 w-8 text-gold mb-3" />
              <h3 className="font-bold text-sm text-ink">Certified Chauffeurs</h3>
              <p className="mt-1.5 text-xs text-ink/70 leading-relaxed">
                Commercial driver licensing, defensive-driving certification, and full background vetting under Khat Al Talbiyya management.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6">
              <Briefcase className="h-8 w-8 text-gold mb-3" />
              <h3 className="font-bold text-sm text-ink">Standby Fleet Backups</h3>
              <p className="mt-1.5 text-xs text-ink/70 leading-relaxed">
                Guaranteed replacement vehicle availability to ensure zero operational interruption for our corporate contract partners.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => openQuoteModal('Fleet Sourcing & Outsourcing')}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-white hover:bg-gold hover:text-ink transition shadow-md"
            >
              Discuss Dedicated Fleet Sourcing
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
