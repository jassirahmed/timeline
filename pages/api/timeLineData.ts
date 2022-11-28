// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MyHTTP } from "../../services/httpClient";
import { withSessionRoute } from "../../utils/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    let httpClient = new MyHTTP(req, res);
    const response: any | any = await httpClient.timeline.getTimelineData();
    res.status(200).json(response);
  }
}
export default withSessionRoute(handler);
