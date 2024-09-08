import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import { Link, useParams } from "react-router-dom";
import { reviewsData } from "data/reviewsData";
import { companyData } from "data/companyData";

const ReviewsPage: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();

  const company = companyData[companyId || ""];
  const reviews = reviewsData[companyId || ""];

  if (!reviews) {
    return <div>No reviews.</div>;
  }

  return (
    <div className="container">
      <Navbar />
      <div className="card">
        <Link to={`/company-profile/${companyId}`} className="btn btn-primary">
          Back
        </Link>
        <h1>Reviews for {company.name}</h1>
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <h3>{review.name}</h3>
            <p>Rating: {review.rating}</p>
            <p>{review.description}</p>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
