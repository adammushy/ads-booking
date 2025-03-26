const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  // : "https://next-ecommerce-front.vercel.app";
  :"https://ads-booking.vercel.app/";
