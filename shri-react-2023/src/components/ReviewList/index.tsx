"use client";

import Review from "../Review";
import './styles/review-list.scss'

interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}

interface ReviewCardListProps {
  reviews: Review[];
}

const ReviewList = ({ reviews }: ReviewCardListProps) => {
  const reviewsList = reviews.map((review) => {
    return (
      <Review
        id={review.id}
        name={review.name}
        text={review.text}
        rating={review.rating}
        key={review.id}
      />
    );
  });
  return (
    <ul className="review-list">
      {...reviewsList}
    </ul>
  );
}
export default ReviewList;