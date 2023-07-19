import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBlog = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>singleBlog</h1>
    </div>
  );
};

export default SingleBlog;
