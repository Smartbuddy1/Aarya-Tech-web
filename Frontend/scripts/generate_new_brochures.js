import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');
const brochuresDir = path.resolve(publicDir, 'brochures');

if (!fs.existsSync(brochuresDir)) {
  fs.mkdirSync(brochuresDir, { recursive: true });
}

// Color Palette
const COLORS = {
  primary: '#094334',       // Deep Forest / Emerald
  primaryLight: '#0e5f4a',  // Medium Green
  primaryBg: '#f0fdf4',     // Very light green tint
  accent: '#d97706',        // Warm Amber / Gold
  accentLight: '#fef3c7',   // Light gold
  textDark: '#0f172a',      // Slate 900
  textMuted: '#475569',     // Slate 600
  textLight: '#ffffff',
  bgLight: '#f8fafc',       // Slate 50
  border: '#cbd5e1',        // Slate 300
  borderLight: '#e2e8f0',   // Slate 200
  tableRowAlt: '#f1f5f9',   // Slate 100
  badgeBg: '#e0f2fe',       // Light sky blue
  badgeText: '#0369a1',     // Sky 700
};

// Company Info
const COMPANY = {
  name: 'AARYA INNOVTECH PVT. LTD.',
  brand: 'SMART BUDDY',
  division: 'Eco-Hygiene, Public Utilities & Civic Automation OEM',
  certifications: 'ISO 9001:2015 | ISO 14001:2015 | ISO 45001:2018 | CE Certified',
  phone: '+91 88067 96868 / +91 99238 10197',
  email: 'sales@aaryainnovtech.com',
  website: 'www.aaryainnovtech.com',
  regdOffice: '4A, Sayali Darshan A, Radha Nagar, Makhamalabad Rd, Panchavati, Nashik - 422003',
  factory: 'S-27, Near Emerson, Ambad MIDC, Nashik, Maharashtra - 422010',
  tagline: 'Engineering Sustainable, Smart & Clean Public Utilities'
};

