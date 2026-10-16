import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  Shield,
  MapPin,
  CheckCircle2,
  Bike,
  Users,
  Crown,
  Truck,
  PackageCheck,
  Building2,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { FLEET_DATA } from '../data/fleetData';

interface HeroSlide {
  id: string;
  bg: string;
  img: string;
  ratio: number;
  title: string;
  tagline: string;
  desc: string;
  categorySlug: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'delivery',
    bg: '#F6F1E8',
    img: '/assets/moto-DyOlo5RG.png',
    ratio: 932 / 857,
    title: 'DELIVERY SERVICES',
    tagline: 'Last-Mile & Express Delivery',
    desc: 'Fast, reliable delivery solutions for restaurants, retailers, and customers across Qatar.',
    categorySlug: 'food-retail-delivery'
  },
  {
    id: 'passenger',
    bg: '#EEF1F4',
    img: '/assets/van-DiKBqnTj.png',
    ratio: 960 / 449,
    title: 'PASSENGER TRANSPORT',
    tagline: 'Staff & Group Shuttles',
    desc: 'Comfortable and dependable transportation solutions for corporate teams, groups, and daily commutes.',
    categorySlug: 'passenger-staff-transport'
  },
  {
    id: 'limousine',
    bg: '#F2F2F0',
    img: '/assets/limo-D2WpX9aQ.png',
    ratio: 989 / 339,
    title: 'LUXURY LIMOUSINE',
    tagline: 'Executive VIP Mobility',
    desc: 'Professional chauffeur-driven transportation for business travel, airport transfers, and VIP delegations.',
    categorySlug: 'limousine-executive-transport'
  }
];

