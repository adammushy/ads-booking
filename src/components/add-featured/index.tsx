import Link from "next/link";
import useSwr from "swr";

import type { AdSlot } from "@/types";

import AdSlotsCarousel from "./carousel"; // Previously updated as AdSlotsCarousel

const AdSlotsFeatured = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr<AdSlot[]>("/api/ads", fetcher);

  if (error) return <div>Failed to load featured ad slots</div>;

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Featured Ad Slots for You</h3>
          <Link href="/ads" className="btn btn--rounded btn--border">
            View All Ad Slots
          </Link>
        </header>

        <AdSlotsCarousel adSlots={data || []} />
      </div>
    </section>
  );
};

export default AdSlotsFeatured;