const newBrochureData = [
  {
    filename: 'platform-trolley.pdf',
    productTitle: 'SMART BUDDY PLATFORM TROLLEY',
    modelCode: 'SB-PT-500 / 1000 Series',
    category: 'MATERIAL HANDLING & INDUSTRIAL UTILITIES',
    subtitle: 'Heavy-Duty Material Handling Industrial Platform Trolleys for Warehouses & Workshops',
    summary:
      'The Smart Buddy Platform Trolley by Aarya Innovtech is an industrial-grade material handling trolley engineered for high load-bearing strength, smooth maneuverability, and worker ergonomics. Built with reinforced steel decks and heavy-duty 360-degree ball bearing casters, it transports heavy cargo, machinery parts, cartons, and tools safely across demanding warehouse and factory floors.',
    imagePath: path.resolve(publicDir, 'images/product-catalog/platform-trolley.png'),
    highlights: [
      'High load-bearing capacity ranging from 250 kg up to 1,500 kg industrial loads.',
      'Reinforced mild steel deck with anti-skid embossed pattern and under-bed cross-ribbing.',
      'Heavy-duty 6" - 8" Polyurethane (PU) / Solid Rubber casters with double ball bearings.',
      'Ergonomically designed tubular push-pull handle reduces operator back strain and fatigue.',
      'Electrostatic epoxy powder coating ensures long-lasting resistance against oil, chemicals, and scratches.',
      'Precision foot-activated locking brakes ensure secure holding on slopes, loading docks, and elevators.'
    ],
    featureCards: [
      { title: 'Heavy Duty Capacity', text: 'Transports heavy machinery, parts, tools, and cartons safely up to 1,500 kg.' },
      { title: 'Smooth & Silent Roll', text: 'Double-bearing industrial casters roll silently across concrete and epoxy floors.' },
      { title: 'Anti-Sag Reinforced Deck', text: 'Cross-ribbed structural chassis eliminates deck sagging under heavy point loads.' },
      { title: 'Operator Ergonomics', text: 'Comfortable handle geometry minimizes physical pushing and pulling effort.' }
    ],
    specs: [
      { label: 'Model Series', value: 'Smart Buddy SB-PT-250 (250 kg) / SB-PT-500 (500 kg) / SB-PT-1000 (1000 kg)' },
      { label: 'Platform Material', value: 'Heavy Gauge CRCA Mild Steel / Food-Grade Stainless Steel 304 (Optional)' },
      { label: 'Deck Surface', value: 'Anti-Skid Checkered Embossed Pattern with Deburred Rounded Corners' },
      { label: 'Chassis Frame', value: 'Heavy-Duty MS Angle & Channel Structural Framework with Under-Deck Stiffeners' },
      { label: 'Wheel Specification', value: '6" - 8" Heavy-Duty Polyurethane (PU) / High-Resilience Rubber Caster Wheels' },
      { label: 'Wheel Configuration', value: '2 Fixed Directional Wheels + 2 Universal Swivel Casters with Total-Lock Brakes' },
      { label: 'Handle Construction', value: 'Ergonomic 32mm OD Heavy-Wall Tubular Steel (Welded Rigid or Folding Handle)' },
      { label: 'Surface Treatment', value: '7-Tank Pretreatment Process + Anti-Corrosive Epoxy Polyester Powder Coating' },
      { label: 'Platform Sizes (L x W)', value: 'Standard: 900mm x 600mm / 1200mm x 750mm / 1500mm x 900mm (Custom Available)' }
    ],
    techDetails: [
      'Under-deck longitudinal channel cross-ribbing prevents central deck deflection under concentrated point loads.',
      'Integrated foot-brake pedals on rear swivel wheels lock both wheel roll and swivel rotation simultaneously.',
      'Laser-cut rounded corners with protective rubber bumper perimeter prevent wall damage during transit.',
      'Available in drop-side wire mesh cage, double handle, and multi-tier shelf variations.'
    ],
    applications: [
      'Warehouses & Distribution Centers',
      'Industrial Manufacturing Plants',
      'Airports & Railway Cargo Terminals',
      'Automotive Assembly Workshops',
      'Hotels, Catering & Linen Handling',
      'E-Commerce Fulfillment Hubs',
      'Hardware & Retail Superstores',
      'Pharma & Chemical Cleanrooms'
    ]
  },
  {
    filename: 'steel-porta-cabin.pdf',
    productTitle: 'SMART BUDDY STEEL PORTA CABIN',
    modelCode: 'SB-SPC-1020 / 1040 Series',
    category: 'PREFABRICATED MODULAR STRUCTURES',
    subtitle: 'Heavy-Duty Prefabricated Portable Cabins for Site Offices, Security & Commercial Shelters',
    summary:
      'Aarya Innovtech Steel Porta Cabins are thermally insulated, weather-proof, and rugged prefabricated structures designed for instant deployment. Engineered with high-strength structural steel frames and insulated PUF/Rockwool panels, they provide comfortable, air-conditioned workspaces and shelters across construction sites, security checkpoints, and remote industrial hubs.',
    imagePath: path.resolve(publicDir, 'images/product-catalog/steel-porta-cabin.jpeg'),
    highlights: [
      'High-grade structural steel framework with anti-corrosive primer and polyurethane enamel finish.',
      'Double-wall insulated sandwich panels providing exceptional thermal and acoustic insulation.',
      'Pre-fitted electrical wiring, LED batten lighting, power points, and MCB protection board.',
      'Top corner lifting lugs and forklift base pockets allow fast crane lifting and road relocation.',
      'Custom interior configurations: Site manager office, meeting room, security guard post, or pantry.',
      'Leak-proof sloped ceiling design with concealed rainwater drain spouts for all-weather protection.'
    ],
    featureCards: [
      { title: 'Zero Civil Delay', text: 'Delivered 100% pre-fabricated and ready to use immediately on arrival with no civil work.' },
      { title: 'Thermal Comfort', text: 'Insulated walls and roof keep interiors cool in harsh summers and warm in winters.' },
      { title: 'Rapid Mobility', text: 'Equipped with heavy crane lifting hooks and forklift pockets for easy relocation.' },
      { title: 'Plug-and-Play Wiring', text: 'Complete internal electrical circuit with provisions for air conditioning and IT networking.' }
    ],
    specs: [
      { label: 'Model Series', value: 'Smart Buddy SB-SPC-1010 (10x10 ft) / SB-SPC-2010 (20x10 ft) / SB-SPC-4010 (40x10 ft)' },
      { label: 'Main Framework', value: 'Heavy-Duty MS Tubular Hollow Sections (IS 4923) & Pressed Channels' },
      { label: 'Wall Panels', value: '50mm - 60mm PUF / EPS / Rockwool Sandwich Panels with Pre-Painted GI Sheets' },
      { label: 'Roofing Structure', value: 'Insulated Sandwich Roof Panel with Camber Slope for Self-Draining Water Runoff' },
      { label: 'Floor Base', value: '18mm Marine Plywood / Cement Fiber Board topped with Heavy-Duty PVC Vinyl Sheet' },
      { label: 'Doors & Windows', value: 'Insulated Flush Door with Mortise Lock; Aluminum Sliding Windows with Safety Grills' },
      { label: 'Electrical System', value: 'Concealed FRLS Copper Wiring, Modular Switches, LED Fittings, 16A AC Power Points' },
      { label: 'Surface Finish', value: 'Epoxy Zinc-Phosphate Primer + Two Coats of Industrial Polyurethane Enamel Paint' }
    ],
    techDetails: [
      'Base chassis engineered with heavy cross-members to support floor live loads up to 350 kg/sq.m.',
      'Concealed PVC electrical conduits prevent wire exposure, ensuring fire safety and aesthetics.',
      'Wall panels sealed with weather-resistant silicon sealant prevent rainwater intrusion even in heavy monsoon storms.',
      'Optional attached toilet cubicle, pantry counter, and exterior branding graphics available.'
    ],
    applications: [
      'Infrastructure & Highway Projects',
      'Construction Site Head Offices',
      'Security Gate Guard Posts',
      'Industrial Plant Toll Plazas',
      'Mining & Renewable Energy Yards',
      'Event Ticket & Admin Cabins',
      'Mobile Medical & Testing Clinics',
      'Disaster Relief Accommodations'
    ]
  },
  {
    filename: 'traffic-police-booths.pdf',
    productTitle: 'SMART BUDDY TRAFFIC POLICE BOOTH',
    modelCode: 'SB-TPB-360 Series',
    category: 'CIVIC SURVEILLANCE & TRAFFIC SAFETY',
    subtitle: 'Ergonomic, High-Visibility All-Weather Traffic Control & Surveillance Kiosks',
    summary:
      'The Smart Buddy Traffic Police Booth by Aarya Innovtech is engineered to provide high visibility, weather protection, and ergonomic comfort for on-duty traffic personnel. Featuring 360-degree tinted panoramic windows, solar-ready power options, and heavy-duty steel construction, it empowers officers to manage traffic efficiently during extreme heat, heavy downpours, and night duties.',
    imagePath: path.resolve(publicDir, 'images/product-catalog/traffic-police-booths.png'),
    highlights: [
      '360-degree all-round panoramic viewing windows for unobstructed traffic monitoring and surveillance.',
      'Extended double-insulated canopy overhang protects officers against harsh sun, rain, and winds.',
      'Fitted with high-intensity amber LED flashing beacon light for clear nighttime roadside visibility.',
      'Integrated ergonomic writing desk, lockable drawer, charging points, and swivel operator stool.',
      'Solar panel ready roof mounts with provision for battery backup for uninterrupted off-grid power.',
      'Raised anti-skid floor platform prevents water ingress during roadway flooding and monsoon rain.'
    ],
    featureCards: [
      { title: '360° Surveillance View', text: 'Panoramic tinted safety glass windows offer complete 360-degree roadway monitoring.' },
      { title: 'All-Weather Shielding', text: 'Insulated canopy protects officers from extreme heatwaves, pollution, and downpours.' },
      { title: 'Night Road Safety', text: 'High-intensity LED flasher light on the canopy alerts oncoming drivers from distance.' },
      { title: 'Officer Ergonomics', text: 'Equipped with comfortable desk, fan, charging points, and lockable storage.' }
    ],
    specs: [
      { label: 'Model Series', value: 'Smart Buddy SB-TPB-360 All-Weather Traffic Police Kiosk' },
      { label: 'Structure', value: 'Galvanized Mild Steel Heavy Chassis with Anti-Rust Polyurethane Coating' },
      { label: 'Window Glazing', value: 'Toughened Safety Glass / Polycarbonate Scratch-Resistant Sliding Panes with Sun-Film' },
      { label: 'Canopy & Roof', value: 'Double-Layer Insulated Weather Canopy with 300mm Extended Sun/Rain Overhang' },
      { label: 'Interior Setup', value: 'Built-in Writing Desk, Ergonomic Swivel Stool, LED Lights, DC Fan & USB Charger' },
      { label: 'Beacon Alert', value: 'Roof-Mounted 360° Amber High-Lumen Flashing LED Warning Light' },
      { label: 'Power Supply', value: '230V AC Mains Input + In-Built Solar PV Panel (100W) & Battery Backup Provision' },
      { label: 'Dimensions (L x W x H)', value: '1500mm x 1500mm x 2500mm (Custom footprint sizes available)' }
    ],
    techDetails: [
      'Raised platform floor finished with anti-skid aluminum tread plate keeps the interior dry during waterlogging.',
      'Sealed acoustic glass minimizes high-decibel vehicle horn noise and roadway particulate pollution.',
      'Tamper-proof steel lockable entrance door with internal emergency latch mechanism.'
    ],
    applications: [
      'City Road Intersections & Chowks',
      'Highway Toll Plazas & Checkpoints',
      'VIP Security Transit Corridors',
      'Police Checkpoints & Border Barriers',
      'Bridge & Flyover Entry Points',
      'Commercial Campus Gate Control'
    ]
  },
  {
    filename: 'modular-toilet.pdf',
    productTitle: 'SMART BUDDY MODULAR TOILET',
    modelCode: 'SB-MT-200 to 1000 Series',
    category: 'MUNICIPAL SANITATION & COMMUNITY INFRASTRUCTURE',
    subtitle: 'Pre-Engineered Modular Toilet Blocks with Scalable Cubicles & Modern Sanitation Fittings',
    summary:
      'The Smart Buddy Modular Toilet by Aarya Innovtech is a pre-engineered community sanitation block designed for municipal corporations, smart cities, schools, and tourist spots. Featuring modular expandable cubicles, water-saving fixtures, and durable stainless steel sanitary wares, it offers rapid on-site assembly and low maintenance.',
    imagePath: path.resolve(publicDir, 'images/product-catalog/modular-toilet.jpeg'),
    highlights: [
      'Pre-engineered modular blocks: 2, 4, 6, 8, or 10 cubicle community configurations.',
      'Separate male, female, and Divyangjan (accessible) cubicles with safety grab rails.',
      'Heavy-duty Food-Grade Stainless Steel (SS 304) Indian pans and European commodes.',
      'Water-saving push-button taps and dual-flush valves reduce water usage by up to 50%.',
      'Seamlessly integrates with Smart Buddy Bio-Digester tanks for sewer-independent zero-waste disposal.',
      'Natural ridge-vent roof architecture maximizes natural ventilation and ambient daylight.'
    ],
    featureCards: [
      { title: 'Rapid Assembly', text: 'Factory pre-engineered panels assemble on site within days, avoiding long civil delays.' },
      { title: 'Vandal-Resistant Build', text: 'SS 304 sanitary fittings and compact laminate partitions withstand heavy public use.' },
      { title: 'Water Efficient', text: 'Dual-flush mechanisms and auto push-taps minimize precious municipal water consumption.' },
      { title: 'Bio-Digester Ready', text: 'Connects directly to on-site anaerobic bio-digester tanks with zero sewer dependency.' }
    ],
    specs: [
      { label: 'Model Series', value: 'Smart Buddy SB-MT Community Modular Toilet Complex' },
      { label: 'Superstructure', value: 'Galvanized Structural Steel Frame with PUF Insulated Sandwich Wall Panels' },
      { label: 'Interior Partitions', value: 'Anti-Graffiti SS 304 / High-Pressure Compact Laminate (HPL) Cubicles' },
      { label: 'Sanitary Wares', value: 'Stainless Steel 304 Squatting Pan / Western Commodes with Integrated P-Trap' },
      { label: 'Water Storage', value: 'Integrated 1000L - 3000L Overhead Polyethylene / SS 304 Water Tanks' },
      { label: 'Plumbing System', value: 'Concealed CPVC/UPVC Piping with Individual Isolation Ball Valves' },
      { label: 'Ventilation', value: 'Continuous Aerodynamic Ridge Louvers & Exhaust Fans' }
    ],
    techDetails: [
      'Factory precision fabrication allows multi-cubicle expansion or relocation if site needs change.',
      'All sanitary waste piping is routed with proper hydraulic slopes for gravity-fed discharge into bio-digesters.',
      'Anti-skid ceramic tile or heavy embossed aluminum chequered flooring ensures wet-area slip resistance.'
    ],
    applications: [
      'Municipal Parks & Gardens',
      'Smart City Public Amenity Centers',
      'Highway Transit Corridors & Bus Depots',
      'Tourist Heritage Spots & Beaches',
      'Government Schools & Colleges',
      'Pilgrimage Centers & Melas'
    ]
  },
  {
    filename: 'composter-solid-waste.pdf',
    productTitle: 'SMART BUDDY SOLID WASTE COMPOSTER',
    modelCode: 'SB-SWM-250 / 500 / 1000 Series',
    category: 'SOLID WASTE RECYCLING & ORGANIC RECOVERY',
    subtitle: 'Decentralized Commercial Composting Machine for Organic & Wet Solid Waste Conversion',
    summary:
      'The Smart Buddy Solid Waste Composter by Aarya Innovtech is an advanced decentralized aerobic composting machine. It breaks down food leftovers, kitchen waste, vegetable market refuse, and garden scraps into rich, pathogen-free organic compost within 24 to 36 hours with automated temperature, churning, and odor control.',
    imagePath: path.resolve(publicDir, 'images/product-catalog/composter-solid-waste.jpeg'),
    highlights: [
      'Rapid 24 to 36 hour organic decomposition cycle via thermophilic aerobic digestion.',
      'Heavy-duty internal dual-shaft mixing paddles with bi-directional rotation.',
      'Achieves up to 85% - 90% volume reduction of incoming organic wet waste.',
      'Odor-free operation with integrated multi-stage bio-filter and exhaust air scrubber.',
      'Processing tank crafted from corrosion-resistant Stainless Steel (SS 304).',
      'Microcontroller / PLC automated panel with real-time temperature and cycle telemetry.'
    ],
    featureCards: [
      { title: '24-36 Hr Compost', text: 'Accelerated thermophilic bacterial decomposition converts wet waste in hours.' },
      { title: '90% Volume Reduction', text: 'Drastically reduces municipal hauling trips, carbon emissions, and tipping fees.' },
      { title: 'Odor-Free Operation', text: 'Integrated bio-filter and activated carbon scrubber neutralize all organic odors.' },
      { title: 'Automatic PLC Control', text: 'Intelligent moisture and heating algorithms run automated cycles with minimal labor.' }
    ],
    specs: [
      { label: 'Capacities Available', value: '50 kg, 100 kg, 250 kg, 500 kg, 1000 kg up to 2000 kg/day models' },
      { label: 'Chamber Material', value: 'Food-Grade Stainless Steel AISI 304 with Outer Thermal Insulation Jacket' },
      { label: 'Drive Mechanism', value: 'Heavy-Duty Helical Reduction Geared Motor with Overload Reverse Logic' },
      { label: 'Heating Elements', value: 'Smart Ceramic Heating Jackets with Thermostatic Auto Cut-Off' },
      { label: 'Exhaust & Deodorization', value: 'High-CFM Blower Fan with Activated Carbon & Bio-Enzyme Scrubber Filter' },
      { label: 'Safety Interlocks', value: 'Magnetic Safety Switch stops mixing paddles immediately upon opening feed lid' }
    ],
    techDetails: [
      'Thermophilic temperatures above 60°C eradicate weed seeds, fungal spores, and harmful pathogen bacteria.',
      'Bi-directional paddle churning accelerates oxygen diffusion and prevents clumping of fibrous waste.',
      'Output compost is ready-to-use organic manure rich in Nitrogen, Phosphorus, and Potassium (NPK).'
    ],
    applications: [
      'Gated Townships & Apartment Complexes',
      'Corporate IT Campuses & Tech Parks',
      'Vegetable & Fruit Mandis',
      'Hotels, Resorts & Convention Centers',
      'Municipal Ward Transfer Stations',
      'Temple Trust Canteens & Kitchens'
    ]
  },
  {
    filename: 'ss-shelf-rack.pdf',
    productTitle: 'SMART BUDDY STAINLESS STEEL SHELF RACK',
    modelCode: 'SB-SSR-304 Series',
    category: 'COMMERCIAL HYGIENE & STORAGE SYSTEMS',
    subtitle: 'Rust-Proof Commercial Grade SS 304 Tiered Storage Shelving Systems',
    summary:
      'The Smart Buddy Stainless Steel Shelf Rack by Aarya Innovtech is a precision-engineered commercial storage shelving solution. Manufactured from certified food-grade Stainless Steel (SS 304), it provides complete rust resistance, chemical durability, and high weight stability across pharmaceutical facilities, cleanrooms, and food prep areas.',
    imagePath: path.resolve(publicDir, 'images/product-catalog/ss-shelf-rack.jpeg'),
    highlights: [
      '100% Food-Grade Stainless Steel 304 construction for zero rust and chemical resistance.',
      'Multi-tier configurations (3, 4, 5, or 6 tiers) with solid sheet or perforated airflow decks.',
      'High per-tier load carrying capacity: 150 kg to 250 kg uniformly distributed load (UDL).',
      'Sanitary crevice-free TIG welds ground smooth for pressure-jet washing and sterilization.',
      'Adjustable bullet leveling feet ensure rock-solid stability on uneven floor grades.',
      'Satin brush polish finish resists scratches and minimizes dust adherence.'
    ],
    featureCards: [
      { title: '100% Rust-Proof SS 304', text: 'Resists moisture, steam, sanitizers, and mild organic food acids completely.' },
      { title: 'Hygienic Sanitation', text: 'Smooth crevice-free sanitary welds allow thorough pressure jet washing and disinfection.' },
      { title: 'High Weight Capacity', text: 'Reinforced under-shelf channels support up to 250 kg load per shelf tier.' },
      { title: 'Adjustable Leveling', text: 'Nylon/SS bullet feet adjust up to 25mm to stabilize on uneven commercial floors.' }
    ],
    specs: [
      { label: 'Material Grade', value: 'AISI 304 Food-Grade Stainless Steel (AISI 316 available on request)' },
      { label: 'Tier Options', value: '3 / 4 / 5 / 6 Tiers with 350mm to 450mm vertical clearance' },
      { label: 'Load Rating', value: 'Up to 200 - 250 kg per shelf tier (Uniformly Distributed Load)' },
      { label: 'Leg Pillars', value: '38mm OD Heavy-Gauge Round or Square SS 304 Tubular Columns' },
      { label: 'Shelf Construction', value: '1.2mm - 1.5mm SS Sheet with Longitudinal Hat-Channel Stiffeners' },
      { label: 'Surface Finish', value: '240-Grit Satin Brushed Polish (Anti-Glare, Easy Clean)' }
    ],
    techDetails: [
      'Under-shelf reinforcement channels are argon-welded to eliminate vibration and center sagging.',
      'All edges are laser deburred and returned 90 degrees for worker safety and rigidity.',
      'Can be configured with food-grade swivel casters with brakes for mobile cleanroom racks.'
    ],
    applications: [
      'Commercial Kitchens & Pantries',
      'Cold Storage Rooms & Walk-In Freezers',
      'Pharma Formulations & Labs',
      'Hospital Sterile Supply Stores',
      'Food Processing & Packaging Lines',
      'Chemical & Diagnostic Warehouses'
    ]
  },
  {
    filename: 'kitchen-storage-racks.pdf',
    productTitle: 'SMART BUDDY KITCHEN STORAGE RACK',
    modelCode: 'SB-KSR-400 Series',
    category: 'COMMERCIAL KITCHEN & FOOD SERVICE UTILITIES',
    subtitle: 'Commercial Kitchen Organizer Racks for Restaurants, Canteens, Hotels & Food Prep Areas',
    summary:
      'The Smart Buddy Kitchen Storage Rack is engineered specifically for bustling commercial kitchens. Built with heavy-gauge stainless steel surfaces and ventilated wire or pipe grids, it provides accessible, hygienic, and organized storage for large cookware, GN pans, utensils, and dry food ingredients.',
    imagePath: path.resolve(publicDir, 'images/product-catalog/kitchen-storage-racks.png'),
    highlights: [
      'Optimized for heavy pots, kadhais, pans, gastronorm containers, and bulk dry ration bags.',
      'Ventilated tubular / grid shelf tiers promote rapid drying of washed cookware.',
      'Heavy-gauge stainless steel build resists cooking oils, steam, high humidity, and heat.',
      'Vertical space-saving design maximizes prep table and floor workspace.',
      'Smooth deburred edges prevent scratches to kitchen staff, uniforms, and towels.',
      'Available with heavy-duty leveling bullet feet or locking swivel casters for easy mop-down.'
    ],
    featureCards: [
      { title: 'Food-Safe Hygiene', text: 'Meets stringent commercial food safety standards with non-porous stainless steel.' },
      { title: 'Fast Utensil Drying', text: 'Open tubular and grid shelves allow rapid water drainage and natural air circulation.' },
      { title: 'Oil & Heat Resistant', text: 'Withstands kitchen grease, hot cookware contact, and high humidity without rusting.' },
      { title: 'Maximized Floor Area', text: 'High-density vertical storage keeps kitchen floors clear and uncluttered.' }
    ],
    specs: [
      { label: 'Material', value: 'Heavy Duty Stainless Steel (SS 202 / SS 304 options)' },
      { label: 'Shelf Styles', value: 'Tubular Pipe Shelf, Perforated Grid, or Solid Sheet Tiers' },
      { label: 'Tier Configurations', value: '3, 4, or 5 Tier models with wide spacing for tall cookware' },
      { label: 'Weight Carrying', value: '120 kg to 180 kg per shelf tier' },
      { label: 'Pillars & Legs', value: '38mm SS Square/Round Tubing with Bullet Levelers or Locking Casters' }
    ],
    techDetails: [
      'Open tubular framework eliminates dust corners and grease collection traps for effortless daily sanitizing.',
      'Welded corners are buffed and polished to a seamless brushed finish.',
      'Optional wall-anchoring brackets provide earthquake and impact stability in high-pace kitchens.'
    ],
    applications: [
      'Hotel Back-of-House Kitchens',
      'Restaurant & Cafe Pantries',
      'Industrial Staff Canteens',
      'Central Cloud Kitchens',
      'Bakery & Pastry Workstations',
      'Hospital Dietary Kitchens'
    ]
  },
  {
    filename: 'heavy-duty-storage-racks.pdf',
    productTitle: 'SMART BUDDY HEAVY DUTY STORAGE RACK',
    modelCode: 'SB-HDR-2000 Series',
    category: 'INDUSTRIAL WAREHOUSING & LOGISTICS RACKING',
    subtitle: 'High-Capacity Warehouse Industrial Pallet & Cargo Racking Systems',
    summary:
      'Smart Buddy Heavy Duty Storage Racks by Aarya Innovtech are high-tonnage industrial pallet and cargo racking systems. Engineered with cold-rolled structural steel columns and heavy double-C box beams, they maximize warehouse vertical cube space while ensuring absolute safety for forklift operations.',
    imagePath: path.resolve(publicDir, 'images/product-catalog/heavy-duty-storage-racks.png'),
    highlights: [
      'High-tonnage load capacity from 500 kg up to 3,000 kg per beam storage level.',
      'Cold-rolled high-tensile steel upright frames with precision slot pitch for adjustable levels.',
      'Double C-section box beams with multi-claw heavy connector brackets and safety pins.',
      'Durable electrostatic epoxy powder coating provides superior scratch and rust protection.',
      'Modular architecture enables seamless expansion, bay additions, and height reconfiguration.',
      'Anchor base plates with expansion bolts ensure seismic and dynamic load stability.'
    ],
    featureCards: [
      { title: 'Vertical Space Max', text: 'Converts unutilized warehouse headroom into high-density pallet storage.' },
      { title: 'Forklift & Manual Pick', text: 'Compatible with standard forklifts, reach trucks, and manual order picking.' },
      { title: 'Multi-Ton Capacity', text: 'Engineered to bear up to 3,000 kg per storage beam level safely.' },
      { title: 'Modular Expansion', text: 'Add-on bays and adjustable beam levels adapt as warehouse inventory grows.' }
    ],
    specs: [
      { label: 'Load Capacity', value: '500 kg to 3,000 kg per storage beam level' },
      { label: 'Upright Columns', value: 'Roll-Formed High-Strength Steel (80x60mm to 100x70mm profiles)' },
      { label: 'Beams', value: 'Double C-Section Interlocking Box Beams with 4-Claw Heavy Brackets' },
      { label: 'Frame Heights', value: 'Available from 2 meters up to 10 meters multi-tier structures' },
      { label: 'Decking Options', value: 'Heavy Steel Panel Decks, Galvanized Wire Mesh Decking, or Wooden Battens' },
      { label: 'Protective Finish', value: 'Automated 7-Stage Pretreatment + Epoxy-Polyester Powder Coating' }
    ],
    techDetails: [
      'Spring-steel safety locking pins prevent accidental beam dislodgement during forklift pallet insertion.',
      'Column base plates distribute dynamic loads evenly across concrete foundation slabs.',
      'Heavy-duty floor-mounted corner protectors shield upright columns from accidental forklift bumper hits.'
    ],
    applications: [
      'Logistics & 3PL Warehouses',
      'Automotive & Engineering Spares',
      'E-Commerce Fulfillment Centers',
      'FMCG & Cold Storage Hubs',
      'Raw Material & Finished Goods Yards',
      'Retail Big-Box Superstores'
    ]
  },
  {
    filename: 'dough-kneader.pdf',
    productTitle: 'SMART BUDDY DOUGH KNEADER',
    modelCode: 'SB-DK-25 / 50 Series',
    category: 'COMMERCIAL FOOD PROCESSING & KITCHEN AUTOMATION',
    subtitle: 'Commercial High-Torque Flour Dough Kneading Machines for Bakeries, Mess & Food Units',
    summary:
      'The Smart Buddy Commercial Dough Kneader by Aarya Innovtech is an automated high-torque kneading machine designed for bulk kitchens, bakeries, hostels, and canteens. It kneads smooth, uniform, and aerated dough for rotis, chapatis, bread, and pizzas in 5 to 8 minutes, eliminating hours of strenuous physical labor.',
    imagePath: path.resolve(publicDir, 'images/product-catalog/dough-kneader.png'),
    highlights: [
      'Rapid, uniform dough kneading in under 5 to 8 minutes per batch.',
      'Food-contact bowl, spiral kneading arm, and breaker bar crafted from certified Food-Grade SS 304.',
      'Heavy-duty copper-wound motor paired with oil-lubricated reduction gearbox for quiet operation.',
      'Safety interlock grill automatically stops motor rotation if the top cover is lifted.',
      'Dual-rotation forward and reverse controls assist in effortless dough discharge and cleaning.',
      'Heavy cast-iron base chassis absorbs mechanical vibration and ensures rock-solid stability.'
    ],
    featureCards: [
      { title: '5-8 Minute Batches', text: 'Kneads perfectly aerated, soft dough consistently in under 8 minutes per batch.' },
      { title: 'Zero Physical Strain', text: 'Replaces hours of strenuous manual hand kneading with push-button automation.' },
      { title: 'Food-Grade SS 304', text: 'All flour and water contact areas are mirror-polished certified SS 304 stainless steel.' },
      { title: 'Safety Interlock Lid', text: 'Integrated safety cutoff switch halts mixing paddles immediately when cover is opened.' }
    ],
    specs: [
      { label: 'Batch Capacity', value: '10 kg, 20 kg, 40 kg, 50 kg, and 100 kg dough per batch' },
      { label: 'Bowl & Arm Material', value: 'Food-Grade Stainless Steel AISI 304 Mirror Finish' },
      { label: 'Motor Power', value: '1.5 HP to 5 HP 3-Phase / 1-Phase Heavy Duty Copper Motor' },
      { label: 'Drive Mechanism', value: 'Heavy Reduction Gearbox with High-Torque V-Belt Transmission' },
      { label: 'Kneading Speed', value: 'Optimized Dual-Speed / Single-Speed Rotational Churning' },
      { label: 'Chassis Build', value: 'Heavy Cast Iron Base Frame with Anti-Vibration Rubber Mounts' }
    ],
    techDetails: [
      'Spiral kneading arm geometry simulates traditional hand-kneading while aerating gluten fibers.',
      'Smooth mirror-polished bowl interior leaves minimal leftover residue, saving precious flour.',
      'Thermal overload motor protection relay prevents overheating during consecutive bulk mixing cycles.'
    ],
    applications: [
      'Commercial Bakeries & Pizzerias',
      'Industrial Staff Canteens & Messes',
      'Temple Trust Annakshetra Kitchens',
      'Student Hostels & Universities',
      'Catering Contractors & Sweet Shops',
      'Frozen Roti & Paratha Units'
    ]
  },
  {
    filename: 'atta-chakki.pdf',
    productTitle: 'SMART BUDDY ATTA CHAKKI',
    modelCode: 'SB-AC-50 / 100 Series',
    category: 'GRAIN PROCESSING & MILLING MACHINERY',
    subtitle: 'Commercial & Industrial Grain Pulverizing Flour Mill Machines',
    summary:
      'The Smart Buddy Commercial Atta Chakki / Flour Mill by Aarya Innovtech is an energy-efficient grain pulverizer engineered for continuous, cool-grinding of wheat, gram (besan), maize, rice, and spices. Controlled milling temperatures protect vital grain nutrients, natural aroma, and dietary fiber.',
    imagePath: path.resolve(publicDir, 'images/product-catalog/atta-chakki.png'),
    highlights: [
      'Cool-grinding technology retains dietary fiber, proteins, and natural aroma without scorching flour.',
      'Suitable for wheat, besan, maize, millets (jowar, bajra), rice, and dry whole spices.',
      'High grinding throughput: 30 kg/hr up to 300 kg/hr continuous commercial milling.',
      'Precision micrometer stone-gap adjustment allows instant switching between coarse and ultra-fine flour.',
      'Integrated magnetic separator in the hopper catches stray metal particles before grinding.',
      'Dust-free collection chamber with heavy-duty air filter bag system for clean operation.'
    ],
    featureCards: [
      { title: 'Cool Milling Tech', text: 'Controlled chamber temperature prevents nutrient burning and preserves grain freshness.' },
      { title: 'High Hourly Output', text: 'Continuous heavy-duty operation delivers up to 300 kg freshly milled flour per hour.' },
      { title: 'Adjustable Fineness', text: 'Regulate between fine chapati flour, coarse rava, and besan with one control knob.' },
      { title: 'Dust-Free Clean Air', text: 'Integrated cyclone collector and filter bag keep the milling area spotless.' }
    ],
    specs: [
      { label: 'Grinding Output', value: '30 kg/hr, 50 kg/hr, 100 kg/hr, 200 kg/hr up to 300 kg/hr' },
      { label: 'Motor Rating', value: '3 HP, 5 HP, 7.5 HP, 10 HP (Single Phase or Three Phase options)' },
      { label: 'Grinding Discs', value: 'Heavy-Duty Emery Stone Discs / Stainless Steel High-Speed Beater Cutters' },
      { label: 'Hopper Volume', value: '15 kg to 50 kg Food-Grade Stainless Steel Hopper with Flow Slide Gate' },
      { label: 'Chassis Frame', value: 'Heavy Fabricated Mild Steel Frame with Powder Coat / SS Cladding' }
    ],
    techDetails: [
      'Dynamically balanced main shaft minimizes operating vibration and extends bearing longevity.',
      'Emergency stop switch and thermal overload protection protect electrical windings.',
      'Stone emery disc dressing tool included for periodic surface grooving maintenance.'
    ],
    applications: [
      'Commercial Flour Mills & Retail Chakkis',
      'Grocery Supermarket Flour Kiosks',
      'Institutional Canteens & Kitchens',
      'Agro-Processing & Packaging Units',
      'Organic Food Stores & Cooperative Mills'
    ]
  },
  {
    filename: 'vegetable-cutter.pdf',
    productTitle: 'SMART BUDDY VEGETABLE CUTTER',
    modelCode: 'SB-VC-300 Series',
    category: 'KITCHEN AUTOMATION & PRODUCE PREP',
    subtitle: 'High-Speed Multi-Function Commercial Vegetable Cutting & Slicing Machines',
    summary:
      'The Smart Buddy Commercial Vegetable Cutter by Aarya Innovtech is a multi-function food prep machine engineered for hotels, restaurants, and catering operations. Equipped with quick-change stainless steel blade discs, it slices, dices, shreds, and juliennes 100 kg to 500 kg of vegetables per hour, cutting kitchen prep time by 80%.',
    imagePath: path.resolve(publicDir, 'images/product-catalog/vegetable-cutter.png'),
    highlights: [
      'Processes 100 kg to 500 kg of fresh vegetables per hour with consistent precision.',
      'Complete blade disc set included: Slicing (2mm, 4mm), Dicing (8mm, 10mm), Shredding (3mm, 5mm).',
      'Dual feed hopper: Semi-moon wide hopper for cabbage/potatoes and round tube for carrots/cucumbers.',
      'Food-grade cast aluminum body and certified SS 304 blades ensure absolute food safety.',
      'Magnetic safety interlock switch halts blade rotation instantly when the feed hopper is opened.',
      'Angled discharge chute delivers cleanly into standard gastronorm (GN) prep pans.'
    ],
    featureCards: [
      { title: '80% Prep Time Cut', text: 'Completes hours of tedious manual knife prep in minutes with uniform commercial consistency.' },
      { title: 'Multi-Blade Versatility', text: 'Includes quick-change blades for slicing, dicing, grating, shredding, and French fries.' },
      { title: 'Food-Grade Build', text: 'Anodized aluminum alloy body with stainless steel contact parts for food compliance.' },
      { title: 'Dual Hopper Feed', text: 'Wide kidney hopper for bulky produce + cylindrical feeder for long vegetables.' }
    ],
    specs: [
      { label: 'Output Capacity', value: '100 kg/hr up to 500 kg/hr (varies by vegetable and blade cut)' },
      { label: 'Motor Power', value: '0.75 HP to 1.5 HP Heavy-Duty Pure Copper Induction Motor' },
      { label: 'Blades Included', value: 'Slicing Discs (2, 4mm), Dicing Grids (8, 10mm), Shredder Discs (3, 5mm)' },
      { label: 'Body Material', value: 'Anodized Food-Grade Aluminum Alloy & Stainless Steel SS 304' },
      { label: 'Safety Rating', value: 'IP55 Waterproof Control Buttons & Dual Magnetic Safety Interlocks' }
    ],
    techDetails: [
      'Tool-less quick release mechanism allows chefs to switch blade discs in under 30 seconds.',
      'Low-speed high-torque motor prevents vegetable cell damage and bruising, preserving crispness.',
      'Ergonomic pusher handle requires minimal force even when processing hard root vegetables.'
    ],
    applications: [
      'Hotel Back-of-House Kitchens',
      'Wedding & Catering Operations',
      'Salad Bars & Fast Food Chains',
      'Hospital & School Canteens',
      'Frozen & Dehydrated Food Units',
      'Vegetable Mandi Pre-Pack Centers'
    ]
  },
  {
    filename: 'pulverizer.pdf',
    productTitle: 'SMART BUDDY PULVERIZER',
    modelCode: 'SB-PV-50 / 200 Series',
    category: 'IMPACT GRINDING & PULVERIZING MACHINERY',
    subtitle: 'Heavy-Duty Commercial & Industrial Impact Grinding Pulverizer Machines',
    summary:
      'The Smart Buddy Commercial Pulverizer by Aarya Innovtech is an industrial-grade impact grinding mill engineered for high-throughput, ultra-fine powdering of spices, grains, herbs, and food ingredients. Equipped with hardened steel beaters, interchangeable grading screens, and cyclone dust collection, it delivers cool, uniform micro-grinding with maximum production efficiency.',
    imagePath: path.resolve(publicDir, 'images/product-catalog/pulverizer.png'),
    highlights: [
      'High-speed impact grinding suitable for wheat, spices, chilli, turmeric, pulses, and herbs.',
      'Hardened manganese alloy steel hammer beaters engineered for extended operational life.',
      'Interchangeable mesh screens (20 to 100+ mesh) allow precision powder fineness regulation.',
      'Cyclone separator and dust collection bag ensure loss-free, hygienic material handling.',
      'Heavy-duty copper-wound motor with dynamically balanced rotor prevents machine vibration.',
      'Dual-hopper feed control with magnetic trap prevents foreign metal contaminants from entering.'
    ],
    featureCards: [
      { title: 'Ultra-Fine Grinding', text: 'Produces uniform micro-powder consistency while minimizing heat generation to protect flavor.' },
      { title: 'Continuous Output', text: 'Heavy-duty construction supports uninterrupted multi-shift operation for commercial milling.' },
      { title: 'Interchangeable Sieves', text: 'Quick-change sizing screens from coarse 20 mesh to ultra-fine 100+ mesh powder.' },
      { title: 'Cyclone Dust Control', text: 'Integrated cyclone separator and filter bag prevent dust escape in the processing area.' }
    ],
    specs: [
      { label: 'Grinding Output', value: '30 kg/hr, 50 kg/hr, 100 kg/hr up to 500 kg/hr' },
      { label: 'Motor Power', value: '2 HP, 3 HP, 5 HP, 7.5 HP, 10 HP up to 25 HP Copper Induction Motor' },
      { label: 'Grinding Chamber', value: 'Dynamically Balanced Rotor with Hardened Steel Beaters / Cutters' },
      { label: 'Mesh Sieves', value: 'Stainless Steel Sizing Screens (20, 40, 60, 80, 100 mesh)' },
      { label: 'Contact Parts', value: 'Food-Grade Stainless Steel SS 304 / Alloy Steel' }
    ],
    techDetails: [
      'Precision dynamically balanced rotor shaft prevents machine vibrations and extends bearing life.',
      'Water-jacketed or air-cooled chamber options available for heat-sensitive spice grinding.',
      'Tool-less sieve changing system allows operators to swap screen meshes in minutes.'
    ],
    applications: [
      'Commercial Spice Processing Units',
      'Food & Flour Manufacturing Plants',
      'Ayurvedic & Herbal Processing',
      'Grain & Pulse Grinding Mills',
      'Chemical & Mineral Micro-Grinding',
      'Bulk Commercial Kitchens & Catering'
    ]
  }
];

