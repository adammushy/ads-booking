// import { adSlots } from './../../../utils/data/ads';
import type { NextApiRequest, NextApiResponse } from "next";

// fake data
import adSlots from "../../../utils/data/ads";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req;

  const product = adSlots.find((x) => x.id === id);
  res.status(200).json(product);
};
