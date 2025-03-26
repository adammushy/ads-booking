import { useDispatch } from "react-redux";

import { removeAdSlot, setCount } from "@/store/reducers/cart"; // Updated actions
import type { AdSlotStoreType } from "@/types";
import { priceFormat } from "@/utils/const-function"; // Import priceFormat for formatting rates

const AdSlotCart = ({
  thumb,
  category,
  id,
  platform,
  count,
  rate,
  currency,
}: AdSlotStoreType) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(
      removeAdSlot({
        thumb,
        category,
        id,
        platform,
        count,
        rate,
        currency,
      }),
    );
  };

  const setAdSlotCount = (count: number) => {
    if (count <= 0) {
      return;
    }

    const payload = {
      adSlot: {
        thumb,
        category,
        id,
        platform,
        count,
        rate,
        currency,
      },
      count,
    };

    dispatch(setCount(payload));
  };

  return (
    <tr>
      <td>
        <div className="cart-product">
          <div className="cart-product__img">
            <img src={thumb} alt="" />
          </div>

          <div className="cart-product__content">
            <h3>{category}</h3>
            <p>#{id}</p>
          </div>
        </div>
      </td>
      <td className="cart-item-before" data-label="Color">
        {platform} {/* Replace color with platform */}
      </td>
      <td className="cart-item-before" data-label="Size">
        N/A {/* Replace size with N/A since ad slots don't have sizes */}
      </td>
      <td>
        <div className="quantity-button">
          <button
            type="button"
            onClick={() => setAdSlotCount(count - 1)}
            className="quantity-button__btn"
          >
            -
          </button>
          <span>{count}</span>
          <button
            type="button"
            onClick={() => setAdSlotCount(count + 1)}
            className="quantity-button__btn"
          >
            +
          </button>
        </div>
      </td>
      <td>{priceFormat(rate, currency)}</td> {/* Use priceFormat for rate */}
      <td className="cart-item-cancel">
        <i className="icon-cancel" onClick={() => removeFromCart()} />
      </td>
    </tr>
  );
};

export default AdSlotCart;