export const HomePage: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const { openQuoteModal } = useRouter();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);

    // Preload hero images
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.img;
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const changeSlide = useCallback(
    (direction: 'next' | 'prev') => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlideIndex((prev) =>
        direction === 'next'
          ? (prev + 1) % HERO_SLIDES.length
          : (prev + HERO_SLIDES.length - 1) % HERO_SLIDES.length
      );
      timerRef.current = setTimeout(() => setIsTransitioning(false), 650);
    },
    [isTransitioning]
  );

  const getSlidePosition = (index: number) => {
    if (index === currentSlideIndex) return 'active';
    if (index === (currentSlideIndex + 1) % HERO_SLIDES.length) return 'right';
    return 'left';
  };

  const getSlideStyle = (position: string, ratio: number) => {
    const activeWidthVw = isMobile ? Math.min(92, 46 * ratio) : Math.min(46, 30 * ratio);
    const sideWidthVw = activeWidthVw * (isMobile ? 0.42 : 0.45);

    if (position === 'active') {
      return {
        left: '50%',
        width: `${activeWidthVw}vw`,
        bottom: isMobile ? '20%' : '9%',
        transform: 'translateX(-50%)',
        zIndex: 30,
        filter: 'blur(0)',
        opacity: 1
      };
    }

    return {
      left: position === 'left' ? (isMobile ? '18%' : '16%') : isMobile ? '82%' : '84%',
      width: `${sideWidthVw}vw`,
      bottom: isMobile ? '44%' : '30%',
      transform: 'translateX(-50%)',
      zIndex: 20,
      filter: 'blur(3px) brightness(0.96)',
      opacity: isMobile ? 0.5 : 0.7
    };
  };

  const activeSlide = HERO_SLIDES[currentSlideIndex];

  // Helper icons for 6 services
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
    <main className="overflow-x-hidden text-ink">
      {/* 1. HERO SECTION (Approved exact design enhanced with smooth transitions and clear inquiry CTA) */}
      <section
        className="hero-ease relative h-[100svh] min-h-[580px] w-full overflow-hidden"
        style={{ backgroundColor: activeSlide.bg }}
      >
        {/* Doha Skyline Silhouette Asset */}
        <img
          src="/assets/doha-obfoc-0V.jpg"
          alt=""
          width={1920}
          height={800}
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] w-full object-cover opacity-15 mix-blend-multiply"
        />

        {/* Ambient Gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/40" />

        {/* Giant Hero Title */}
        <h1
          className="pointer-events-none absolute inset-x-0 top-[22%] z-10 whitespace-nowrap text-center font-display leading-none tracking-[-0.02em] text-ink select-none sm:top-[16%]"
          style={{ fontSize: isMobile ? 'clamp(44px, 15vw, 90px)' : 'clamp(64px, 14vw, 250px)' }}
        >
          KHAT AL TALBIYYA
        </h1>

        {/* Slide Vehicle Images */}
        {HERO_SLIDES.map((slide, idx) => (
          <img
            key={slide.id}
            src={slide.img}
            alt={`${slide.title.toLowerCase()} vehicle with company branding`}
            className="hero-ease absolute h-auto object-contain object-bottom drop-shadow-[0_30px_30px_rgba(0,0,0,0.25)] select-none"
            style={getSlideStyle(getSlidePosition(idx), slide.ratio)}
          />
        ))}

        {/* Grain overlay */}
        <div className="pointer-events-none absolute inset-0 z-50 opacity-40 grain" />

        {/* Left Bottom Slider Controls & Description */}
        <div className="absolute bottom-6 left-4 z-[60] max-w-[260px] sm:bottom-16 sm:left-24 sm:max-w-[380px]">
          <span className="inline-block rounded-full bg-ink/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink/70 mb-1">
            {activeSlide.tagline}
          </span>
          <h2
            key={activeSlide.id}
            className="animate-in fade-in slide-in-from-bottom-2 text-base font-bold uppercase tracking-[0.08em] text-gold sm:text-[22px] drop-shadow-sm"
          >
            {activeSlide.title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink/80 line-clamp-3 sm:line-clamp-none">
            {activeSlide.desc}
          </p>

          <div className="mt-4 flex items-center gap-3">
            {(['prev', 'next'] as const).map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => changeSlide(dir)}
                aria-label={dir === 'prev' ? 'Previous service' : 'Next service'}
                className="flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-ink/70 text-ink transition hover:scale-105 hover:bg-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold cursor-pointer bg-white/40 backdrop-blur-sm"
              >
                {dir === 'prev' ? (
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                )}
              </button>
            ))}

            <button
              type="button"
              onClick={() => openQuoteModal(activeSlide.title)}
              className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-bold uppercase tracking-wider text-ink shadow-sm hover:brightness-105 transition"
            >
              <Sparkles className="h-3 w-3" />
              Quote
            </button>
          </div>
        </div>

        {/* Right Bottom CTA */}
        <Link
          to="/services"
          className="absolute bottom-6 right-4 z-[60] flex items-center gap-2 font-display uppercase leading-none tracking-[-0.02em] text-ink opacity-90 transition hover:opacity-100 hover:translate-x-1 sm:bottom-16 sm:right-16 group"
          style={{ fontSize: 'clamp(20px, 3.5vw, 48px)' }}
        >
          <span className="max-w-[9ch] sm:max-w-none text-right">Discover our services</span>
          <ArrowRight className="h-[1em] w-[1em] shrink-0 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>

      {/* 2. THE 6 PROPOSED TRANSPORTATION SERVICES */}
      <section className="bg-white px-6 py-24 sm:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Comprehensive Logistics
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-[-0.02em] sm:text-6xl lg:text-7xl">
                Moving Qatar Forward
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink/70 leading-relaxed">
              From individual urban deliveries to turnkey enterprise fleet outsourcing, explore our six core transportation solutions serving Doha and all Qatar municipalities.
            </p>
          </div>

          {/* Grid of the 6 core categories */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_DATA.map((service) => {
              const Icon = getServiceIcon(service.id);
              return (
                <article
                  key={service.id}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-paper p-7 transition hover:shadow-xl hover:border-gold/40 hover:-translate-y-1 duration-200"
                >
                  <div>
                    {/* Visual Preview */}
                    <div className="relative mb-5 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl bg-white p-4 border border-border/50">
                      {service.vehicleImg ? (
                        <img
                          src={service.vehicleImg}
                          alt={service.title}
                          loading="lazy"
                          className="max-h-36 w-auto object-contain transition-transform group-hover:scale-105 duration-300 drop-shadow-md"
                        />
                      ) : (
                        <img
                          src={service.heroImg}
                          alt={service.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300 rounded-lg"
                        />
                      )}
                      <span className="absolute top-2.5 left-2.5 rounded-full bg-ink/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                        {service.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-gold shrink-0" />
                      <h3 className="text-lg font-bold tracking-[0.04em] text-ink group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-ink/70">
                      {service.desc}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="mt-4 space-y-1.5 text-xs text-ink/80 border-t border-border/60 pt-3">
                      {service.keyBenefits.slice(0, 2).map((b, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:text-ink transition uppercase tracking-wider"
                    >
                      View Details
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => openQuoteModal(service.title)}
                      className="rounded-full bg-ink/5 hover:bg-ink hover:text-white px-3 py-1.5 text-[11px] font-semibold text-ink transition uppercase tracking-wider"
                    >
                      Request Quote
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-paper px-8 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-ink hover:bg-ink hover:text-white transition shadow-sm"
            >
              Explore All 6 Transportation Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FLEET HIGHLIGHT SECTION */}
      <section className="border-t border-border/80 bg-paper px-6 py-24 sm:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Engineered for Qatar Roads
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-[-0.02em] sm:text-6xl">
                The Dedicated Fleet
              </h2>
            </div>
            <Link
              to="/fleet"
              className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-gold hover:underline"
            >
              View Full Fleet Specifications →
            </Link>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
            A modern, well-maintained fleet matched to every operational requirement — from high-speed motorcycle urban couriers to heavy-duty cargo trucks and VIP executive limousines.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FLEET_DATA.slice(0, 3).map((vehicle) => (
              <article
                key={vehicle.id}
                className="overflow-hidden rounded-2xl border border-border bg-white p-6 transition hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex aspect-[16/10] items-center justify-center bg-paper rounded-xl p-4 mb-5">
                    <img
                      src={vehicle.img}
                      alt={vehicle.name}
                      loading="lazy"
                      className="max-h-40 w-auto object-contain drop-shadow-md"
                    />
                  </div>
                  <span className="inline-flex items-center rounded-full border border-gold/40 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-gold">
                    {vehicle.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-bold tracking-tight text-ink">
                    {vehicle.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-ink/70 leading-relaxed">
                    {vehicle.desc}
                  </p>

                  <div className="mt-4 space-y-1 text-xs text-ink/80 bg-paper/60 p-3 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-ink/60">Capacity:</span>
                      <span className="font-semibold">{vehicle.specs.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink/60">Climate:</span>
                      <span className="font-semibold">{vehicle.specs.climateControl}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between">
                  <span className="text-[11px] text-ink/60 font-medium">Available for contract</span>
                  <button
                    type="button"
                    onClick={() => openQuoteModal('Fleet Inquiry', vehicle.name)}
                    className="rounded-full bg-ink px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-gold hover:text-ink transition"
                  >
                    Inquire Vehicle
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY KHAT AL TALBIYYA (Core Pillars) */}
      <section className="border-t border-border/70 bg-white px-6 py-20 sm:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              The Operational Standard
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl tracking-[-0.02em]">
              Why Businesses in Qatar Choose Us
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: Clock,
                title: 'On time, every time',
                desc: 'Reliable scheduling, intelligent dispatching, and punctual execution you can plan your daily operations around.'
              },
              {
                icon: Shield,
                title: 'Safe & professional',
                desc: 'Defensive-driving certified drivers, clean background checks, and rigorously maintained vehicles for complete peace of mind.'
              },
              {
                icon: MapPin,
                title: 'All across Qatar',
                desc: 'Comprehensive operational coverage from Doha, Lusail, and West Bay to Al Wakrah, Al Khor, and Industrial Area zones.'
              }
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="flex gap-4 p-6 rounded-2xl border border-border/60 bg-paper/50 hover:bg-paper transition"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold tracking-wide text-base text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink/70">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BUSINESS SOLUTIONS CALLOUT */}
      <section className="border-t border-border/70 bg-paper px-6 py-20 sm:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">
                Corporate Fleet Solutions
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-[-0.01em]">
                Need Dedicated Fleet or Driver Outsourcing?
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink/75">
                We act as a seamless extension of your company’s logistics. Avoid the costly capital expenditure of purchasing vehicles and sponsoring drivers. Khat Al Talbiyya supplies fully managed, maintained, and insured commercial fleets with qualified Qatar-resident drivers under compliant monthly or multi-year contracts.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 text-xs font-semibold text-ink/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                  <span>Zero Fleet CapEx</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                  <span>Immediate Replacement Drivers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                  <span>Ministry of Transport Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                  <span>Dedicated Dispatch Manager</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/business-solutions"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white hover:bg-ink/90 transition shadow"
                >
                  Explore Business Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => openQuoteModal('Corporate Fleet Outsourcing')}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-ink hover:bg-white transition"
                >
                  Consult Corporate Team
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border shadow-xl bg-white p-3">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
                  alt="Corporate staff transportation fleet in Qatar"
                  className="rounded-2xl object-cover h-80 w-full"
                />
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs font-semibold text-ink/70">
                    <span>Corporate Shuttle & Logistics Contracts</span>
                    <span className="text-gold font-bold">Qatar Nationwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER (Approved dark ink aesthetic with instant quote action) */}
      <section className="bg-ink px-6 py-20 text-center text-white sm:px-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
            Get Moving Today
          </p>
          <h2 className="font-display text-4xl tracking-[-0.02em] sm:text-6xl">
            Ready to Move with Us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            Tell us what you need — a high-speed delivery partner, corporate staff shuttle program, or a prestige chauffeured limousine — and we will tailor a reliable Qatar transport solution.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-ink transition hover:brightness-110 shadow-lg cursor-pointer"
            >
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-white hover:bg-white hover:text-ink transition"
            >
              Contact Operations Desk
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
