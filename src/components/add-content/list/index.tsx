import useSwr from "swr";

import type { AdSlot } from "@/types";

import AdSlotItem from "../../add-item";
import ProductsLoading from "./loading";

interface AdSlotsContentProps {
  selectedCategory: string;
  sortBy: string;
}

const AdSlotsContent: React.FC<AdSlotsContentProps> = ({ selectedCategory, sortBy }) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr<AdSlot[]>("/api/ads", fetcher);

  if (error) return <div>Failed to load ad slots</div>;

  // Filter and sort the data
  const filteredData = data
    ? data
        .filter((item) => !selectedCategory || item.category === selectedCategory)
        .sort((a, b) => {
          if (sortBy === "rate-asc") return a.rate - b.rate;
          if (sortBy === "rate-desc") return b.rate - a.rate;
          if (sortBy === "category-asc") return a.category.localeCompare(b.category);
          if (sortBy === "category-desc") return b.category.localeCompare(a.category);
          return 0;
        })
    : [];

  return (
    <>
      {!data && <ProductsLoading />}

      {data && (
        <section className="products-list">
          {filteredData.map((item: AdSlot) => (
            <AdSlotItem
              id={item.id}
              category={item.category}
              unit={item.unit}
              contentType={item.contentType}
              rate={item.rate}
              currency={item.currency}
              platform={item.platform}
              images={item.images}
              key={item.id}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default AdSlotsContent;