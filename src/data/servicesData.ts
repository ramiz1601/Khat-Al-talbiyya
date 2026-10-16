export interface TransportationService {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tag: string;
  headline: string;
  desc: string;
  fullDesc: string;
  heroImg: string;
  vehicleImg?: string;
  vehicleTypes: {
    name: string;
    description: string;
  }[];
  keyBenefits: string[];
  operationalScope: string[];
  recommendedFor: string[];
}

export const SERVICES_DATA: TransportationService[] = [
  {
    id: 'food-retail-delivery',
    slug: 'food-retail-delivery',
    title: 'Food & Retail Delivery',
    shortTitle: 'Food & Retail',
    tag: 'Last-Mile Delivery',
    headline: 'Fast, temperature-controlled delivery across Doha & Qatar municipalities',
    desc: 'Delivery motorcycles, delivery cars, and scheduled courier services tailored for restaurants, cloud kitchens, and retail brands.',
    fullDesc: 'Khat Al Talbiyya provides prompt, hygienic, and dependable last-mile delivery operations for food and beverage outlets, retail chains, and e-commerce stores across Qatar. Our fleet comprises purpose-built delivery motorcycles equipped with thermally insulated delivery boxes and delivery cars for bulk grocery and delicate retail merchandise.',
    heroImg: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1200&q=80',
    vehicleImg: '/assets/moto-DyOlo5RG.png',
    vehicleTypes: [
      {
        name: 'Delivery Motorcycles & Scooters',
        description: 'Agile 125cc-150cc delivery bikes fitted with certified thermal boxes, GPS tracking, and safety equipment for fast urban navigation.'
      },
      {
        name: 'Compact Delivery Cars',
        description: 'Fuel-efficient hatchbacks and sedans for multi-order grocery, bakery, floral, and retail deliveries requiring climate control.'
      }
    ],
    keyBenefits: [
      'Hot & cold temperature retention boxes preserving food quality',
      'Trained riders experienced in Doha street network and traffic patterns',
      'Flexible peak-hour scaling for lunch and dinner rush hours',
      'Real-time communication with dedicated operations dispatchers',
      'Daily, weekly, or monthly delivery outsourcing agreements'
    ],
    operationalScope: [
      'Doha (West Bay, The Pearl, Lusail, Al Sadd, Old Airport)',
      'Al Rayyan, Al Wakrah, Al Khor, and Umm Salal',
      'Shopping malls, retail districts, and cloud kitchen hubs'
    ],
    recommendedFor: [
      'Restaurants, cafes, and gourmet confectioneries',
      'Supermarket chains and grocery delivery networks',
      'Pharmacies and cosmetic retailers',
      'Florists and gift boutiques'
    ]
  },
  {
    id: 'courier-parcel-logistics',
    slug: 'courier-parcel-logistics',
    title: 'Courier & Parcel Logistics',
    shortTitle: 'Courier & Parcel',
    tag: 'Express Distribution',
    headline: 'Accurate e-commerce distribution and scheduled business parcel routes',
    desc: 'Parcel distribution, e-commerce deliveries, delivery vans, and guaranteed proof of delivery across Qatar.',
    fullDesc: 'We power end-to-end parcel distribution for e-commerce companies, corporate offices, legal firms, and supply chain partners. With dedicated delivery vans, barcode tracking compatibility, and digital proof-of-delivery (POD), our courier team ensures packages arrive securely and on schedule.',
    heroImg: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    vehicleImg: '/assets/van-DiKBqnTj.png',
    vehicleTypes: [
      {
        name: 'High-Roof Delivery Vans',
        description: 'Spacious panel vans equipped with shelving, cargo tie-downs, and anti-slip flooring for secure parcel handling.'
      },
      {
        name: 'Express Courier Sedans',
        description: 'Dedicated vehicles for time-critical legal documents, sensitive corporate contracts, and urgent medical supplies.'
      }
    ],
    keyBenefits: [
      'Same-day and next-day scheduled dispatch throughout Qatar',
      'Digital Proof of Delivery (electronic signature & photo confirmation)',
      'Scheduled daily inter-branch document and parcel collection',
      'Careful handling of fragile, high-value, and confidential parcels',
      'Customized SLA reporting for corporate and e-commerce partners'
    ],
    operationalScope: [
      'Commercial towers in West Bay & Lusail Marina',
      'Industrial Area logistics zones and free zones',
      'Residential compounds and towers nationwide'
    ],
    recommendedFor: [
      'E-commerce merchants and direct-to-consumer brands',
      'Banks, audit firms, and corporate headquarters',
      'Medical laboratories and pharmaceutical suppliers',
      'Trading houses and spare parts distributors'
    ]
  },
  {
    id: 'limousine-executive-transport',
    slug: 'limousine-executive-transport',
    title: 'Limousine & Executive Transport',
    shortTitle: 'Luxury Limousine',
    tag: 'Chauffeur Service',
    headline: 'Discreet, high-end chauffeur transport for executives, VIPs, and airport transfers',
    desc: 'Executive sedans, premium SUVs, professional uniformed chauffeurs, and Hamad International Airport (HIA) transfers.',
    fullDesc: 'Experience refined corporate travel and VIP hospitality in Qatar. Khat Al Talbiyya provides impeccably maintained luxury sedans and premium SUVs driven by multilingual, discreet professional chauffeurs. From Hamad International Airport meet-and-greets to diplomatic delegations and high-profile summits, we represent your organization with distinction.',
    heroImg: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    vehicleImg: '/assets/limo-D2WpX9aQ.png',
    vehicleTypes: [
      {
        name: 'Executive Luxury Sedans',
        description: 'Premium sedans featuring plush leather interiors, rear climate controls, onboard Wi-Fi, and bottled water for senior executives.'
      },
      {
        name: 'Prestige Full-Size SUVs',
        description: 'High-capacity luxury SUVs providing superior legroom, generous luggage space, and commanding road presence for delegations.'
      }
    ],
    keyBenefits: [
      'Punctual flight tracking and meet-and-assist at Hamad International Airport',
      'Uniformed, background-verified, English/Arabic proficient chauffeurs',
      'Pristine vehicle sanitization and complimentary passenger amenities',
      'Flexible hourly charter, daily bookings, or executive retainers',
      'Seamless billing and dedicated corporate concierge coordination'
    ],
    operationalScope: [
      'Hamad International Airport (HIA) & VIP Terminals',
      'Five-star hotels, luxury resorts, and conference centres',
      'Government ministries, embassies, and private residences'
    ],
    recommendedFor: [
      'Corporate executives, board members, and visiting delegations',
      'Government and multinational business summits',
      'Luxury hotel guests and high-net-worth individuals',
      'Weddings, diplomatic receptions, and VIP milestones'
    ]
  },
  {
    id: 'passenger-staff-transport',
    slug: 'passenger-staff-transport',
    title: 'Passenger & Staff Transport',
    shortTitle: 'Staff Transport',
    tag: 'Corporate Shuttles',
    headline: 'Dependable daily workforce shuttles, group transfers, and corporate contracts',
    desc: 'Passenger vans, minibuses, staff shuttles, and long-term corporate transport contracts across Qatar.',
    fullDesc: 'Ensure your staff arrive energized and on time every shift. Khat Al Talbiyya operates reliable corporate passenger transport programs tailored to shift rotations, office commutes, construction site mobilizations, and hospitality staff transfers. Our air-conditioned fleet is managed with strict adherence to Qatar road safety protocols.',
    heroImg: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    vehicleImg: '/assets/van-DiKBqnTj.png',
    vehicleTypes: [
      {
        name: '12 to 15-Seater Passenger Vans',
        description: 'Modern, high-roof vans with individual air conditioning vents and comfortable seating for mid-sized corporate teams.'
      },
      {
        name: '26 to 30-Seater Minibuses',
        description: 'Spacious shuttles ideal for hotel staff rotations, industrial shifts, and airport group transfers.'
      }
    ],
    keyBenefits: [
      'Customized daily route planning optimized for traffic and shift schedules',
      'Dedicated standby backup vehicles to guarantee zero employee downtime',
      'Strict preventive vehicle maintenance and safety inspection standards',
      'Air-conditioned interiors engineered for Qatar summer temperatures',
      'Transparent monthly per-route or per-vehicle contract pricing'
    ],
    operationalScope: [
      'Industrial Area, Ras Laffan, Mesaieed, and Energy City',
      'Hotels, shopping complexes, and healthcare facilities',
      'Residential staff accommodations to office districts'
    ],
    recommendedFor: [
      'Hotels, resorts, and facility management companies',
      'Construction and engineering contractors',
      'Hospitals, medical complexes, and clinics',
      'Corporate headquarters with centralized staff commutes'
    ]
  },
  {
    id: 'heavy-cargo-moving',
    slug: 'heavy-cargo-moving',
    title: 'Heavy Cargo & Moving Services',
    shortTitle: 'Cargo & Moving',
    tag: 'Freight & Moving',
    headline: 'Commercial trucks, freight haulage, office relocation, and residential moving',
    desc: 'Commercial trucks, cargo transport, office relocation, and residential moving across Qatar.',
    fullDesc: 'From single-pallet freight transfers to full-scale corporate office relocations, Khat Al Talbiyya delivers reliable heavy cargo and moving solutions. We manage heavy goods, industrial supplies, trade show displays, and residential furniture with heavy-duty commercial trucks and trained packing crews.',
    heroImg: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
    vehicleTypes: [
      {
        name: '3-Ton to 7-Ton Box Trucks',
        description: 'Enclosed cargo trucks with hydraulic tail-lifts for protected transport of furniture, equipment, and goods.'
      },
      {
        name: 'Flatbed & Open Cargo Trucks',
        description: 'Heavy haulers suitable for construction materials, oversized machinery, and industrial logistics.'
      }
    ],
    keyBenefits: [
      'Hydraulic tail-lifts for smooth, safe loading and offloading',
      'Experienced moving supervisors and professional packing crew',
      'Protective blankets, strapping, and heavy-duty wrapping materials',
      'Port-to-warehouse and inter-warehouse freight movements',
      'Comprehensive transport coverage across all Qatar zones'
    ],
    operationalScope: [
      'Hamad Port, Doha Port, and Air Cargo facilities',
      'Industrial Area, Birkat Al Awamer, and Logistics Parks',
      'Commercial towers, showrooms, and residential villas'
    ],
    recommendedFor: [
      'Corporate office relocations and IT asset moves',
      'Residential villa and apartment relocations',
      'Industrial equipment and construction material transport',
      'Exhibition, retail setup, and event logistics'
    ]
  },
  {
    id: 'fleet-driver-outsourcing',
    slug: 'fleet-driver-outsourcing',
    title: 'Fleet & Driver Outsourcing',
    shortTitle: 'Fleet Outsourcing',
    tag: 'Turnkey Operations',
    headline: 'Full-service vehicle supply, driver outsourcing, and business fleet management',
    desc: 'Vehicle supply, licensed driver outsourcing, and turnkey business fleet management in Qatar.',
    fullDesc: 'Eliminate the capital expenditure, visa sponsorship overhead, and administrative headaches of managing your own commercial fleet. Khat Al Talbiyya provides turnkey fleet and driver outsourcing programs in Qatar — supplying fully maintained vehicles paired with trained, licensed, Qatar-resident drivers under long-term corporate SLAs.',
    heroImg: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
    vehicleImg: '/assets/van-DiKBqnTj.png',
    vehicleTypes: [
      {
        name: 'Dedicated Commercial Vehicles',
        description: 'Custom-allocated delivery bikes, cars, vans, or trucks branded with your corporate identity or neutral fleet livery.'
      },
      {
        name: 'Professional Qatar-Licensed Drivers',
        description: 'Vetted, medically examined, and defensively trained commercial drivers under Khat Al Talbiyya sponsorship and payroll.'
      }
    ],
    keyBenefits: [
      'Zero fleet capital investment — predictable monthly operating expenses',
      'Complete handling of vehicle maintenance, insurance, and Istimara renewals',
      'Immediate driver replacement in case of leave, illness, or emergency',
      'Full compliance with Ministry of Labour and Qatar Traffic Directorate regulations',
      'Dedicated fleet operations manager and performance analytics'
    ],
    operationalScope: [
      'Turnkey enterprise contracts anywhere in Qatar',
      'Short-term project mobilizations and seasonal fleet expansions',
      'Multi-year corporate mobility partnerships'
    ],
    recommendedFor: [
      'Multinational enterprises expanding operations in Qatar',
      'Delivery aggregators and retail distribution chains',
      'Hospitality groups and school shuttle contractors',
      'Logistics firms seeking compliant capacity expansion'
    ]
  }
];
