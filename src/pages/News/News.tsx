import React from "react";
import { useLoaderData } from "react-router-dom";

const News = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>News</h1>
    </div>
  );
};

export default News;
