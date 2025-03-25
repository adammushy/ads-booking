
import type { NextApiRequest, NextApiResponse } from "next";

// fake data
import adSlots from "../../utils/data/ads";

export default (_req: NextApiRequest, res: NextApiResponse) => {
  // fake loading time
  setTimeout(() => {
    res.status(200).json(adSlots);
  }, 800);
};
