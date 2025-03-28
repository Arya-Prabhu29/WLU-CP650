import React, { useState } from "react";
import "./FilterableCardList.css";
import { FaSearch } from "react-icons/fa";

const cardData = [
  {
    id: 1,
    title: "Wilkes Booth Dam",
    category: "Places",
    content: "Enjoy nature at Brantford",
    thumbnailURL:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Fresh Supermarket Deals",
    category: "Grocery",
    content: "Thursday get 20% off",
    thumbnailURL:
      "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Jayalakshmi",
    category: "Restaurant",
    content: "Buy 1 get 1 free",
    thumbnailURL:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "BOGO Offer",
    category: "Restaurant",
    content: "Buy one Burrito, get one free!",
    thumbnailURL:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    title: "Graham House",
    category: "Places",
    content: "Free for children",
    thumbnailURL:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    title: "Middle Eastern Groceries",
    category: "Grocery",
    content: "Making apps faster and smoother.",
    thumbnailURL:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    title: "Student Accomodation",
    category: "Rentals",
    content: "Looking for students",
    thumbnailURL:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

const FilterableCardList = () => {
  // All unique categories
  const categories = ["all", ...new Set(cardData.map((item) => item.category))];

  // State for active filter
  const [activeFilter, setActiveFilter] = useState("all");
  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  // Filter cards based on active filter and search term
  const filteredCards = cardData.filter((card) => {
    const matchesFilter =
      activeFilter === "all" || card.category === activeFilter;
    const matchesSearch =
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="filterable-cards-container">
      {/* Search input */}
      <div className="search-container">
        <div>
          <input
            type="text"
            placeholder="Search cards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div>
          <button className="submit-button">
            Advanced Search <FaSearch />
          </button>
        </div>
      </div>

      {/* Tab-like filter buttons */}
      <div className="filter-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`tab-button ${
              activeFilter === category ? "active" : ""
            }`}
            onClick={() => setActiveFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Card list */}
      <div className="cards-grid">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div key={card.id} className="card">
              <div>
                <h3>{card.title}</h3>
                <p>{card.content}</p>
                <span className="card-category">{card.category}</span>
              </div>
              <div>
                <img
                  src={card.thumbnailURL}
                  alt={card.title}
                  className="card-image"
                />
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No cards match your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterableCardList;
