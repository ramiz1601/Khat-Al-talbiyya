import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string, state?: Record<string, any>) => void;
  quoteModalOpen: boolean;
  openQuoteModal: (initialService?: string, initialVehicle?: string) => void;
  closeQuoteModal: () => void;
  selectedServiceForQuote: string;
  selectedVehicleForQuote: string;
}

const RouterContext = createContext<RouterContextType | null>(null);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('Food & Retail Delivery');
  const [selectedVehicleForQuote, setSelectedVehicleForQuote] = useState('');
  const [, startTransition] = useTransition();

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    if (to === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (to.startsWith('#')) {
      const el = document.querySelector(to);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.history.pushState({}, '', to);
    startTransition(() => {
      setCurrentPath(to);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openQuoteModal = (initialService?: string, initialVehicle?: string) => {
    if (initialService) setSelectedServiceForQuote(initialService);
    if (initialVehicle) setSelectedVehicleForQuote(initialVehicle);
    setQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        navigate,
        quoteModalOpen,
        openQuoteModal,
        closeQuoteModal,
        selectedServiceForQuote,
        selectedVehicleForQuote
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used within a RouterProvider');
  return ctx;
};

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  to,
  className = '',
  activeClassName = '',
  children,
  onClick,
  ...rest
}) => {
  const { currentPath, navigate } = useRouter();
  const isActive = to === '/' ? currentPath === '/' : currentPath.startsWith(to);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:') || to.startsWith('https://wa.me')) {
      // Normal external link
      return;
    }
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`${className} ${isActive ? activeClassName : ''}`.trim()}
      {...rest}
    >
      {children}
    </a>
  );
};
