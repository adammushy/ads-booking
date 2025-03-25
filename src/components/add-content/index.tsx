import { useState } from "react";

import List from "./list"; // This is the AdSlotsContent component from list/index.tsx

const AdSlotsContent = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(""); // State for category filter
  const [sortBy, setSortBy] = useState<string>("rate-asc"); // State for sorting (default: rate ascending)

  // List of categories for the filter dropdown (derived from adSlots categories)
  const categories = [
    "All Categories",
    "Standard Banner",
    "High-Impact Ad",
    "Special Execution",
    "Sponsored Content",
    "Social Media",
    "Live Streaming",
    "Video Production",
  ];

  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>
          Digital Ad Slots <span>({categories.length - 1} Categories)</span>
        </h2>
        <button
          type="button"
          onClick={() => setFilterOpen(!filterOpen)}
          className="products-filter-btn"
        >
          <i className="icon-filters" />
        </button>
        <form
          className={`products-content__filter ${filterOpen ? "products-order-open" : ""}`}
        >
          <div className="products__filter__select">
            <h4>Filter by Category: </h4>
            <div className="select-wrapper">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category === "All Categories" ? "" : category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="products__filter__select">
            <h4>Sort by: </h4>
            <div className="select-wrapper">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="rate-asc">Price: Low to High</option>
                <option value="rate-desc">Price: High to Low</option>
                <option value="category-asc">Category: A to Z</option>
                <option value="category-desc">Category: Z to A</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <List selectedCategory={selectedCategory} sortBy={sortBy} />
    </section>
  );
};

export default AdSlotsContent;