function drawPageHeader(doc, product, pageNum) {
  const margin = 36;
  const contentWidth = 540;

  doc.rect(margin, margin, contentWidth, 36).fill(COLORS.primary);

  // Brand on left
  doc.font('Helvetica-Bold')
     .fontSize(11)
     .fillColor(COLORS.textLight)
     .text(`${COMPANY.brand} | ${product.productTitle}`, margin + 12, margin + 8);

  doc.font('Helvetica')
     .fontSize(7.5)
     .fillColor('#a7f3d0')
     .text(product.category, margin + 12, margin + 22);

  // Division / ISO on right
  doc.font('Helvetica-Bold')
     .fontSize(8)
     .fillColor(COLORS.textLight)
     .text(COMPANY.name, margin + contentWidth - 210, margin + 8, { width: 200, align: 'right' });

  doc.font('Helvetica')
     .fontSize(6.5)
     .fillColor('#e2e8f0')
     .text(COMPANY.certifications, margin + contentWidth - 260, margin + 22, { width: 250, align: 'right' });
}

function drawPageFooter(doc, product, pageNum, totalPages) {
  const margin = 36;
  const contentWidth = 540;
  const footerY = 752;

  doc.rect(margin, footerY, contentWidth, 24).fill(COLORS.primary);

  doc.font('Helvetica')
     .fontSize(6.5)
     .fillColor('#a7f3d0')
     .text(`Direct Hotline: ${COMPANY.phone} | Email: ${COMPANY.email} | Web: ${COMPANY.website}`, margin + 10, footerY + 8);

  doc.font('Helvetica-Bold')
     .fontSize(7)
     .fillColor(COLORS.textLight)
     .text(`Page ${pageNum} of ${totalPages}`, margin + contentWidth - 70, footerY + 8, { width: 60, align: 'right' });
}

