import { SectionType } from "@/types";
import Link from "next/link";
import { useState } from "react";

interface Props {
  currentSection: SectionType;
}

const Header: React.FC<Props> = ({ currentSection }) => {
  const sectionIDs = [
    "arts",
    "automobiles",
    "books",
    "business",
    "fashion",
    "food",
    "health",
    "home",
    "insider",
    "magazine",
    "movies",
    "nyregion",
    "obituaries",
    "opinion",
    "politics",
    "realestate",
    "science",
    "sports",
    "sundayreview",
    "technology",
    "theater",
    "t-magazine",
    "travel",
    "upshot",
    "us",
    "world",
  ];

  const sectionNames = [
    "Arts",
    "Automobiles",
    "Books",
    "Business",
    "Fashion",
    "Food",
    "Health",
    "Home",
    "Insider",
    "Magazine",
    "Movies",
    "NY Region",
    "Obituaries",
    "Opinion",
    "Politics",
    "Real Estate",
    "Science",
    "Sports",
    "Sunday Review",
    "Technology",
    "Theater",
    "T-Magazine",
    "Travel",
    "Upshot",
    "US",
    "World",
  ];

  const sections = sectionNames.map((sectionName, index) => ({
    name: sectionName,
    id: sectionIDs[index],
  }));

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((previousState) => !previousState);

  return (
    <div className="fixed top-0 h-24 w-full flex justify-center items-center bg-gray-950">
      <button
        onClick={toggleMenu}
        className="absolute bottom-1/2 translate-y-1/2 left-2 h-8 w-8 flex justify-center items-center text-gray-200 text-5xl"
      >
        =
      </button>
      <h1 className="text-gray-100 font-bold text-4xl uppercase">
        The New York Times
      </h1>
      {isMenuOpen && (
        <nav className="absolute top-24 left-0 bg-gray-950">
          <ul className="">
            {sections.map((section) => (
              <Link href={`/${section.id}`} key={section.id}>
                <li
                  className={`text-gray-400 font-semibold px-2 py-[1px] uppercase ${
                    section.id === currentSection ? "bg-gray-800" : ""
                  } hover:bg-gray-700`}
                >
                  {section.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
