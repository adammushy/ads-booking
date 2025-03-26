import { some } from "lodash";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "@/store";
import { addAdSlot } from "@/store/reducers/cart"; // Updated import
import { toggleFavProduct } from "@/store/reducers/user"; // Assuming this was updated
import type { AdSlot, AdSlotStoreType } from "@/types";
import { priceFormat } from "@/utils/const-function";

type AdSlotContentProps = {
  adSlot: AdSlot;
};

const AdSlotContent = ({ adSlot }: AdSlotContentProps) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);

  const { favProducts } = useSelector((state: RootState) => state.user);
   const isFavourite = some(
    favProducts,
    (productId) => productId === adSlot.id,
  );

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id: adSlot.id,
      }),
    );
  };

  const bookAdSlot = () => {
    const adSlotToSave: AdSlotStoreType = {
      id: adSlot.id,
      category: adSlot.category,
      platform: adSlot.platform,
      rate: adSlot.rate,
      currency: adSlot.currency,
      thumb: adSlot.images ? adSlot.images[0] : "",
      count,
    };

    const adSlotStore = {
      count,
      adSlot: adSlotToSave,
    };

    dispatch(addAdSlot(adSlotStore)); // Updated to addAdSlot
  };

  return (
    <section className="product-content">
      <div className="product-content__intro">
        <h5 className="product__id">
          Ad Slot ID:
          <br />
          {adSlot.id}
        </h5>
        <span className="product-on-sale">Available</span>
        <h2 className="product__name">{adSlot.category} {adSlot.unit || adSlot.contentType || ''}</h2>

        <div className="product__prices">
          <h4>{priceFormat(adSlot.rate, adSlot.currency)}</h4>
        </div>
      </div>

      <div className="product-content__filters">
        <div className="product-filter-item">
          <h5>Platform:</h5>
          <p>{adSlot.platform}</p>
        </div>
        <div className="product-filter-item">
          <h5>Duration:</h5>
          <p>{adSlot.duration}</p>
        </div>
        <div className="product-filter-item">
          <h5>Quantity:</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button
                type="button"
                onClick={() => setCount(count > 1 ? count - 1 : 1)}
                className="quantity-button__btn"
              >
                -
              </button>
              <span>{count}</span>
              <button
                type="button"
                onClick={() => setCount(count + 1)}
                className="quantity-button__btn"
              >
                +
              </button>
            </div>

            <button
              type="submit"
              onClick={() => bookAdSlot()}
              className="btn btn--rounded btn--yellow"
            >
              Book Ad Slot
            </button>
            <button
              type="button"
              onClick={toggleFav}
              className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
            >
              <i className="icon-heart" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdSlotContent;