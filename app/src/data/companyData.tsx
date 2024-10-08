export interface Company {
  id: string;
  name: string;
  img?: string;
  category?: string;
  description: string;
  website: string;
  country?: string;
  rating?: number;
  is_kyc?: boolean;
  is_sanctions_safe?: boolean;
  kinto_address?: string;
  fairtrade_status?: string[];
  greenmark_status?: string;
  greenmark_points?: number;
}

export const companyData: Company[] = [
  {
    id: "1",
    name: "Top Logistics LLC",
    img: "./img/logo/logo-1.png",
    category: "Logistics",
    description:
      "A global leader in transportation and supply chain solutions, providing reliable and efficient logistics services tailored to meet diverse business needs.",
    website: "https://toplogistics.com",
    country: "US",
    rating: 4,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xcdc3ad2a02764c3a9E9ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Bronze",
    greenmark_points: 155,
  },
  {
    id: "2",
    name: "Gourmet Catering Pte Ltd",
    img: "./img/logo/logo-2.png",
    category: "Food & Beverage",
    description:
      "A premier catering company specializing in creating exquisite culinary experiences for events, offering gourmet menus crafted with the finest ingredients.",
    website: "https://gourmet.com",
    country: "SG",
    rating: 4,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0x1283ad3a22764c3a9E9ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Bronze",
    greenmark_points: 160,
  },
  {
    id: "3",
    name: "Tech Guard LLC",
    img: "./img/logo/logo-3.png",
    category: "Cybersecurity",
    description:
      "A cutting-edge cybersecurity firm delivering advanced solutions to protect businesses from cyber threats, ensuring robust security for digital infrastructures.",
    website: "https://techguard.com",
    country: "FR",
    rating: 5,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xaad4cd8b56783f65E9ff48F3cdaA19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Bronze",
    greenmark_points: 170,
  },
  {
    id: "4",
    name: "EcoEnergy Ltd",
    img: "./img/logo/logo-3.png",
    category: "Renewable Energy",
    description:
      "An innovative renewable energy company focusing on sustainable and environmentally-friendly energy solutions, including solar and wind power.",
    website: "https://ecoenergy.com",
    country: "DE",
    rating: 5,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xabbcd3b22764d3b3a9ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Silver",
    greenmark_points: 200,
  },
  {
    id: "5",
    name: "Blue Ocean Ventures",
    img: "./img/logo/logo-3.png",
    category: "Investment",
    description:
      "A venture capital firm investing in early-stage startups, providing capital, mentorship, and strategic support to help businesses grow and scale.",
    website: "https://blueocean.com",
    country: "SG",
    rating: 4,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0x1234cd2b12763d9a9E8ff49C2aB19F65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Bronze",
    greenmark_points: 140,
  },
  {
    id: "6",
    name: "Bright Future Pharmaceuticals",
    img: "./img/logo/logo-3.png",
    category: "Healthcare",
    description:
      "A leading pharmaceutical company focused on developing innovative medicines and healthcare products to improve the quality of life globally.",
    website: "https://brightfuturepharma.com",
    country: "IN",
    rating: 4,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0x1254cd2b12863d8a9E8ff49C2aB19F65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Silver",
    greenmark_points: 210,
  },
  {
    id: "7",
    name: "GreenLeaf Organics",
    img: "./img/logo/logo-3.png",
    category: "Agriculture",
    description:
      "A sustainable farming company that specializes in organic produce, delivering fresh and eco-friendly food products to local and international markets.",
    website: "https://greenleaforganics.com",
    country: "CA",
    rating: 5,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0x0984cd2b19963d8a9E7ff49C2aB19F65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Gold",
    greenmark_points: 280,
  },
  {
    id: "8",
    name: "UrbanTech Innovations",
    img: "./img/logo/logo-3.png",
    category: "Technology",
    description:
      "A tech company specializing in developing cutting-edge smart city solutions that improve urban infrastructure and services through innovation.",
    website: "https://urbantech.com",
    country: "JP",
    rating: 5,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xcdc3ad2b02964a3b9E9ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Gold",
    greenmark_points: 270,
  },
  {
    id: "9",
    name: "NextGen Auto",
    img: "./img/logo/logo-3.png",
    category: "Automotive",
    description:
      "A pioneering automotive manufacturer that designs and produces next-generation electric vehicles aimed at reducing carbon emissions and promoting sustainability.",
    website: "https://nextgenauto.com",
    country: "SE",
    rating: 4,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xcdc4ab2b02964a3b9E8ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Silver",
    greenmark_points: 230,
  },
  {
    id: "10",
    name: "Silverline IT Services",
    img: "./img/logo/logo-3.png",
    category: "IT Services",
    description:
      "A global IT services provider offering tailored IT solutions for businesses, including cloud services, cybersecurity, and IT consulting.",
    website: "https://silverlineit.com",
    country: "AU",
    rating: 5,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xcdc4ab3b22964b3a9E8ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Bronze",
    greenmark_points: 190,
  },
  {
    id: "11",
    name: "SkyHigh Airlines",
    img: "./img/logo/logo-3.png",
    category: "Aviation",
    description:
      "An international airline offering premium air travel experiences with a strong focus on safety, customer service, and environmental responsibility.",
    website: "https://skyhighairlines.com",
    country: "US",
    rating: 4,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xcdc4ab3b23964b3a9E9ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Silver",
    greenmark_points: 220,
  },
  {
    id: "12",
    name: "Creative Studios LLC",
    img: "./img/logo/logo-3.png",
    category: "Media & Entertainment",
    description:
      "A media production company specializing in producing high-quality content for film, television, and digital platforms, delivering compelling stories to audiences worldwide.",
    website: "https://creativestudios.com",
    country: "BR",
    rating: 5,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xcdc4ad3b23965c3a9E9ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Bronze",
    greenmark_points: 160,
  },
  {
    id: "13",
    name: "AquaPure Water Solutions",
    img: "./img/logo/logo-3.png",
    category: "Water Treatment",
    description:
      "A leading provider of water treatment solutions, specializing in innovative filtration and purification systems for residential and industrial use.",
    website: "https://aquapure.com",
    country: "ZA",
    rating: 5,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xcdc4ad4b23966c3a9E8ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Gold",
    greenmark_points: 300,
  },
  {
    id: "14",
    name: "Speedster Logistics Ltd",
    img: "./img/logo/logo-3.png",
    category: "Logistics",
    description:
      "A leading logistics company offering fast and reliable shipping services for businesses of all sizes, specializing in last-mile delivery and international freight.",
    website: "https://speedsterlogistics.com",
    country: "MX",
    rating: 4,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xcdc5af2b24976c3a9E9ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Bronze",
    greenmark_points: 170,
  },
  {
    id: "15",
    name: "Solaris Energy Corp",
    img: "./img/logo/logo-3.png",
    category: "Renewable Energy",
    description:
      "A renewable energy company focusing on developing solar energy solutions for residential and commercial markets, driving the shift towards a sustainable future.",
    website: "https://solarisenergy.com",
    country: "ES",
    rating: 5,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xcdc5af3b24977c3a9E8ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Gold",
    greenmark_points: 320,
  },
  {
    id: "16",
    name: "Luxe Fashion House",
    img: "./img/logo/logo-3.png",
    category: "Fashion",
    description:
      "A high-end fashion brand known for its luxury apparel and accessories, combining contemporary design with sustainable practices.",
    website: "https://luxefashion.com",
    country: "IT",
    rating: 5,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xcdc5af4b24978c3a9E9ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Silver",
    greenmark_points: 250,
  },
  {
    id: "17",
    name: "VivaTech Innovations",
    img: "./img/logo/logo-3.png",
    category: "Technology",
    description:
      "An innovative tech company that creates cutting-edge hardware and software solutions to drive the digital transformation of businesses.",
    website: "https://vivatech.com",
    country: "NL",
    rating: 4,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xcdc5af5b25979c3a9E9ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Bronze",
    greenmark_points: 160,
  },
  {
    id: "18",
    name: "Oceanix Shipping Inc.",
    img: "./img/logo/logo-3.png",
    category: "Shipping",
    description:
      "A global shipping company providing efficient and eco-friendly maritime transport solutions for cargo and goods across international waters.",
    website: "https://oceanix.com",
    country: "CN",
    rating: 4,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xcdc5af6b25980c3a9E8ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Silver",
    greenmark_points: 240,
  },
  {
    id: "19",
    name: "NextLevel Robotics",
    img: "./img/logo/logo-3.png",
    category: "Robotics",
    description:
      "A robotics company focused on designing intelligent robots for industrial and commercial applications, helping businesses increase automation and efficiency.",
    website: "https://nextlevelrobotics.com",
    country: "KR",
    rating: 5,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xcdc5af7b25981c3a9E9ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Gold",
    greenmark_points: 330,
  },
  {
    id: "20",
    name: "Eco Friendly Paper Co.",
    img: "./img/logo/logo-3.png",
    category: "Paper Products",
    description:
      "A sustainable paper products manufacturer, offering a wide range of eco-friendly paper and packaging solutions for businesses and consumers.",
    website: "https://ecopaper.com",
    country: "US",
    rating: 4,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xcdc5af8b25982c3a9E9ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Bronze",
    greenmark_points: 150,
  },
];

export const companyDataMap: { [key: string]: Company } = companyData.reduce(
  (map, company) => {
    map[company.id] = company;
    return map;
  },
  {} as { [key: string]: Company }
);
