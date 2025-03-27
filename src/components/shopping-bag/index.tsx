
import Link from "next/link";
import { useSelector } from "react-redux";

import type { RootState } from "@/store";
import type { AdSlotStoreType } from "@/types";
import { priceFormat } from "@/utils/const-function"; // Import priceFormat for formatting rates

import CheckoutStatus from "../checkout-status";
import AdSlotCart from "./item"; // Renamed Item to AdSlotCart (assuming this is the updated component)

const AdSlotCartPage = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const totalCost = () => {
    let total = 0;
    if (cartItems.length > 0) {
      cartItems.forEach((item: AdSlotStoreType) => {
        total += item.rate * item.count;
      });
    }
    return total;
  };

  // Get the currency from the first item (assuming all items use the same currency, TZS)
  const currency = cartItems.length > 0 ? cartItems[0].currency : "TZS";

  return (
    <section className="cart">
      <div className="container">
        <div className="cart__intro">
          <h3 className="cart__title">Ad Slot Bookings</h3>
          <CheckoutStatus step="cart" />
        </div>

        <div className="cart-list">
          {cartItems.length > 0 && (
            <table>
              <tbody>
                <tr>
                  <th style={{ textAlign: "left" }}>Ad Slot</th>
                  <th>Platform</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th />
                </tr>

                {cartItems.map((item: AdSlotStoreType) => (
                  <AdSlotCart
                    key={item.id}
                    id={item.id}
                    thumb={item.thumb}
                    category={item.category}
                    platform={item.platform}
                    rate={item.rate}
                    currency={item.currency}
                    count={item.count}
                  />
                ))}
              </tbody>
            </table>
          )}

          {cartItems.length === 0 && <p>No ad slots in your cart</p>}
        </div>

        <div className="cart-actions">
          <Link href="/ads" className="cart__btn-back">
            <i className="icon-left" /> Continue Browsing
          </Link>
          <input
            type="text"
            placeholder="Promo Code"
            className="cart__promo-code"
          />

          <div className="cart-actions__items-wrapper">
            <p className="cart-actions__total">
              Total cost <strong>{priceFormat(totalCost(), currency)}</strong>
            </p>
            <Link
              href="/cart/checkout"
              className="btn btn--rounded btn--yellow"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdSlotCartPage;