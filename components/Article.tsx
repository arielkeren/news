import { IArticle } from "@/types";

interface Props {
  article: IArticle;
}

const Article: React.FC<Props> = ({ article }) => {
  const dateObject = new Date(article.published_date);
  const year = dateObject.getFullYear();
  const month = dateObject.toLocaleString("en-US", { month: "long" });
  const date = dateObject.getDate();

  return (
    <a href={article.url} target="_blank" rel="noopener noreferrer">
      <div className="bg-gray-900 p-5 m-3 rounded">
        <h2 className="text-2xl font-semibold text-slate-200 max-w-xl mb-3">
          {article.title}
        </h2>
        <p className="text-slate-400 max-w-xl mb-1">{article.abstract}</p>
        <p className="text-slate-300">
          {month} {date}, {year}
        </p>
        <p className="text-slate-500 max-w-md">{article.byline}</p>
      </div>
    </a>
  );
};

export default Article;
