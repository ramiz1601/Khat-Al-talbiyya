import React, { useState } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { Menu, X, PhoneCall, ChevronDown } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const { currentPath, openQuoteModal } = useRouter();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services', hasDropdown: true },
    { to: '/business-solutions', label: 'Business Solutions' },
    { to: '/fleet', label: 'Fleet' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-[80] border-b border-border/80 bg-white/95 backdrop-blur-md transition-all">
      {/* Top micro-bar for quick Qatar operational contact */}
      <div className="bg-ink text-white/80 text-[11px] py-1.5 px-4 sm:px-8 border-b border-white/10 hidden sm:block">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              24/7 Operations across Doha & Qatar Municipalities
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@khataltalbiyya.com"
              className="hover:text-gold transition-colors"
            >
              info@khataltalbiyya.com
            </a>
            <a
              href="tel:+97444000000"
              className="flex items-center gap-1.5 font-semibold text-white hover:text-gold transition-colors"
            >
              <PhoneCall className="h-3 w-3 text-gold" />
              +974 4400 0000
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            src="/assets/logo-sm-BeR1wlwb.png"
            alt="Khat Al Talbiyya Transportation logo"
            className="h-11 w-11 object-contain transition-transform group-hover:scale-105"
          />
          <div className="leading-tight">
            <span className="block text-sm font-bold uppercase tracking-[0.12em] text-ink">
              Khat Al Talbiyya
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.18em] text-gold uppercase">
              Transportation Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = link.to === '/' ? currentPath === '/' : currentPath.startsWith(link.to);

            if (link.hasDropdown) {
              return (
                <div
                  key={link.to}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    to={link.to}
                    className={`inline-flex items-center gap-1 text-[13px] font-semibold uppercase tracking-[0.1em] transition py-2 ${
                      isActive ? 'text-gold' : 'text-ink/70 hover:text-ink'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>

                  {/* Dropdown Menu for Services */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 w-80 rounded-xl border border-border bg-white p-3 shadow-xl z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="px-3 py-1.5 border-b border-border/50 text-[10px] font-bold uppercase tracking-wider text-gold">
                        Our 6 Core Services
                      </div>
                      <div className="mt-1 space-y-0.5">
                        {SERVICES_DATA.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="block rounded-lg px-3 py-2 text-xs font-semibold text-ink/80 hover:bg-paper hover:text-ink transition"
                          >
                            <span className="block font-bold">{service.title}</span>
                            <span className="text-[11px] font-normal text-ink/60 line-clamp-1">
                              {service.tag}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-2 pt-2 border-t border-border/50">
                        <Link
                          to="/services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="block text-center text-[11px] font-bold text-gold uppercase tracking-wider hover:underline"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[13px] font-semibold uppercase tracking-[0.1em] transition ${
                  isActive ? 'text-gold' : 'text-ink/70 hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="cursor-pointer rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-ink/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Get a quote
          </button>
        </nav>

        {/* Mobile menu and quote CTA */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="rounded-full bg-gold px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-ink hover:brightness-105"
          >
            Quote
          </button>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink hover:bg-paper transition"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <nav
          className="border-t border-border/80 bg-white px-4 py-4 lg:hidden animate-in slide-in-from-top-2 duration-200 shadow-xl"
          aria-label="Mobile navigation"
        >
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = link.to === '/' ? currentPath === '/' : currentPath.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] transition ${
                    isActive ? 'bg-gold/15 text-gold font-bold' : 'text-ink/80 hover:bg-paper hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Quick Service Shortcuts */}
          <div className="mt-3 pt-3 border-t border-border/60">
            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-gold mb-1.5">
              Popular Services:
            </p>
            <div className="grid grid-cols-2 gap-1.5 px-1">
              {SERVICES_DATA.slice(0, 4).map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded bg-paper px-2.5 py-2 text-[11px] font-medium text-ink/80 truncate hover:text-gold"
                >
                  {s.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-border/60 space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full rounded-full bg-ink py-3 text-center text-xs font-bold uppercase tracking-[0.1em] text-white shadow"
            >
              Request a quote
            </button>
            <a
              href="tel:+97444000000"
              className="flex items-center justify-center gap-2 rounded-full border border-border py-2.5 text-xs font-semibold text-ink/80 hover:bg-paper"
            >
              <PhoneCall className="h-3.5 w-3.5 text-gold" />
              Call Operations: +974 4400 0000
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
