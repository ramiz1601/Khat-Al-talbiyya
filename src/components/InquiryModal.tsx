import React, { useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { InquiryForm } from './InquiryForm';
import { X, ShieldCheck } from 'lucide-react';

export const InquiryModal: React.FC = () => {
  const { quoteModalOpen, closeQuoteModal, selectedServiceForQuote, selectedVehicleForQuote } = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && quoteModalOpen) {
        closeQuoteModal();
      }
    };
    if (quoteModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [quoteModalOpen, closeQuoteModal]);

  if (!quoteModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeQuoteModal();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={closeQuoteModal}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink/70 hover:bg-paper hover:text-ink transition"
          aria-label="Close quote modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-2">
            <ShieldCheck className="h-3.5 w-3.5" />
            Direct Qatar Dispatch Quotation
          </div>
          <h2 className="font-display text-2xl sm:text-4xl tracking-tight text-ink">
            Request a Transportation Quote
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-ink/70">
            Tell us about your logistics or passenger transport needs in Qatar. We will respond with customized fleet options and rates.
          </p>
        </div>

        {/* The Form */}
        <InquiryForm
          initialService={selectedServiceForQuote}
          initialVehicle={selectedVehicleForQuote}
          isModal={true}
        />
      </div>
    </div>
  );
};
