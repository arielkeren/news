import { IArticle } from "@/types";
import Article from "./Article";

interface Props {
  articles: IArticle[];
}

const ArticleList: React.FC<Props> = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <Article article={article} key={article.title} />
      ))}
    </div>
  );
};

export default ArticleList;
