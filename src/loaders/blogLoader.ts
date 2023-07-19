import { TotalArticle } from "../type";

const blogLoader = async (params?: any) => {
  const response = await fetch(
    "https://mocki.io/v1/ae63b295-2250-4f99-a3ce-2d551157ae5a"
  );
  if (params.blogId) {
    const data: TotalArticle = await response.json();
    const findData = data.articles.find((article) => article.source.id == 1);
    return findData;
  } else {
    return response.json();
  }
};

export default blogLoader;
