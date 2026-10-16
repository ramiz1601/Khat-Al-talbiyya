import React from 'react';
import { Link } from '../context/RouterContext';
import { MapPin, Mail, Phone, MessageSquare, ShieldCheck, Clock } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/80 bg-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo-sm-BeR1wlwb.png"
              alt="Khat Al Talbiyya Transportation logo"
              className="h-11 w-11 object-contain"
            />
            <div className="leading-tight">
              <span className="block text-sm font-bold uppercase tracking-[0.12em] text-ink">
                Khat Al Talbiyya
              </span>
              <span className="block text-[10px] font-semibold tracking-[0.18em] text-gold uppercase">
                Transportation Services
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Premier transportation, delivery logistics, passenger shuttles, and luxury limousine services across Qatar.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xs text-ink/70">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold shrink-0" />
              Licensed Qatar Transport Operator
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold shrink-0" />
              24/7 Operations & Dispatch Desk
            </span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ink/70">
            <li>
              <Link to="/about" className="hover:text-ink transition-colors">
                About us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-ink transition-colors">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/fleet" className="hover:text-ink transition-colors">
                Our Fleet
              </Link>
            </li>
            <li>
              <Link to="/business-solutions" className="hover:text-ink transition-colors">
                Business Solutions
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-ink transition-colors">
                Contact & Inquiries
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: All 6 Services */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-xs text-ink/70">
            {SERVICES_DATA.map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/services/${service.slug}`}
                  className="hover:text-ink transition-colors hover:underline block py-0.5"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
            Qatar Operations
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ink/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <span>Doha, State of Qatar</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-gold shrink-0" />
              <a
                href="mailto:info@khataltalbiyya.com"
                className="hover:text-ink transition-colors underline-offset-2 hover:underline"
              >
                info@khataltalbiyya.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-gold shrink-0" />
              <a
                href="tel:+97444000000"
                className="hover:text-ink transition-colors"
              >
                +974 4400 0000
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageSquare className="h-4 w-4 text-emerald-600 shrink-0" />
              <a
                href="https://wa.me/97444000000?text=Hello%20Khat%20Al%20Talbiyya,%20I%20would%20like%20to%20inquire%20about%20transportation%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-semibold hover:underline"
              >
                WhatsApp Instant Inquiry
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/70 py-6 text-center text-xs text-ink/60 px-4">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Khat Al Talbiyya Transportation · Doha, Qatar. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-ink">Reliability & Safety</Link>
            <Link to="/business-solutions" className="hover:text-ink">Corporate Mobility</Link>
            <Link to="/contact" className="hover:text-ink">Customer Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
