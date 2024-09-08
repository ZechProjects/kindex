interface Review {
  name: string;
  rating: number;
  description: string;
  transaction_hash?: string;
  date?: string;
}

// ReviewsData should map string keys to arrays of Review objects
interface ReviewsData {
  [key: string]: Review[];
}

export const reviewsData: ReviewsData = {
  "1": [
    {
      name: "John Doe - Eco Friendly Paper Co.",
      rating: 5,
      description: "Excellent service!",
      transaction_hash:
        "0x6c932883af112bdbad7df2d13d0f1c04cc6ba952a21fef72d46362ba6459277f",
      date: "2023-10-01",
    },
    {
      name: "Alice Brown - NextLevel Robotics",
      rating: 4,
      description: "Very satisfied with the overall experience.",
      transaction_hash:
        "0x6c932883af112bdbad7df2d13d0f1c04cc6ba952a21fef72d46362ba6459277f",
      date: "2023-10-01",
    },
    {
      name: "Tom Wilson - Oceanix Shipping Inc.",
      rating: 5,
      description: "Highly recommend this company!",
      transaction_hash:
        "0x6c932883af112bdbad7df2d13d0f1c04cc6ba952a21fef72d46362ba6459277f",
      date: "2023-10-01",
    },
    {
      name: "Lisa White - VivaTech Innovations",
      rating: 3,
      description: "Service was decent, but could improve in some areas.",
      transaction_hash:
        "0x6c932883af112bdbad7df2d13d0f1c04cc6ba952a21fef72d46362ba6459277f",
      date: "2023-10-01",
    },
    {
      name: "Mark Taylor - Green Energy Solutions",
      rating: 4,
      description: "Good customer support and quick responses.",
      transaction_hash:
        "0x6c932883af112bdbad7df2d13d0f1c04cc6ba952a21fef72d46362ba6459277f",
      date: "2023-10-01",
    },
    {
      name: "Nancy Davis - EcoTech Solutions",
      rating: 5,
      description: "Outstanding service and professionalism.",
      transaction_hash:
        "0x6c932883af112bdbad7df2d13d0f1c04cc6ba952a21fef72d46362ba6459277f",
      date: "2023-12-01",
    },
  ],
  "2": [
    {
      name: "Jane Smith - GreenTech Innovations",
      rating: 4,
      description: "Great experience, but room for improvement.",
    },
    {
      name: "James Lee - VivaTech Innovations",
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
