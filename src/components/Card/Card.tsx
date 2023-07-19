import React from "react";
import { BlogType } from "../../type";
import moment from "moment";
type Props = {
  blog: BlogType;
};
const Card = ({ blog }: Props) => {
  const {
    author,
    content,
    description,
    publishedAt,
    source,
    title,
    url,
    urlToImage,
  } = blog;
  return (
    <div className="card w-96 glass">
      <figure>
        <img src={urlToImage} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex justify-between">
          <div>
            <p>
              Author: <br></br>
              {source.name}
            </p>
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
