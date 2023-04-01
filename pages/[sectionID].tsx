import ArticleList from "@/components/ArticleList";
import Header from "@/components/Header";
import { IArticle, IAPIResponse, SectionType } from "@/types";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const SectionPage: React.FC = () => {
  const [articles, setArticles] = useState<IArticle[] | null>(null);

  const router = useRouter();
  const { sectionID } = router.query as { sectionID: SectionType };

  useEffect(() => {
    const fetchNews = async () => {
      if (!sectionID) return;

      const data = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/${sectionID}.json?api-key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const json: IAPIResponse = await data.json();
      setArticles(
        json.results.filter((article) => article.section !== "admin")
      );
    };

    fetchNews();
  }, [sectionID]);

  return (
    <>
      <Head>
        <title>The New York Times</title>
      </Head>
      <Header currentSection={sectionID} />
      <ArticleList articles={articles ?? []} />
    </>
  );
};

export default SectionPage;
