// import { adSlots } from './../../../utils/data/ads';
import type { NextApiRequest, NextApiResponse } from "next";

// fake data
import adSlots from "../../../utils/data/ads";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { pid },
  } = req;

  const product = adSlots.find((x) => x.id === pid);
  res.status(200).json(product);
};
