import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";

const Blog = () => {
  const loaderData = useLoaderData();
  const data = loaderData.articles;
  return (
    <div className="p-10 bg-base-200 grid grid-cols-3 gap-4">
      {data.map((blog, index) => (
        <Card key={index} blog={blog} />
      ))}
    </div>
  );
};

export default Blog;
