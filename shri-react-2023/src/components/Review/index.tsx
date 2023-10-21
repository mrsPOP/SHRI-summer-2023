"use client"

import { FunctionComponent } from "react";
import Image from "next/image";
import "./styles/review.scss"

interface Props {
  id: string;
  name: string;
  text: string;
  rating: number;
}

const Review: FunctionComponent<Props> = (props: Props) => {
  return (
    <li className="review">
      <Image src={"/images/defaultAvatar.png"} alt={"author photo"} width={100} height={100} className="review__author-photo"/>
      <p className="review__author">{props.name}</p>
      <p className="review__text">{props.text}</p>
      <p className="review__rating"><span className="review__rating review__rating_bold">Оценка: </span>{props.rating}</p>
    </li>
  )
};

export default Review
