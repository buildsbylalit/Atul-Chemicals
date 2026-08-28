import { ChemicalProduct } from '../types';

export const CHEMICAL_CATEGORIES = [
  'All Categories',
  'Stain Removers & Spotting',
  'Laundry & Fabric Care',
  'Commercial Detergents',
  'Packaging & Accessories',
  'Leather & Shoe Care',
  'Finishing & Brighteners',
  'Hygiene & Disinfection',
  'Dry Cleaning & Solvent Recovery',
  'Software & Digital Solutions',
] as const;

export const CHEMICAL_PRODUCTS: ChemicalProduct[] = [
  {
    id: 'bleach',
    srNo: 1,
    name: 'Bleach',
    iupacName: 'Sodium Hypochlorite / Active Chlorine Bleaching Agent',
    casNumber: '7681-52-9',
    formula: 'NaClO',
    molecularWeight: '74.44 g/mol',
    grade: 'Commercial Grade',
    purity: 'High-Action Bleaching Agent',
    category: 'Laundry & Fabric Care',
    rate: 70.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 1400.0,
    description: 'Heavy-duty whitening and bleaching agent formulated for commercial linen disinfection, stain oxidation, and hospital laundry sanitization.',
    fullDescription: 'Atul Chemicals Bleach is an industrial-strength bleaching and sanitizing formulation designed for high-throughput commercial laundries, hotels, and hospital linen plants. It rapidly eliminates organic stains, restores intense white brilliance, and destroys bacterial pathogens.',
    appearance: 'Clear pale yellowish-green liquid / fine active powder',
    density: '1.20 g/cm³',
    packagingOptions: [
      '20 Kg / 20 Ltr Drum / Carboy',
      '50 Kg HDPE Drum',
      '5 Kg / 5 Ltr Can',
      'Custom Packaging',
    ],
    applications: [
      'Commercial Linen Whitening & Disinfection',
      'Hospital & Healthcare Textile Sanitization',
      'Severe Organic & Food Stain Oxidation',
      'Industrial Hotel Bedding Wash Programs'
    ],
    features: [
      'High oxidizing power for brilliant whites',
      'Fast-acting pathogen and spore destruction',
      'Optimized formulation for commercial washer extractors'
    ],
    specifications: [
      { parameter: 'Active Chlorine / Oxygen', specification: 'Min. 10.0 - 12.0 % w/w', testMethod: 'Titrimetric' },
      { parameter: 'pH (1% solution)', specification: '11.0 - 12.5', testMethod: 'pH Meter' },
      { parameter: 'Solubility in Water', specification: '100% Miscible', testMethod: 'Visual' }
    ],
    storageInstructions: 'Store in cool, dark, ventilated storage away from acids, ammonia, and direct heat sources.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true,
    minimumOrderQuantity: '20 KGS'
  },
  {
    id: 'carbon',
    srNo: 2,
    name: 'CARBON',
    iupacName: 'Activated Carbon Adsorption Powder',
    casNumber: '7440-44-0',
    formula: 'C',
    molecularWeight: '12.01 g/mol',
    grade: 'Industrial Grade',
    purity: 'High Adsorption CTC 60%+',
    category: 'Dry Cleaning & Solvent Recovery',
    rate: 85.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 1700.0,
    description: 'High-surface-area activated carbon powder for dry cleaning solvent clarification, color stripping, and odor elimination.',
    fullDescription: 'Specially engineered activated carbon with ultra-high microporous structure. Designed specifically for dry cleaning solvent filtration systems to adsorb fugitive dyes, fatty acids, and solvent odors, ensuring clear solvent distillation.',
    appearance: 'Fine black amorphous powder',
    density: '0.45 - 0.55 g/cm³',
    packagingOptions: [
      '20 Kg / 20 Ltr Drum / Carboy',
      '50 Kg HDPE Drum',
      '5 Kg / 5 Ltr Can'
    ],
    applications: [
      'Dry Cleaning Solvent Color Clarification',
      'Perchloroethylene & Hydrocarbon Filtration',
      'Odor and Organic Volatile Adsorption',
      'Closed-Loop Solvent Reclamation'
    ],
    features: [
      'High iodine adsorption number (>950 mg/g)',
      'Low ash content preventing filter clogging',
      'Rapid color and dye stripping kinetics'
    ],
    specifications: [
      { parameter: 'Iodine Value', specification: 'Min. 950 mg/g', testMethod: 'ASTM D4607' },
      { parameter: 'Moisture Content', specification: 'Max. 5.0 % w/w', testMethod: 'Karl Fischer' },
      { parameter: 'Ash Content', specification: 'Max. 4.0 % w/w', testMethod: 'Gravimetric' }
    ],
    storageInstructions: 'Store in dry, sealed bags in well-ventilated dry zones.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '20 KGS'
  },
  {
    id: 'care-1-0-fabric-conditioner',
    srNo: 3,
    name: 'CARE 1.0 FABRIC CONDITIONER',
    iupacName: 'Cationic Esterquat Softening Compound',
    grade: 'Premium Concentrate',
    purity: 'Ultra-Concentrated Softening Active',
    category: 'Laundry & Fabric Care',
    rate: 900.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 18000.0,
    description: 'Ultra-concentrated fabric conditioner imparting supreme silkiness, anti-static discharge, and long-lasting fresh fragrance.',
    fullDescription: 'CARE 1.0 is an advanced cationic fabric conditioning agent formulated for commercial laundries, luxury hotels, and dry cleaners. It neutralizes detergent residue, reduces fabric friction, speeds up calendering/ironing, and leaves a luxury fresh scent.',
    appearance: 'Creamy viscous pastel liquid emulsion',
    density: '1.02 g/cm³',
    packagingOptions: [
      '20 Kg / 20 Ltr Drum / Carboy',
      '50 Kg HDPE Drum',
      '5 Kg / 5 Ltr Can'
    ],
    applications: [
      'Luxury Hotel Bedding & Bath Towel Softening',
      'Commercial Laundry Rinse-Cycle Conditioning',
      'Anti-Static Treatment for Synthetics & Uniforms',
      'Smooth Ironing & Calender Glide Enhancement'
    ],
    features: [
      'Micro-encapsulated fragrance releasing scent upon touch',
      'Superior fiber lubrication preventing towel stiffness',
      'Highly concentrated for low dosage per wash load'
    ],
    specifications: [
      { parameter: 'Active Matter (Cationic)', specification: 'Min. 18.0 % w/w', testMethod: 'Two-Phase Titration' },
      { parameter: 'pH (neat)', specification: '3.0 - 4.5', testMethod: 'pH Meter' },
      { parameter: 'Viscosity (at 25°C)', specification: '250 - 500 cPs', testMethod: 'Brookfield' }
    ],
    storageInstructions: 'Protect from freezing; store between 10°C and 35°C in original containers.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true,
    minimumOrderQuantity: '20 KGS'
  },
  {
    id: 'cc-500',
    srNo: 4,
    name: 'CC 500',
    iupacName: 'Collar & Cuff Surfactant Booster CC-500',
    grade: 'Commercial Grade',
    purity: 'High-Penetration Surfactant Active',
    category: 'Stain Removers & Spotting',
    rate: 80.0,
    defaultQty: 1,
    unit: 'LTR',
    taxableValue: 1600.0,
    description: 'High-penetration liquid collar & cuff pre-spotter formulated to quickly liquefy body grime, neck sweat lines, and wrist soils.',
    fullDescription: 'CC 500 is a dedicated pre-wash treatment liquid designed specifically to emulsify stubborn sebum oils and dirt encrusted on shirt collars, cuffs, and underarm hems. Simply apply or brush before main wash for spot-free results.',
    appearance: 'Clear fluid liquid with fresh citrus undertone',
    density: '1.03 g/cm³',
    packagingOptions: [
      '20 Kg / 20 Ltr Drum / Carboy',
      '5 Kg / 5 Ltr Can',
      '1 Kg / 1 Ltr Bottle'
    ],
    applications: [
      'Shirt Collar & Cuff Dirt Extraction',
      'Pre-Spotting Brush Application',
      'Workwear Overalls & Uniform Pre-Wash',
      'Heavy Soil Washing Machine Booster'
    ],
    features: [
      'Instant breakdown of neck sebum oils',
      'Safe on dyed colored shirts and delicates',
      'Compatible with automated dosing injectors'
    ],
    specifications: [
      { parameter: 'Active Surfactant Matter', specification: 'Min. 15.0 %', testMethod: 'ISO 2271' },
      { parameter: 'pH (as is)', specification: '7.5 - 8.5', testMethod: 'pH Meter' }
    ],
    storageInstructions: 'Store in a cool dry room with lids firmly fastened.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '20 LTR'
  },
  {
    id: 'colour-protect',
    srNo: 5,
    name: 'COLOUR PROTECT',
    iupacName: 'Polymeric Dye Transfer Inhibitor (DTI)',
    grade: 'Premium Concentrate',
    purity: 'High-Affinity Dye Lock Active',
    category: 'Laundry & Fabric Care',
    rate: 350.0,
    defaultQty: 1,
    unit: 'LTR',
    taxableValue: 7000.0,
    description: 'Advanced dye-transfer inhibitor and color locking liquid that prevents cross-color staining during mixed commercial wash loads.',
    fullDescription: 'COLOUR PROTECT traps fugitive dye molecules in the wash bath, preventing them from redepositing onto lighter fabrics. It preserves bright colors, prevents dulling grey cast, and enables safer mixed-batch washing.',
    appearance: 'Clear light amber liquid',
    density: '1.05 g/cm³',
    packagingOptions: [
      '20 Kg / 20 Ltr Drum / Carboy',
      '5 Kg / 5 Ltr Can',
      '1 Kg / 1 Ltr Bottle'
    ],
    applications: [
      'Colored Garment Wash Cycles',
      'Mixed Linen & Uniform Washing',
      'Delicate Fabric Color Retention',
      'Boutique Laundry & Dry Cleaning Laundering'
    ],
    features: [
      'Captures loose dyes in water before redeposition',
      'Extends fabric color brilliance and lifespan',
      'Non-ionic formulation compatible with all detergents'
    ],
    specifications: [
      { parameter: 'Active Polymer Solids', specification: 'Min. 20.0 %', testMethod: 'Gravimetric' },
      { parameter: 'pH (1% solution)', specification: '6.5 - 8.0', testMethod: 'pH Meter' }
    ],
    storageInstructions: 'Store in cool ambient warehouse.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true,
    minimumOrderQuantity: '20 LTR'
  },
  {
    id: 'det-1450',
    srNo: 6,
    name: 'DET 1450',
    iupacName: 'Industrial Alkaline Laundry Detergent 1450',
    grade: 'Commercial Grade',
    purity: 'High Surfactant & Builder Active',
    category: 'Commercial Detergents',
    rate: 200.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 4000.0,
    description: 'High-potency industrial laundry detergent powder engineered for commercial washer extractors, removing heavy soils with low foam.',
    fullDescription: 'DET 1450 combines multi-surfactants, optical brighteners, and anti-redeposition polymers. It delivers unmatched soil removal in hard or soft water at temperatures ranging from 30°C to 85°C.',
    appearance: 'White free-flowing micro-granular powder',
    density: '0.80 - 0.90 g/cm³',
    packagingOptions: [
      '20 Kg / 20 Ltr Drum / Carboy',
      '50 Kg HDPE Drum',
      '5 Kg / 5 Ltr Can'
    ],
    applications: [
      'Heavy Soil Industrial Workwear Cleaning',
      'Hospital & Healthcare Linen Wash Programs',
      'Hotel & Restaurant Tablecloth Degreasing',
      'Commercial Dry Cleaners Wet Cleaning'
    ],
    features: [
      'High sequestering capacity for hard water performance',
      'Controlled low-foaming profile for front-loading machines',
      'Enriched with anti-greying agents'
    ],
    specifications: [
      { parameter: 'Total Active Matter', specification: 'Min. 22.0 %', testMethod: 'IS 4955' },
      { parameter: 'Total Fatty Matter', specification: 'Optimized', testMethod: 'Standard' },
      { parameter: 'pH (1% aqueous)', specification: '10.5 - 11.5', testMethod: 'pH Meter' }
    ],
    storageInstructions: 'Keep in airtight containers in dry moisture-free storage.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true,
    minimumOrderQuantity: '20 KGS'
  },
  {
    id: 'food-1-0',
    srNo: 7,
    name: 'Food 1.0',
    iupacName: 'Bio-Enzymatic Food & Protein Spotting Concentrate',
    grade: 'Premium Concentrate',
    purity: 'Multi-Enzyme Bio-Active Complex',
    category: 'Stain Removers & Spotting',
    rate: 1250.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 1250.0,
    description: 'Bio-enzymatic spotting compound targeting stubborn food spills, curry, turmeric, barbecue sauce, dairy proteins, and beverage stains.',
    fullDescription: 'Food 1.0 is formulated with specialized protease and amylase enzymes that selectively digest complex food carbohydrates, gravies, oils, egg yolks, and sauces. Ideal for precision spotting tables or pre-wash immersion.',
    appearance: 'Clear to pale straw enzymatic solution',
    density: '1.06 g/cm³',
    packagingOptions: [
      '1 Kg / 1 Ltr Bottle',
      '5 Kg / 5 Ltr Can',
      '20 Kg / 20 Ltr Drum / Carboy'
    ],
    applications: [
      'Curry, Turmeric, Mustard & Gravy Spots',
      'Chocolate, Ketchup, Sauce & Milk Spots',
      'Restaurant Uniform & Table Napkin Spotting',
      'Dry Cleaning Cold Spotting Board Application'
    ],
    features: [
      'Targeted enzymatic digestion of complex starch-protein stains',
      'Completely fiber safe with no chlorine damage',
      'Rinses freely without residue'
    ],
    specifications: [
      { parameter: 'Enzyme Activity Index', specification: 'High Potency', testMethod: 'Bioassay' },
      { parameter: 'pH (direct)', specification: '6.5 - 7.5', testMethod: 'pH Meter' }
    ],
    storageInstructions: 'Store below 30°C away from direct sunlight to preserve enzymatic activity.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true,
    minimumOrderQuantity: '1 KGS'
  },
  {
    id: 'grease',
    srNo: 8,
    name: 'GREASE',
    iupacName: 'Solvent-Surfactant Degreasing Emulsifier',
    grade: 'Industrial Grade',
    purity: 'Heavy-Duty Degreasing Active',
    category: 'Stain Removers & Spotting',
    rate: 1250.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 1250.0,
    description: 'Heavy-duty industrial grease and tar spot remover that dissolves motor oil, kitchen grease, lubricating wax, and road bitumen.',
    fullDescription: 'GREASE Spotter penetrates the deepest matrix of grease molecules, emulsifying mineral oils, mechanic soot, industrial lubricant, and bike grease into water-washable emulsions.',
    appearance: 'Clear light amber liquid with solvent aroma',
    density: '0.94 g/cm³',
    packagingOptions: [
      '1 Kg / 1 Ltr Bottle',
      '5 Kg / 5 Ltr Can',
      '20 Kg / 20 Ltr Drum / Carboy'
    ],
    applications: [
      'Engine Oil, Grease & Lubricant Spotting',
      'Road Tar, Bitumen & Heavy Wax Emulsification',
      'Mechanic Uniform & Overalls Degreasing',
      'Industrial Kitchen Apron Deep Spotting'
    ],
    features: [
      'Ultra-fast dissolution of heavy non-polar hydrocarbons',
      'Easily emulsified and flushed away with water or steam gun',
      'Non-corrosive to spotting board metallic surfaces'
    ],
    specifications: [
      { parameter: 'Active Solvent Emulsifier', specification: 'Min. 98.0 %', testMethod: 'GC' },
      { parameter: 'Flash Point', specification: '> 62 °C', testMethod: 'Closed Cup' }
    ],
    storageInstructions: 'Store in tightly capped bottles in a dedicated solvent safety cabinet.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '1 KGS'
  },
  {
    id: 'hard-swet',
    srNo: 9,
    name: 'HARD SWET',
    iupacName: 'Perspiration Protein & Salt De-Crystallizer',
    grade: 'Premium Concentrate',
    purity: 'Acid-Salt Chelating Active',
    category: 'Stain Removers & Spotting',
    rate: 1250.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 1250.0,
    description: 'Specialized de-crystallizer for stubborn perspiration rings, hard sweat stains, and yellowed armpit zones on shirts and uniforms.',
    fullDescription: 'HARD SWET is formulated with bio-chelants and active descaling agents that break down the stubborn mineral salts, urea crystals, and aluminum deodorizer residues that cause yellow, stiff perspiration crusts.',
    appearance: 'Clear colorless solution',
    density: '1.07 g/cm³',
    packagingOptions: [
      '1 Kg / 1 Ltr Bottle',
      '5 Kg / 5 Ltr Can',
      '20 Kg / 20 Ltr Drum / Carboy'
    ],
    applications: [
      'Underarm Yellow Sweat Encrustation Removal',
      'Neck Band Perspiration Salt Extraction',
      'Sportswear & Athletic Gear De-Staining',
      'White Shirt Armpit Stain Elimination'
    ],
    features: [
      'Dissolves aluminum antiperspirant complexes',
      'Eliminates deeply embedded sweat odors',
      'Restores fabric softness in stiff armpit areas'
    ],
    specifications: [
      { parameter: 'Active Organic Acids', specification: 'Min. 14.0 %', testMethod: 'Titration' },
      { parameter: 'pH (neat)', specification: '2.5 - 3.5', testMethod: 'pH Meter' }
    ],
    storageInstructions: 'Store in original acid-resistant containers away from direct heat.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '1 KGS'
  },
  {
    id: 'ink-makeup-low-1-0',
    srNo: 10,
    name: 'Ink Makeup Low 1.0',
    iupacName: 'Mild Ink & Cosmetic Spotting Compound',
    grade: 'Technical Grade',
    purity: 'Mild Solvent Spotting Formula',
    category: 'Stain Removers & Spotting',
    rate: 1250.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 1250.0,
    description: 'Gentle stain spotter for foundation, lipstick, mild ballpoint inks, and mascara safe on sensitive and delicate silks.',
    fullDescription: 'Ink Makeup Low 1.0 is engineered for fine couture, silks, woolens, and delicate garments where harsh solvents would damage colors. It gently lifts cosmetic waxes, cream blushes, and standard pen marks.',
    appearance: 'Clear fluid liquid',
    density: '0.98 g/cm³',
    packagingOptions: [
      '1 Kg / 1 Ltr Bottle',
      '5 Kg / 5 Ltr Can',
      '20 Kg / 20 Ltr Drum / Carboy'
    ],
    applications: [
      'Silk & Delicate Garment Makeup Removal',
      'Lipstick, Foundation, Mascara Spotting',
      'Mild Ballpoint Pen & Stationery Marks',
      'Bridal & Designer Wear Spotting'
    ],
    features: [
      'Gentle on sensitive textile dyes and silk fibers',
      'Quick absorption into cosmetic wax matrices',
      'Leaves zero ring stains or water rings'
    ],
    specifications: [
      { parameter: 'Solvent Purity', specification: '≥ 99.0 %', testMethod: 'GC' },
      { parameter: 'Water Content', specification: '≤ 0.5 %', testMethod: 'Karl Fischer' }
    ],
    storageInstructions: 'Keep in tightly closed bottles in a cool, well-ventilated space.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '1 KGS'
  },
  {
    id: 'oil-1-0-all-oil-stains-remove',
    srNo: 11,
    name: 'Oil 1.0 all oil stains remove',
    iupacName: 'Lipophilic Oil & Fatty Acid Solvent Booster',
    grade: 'Premium Concentrate',
    purity: 'Multi-Action Oil Cleaver Active',
    category: 'Stain Removers & Spotting',
    rate: 1250.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 1250.0,
    description: 'Universal rapid action spotter for body oil, edible oil, cooking oil, massage oil, and cosmetic butter stains.',
    fullDescription: 'Oil 1.0 is a high-performance spotting chemical designed to tackle any oil-based stain. From vegetable mustard oils and salad dressings to massage oils and scalp sebum, Oil 1.0 breaks the ester bonds and renders them water soluble.',
    appearance: 'Transparent clear liquid',
    density: '0.96 g/cm³',
    packagingOptions: [
      '1 Kg / 1 Ltr Bottle',
      '5 Kg / 5 Ltr Can',
      '20 Kg / 20 Ltr Drum / Carboy'
    ],
    applications: [
      'Edible Cooking Oils, Ghee & Butter Stains',
      'Massage, Essential & Cosmetic Oil Marks',
      'Sebum, Headrest & Body Oil Extraction',
      'Spa & Salon Linen Treatment'
    ],
    features: [
      'Dissolves both plant-derived and synthetic fatty acids',
      'Non-yellowing formulation during heated drying/pressing',
      'Fast action on cold spotting table'
    ],
    specifications: [
      { parameter: 'Active Emulsifier Blend', specification: 'Min. 95.0 %', testMethod: 'Standard' },
      { parameter: 'pH (1% solution)', specification: '7.0 - 8.0', testMethod: 'pH Meter' }
    ],
    storageInstructions: 'Store in cool ambient conditions away from sparks.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1518843025960-d60217f226f5?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true,
    minimumOrderQuantity: '1 KGS'
  },
  {
    id: 'organic-high',
    srNo: 12,
    name: 'Organic High',
    iupacName: 'Heavy-Potency Organic Tannin Spotting Liquid',
    grade: 'Commercial Grade',
    purity: 'High-Concentration Tannin Breaker',
    category: 'Stain Removers & Spotting',
    rate: 200.0,
    defaultQty: 1,
    unit: 'LTR',
    taxableValue: 4000.0,
    description: 'High-strength organic stain breaker and dry cleaning booster for tannin marks, coffee, wine, tea, and vegetable extracts.',
    fullDescription: 'Organic High is a heavy-duty spotting liquid specifically targeted at plant polyphenols, red wine, concentrated tea, dark coffee, beer, grass, and berry stains on all washables and dry clean garments.',
    appearance: 'Clear fluid liquid with subtle organic scent',
    density: '1.04 g/cm³',
    packagingOptions: [
      '20 Kg / 20 Ltr Drum / Carboy',
      '50 Kg HDPE Drum',
      '5 Kg / 5 Ltr Can'
    ],
    applications: [
      'Red Wine, Beer & Alcoholic Drink Stains',
      'Espresso Coffee, Black Tea & Herbal Infusions',
      'Grass, Leaf, Flower & Berry Juices',
      'Commercial Laundry Tannin Pre-Wash'
    ],
    features: [
      'Rapid breakdown of polyphenol tannin rings',
      'Reduces need for harsh chlorine bleaching',
      'Safe for colored cottons, linens, and polyesters'
    ],
    specifications: [
      { parameter: 'Active Organic Acid Blend', specification: 'Min. 18.0 %', testMethod: 'Titration' },
      { parameter: 'pH (as is)', specification: '3.0 - 4.0', testMethod: 'pH Meter' }
    ],
    storageInstructions: 'Store in a cool warehouse with tight cap seals.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '20 LTR'
  },
  {
    id: 'organic-low',
    srNo: 13,
    name: 'ORGANIC LOW',
    iupacName: 'Mild Organic Spotting & Wash Powder',
    grade: 'Commercial Grade',
    purity: 'Fiber-Gentle Tannin Spotter',
    category: 'Stain Removers & Spotting',
    rate: 100.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 2000.0,
    description: 'Gentle organic spot remover and dry cleaning additive formulated for low-alkalinity washing of fine woolens and pastel fabrics.',
    fullDescription: 'ORGANIC LOW is a mild, pH-buffered spotting compound designed for fine wool, cashmere, and delicate silks where stronger spotting agents would risk fiber shrinkage or color fading.',
    appearance: 'Fine white homogeneous powder',
    density: '0.85 g/cm³',
    packagingOptions: [
      '20 Kg / 20 Ltr Drum / Carboy',
      '50 Kg HDPE Drum',
      '5 Kg / 5 Ltr Can'
    ],
    applications: [
      'Woolen, Cashmere & Knitwear Spotting',
      'Pastel Shade & Silk Garment Pre-Treatment',
      'Mild Fruit Juice & Tea Stain Dissolution',
      'Wet Cleaning Delicate Bath Buffer'
    ],
    features: [
      'Near-neutral pH preventing wool felting',
      'No aggressive oxidizers or optical bleaches',
      'Water soluble and easily rinsed out'
    ],
    specifications: [
      { parameter: 'Solubility', specification: '100% in warm water', testMethod: 'Visual' },
      { parameter: 'pH (1% solution)', specification: '6.0 - 7.0', testMethod: 'pH Meter' }
    ],
    storageInstructions: 'Keep in airtight moisture-proof drums in dry storage.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '20 KGS'
  },
  {
    id: 'prime-protect',
    srNo: 14,
    name: 'Prime Protect',
    iupacName: 'Polymeric Fiber Armor & Anti-Pilling Formulation',
    grade: 'Premium Concentrate',
    purity: 'Fiber-Shielding Active Compound',
    category: 'Laundry & Fabric Care',
    rate: 240.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 4800.0,
    description: 'Protective finishing formulation that wraps textile fibers against friction, pilling, and premature wear during wash agitation.',
    fullDescription: 'Prime Protect coats individual yarn filaments with a micro-thin elastic polymer layer. This dramatically minimizes fiber breakage, fabric thinning, fuzziness, and pilling across repeated wash cycles.',
    appearance: 'Milky white emulsion / fine powder blend',
    density: '1.02 g/cm³',
    packagingOptions: [
      '20 Kg / 20 Ltr Drum / Carboy',
      '50 Kg HDPE Drum',
      '5 Kg / 5 Ltr Can'
    ],
    applications: [
      'Commercial Uniform & Workwear Longevity Treatment',
      'Hotel Towel & Linen Fiber Strengthening',
      'Anti-Pilling Rinse for Knitwear & Polos',
      'Garment Finishing & Pressing Enhancement'
    ],
    features: [
      'Increases tensile tear resistance of commercial textiles',
      'Suppresses microfiber shedding during machine agitation',
      'Maintains original drape and hand-feel'
    ],
    specifications: [
      { parameter: 'Active Polymer Solids', specification: 'Min. 25.0 %', testMethod: 'Gravimetric' },
      { parameter: 'pH (1% solution)', specification: '6.5 - 7.5', testMethod: 'pH Meter' }
    ],
    storageInstructions: 'Protect from direct sunlight and extreme temperatures.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '20 KGS'
  },
  {
    id: 'rust-stains-remover',
    srNo: 15,
    name: 'Rust Stains Remover',
    iupacName: 'Chemical Iron Oxide Reducer & Chelating Agent',
    grade: 'Technical Grade',
    purity: 'Instant Rust Chelating Active',
    category: 'Stain Removers & Spotting',
    rate: 1250.0,
    defaultQty: 1,
    unit: 'LTR',
    taxableValue: 1250.0,
    description: 'Fast-acting chemical reducer that converts insoluble reddish-brown iron rust stains into soluble colorless complexes instantly.',
    fullDescription: 'Atul Chemicals Rust Stains Remover is a laboratory-grade spotting agent tailored for instant elimination of metallic rust, boiler water iron streaks, corroded pipe marks, and yellow mineral stains. Drops on rust vanish in seconds.',
    appearance: 'Clear transparent acidic liquid',
    density: '1.12 g/cm³',
    packagingOptions: [
      '1 Kg / 1 Ltr Bottle',
      '5 Kg / 5 Ltr Can',
      '20 Kg / 20 Ltr Drum / Carboy'
    ],
    applications: [
      'Ferric Metal Rust & Corrosion Mark Removal',
      'Borewell Iron Water Streak Elimination',
      'Corroded Button & Zipper Stain Spotting',
      'Laundry Boiler Scaled Rust Decontamination'
    ],
    features: [
      'Instant chemical reduction in under 10 seconds',
      'Requires minimal mechanical scrubbing on spotting board',
      'Completely water rinsable'
    ],
    specifications: [
      { parameter: 'Active Chelating Acid', specification: 'Min. 12.0 %', testMethod: 'Titration' },
      { parameter: 'Iron Binding Capacity', specification: 'High Potency', testMethod: 'Colorimetric' }
    ],
    storageInstructions: 'Store in acid-proof polyethylene bottles with secure child-resistant caps.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true,
    minimumOrderQuantity: '1 LTR'
  },
  {
    id: 'shiner',
    srNo: 16,
    name: 'Shiner',
    iupacName: 'Stilbene Fluorescent Optical Brightener (OBA)',
    grade: 'Premium Concentrate',
    purity: 'Optical Brightening Compound',
    category: 'Finishing & Brighteners',
    rate: 450.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 2250.0,
    description: 'Advanced optical brightener and textile luster enhancer that restores pristine brilliance to whites and vibrant colors.',
    fullDescription: 'Shiner is a high-affinity optical brightening agent designed to absorb invisible UV light and re-emit it in the visible blue spectrum. It neutralizes natural fabric yellowness, making whites dazzle under daylight and artificial illumination.',
    appearance: 'Fine free-flowing bright yellowish powder / liquid',
    density: '0.82 g/cm³',
    packagingOptions: [
      '5 Kg / 5 Ltr Can',
      '1 Kg / 1 Ltr Bottle',
      '20 Kg / 20 Ltr Drum / Carboy'
    ],
    applications: [
      'Hospital & Hotel White Linen Brilliance Enhancement',
      'White Shirt & Garment Refreshing Rinses',
      'Detergent Formulation Boosting',
      'Dry Cleaned Suit & Dress Luster Finishing'
    ],
    features: [
      'Exceptional light fastness and wash resistance',
      'Provides pure blue-violet fluorescent shade without green tint',
      'High exhaust rate on cotton, viscose, and polyester'
    ],
    specifications: [
      { parameter: 'E 1% 1cm (Extinction Coefficient)', specification: 'Min. 520', testMethod: 'Spectrophotometric' },
      { parameter: 'Moisture Content', specification: 'Max. 4.0 %', testMethod: 'Karl Fischer' }
    ],
    storageInstructions: 'Store protected from direct light in opaque sealed containers.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '5 KGS'
  },
  {
    id: 'softner',
    srNo: 17,
    name: 'Softner',
    iupacName: 'Commercial Liquid Softening Agent',
    grade: 'Commercial Grade',
    purity: 'Silicone & Esterquat Softener',
    category: 'Laundry & Fabric Care',
    rate: 170.0,
    defaultQty: 1,
    unit: 'LTR',
    taxableValue: 3400.0,
    description: 'Commercial liquid fabric softener providing silky smooth drape, anti-static discharge, and ease of ironing.',
    fullDescription: 'A cost-effective, high-volume liquid fabric softener engineered for industrial laundromats, budget hotels, and textile processing houses. It eliminates stiffness from hard-water washing and imparts smooth suppleness.',
    appearance: 'Opaque sky blue / white liquid emulsion',
    density: '1.01 g/cm³',
    packagingOptions: [
      '20 Kg / 20 Ltr Drum / Carboy',
      '50 Kg HDPE Drum',
      '5 Kg / 5 Ltr Can'
    ],
    applications: [
      'Commercial Laundry Bulk Rinsing',
      'Hospitality Bed Linens & Bath Mats',
      'Uniform Softening & Pressing Ease',
      'Dry Cleaning Wet-Wash Finishing'
    ],
    features: [
      'High softness per rupee ratio for large volume plants',
      'Smooth roller passage through flatwork ironers',
      'Pleasant mild floral fragrance'
    ],
    specifications: [
      { parameter: 'Active Cationic Matter', specification: 'Min. 8.0 %', testMethod: 'Titration' },
      { parameter: 'pH (as is)', specification: '3.5 - 4.5', testMethod: 'pH Meter' }
    ],
    storageInstructions: 'Store in standard drum racks away from freezing.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '20 LTR'
  },
  {
    id: 'starch',
    srNo: 18,
    name: 'Starch',
    iupacName: 'Modified Cold-Water Dispersible Finishing Starch',
    grade: 'Commercial Grade',
    purity: 'High-Viscosity Finishing Starch',
    category: 'Finishing & Brighteners',
    rate: 200.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 4000.0,
    description: 'High-grade modified laundry starch powder giving crisp structure, firm hand-feel, and smooth finish to cottons and linens.',
    fullDescription: 'Atul Chemicals Laundry Starch dissolves smoothly without lumps, penetrating cotton fibers to provide sharp pleating, collar firmness, and soil-resistant barrier coating on shirts, chef uniforms, and banquet tablecloths.',
    appearance: 'Fine white starch powder',
    density: '0.65 g/cm³',
    packagingOptions: [
      '20 Kg / 20 Ltr Drum / Carboy',
      '50 Kg HDPE Drum',
      '5 Kg / 5 Ltr Can'
    ],
    applications: [
      'Formal Shirt Collar & Cuff Crisp Stiffening',
      'Chef Jackets & Hospitality Uniform Finishing',
      'Banquet Table Linen Starching',
      'Traditional Cotton Sarees & Kurta Sizing'
    ],
    features: [
      'Cold water dispersible without boiling',
      'Non-stick formula on steam press heads and irons',
      'Even stiffness without flaking or chalky residue'
    ],
    specifications: [
      { parameter: 'Starch Content (Purity)', specification: 'Min. 98.0 %', testMethod: 'Polarimetric' },
      { parameter: 'Moisture Content', specification: 'Max. 12.0 %', testMethod: 'Moisture Analyzer' }
    ],
    storageInstructions: 'Store in dry place on wooden pallets away from damp floors.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '20 KGS'
  },
  {
    id: 'blood-high-1-0',
    srNo: 19,
    name: 'BLOOD High1.0',
    iupacName: 'Concentrated Bio-Enzymatic Blood & Albumin Spotter',
    grade: 'Premium Concentrate',
    purity: 'High-Potency Protease Bio-Complex',
    category: 'Stain Removers & Spotting',
    rate: 1250.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 1250.0,
    description: 'Concentrated enzymatic formulation specifically developed for deep-set dried blood and medical protein soil removal.',
    fullDescription: 'BLOOD High1.0 contains ultra-concentrated proteases that hydrolyze coagulated hemoglobin, dried plasma, albumin, and medical blood soils into soluble peptides that wash out completely without staining.',
    appearance: 'Clear to pale amber enzymatic solution',
    density: '1.05 g/cm³',
    packagingOptions: [
      '1 Kg / 1 Ltr Bottle',
      '5 Kg / 5 Ltr Can',
      '20 Kg / 20 Ltr Drum / Carboy'
    ],
    applications: [
      'Hospital Surgical Linen & OT Gown Blood Removal',
      'Emergency & Clinic Stain Remediation',
      'Dried Blood on Cotton, Polyester & Synthetics',
      'Spotting Table Ultrasonic Gun Application'
    ],
    features: [
      'Digests coagulated proteins without scorching fabric',
      'Eliminates need for harmful high-temperature boiling',
      'Leaves zero yellowish residual haloes'
    ],
    specifications: [
      { parameter: 'Protease Enzymatic Activity', specification: 'High Units/ml', testMethod: 'Standard' },
      { parameter: 'pH (as is)', specification: '7.5 - 8.5', testMethod: 'pH Meter' }
    ],
    storageInstructions: 'Keep in temperature controlled room below 28°C.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true,
    minimumOrderQuantity: '1 KGS'
  },
  {
    id: 'ink-makeup-high',
    srNo: 20,
    name: 'Ink Makeup High',
    iupacName: 'Heavy-Duty Industrial Solvent Ink & Dye Stripper',
    grade: 'Industrial Grade',
    purity: 'Industrial-Strength Solvent Compound',
    category: 'Stain Removers & Spotting',
    rate: 400.0,
    defaultQty: 1,
    unit: 'LTR',
    taxableValue: 2000.0,
    description: 'Heavy-duty industrial solvent-based ink remover for permanent marker, printer toner, dye bleed, and thick makeup.',
    fullDescription: 'Ink Makeup High combines potent organic co-solvents to dissolve permanent ink dyes, printer toner powder, leather color bleed, correction fluid, and stubborn theatrical makeup from heavy garments and fabrics.',
    appearance: 'Clear transparent fluid with active solvent scent',
    density: '0.99 g/cm³',
    packagingOptions: [
      '5 Kg / 5 Ltr Can',
      '1 Kg / 1 Ltr Bottle',
      '20 Kg / 20 Ltr Drum / Carboy'
    ],
    applications: [
      'Permanent Marker, Ballpoint & Fountain Pen Ink',
      'Photocopier Toner & Printing Ink Smears',
      'Waterproof Theatrical Makeup & Heavy Lipstick',
      'Dry Cleaning Spotting Table High-Velocity Gun'
    ],
    features: [
      'Dissolves resin binders in permanent inks',
      'Fast action reducing spotting technician time',
      'Water-flushable with vacuum extraction'
    ],
    specifications: [
      { parameter: 'Solvent Purity Blend', specification: 'Min. 98.0 %', testMethod: 'GC' },
      { parameter: 'Moisture Content', specification: 'Max. 0.3 %', testMethod: 'Karl Fischer' }
    ],
    storageInstructions: 'Store in flammables cabinet away from naked flames.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '5 LTR'
  },
  {
    id: 'ultimate-cleaner-detergent-leather',
    srNo: 21,
    name: 'Ultimate Cleaner -Detergent-Leather',
    iupacName: 'pH-Balanced Nourishing Leather Cleanser',
    grade: 'Premium Concentrate',
    purity: 'Conditioning Leather Detergent',
    category: 'Leather & Shoe Care',
    rate: 1500.0,
    defaultQty: 1,
    unit: 'LTR',
    taxableValue: 1500.0,
    description: 'pH-balanced all-in-one cleaner and conditioner for genuine leather jackets, bags, upholstery, and luxury footwear.',
    fullDescription: 'Ultimate Cleaner is specifically formulated with neutral surfactants and natural lipid conditioners to cleanse genuine nappa leather, nubuck, suede, and designer shoes without stripping natural tanning oils or causing leather stiffening.',
    appearance: 'Rich creamy translucent liquid',
    density: '1.02 g/cm³',
    packagingOptions: [
      '1 Kg / 1 Ltr Bottle',
      '5 Kg / 5 Ltr Can',
      '20 Kg / 20 Ltr Drum / Carboy'
    ],
    applications: [
      'Genuine Leather Jacket & Apparel Cleansing',
      'Designer Leather Handbag & Wallet Restoring',
      'Sneaker & Leather Shoe Deep Cleaning',
      'Car Leather Upholstery Rejuvenation'
    ],
    features: [
      'pH 6.5 neutral formulation preventing leather cracking',
      'Enriched with natural softening emollients',
      'Restores rich supple feel and satin sheen'
    ],
    specifications: [
      { parameter: 'pH (as is)', specification: '6.0 - 7.0', testMethod: 'pH Meter' },
      { parameter: 'Conditioning Oil Content', specification: 'Optimized', testMethod: 'Standard' }
    ],
    storageInstructions: 'Store indoors between 15°C and 30°C.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true,
    minimumOrderQuantity: '1 LTR'
  },
  {
    id: 'sole-cleaner-shoe-sole-cleaner',
    srNo: 22,
    name: 'Sole Cleaner-Shoe Sole Cleaner',
    iupacName: 'Rubber De-Yellowing & Midsole Cleanser',
    grade: 'Commercial Grade',
    purity: 'High-Active Midsole Restorer',
    category: 'Leather & Shoe Care',
    rate: 220.0,
    defaultQty: 1,
    unit: 'PCS',
    taxableValue: 220.0,
    description: 'High-performance footwear sole and rubber midsole cleaner that removes oxidation, yellowing, dirt, and scuff marks.',
    fullDescription: 'Engineered for sneaker laundry and shoe restoration workshops, Sole Cleaner strips embedded road grime, grease, and yellow oxidation from EVA, boost, polyurethane, and rubber soles, restoring bright factory whites.',
    appearance: 'Foaming active solution / paste',
    density: '1.04 g/cm³',
    packagingOptions: [
      '1 Kg / 1 Ltr Bottle',
      '5 Kg / 5 Ltr Can',
      'Custom Packaging'
    ],
    applications: [
      'Sneaker Rubber Midsole Whitening',
      'Shoe Sole Degreasing & Mud Stain Removal',
      'Oxidation De-Yellowing on Boost & Foam Soles',
      'Commercial Shoe Laundry Processing'
    ],
    features: [
      'Deep penetrating cleaning action on textured sole treads',
      'Non-abrasive formulation protecting stitching and glue lines',
      'Leaves soles spotless and ready for sealant coats'
    ],
    specifications: [
      { parameter: 'Active Matter', specification: 'Min. 18.0 %', testMethod: 'Standard' },
      { parameter: 'pH (neat)', specification: '8.0 - 9.0', testMethod: 'pH Meter' }
    ],
    storageInstructions: 'Store in cool dry area away from direct heat.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '1 PCS'
  },
  {
    id: 'fungus',
    srNo: 23,
    name: 'Fungus',
    iupacName: 'Broad-Spectrum Fungicidal & Antimicrobial Solution',
    grade: 'Commercial Grade',
    purity: 'Quaternary Antimicrobial Active',
    category: 'Hygiene & Disinfection',
    rate: 100.0,
    defaultQty: 1,
    unit: 'LTR',
    taxableValue: 500.0,
    description: 'Anti-fungal, mildew remover, and bactericidal sanitizing liquid for damp-damaged fabrics and hygienic washing.',
    fullDescription: 'Fungus is an active biocide and fungistat designed to eliminate black mold spores, mildew growth, and musty damp odors from stored garments, monsoon-affected fabrics, curtains, and wet laundry.',
    appearance: 'Clear fluid liquid',
    density: '1.01 g/cm³',
    packagingOptions: [
      '5 Kg / 5 Ltr Can',
      '1 Kg / 1 Ltr Bottle',
      '20 Kg / 20 Ltr Drum / Carboy'
    ],
    applications: [
      'Monsoon Mildew & Mold Spot Removal',
      'Damp Stored Garment Decontamination',
      'Hospitality Curtain & Carpet Sanitization',
      'Laundry Machine Drum Disinfection'
    ],
    features: [
      'Stops spore germination and fungal recurrence',
      'Neutralizes musty fungal odors permanently',
      'Safe for colored and white textiles'
    ],
    specifications: [
      { parameter: 'Quaternary Biocidal Active', specification: 'Min. 10.0 %', testMethod: 'Titrimetric' },
      { parameter: 'pH (as is)', specification: '6.5 - 7.5', testMethod: 'pH Meter' }
    ],
    storageInstructions: 'Store in cool ventilated space away from food products.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '5 LTR'
  },
  {
    id: 'odosorb-spray',
    srNo: 24,
    name: 'Odosorb Spray',
    iupacName: 'Cyclodextrin Molecular Odor Encapsulation Spray',
    grade: 'Premium Concentrate',
    purity: 'Molecular Odor Neutralizer Active',
    category: 'Hygiene & Disinfection',
    rate: 380.0,
    defaultQty: 1,
    unit: 'LTR',
    taxableValue: 1900.0,
    description: 'Professional odor neutralizing spray that permanently encapsulates and eliminates cigarette smoke, sweat, food, and chemical odors.',
    fullDescription: 'Unlike masking perfumes, Odosorb Spray chemically traps volatile organic odor molecules inside torus-shaped molecular rings. It provides an immediate fresh crisp atmosphere on suits, curtains, upholstery, and dry-cleaned apparel.',
    appearance: 'Clear misting liquid with clean breeze fragrance',
    density: '1.00 g/cm³',
    packagingOptions: [
      '5 Kg / 5 Ltr Can',
      '1 Kg / 1 Ltr Bottle',
      '20 Kg / 20 Ltr Drum / Carboy'
    ],
    applications: [
      'Smoke, Barbecue & Food Odor Neutralization',
      'Overcoat, Blazer & Suit Refreshing Spray',
      'Hotel Room Drapes & Mattress Deodorizing',
      'Dry Cleaning Packaging Final Quality Finish'
    ],
    features: [
      'True molecular encapsulation with zero sticky residue',
      'Non-staining formula on delicate silks and linens',
      'Long-lasting clean fresh scent'
    ],
    specifications: [
      { parameter: 'Active Encapsulating Agent', specification: 'Min. 5.0 %', testMethod: 'Standard' },
      { parameter: 'Solubility', specification: '100% in water', testMethod: 'Visual' }
    ],
    storageInstructions: 'Keep in cool dry area away from open flames.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '5 LTR'
  },
  {
    id: 'blood-low',
    srNo: 25,
    name: 'Blood Low',
    iupacName: 'Neutral Bio-Enzymatic Protein & Blood Spotter',
    grade: 'Technical Grade',
    purity: 'Fiber-Gentle Protease Formula',
    category: 'Stain Removers & Spotting',
    rate: 1250.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 1250.0,
    description: 'Gentle bio-enzymatic blood and organic fluid stain spotter safe for delicate fabrics, wool, and non-fast dyed garments.',
    fullDescription: 'Blood Low offers specialized mild enzymatic spotting for silk garments, fine woolens, and dyed designer apparel. It works at neutral pH to dissolve blood and protein matter without causing dye bleeding or fiber distortion.',
    appearance: 'Clear colorless solution',
    density: '1.03 g/cm³',
    packagingOptions: [
      '1 Kg / 1 Ltr Bottle',
      '5 Kg / 5 Ltr Can',
      '20 Kg / 20 Ltr Drum / Carboy'
    ],
    applications: [
      'Silk & Woolen Blood Stain Spotting',
      'Delicate Dyed Fabric Protein Spotting',
      'Cold Water Immersion Pre-Treatment',
      'Boutique Dry Cleaning Board Application'
    ],
    features: [
      'Neutral pH formula preventing dye shifting',
      'Hydrolyzes protein complexes into water-soluble amino acids',
      'Gentle on sensitive natural protein fibers'
    ],
    specifications: [
      { parameter: 'pH (direct)', specification: '6.8 - 7.4', testMethod: 'pH Meter' },
      { parameter: 'Enzyme Activity', specification: 'Stabilized Bio-Units', testMethod: 'Standard' }
    ],
    storageInstructions: 'Store in cool place under 25°C.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '1 KGS'
  },
  {
    id: 'fold-pack-transparent-14-20',
    srNo: 26,
    name: 'Fold Pack (Transparent) 14"*20"- Packing-Laundry',
    grade: 'Commercial Grade',
    purity: '100% Virgin Transparent Polyethylene',
    category: 'Packaging & Accessories',
    rate: 300.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 300.0,
    description: 'High-clarity transparent 14"x20" poly packaging bags for folded laundry, bedsheets, and dry cleaned textiles.',
    fullDescription: 'Made from high-clarity 100% virgin polyethylene, Fold Pack 14"x20" protects processed laundry from moisture, dust, and handling smudges while showcasing crisp folds and pristine cleanliness.',
    appearance: 'High-clarity transparent poly film bags',
    packagingOptions: [
      '5 Kg Bundle / Roll',
      '50 Kg HDPE Drum',
      'Custom Packaging'
    ],
    applications: [
      'Folded Shirt, Trouser & Kurta Packaging',
      'Bedsheet & Hotel Linen Pack Bundling',
      'Laundry Retail Customer Delivery Packaging',
      'Dust & Moisture Protection in Transit'
    ],
    features: [
      'Crystal clear transparency for attractive retail presentation',
      'High puncture resistance and sturdy side seals',
      'Recyclable virgin polymer material'
    ],
    specifications: [
      { parameter: 'Dimensions', specification: '14" x 20" (Inches)', testMethod: 'Measurement' },
      { parameter: 'Material', specification: '100% Virgin LDPE', testMethod: 'Polymer Test' }
    ],
    storageInstructions: 'Keep in dry storage away from sharp objects and extreme heat.',
    safetyDataSheetAvailable: false,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '5 KGS'
  },
  {
    id: 'fold-pack-12-17-shirt-tshirt',
    srNo: 27,
    name: 'Fold Pack 12"*17"-Packing- Shirt/T-Shirt/Similar',
    grade: 'Commercial Grade',
    purity: 'High-Clarity Garment Poly',
    category: 'Packaging & Accessories',
    rate: 300.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 300.0,
    description: 'Standard 12"x17" protective poly garment bags tailored for folded shirts, t-shirts, and apparel.',
    fullDescription: 'Custom sized to fit standard folded shirts and t-shirts with cardboard inserts. High gloss surface and clean weld seams ensure a premium boutique finish for professional laundry and dry cleaning shops.',
    appearance: 'Clear smooth poly bags with flap',
    packagingOptions: [
      '5 Kg Bundle / Roll',
      '50 Kg HDPE Drum',
      'Custom Packaging'
    ],
    applications: [
      'Folded Formal Shirt & T-Shirt Packaging',
      'Polo Shirts & Kids Wear Retail Delivery',
      'Dry Cleaning Counter Pick-Up Packaging',
      'E-commerce Apparel Repackaging'
    ],
    features: [
      'Precision cut 12"x17" dimensions for tailored garment fit',
      'Glossy finish enhancing garment presentation',
      'Sturdy tear-resistant gussets'
    ],
    specifications: [
      { parameter: 'Dimensions', specification: '12" x 17" (Inches)', testMethod: 'Measurement' },
      { parameter: 'Film Gauge', specification: 'Standard Commercial Micron', testMethod: 'Gauge Test' }
    ],
    storageInstructions: 'Store in dry carton boxes.',
    safetyDataSheetAvailable: false,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '5 KGS'
  },
  {
    id: 'fold-pack-milky-14-20',
    srNo: 28,
    name: 'Fold Pack(Milky) 14"*20"-Packing-Laundry',
    grade: 'Commercial Grade',
    purity: 'Premium Milky Translucent Poly',
    category: 'Packaging & Accessories',
    rate: 300.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 300.0,
    description: 'Premium milky translucent 14"x20" poly bags providing an upscale boutique finish for laundry and linen packaging.',
    fullDescription: 'Fold Pack Milky features an elegant frosted translucent sheen that gives an ultra-luxurious feel for executive laundry, premium dry cleaning, and high-end hotel guest laundry deliveries.',
    appearance: 'Milky translucent matte poly film',
    packagingOptions: [
      '5 Kg Bundle / Roll',
      '50 Kg HDPE Drum',
      'Custom Packaging'
    ],
    applications: [
      'Premium Boutique Dry Cleaning Deliveries',
      'Executive Guest Laundry Hotel Packaging',
      'Privacy & UV-Diffusing Garment Packaging',
      'Luxury Bed Linen & Towel Presentation'
    ],
    features: [
      'Sophisticated frosted milky matte texture',
      'Soft-touch supple polymer feel',
      'High tensile load capacity'
    ],
    specifications: [
      { parameter: 'Dimensions', specification: '14" x 20" (Inches)', testMethod: 'Measurement' },
      { parameter: 'Finish', specification: 'Milky Translucent Matte', testMethod: 'Visual' }
    ],
    storageInstructions: 'Store in clean dry conditions.',
    safetyDataSheetAvailable: false,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '5 KGS'
  },
  {
    id: 'hanger-pack-24-36-coat-jacket',
    srNo: 29,
    name: 'Hanger Pack 24"*36"- Coat/Jacket/Similar',
    grade: 'Commercial Grade',
    purity: 'Contoured Shoulder Garment Poly Film',
    category: 'Packaging & Accessories',
    rate: 300.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 300.0,
    description: 'Full-length 24"x36" hanging garment cover rolls/bags for coats, blazers, jackets, and suits.',
    fullDescription: 'Supplied in convenient perforated rolls with pre-punched hanger neck openings and sloped shoulders. Protects hanging suits, evening wear, and coats from wrinkles, dust, and rain during customer delivery.',
    appearance: 'Clear continuous perforated poly rolls',
    packagingOptions: [
      '5 Kg Bundle / Roll',
      '50 Kg HDPE Drum',
      'Custom Packaging'
    ],
    applications: [
      'Hanging Suit, Blazer & Coat Protection',
      'Evening Gowns & Long Jacket Packaging',
      'Dry Cleaning Assembly Conveyor Hanging',
      'Van Delivery Garment Protection'
    ],
    features: [
      'Shaped shoulder contour matching standard hangers',
      'Easy-tear perforations on continuous roll',
      'Crystal clear view of customer garment tags'
    ],
    specifications: [
      { parameter: 'Dimensions', specification: '24" x 36" (Inches)', testMethod: 'Measurement' },
      { parameter: 'Hanger Opening', specification: 'Center Pre-Punched', testMethod: 'Visual' }
    ],
    storageInstructions: 'Store rolls horizontally on roll dispensers.',
    safetyDataSheetAvailable: false,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true,
    minimumOrderQuantity: '5 KGS'
  },
  {
    id: 'printed-board',
    srNo: 30,
    name: 'Printed Board',
    grade: 'Commercial Grade',
    purity: '300 GSM Virgin Duplex Cardboard',
    category: 'Packaging & Accessories',
    rate: 3.2,
    defaultQty: 1,
    unit: 'PCS',
    taxableValue: 3200.0,
    description: 'Custom printed shirt collar back support boards / cardboard inserts for crisp garment folding.',
    fullDescription: 'High-rigidity duplex backing cardboard inserts designed to give structural firmness to folded dress shirts and apparel, ensuring garments remain crisp, flat, and store-fresh during delivery and stacking.',
    appearance: 'Printed stiff duplex cardboard sheets',
    packagingOptions: [
      '1000 Pcs Box',
      'Custom Packaging'
    ],
    applications: [
      'Formal Shirt Back Support & Collar Shape Retention',
      'Folded Garment Structural Stiffening',
      'Retail Apparel Packing & Presentation',
      'Commercial Laundry Packaging Consistency'
    ],
    features: [
      'Smooth calibrated 300 GSM paperboard preventing snags',
      'Precision die-cut edges with collar fold guides',
      'Moisture-resistant coating'
    ],
    specifications: [
      { parameter: 'Grammage (GSM)', specification: '300 ± 5 GSM', testMethod: 'ISO 536' },
      { parameter: 'Quantity Pack', specification: '1,000 Pieces / Box', testMethod: 'Count' }
    ],
    storageInstructions: 'Store in dry moisture-free carton bundles.',
    safetyDataSheetAvailable: false,
    certificateOfAnalysisAvailable: false,
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '1000 PCS'
  },
  {
    id: 'crm-software-365-days',
    srNo: 31,
    name: 'CRM Software 365 Days Validity',
    grade: 'Enterprise Edition',
    purity: 'Cloud SaaS Management Platform v4.2',
    category: 'Software & Digital Solutions',
    rate: 10000.0,
    defaultQty: 1,
    unit: 'NOS',
    taxableValue: 10000.0,
    description: 'Cloud-based Laundry & Dry Cleaning Management CRM software license with barcode tracking, customer SMS, and POS billing (365 days subscription).',
    fullDescription: 'A complete end-to-end cloud ERP/CRM software tailored for modern laundromats, dry cleaning chains, and industrial wash facilities. Includes counter POS billing, garment QR-code/barcode tagging, automatic WhatsApp/SMS status alerts, driver delivery tracking, and live business analytics.',
    appearance: 'Cloud Digital License & Setup Credentials',
    packagingOptions: [
      '1 Year Cloud License',
      'Custom Packaging'
    ],
    applications: [
      'Laundry & Dry Cleaning Store Point-of-Sale (POS)',
      'Barcode / QR Tag Printing & Garment Tracking',
      'Customer SMS & WhatsApp Automatic Notification',
      'Home Pick-up & Delivery Logistics Routing',
      'Daily Revenue, Expense & Chemical Inventory Analytics'
    ],
    features: [
      '365 Days active cloud hosting with 99.9% uptime SLA',
      'Unlimited customer orders, receipts, and user accounts',
      'Integrated WhatsApp & SMS messaging gateway',
      'Automated daily GST billing & accounting export reports'
    ],
    specifications: [
      { parameter: 'Validity Period', specification: '365 Days (1 Full Year)', testMethod: 'Digital Key' },
      { parameter: 'Deployment', specification: 'Cloud Web + Mobile Apps', testMethod: 'Cloud Server' },
      { parameter: 'Support Included', specification: '24/7 Technical Onboarding', testMethod: 'SLA' }
    ],
    storageInstructions: 'Instant digital delivery with cloud credential activation.',
    safetyDataSheetAvailable: false,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true,
    minimumOrderQuantity: '1 NOS'
  },
  {
    id: 'dark',
    srNo: 32,
    name: 'DARK',
    iupacName: 'Black & Dark Textile Dye Revival Formulation',
    grade: 'Premium Concentrate',
    purity: 'Black Fiber Re-Affinity Complex',
    category: 'Laundry & Fabric Care',
    rate: 950.0,
    defaultQty: 1,
    unit: 'KGS',
    taxableValue: 950.0,
    description: 'Dark garment color restorer and black fabric revival wash compound to eliminate grey cast and fading.',
    fullDescription: 'DARK is a specialized color revitalization additive formulated for black garments, dark suits, abayas, and dark cottons. It coats micro-fibers to remove grey surface haze and restores deep obsidian darkness.',
    appearance: 'Dark blue-black viscous solution',
    density: '1.08 g/cm³',
    packagingOptions: [
      '1 Kg / 1 Ltr Bottle',
      '5 Kg / 5 Ltr Can',
      '20 Kg / 20 Ltr Drum / Carboy'
    ],
    applications: [
      'Black Garment, T-Shirt & Abaya Color Restoration',
      'Dark Suit & Woolen Jacket Re-Shining',
      'Prevention of Grey Haze & Wash Fade',
      'High-End Dry Cleaning Finishing Wash'
    ],
    features: [
      'Restores deep optical black absorption',
      'Eliminates dull grey cast on aged cotton and wool',
      'Maintains fabric softness and deep sheen'
    ],
    specifications: [
      { parameter: 'Active Color Lock Agent', specification: 'Min. 22.0 %', testMethod: 'Standard' },
      { parameter: 'pH (as is)', specification: '6.0 - 7.5', testMethod: 'pH Meter' }
    ],
    storageInstructions: 'Store in tightly closed container away from direct sunlight.',
    safetyDataSheetAvailable: true,
    certificateOfAnalysisAvailable: true,
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true,
    minimumOrderQuantity: '1 KGS'
  }
];
