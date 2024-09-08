interface Review {
  name: string;
  rating: number;
  description: string;
}

// ReviewsData should map string keys to arrays of Review objects
interface ReviewsData {
  [key: string]: Review[];
}

export const reviewsData: ReviewsData = {
  "1": [
    { name: "John Doe", rating: 5, description: "Excellent service!" },
    {
      name: "Alice Brown",
      rating: 4,
      description: "Very satisfied with the overall experience.",
    },
    {
      name: "Tom Wilson",
      rating: 5,
      description: "Highly recommend this company!",
    },
    {
      name: "Lisa White",
      rating: 3,
      description: "Service was decent, but could improve in some areas.",
    },
    {
      name: "Mark Taylor",
      rating: 4,
      description: "Good customer support and quick responses.",
    },
    {
      name: "Nancy Davis",
      rating: 5,
      description: "Outstanding service and professionalism.",
    },
  ],
  "2": [
    {
      name: "Jane Smith",
      rating: 4,
      description: "Great experience, but room for improvement.",
    },
    {
      name: "James Lee",
      rating: 3,
      description: "Not bad, but I've had better experiences elsewhere.",
    },
    {
      name: "Emma Clark",
      rating: 5,
      description: "Exceptional quality and fast service.",
    },
    {
      name: "Robert King",
      rating: 2,
      description: "Not very impressed with the service provided.",
    },
    {
      name: "Sophia Hall",
      rating: 4,
      description: "Pretty good, but a few things could be better.",
    },
  ],
  "3": [
    {
      name: "Samuel Green",
      rating: 3,
      description: "It was okay, but not the best.",
    },
    {
      name: "Oliver Harris",
      rating: 4,
      description: "Service was above average, quite reliable.",
    },
    {
      name: "Isabella Martinez",
      rating: 5,
      description: "Excellent quality, will definitely use again!",
    },
    {
      name: "Liam Young",
      rating: 2,
      description: "I expected more, the service was lacking.",
    },
    {
      name: "Mia Anderson",
      rating: 3,
      description: "The service was satisfactory, nothing remarkable.",
    },
  ],
};
