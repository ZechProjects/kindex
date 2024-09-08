interface CompanyProfileProps {
  name: string;
  description: string;
  website: string;
  country?: string;
  rating?: number;
}

export const companyData: Record<string, CompanyProfileProps> = {
  "1": {
    name: "Top Logistics LLC",
    description:
      "A global leader in transportation and supply chain solutions, providing reliable and efficient logistics services tailored to meet diverse business needs.",
    website: "https://techcorp.com",
    country: "US",
    rating: 4,
  },
  "2": {
    name: "Gourmet Catering Pte Ltd",
    description:
      "A premier catering company specializing in creating exquisite culinary experiences for events, offering gourmet menus crafted with the finest ingredients.",
    website: "https://healthsolutions.com",
    country: "SG",
    rating: 4,
  },
  "3": {
    name: "Tech Guard LLC",
    description:
      "A cutting-edge cybersecurity firm delivering advanced solutions to protect businesses from cyber threats, ensuring robust security for digital infrastructures.",
    website: "https://healthsolutions.com",
    country: "FR",
    rating: 5,
  },
};
