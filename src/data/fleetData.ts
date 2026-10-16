export interface FleetVehicle {
  id: string;
  name: string;
  category: string;
  tag: string;
  tagline: string;
  desc: string;
  img: string;
  isTransparentAsset?: boolean;
  specs: {
    capacity: string;
    climateControl: string;
    transmission: string;
    cargoSpace: string;
  };
  features: string[];
  idealFor: string;
}

export const FLEET_DATA: FleetVehicle[] = [
  {
    id: 'delivery-motorcycles',
    name: 'Delivery Motorcycles & Scooters',
    category: 'Delivery',
    tag: 'Agile Urban Fleet',
    tagline: 'High-efficiency two-wheelers for rapid food and retail dispatch',
    desc: 'Agile delivery bikes equipped with reinforced chassis and branded, insulated thermal cargo boxes — engineered for fast, safe navigation through Doha traffic.',
    img: '/assets/moto-DyOlo5RG.png',
    isTransparentAsset: true,
    specs: {
      capacity: '1 Rider',
      climateControl: 'Thermal Insulated Box',
      transmission: 'Automatic / Manual',
      cargoSpace: '75L to 90L Top Box'
    },
    features: [
      'Food-grade insulated delivery box',
      'Dual rear suspension for cargo stability',
      'Smartphone navigation mount & USB charging',
      'Reflective high-visibility safety livery'
    ],
    idealFor: 'Restaurant food orders, bakery treats, cloud kitchens, and pharmacy parcels.'
  },
  {
    id: 'delivery-cars',
    name: 'Delivery Cars & Compact Cargo',
    category: 'Delivery',
    tag: 'Climate-Controlled Delivery',
    tagline: 'Multi-order capacity with full air-conditioned protection',
    desc: 'Dependable, fuel-efficient compact sedans and hatchbacks providing air-conditioned transport for delicate grocery, retail, fashion, and electronic goods.',
    img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=80',
    isTransparentAsset: false,
    specs: {
      capacity: '1 Driver + Cargo Area',
      climateControl: 'High-Output AC',
      transmission: 'Automatic',
      cargoSpace: 'Up to 450 Liters Boot'
    },
    features: [
      'Climate-controlled interior preventing heat damage',
      'Fold-flat rear seating for oversized retail parcels',
      'Real-time GPS dispatch & telemetry',
      'Ideal for multi-drop scheduled delivery routes'
    ],
    idealFor: 'Florists, luxury fashion boutiques, gourmet cakes, and bulk grocery deliveries.'
  },
  {
    id: 'executive-limousines',
    name: 'Executive Sedans & Luxury SUVs',
    category: 'Executive',
    tag: 'VIP Chauffeur Fleet',
    tagline: 'Refined prestige mobility for business leaders and VIP hospitality',
    desc: 'Premium chauffeur-driven vehicles featuring whisper-quiet cabins, immaculate leather upholstery, rear privacy glass, and bottled water for executive travel and airport VIP transfers.',
    img: '/assets/limo-D2WpX9aQ.png',
    isTransparentAsset: true,
    specs: {
      capacity: '3 to 6 Passengers',
      climateControl: 'Multi-Zone Climate Control',
      transmission: 'Smooth Automatic',
      cargoSpace: 'Generous Luggage Capacity'
    },
    features: [
      'Uniformed, bilingual professional chauffeurs',
      'Complimentary onboard high-speed Wi-Fi',
      'Rear passenger vanity mirrors & executive legroom',
      'Hamad International Airport flight tracking'
    ],
    idealFor: 'Diplomats, corporate executives, board delegations, weddings, and airport transfers.'
  },
  {
    id: 'passenger-vans',
    name: 'Passenger Vans & Minibuses',
    category: 'Transport',
    tag: 'Group & Staff Mobility',
    tagline: 'Reliable group transport engineered for comfort and punctual schedules',
    desc: 'Spacious, robust passenger vans and minibuses designed for workforce shift commutes, corporate event transfers, and hotel shuttle services with powerful overhead air conditioning.',
    img: '/assets/van-DiKBqnTj.png',
    isTransparentAsset: true,
    specs: {
      capacity: '14 to 30 Passengers',
      climateControl: 'Individual Overhead AC Vents',
      transmission: 'Automatic / Manual',
      cargoSpace: 'Rear Baggage & Under-Seat Storage'
    },
    features: [
      'Ergonomic high-back seats with 3-point seatbelts',
      'High-capacity dual air conditioning systems',
      'Emergency exits and certified fire safety gear',
      'Automatic side-step for effortless boarding'
    ],
    idealFor: 'Corporate employee shuttles, hotel team commutes, conference delegates, and school transport.'
  },
  {
    id: 'commercial-cargo-trucks',
    name: 'Commercial Cargo Trucks',
    category: 'Cargo',
    tag: 'Heavy Logistics',
    tagline: 'Sturdy freight transport for commercial goods and large relocations',
    desc: 'Heavy-duty 3-ton to 7-ton box and flatbed trucks with hydraulic tail-lifts for industrial freight transfers, office equipment moving, and comprehensive residential relocations.',
    img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80',
    isTransparentAsset: false,
    specs: {
      capacity: '3 Ton to 7 Ton Payload',
      climateControl: 'Dry Box / Heavy Duty',
      transmission: 'Heavy-Duty Manual/Auto',
      cargoSpace: '14ft to 22ft Cargo Box'
    },
    features: [
      'Hydraulic tail-lift for fast pallet & heavy loading',
      'Heavy cargo lashing rails & protective padding',
      'Accompanied by professional loading crews upon request',
      'Authorized for all Qatar industrial and municipal zones'
    ],
    idealFor: 'Warehouse freight haulage, office relocations, retail store setups, and residential furniture moves.'
  }
];
