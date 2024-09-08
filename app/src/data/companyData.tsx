interface CompanyProfileProps {
  name: string;
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

export const companyData: Record<string, CompanyProfileProps> = {
  "1": {
    name: "Top Logistics LLC",
    description:
      "A global leader in transportation and supply chain solutions, providing reliable and efficient logistics services tailored to meet diverse business needs.",
    website: "https://techcorp.com",
    country: "US",
    rating: 4,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xcdc3ad2a02764c3a9E9ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Bronze",
    greenmark_points: 155,
  },
  "2": {
    name: "Gourmet Catering Pte Ltd",
    description:
      "A premier catering company specializing in creating exquisite culinary experiences for events, offering gourmet menus crafted with the finest ingredients.",
    website: "https://healthsolutions.com",
    country: "SG",
    rating: 4,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xcdc3ad2a02764c3a9E9ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Bronze",
    greenmark_points: 155,
  },
  "3": {
    name: "Tech Guard LLC",
    description:
      "A cutting-edge cybersecurity firm delivering advanced solutions to protect businesses from cyber threats, ensuring robust security for digital infrastructures.",
    website: "https://healthsolutions.com",
    country: "FR",
    rating: 5,
    is_kyc: true,
    is_sanctions_safe: true,
    kinto_address: "0xcdc3ad2a02764c3a9E9ff49B2daB19f65F07B7Bc",
    fairtrade_status: ["Fairtrade Sourcing Program"],
    greenmark_status: "Bronze",
    greenmark_points: 155,
  },
};
