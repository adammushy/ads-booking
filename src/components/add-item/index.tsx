import { some } from "lodash";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "@/store";
import { toggleFavProduct } from "@/store/reducers/user"; // Adjust if needed

import { priceFormat } from "@/utils/const-function";


interface AdSlotItemProps {
  id: string;
  category: string;
  unit?: string;
  contentType?: string;
  rate: number;
  currency: string;
  platform: string;
  images: string[];
}

const AdSlotItem: React.FC<AdSlotItemProps> = ({
  id,
  category,
  unit,
  contentType,
  rate,
  currency,
//   platform,
  images,
}) => {
  const dispatch = useDispatch();
  const { favProducts } = useSelector((state: RootState) => state.user);

  const isFavourite = some(favProducts, (productId) => productId === id);

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id,
      }),
    );
  };

  return (
    <div className="product-item">
      <div className="product__image">
        <button
          type="button"
          onClick={toggleFav}
          className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
        >
          <i className="icon-heart" />
        </button>

              <Link href={`/adSlot/${id}`}>
                  <img src={images ? images[0] : ""} alt="ads" />
        
        </Link>
      </div>
      <div className="product__description">
        <h3>{category} {unit || contentType || ''}</h3>
        {/* <p className="product__discount">{platform}</p> */}
        <div className="product__price">
          <h4>
            {/* {rate} {currency} */}
            {priceFormat(rate, currency)}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AdSlotItem;