function generateBrochure(product) {
  return new Promise((resolve, reject) => {
    const outputPath = path.resolve(brochuresDir, product.filename);
    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: 36, bottom: 36, left: 36, right: 36 },
      bufferPages: true
    });

    const stream = fs.createWriteStream(outputPath);
    doc.pipe(stream);

    const margin = 36;
    const contentWidth = 540;

    // PAGE 1
    drawPageHeader(doc, product, 1);

    // Title banner
    const titleY = 78;
    doc.font('Helvetica-Bold')
       .fontSize(15)
       .fillColor(COLORS.primary)
       .text(product.productTitle, margin, titleY);

    doc.font('Helvetica-Bold')
       .fontSize(8.5)
       .fillColor(COLORS.accent)
       .text(`MODEL: ${product.modelCode} | ${product.category}`, margin, titleY + 18);

    doc.font('Helvetica-Oblique')
       .fontSize(8.5)
       .fillColor(COLORS.textDark)
       .text(product.subtitle, margin, titleY + 31, { width: contentWidth });

    doc.rect(margin, titleY + 45, contentWidth, 1.5).fill(COLORS.primary);

    // Two-Column Section (Hero Image + Highlights)
    const twoColY = 130;
    const colWidth = (contentWidth - 14) / 2;
    const imgColX = margin;
    const rightColX = margin + colWidth + 14;

    // Left Column: Product Image Box
    const imgBoxHeight = 228;
    doc.rect(imgColX, twoColY, colWidth, imgBoxHeight).fill(COLORS.bgLight);
    doc.rect(imgColX, twoColY, colWidth, imgBoxHeight).lineWidth(0.8).stroke(COLORS.border);

    if (fs.existsSync(product.imagePath)) {
      try {
        doc.image(product.imagePath, imgColX + 8, twoColY + 8, {
          fit: [colWidth - 16, imgBoxHeight - 34],
          align: 'center',
          valign: 'center'
        });
      } catch (e) {
        console.warn(`Could not render image for ${product.filename}:`, e.message);
      }
    }

    // Model code strip below image
    doc.rect(imgColX, twoColY + imgBoxHeight - 22, colWidth, 22).fill(COLORS.primary);
    doc.font('Helvetica-Bold')
       .fontSize(7.5)
       .fillColor(COLORS.textLight)
       .text(`OEM CERTIFIED: ${product.modelCode}`, imgColX + 8, twoColY + imgBoxHeight - 15, { width: colWidth - 16, align: 'center' });

    // Right Column: Key Engineering Highlights
    doc.font('Helvetica-Bold')
       .fontSize(10.5)
       .fillColor(COLORS.primary)
       .text('Key Engineering Highlights', rightColX, twoColY);

    doc.rect(rightColX, twoColY + 14, colWidth, 1.5).fill(COLORS.accent);

    let currHighY = twoColY + 20;
    product.highlights.forEach((h) => {
      doc.rect(rightColX, currHighY + 1.5, 9, 9).fill(COLORS.primary);
      doc.font('Helvetica-Bold')
         .fontSize(6)
         .fillColor(COLORS.textLight)
         .text('✓', rightColX + 1.5, currHighY + 2.2);

      doc.font('Helvetica')
         .fontSize(7.2)
         .fillColor(COLORS.textDark)
         .text(h, rightColX + 13, currHighY, { width: colWidth - 14, lineGap: 1 });

      currHighY += 25;
    });

    // 4 Value Proposition Cards
    const cardsSectionY = 372;
    doc.font('Helvetica-Bold')
       .fontSize(11)
       .fillColor(COLORS.primary)
       .text('Core Value Proposition & Operational Advantages', margin, cardsSectionY);

    doc.rect(margin, cardsSectionY + 15, contentWidth, 1.5).fill(COLORS.accent);

    const cardWidth = (contentWidth - 12) / 2;
    const cardHeight = 84;
    const row1Y = cardsSectionY + 22;
    const row2Y = row1Y + cardHeight + 8;

    product.featureCards.forEach((card, idx) => {
      const isRight = idx % 2 === 1;
      const isBottom = idx >= 2;
      const cardX = isRight ? margin + cardWidth + 12 : margin;
      const cardY = isBottom ? row2Y : row1Y;

      doc.rect(cardX, cardY, cardWidth, cardHeight).fill('#ffffff');
      doc.rect(cardX, cardY, cardWidth, cardHeight).lineWidth(0.8).stroke(COLORS.borderLight);
      doc.rect(cardX, cardY, 3.5, cardHeight).fill(COLORS.primary);

      doc.font('Helvetica-Bold')
         .fontSize(8.5)
         .fillColor(COLORS.primary)
         .text(`${idx + 1}. ${card.title}`, cardX + 12, cardY + 10, { width: cardWidth - 20 });

      doc.font('Helvetica')
         .fontSize(7.3)
         .fillColor(COLORS.textMuted)
         .text(card.text, cardX + 12, cardY + 26, { width: cardWidth - 20, lineGap: 1.5 });
    });

    // Applications Strip at Bottom of Page 1
    const appStripY = 564;
    doc.rect(margin, appStripY, contentWidth, 68).fill(COLORS.bgLight);
    doc.rect(margin, appStripY, contentWidth, 68).lineWidth(0.8).stroke(COLORS.border);

    doc.font('Helvetica-Bold')
       .fontSize(8.5)
       .fillColor(COLORS.primary)
       .text('Recommended Deployment Locations & Applications', margin + 12, appStripY + 8);

    doc.rect(margin + 12, appStripY + 20, contentWidth - 24, 1).fill(COLORS.accent);

    const appColWidth = (contentWidth - 24) / 4;
    product.applications.forEach((app, i) => {
      const colIdx = i % 4;
      const rowIdx = Math.floor(i / 4);
      const appX = margin + 12 + colIdx * appColWidth;
      const appY = appStripY + 26 + rowIdx * 18;

      doc.circle(appX + 3, appY + 4, 2).fill(COLORS.primary);
      doc.font('Helvetica')
         .fontSize(6.8)
         .fillColor(COLORS.textDark)
         .text(app, appX + 9, appY + 1, { width: appColWidth - 12 });
    });

    // Page 1 Trust Badge
    const trustY = 642;
    doc.rect(margin, trustY, contentWidth, 42).fill('#f0fdf4');
    doc.rect(margin, trustY, contentWidth, 42).lineWidth(0.8).stroke(COLORS.primaryLight);

    doc.font('Helvetica-Bold')
       .fontSize(8)
       .fillColor(COLORS.primary)
       .text('MAKE IN INDIA | ISO & CE CERTIFIED INDIGENOUS OEM MANUFACTURING', margin + 12, trustY + 8, { width: contentWidth - 24, align: 'center' });

    doc.font('Helvetica')
       .fontSize(6.8)
       .fillColor(COLORS.textDark)
       .text('Aarya Innovtech is a certified Original Equipment Manufacturer delivering turnkey civic automation, waste recycling systems, smart sanitations & industrial utilities across India.', margin + 16, trustY + 20, { width: contentWidth - 32, align: 'center' });

    drawPageFooter(doc, product, 1, 2);

    // PAGE 2
    doc.addPage();
    drawPageHeader(doc, product, 2);

    // Summary Box
    const page2SummaryY = 78;
    doc.rect(margin, page2SummaryY, contentWidth, 42).fill(COLORS.bgLight);
    doc.rect(margin, page2SummaryY, contentWidth, 42).lineWidth(0.8).stroke(COLORS.border);
    doc.rect(margin, page2SummaryY, 3.5, 42).fill(COLORS.accent);

    doc.font('Helvetica-Bold')
       .fontSize(8)
       .fillColor(COLORS.primary)
       .text('PRODUCT OVERVIEW & ENGINEERING DESIGN PHILOSOPHY', margin + 10, page2SummaryY + 6);

    doc.font('Helvetica')
       .fontSize(7.2)
       .fillColor(COLORS.textDark)
       .text(product.summary, margin + 10, page2SummaryY + 18, { width: contentWidth - 20, lineGap: 1.5 });

    // Technical Specifications Table
    const tableStartY = 130;
    doc.font('Helvetica-Bold')
       .fontSize(11)
       .fillColor(COLORS.primary)
       .text('Technical Specifications & Material Bill of Materials (BOM)', margin, tableStartY);

    doc.rect(margin, tableStartY + 15, contentWidth, 1.5).fill(COLORS.accent);

    const tableCol1Width = 145;
    const tableCol2Width = contentWidth - tableCol1Width;
    let curTableRowY = tableStartY + 20;

    // Header Row
    doc.rect(margin, curTableRowY, contentWidth, 18).fill(COLORS.primary);
    doc.font('Helvetica-Bold')
       .fontSize(7.5)
       .fillColor(COLORS.textLight)
       .text('PARAMETER / SUBSYSTEM', margin + 8, curTableRowY + 5, { width: tableCol1Width });

    doc.text('ENGINEERING SPECIFICATION & MATERIAL GRADE', margin + tableCol1Width + 8, curTableRowY + 5, { width: tableCol2Width });

    curTableRowY += 18;

    product.specs.forEach((spec, sIdx) => {
      const isAlt = sIdx % 2 === 1;
      const rowHeight = 22;

      doc.rect(margin, curTableRowY, contentWidth, rowHeight).fill(isAlt ? COLORS.tableRowAlt : '#ffffff');
      doc.rect(margin, curTableRowY, contentWidth, rowHeight).lineWidth(0.5).stroke(COLORS.borderLight);

      doc.font('Helvetica-Bold')
         .fontSize(7)
         .fillColor(COLORS.primary)
         .text(spec.label, margin + 8, curTableRowY + 5, { width: tableCol1Width - 12 });

      doc.font('Helvetica')
         .fontSize(6.8)
         .fillColor(COLORS.textDark)
         .text(spec.value, margin + tableCol1Width + 8, curTableRowY + 5, { width: tableCol2Width - 14, lineGap: 0.5 });

      curTableRowY += rowHeight;
    });

    // Technical Details & Highlights
    const techArchY = curTableRowY + 10;
    doc.font('Helvetica-Bold')
       .fontSize(10.5)
       .fillColor(COLORS.primary)
       .text('Engineering Design & Architectural Highlights', margin, techArchY);

    doc.rect(margin, techArchY + 14, contentWidth, 1.5).fill(COLORS.accent);

    let curDetailY = techArchY + 20;
    product.techDetails.forEach((detail) => {
      doc.rect(margin, curDetailY + 1, 6, 6).fill(COLORS.primary);
      doc.font('Helvetica')
         .fontSize(7.3)
         .fillColor(COLORS.textDark)
         .text(detail, margin + 12, curDetailY, { width: contentWidth - 14, lineGap: 1.5 });

      curDetailY += 21;
    });

    // Inquiry & Order Information Box
    const inquiryBoxY = curDetailY + 8;
    const inquiryBoxHeight = 746 - inquiryBoxY;

    doc.rect(margin, inquiryBoxY, contentWidth, inquiryBoxHeight).fill('#f8fafc');
    doc.rect(margin, inquiryBoxY, contentWidth, inquiryBoxHeight).lineWidth(1).stroke(COLORS.primary);

    doc.rect(margin, inquiryBoxY, contentWidth, 18).fill(COLORS.primary);
    doc.font('Helvetica-Bold')
       .fontSize(8.5)
       .fillColor(COLORS.textLight)
       .text('HOW TO ENQUIRE & ORDER CUSTOM CONFIGURATIONS', margin + 10, inquiryBoxY + 5);

    const inqColWidth = (contentWidth - 20) / 2;
    doc.font('Helvetica')
       .fontSize(7.2)
       .fillColor(COLORS.textDark)
       .text('Share your project location, estimated load capacity, layout requirements, and custom branding needs. Our engineering team prepares tailored layout drawings, specifications, and commercial techno-commercial proposals.', margin + 10, inquiryBoxY + 24, { width: inqColWidth, lineGap: 1.2 });

    const inqRightX = margin + inqColWidth + 20;
    doc.font('Helvetica-Bold')
       .fontSize(7.5)
       .fillColor(COLORS.primary)
       .text('DIRECT SALES & TECHNICAL SUPPORT DESK:', inqRightX, inquiryBoxY + 22);

    doc.font('Helvetica')
       .fontSize(7.2)
       .fillColor(COLORS.textDark)
       .text(`• Direct Hotline: ${COMPANY.phone}\n• Email Enquiry: ${COMPANY.email}\n• Official Portal: ${COMPANY.website}\n• Plant: S-27, Ambad MIDC, Nashik, MH - 422010`, inqRightX, inquiryBoxY + 34, { lineGap: 2 });

    drawPageFooter(doc, product, 2, 2);

    doc.end();

    stream.on('finish', () => {
      console.log(`Generated: ${product.filename}`);
      resolve(outputPath);
    });

    stream.on('error', (err) => {
      console.error(`Error generating ${product.filename}:`, err);
      reject(err);
    });
  });
}

async function run() {
  console.log(`Generating ${newBrochureData.length} new product brochures...`);
  for (const product of newBrochureData) {
    await generateBrochure(product);
  }
  console.log('All new product brochures generated successfully!');
}

run().catch(console.error);

