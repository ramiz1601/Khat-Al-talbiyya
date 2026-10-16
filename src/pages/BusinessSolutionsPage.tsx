import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import {
  Package,
  Users,
  Building2,
  Handshake,
  ShieldCheck,
  Headphones,
  CalendarCheck,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export const BusinessSolutionsPage: React.FC = () => {
  const { openQuoteModal } = useRouter();

  const solutions = [
    {
      icon: Package,
      title: 'Delivery Partnerships',
      desc: 'Reliable last-mile and scheduled delivery operations for restaurants, cloud kitchens, retailers, and e-commerce brands.',
      bullets: ['Guaranteed dispatch SLAs', 'Thermal food-grade boxes', 'Multi-order routing']
    },
    {
      icon: Users,
      title: 'Staff Transportation',
      desc: 'Daily employee shuttle programs with flexible shift routes, punctuality tracking, and dedicated air-conditioned vehicles.',
      bullets: ['Fixed shift schedules', 'Door-to-door or hub pick-up', 'Emergency standby vehicles']
    },
    {
      icon: Building2,
      title: 'Corporate Mobility & VIP',
      desc: 'Executive sedans and chauffeured limousines for board meetings, visiting delegations, and Hamad Airport transfers.',
      bullets: ['Uniformed bilingual chauffeurs', 'Flight monitoring at HIA', 'Corporate monthly billing']
    },
    {
      icon: Handshake,
      title: 'Fleet & Driver Outsourcing',
      desc: 'Complete turnkey vehicle supply and licensed commercial driver staffing — eliminating fleet ownership risk and overhead.',
      bullets: ['Zero CapEx investment', 'Full Istimara & insurance handling', 'Immediate driver replacement']
    },
    {
      icon: CalendarCheck,
      title: 'Event & Delegation Logistics',
      desc: 'High-volume shuttle fleets, VIP convoys, and event transport coordination for conferences, summits, and exhibitions in Doha.',
      bullets: ['On-site fleet coordinators', 'Dedicated marshals & dispatch', 'Flexible multi-day charter']
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Contract Agreements',
      desc: 'Structured transportation agreements customized around your operational volumes, peak seasons, and budget requirements.',
      bullets: ['Predictable OPEX pricing', 'Dedicated account manager', 'Transparent monthly SLA reports']
    }
  ];

  return (
    <main className="bg-white text-ink">
      {/* Header */}
      <section className="px-6 py-20 sm:px-16 lg:px-24 bg-paper/60 border-b border-border/70">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            For Companies & Institutions
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-[-0.02em] sm:text-7xl">
            Business Solutions
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink/70 sm:text-base">
            We work as an extension of your operations — moving your goods, your workforce, and your executive guests with the precision and reliability your business demands in Qatar.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => openQuoteModal('Corporate Fleet Agreement')}
              className="rounded-full bg-ink px-8 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-white hover:bg-gold hover:text-ink transition shadow"
            >
              Request Corporate Proposal
            </button>
            <Link
              to="/contact"
              className="rounded-full border border-border bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-ink hover:bg-paper transition"
            >
              Contact Commercial Desk
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="border-t border-border/70 bg-paper px-6 py-20 sm:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-ink">
              Tailored Corporate Programs
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              Select a transportation program suited to your operational scale in Qatar.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <article
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-border bg-white p-8 transition hover:shadow-lg hover:border-gold/40 duration-200"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold mb-5">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-ink/70">
                    {item.desc}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-border/60 pt-4 text-xs text-ink/80">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50">
                  <button
                    type="button"
                    onClick={() => openQuoteModal(item.title)}
                    className="w-full rounded-full bg-paper py-2.5 text-xs font-bold uppercase tracking-wider text-ink hover:bg-ink hover:text-white transition"
                  >
                    Inquire This Program
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* A Partner Not Just a Provider */}
      <section className="px-6 py-20 sm:px-16 lg:px-24 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gold">
              Operational Reliability
            </span>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.01em] sm:text-5xl">
              A Partner, Not Just a Provider
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/75 sm:text-base">
              Every enterprise moves differently. We take the time to evaluate your exact routes, peak delivery windows, and staff shift rotations, then build a dedicated transport solution around them — backed by maintained vehicles, Qatar-licensed professional drivers, and a single point of operational contact.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 text-sm text-ink/80">
              <div className="rounded-xl border border-border bg-paper p-4">
                <Headphones className="h-5 w-5 text-gold mb-2" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-ink">
                  Dedicated Account Lead
                </h4>
                <p className="mt-1 text-xs text-ink/70">
                  Direct WhatsApp & phone line to your assigned logistics coordinator.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-paper p-4">
                <CalendarCheck className="h-5 w-5 text-gold mb-2" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-ink">
                  Flexible Agreements
                </h4>
                <p className="mt-1 text-xs text-ink/70">
                  Adaptable monthly or seasonal contracts without cumbersome lock-ins.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-paper p-4">
                <ShieldCheck className="h-5 w-5 text-gold mb-2" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-ink">
                  Guaranteed Standbys
                </h4>
                <p className="mt-1 text-xs text-ink/70">
                  Immediate replacement vehicle and driver if any unforeseen maintenance arises.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-paper p-4">
                <TrendingUp className="h-5 w-5 text-gold mb-2" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-ink">
                  Scalable As You Grow
                </h4>
                <p className="mt-1 text-xs text-ink/70">
                  Easily add motorcycles, vans, or trucks as your client demand increases.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => openQuoteModal('Corporate Partnership')}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-white hover:bg-gold hover:text-ink transition shadow cursor-pointer"
              >
                Schedule Corporate Consultation
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-3xl border border-border bg-paper p-8 sm:p-12">
            <img
              src="/assets/van-DiKBqnTj.png"
              alt="Khat Al Talbiyya commercial fleet van"
              loading="lazy"
              className="max-h-72 w-auto object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.18)]"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
