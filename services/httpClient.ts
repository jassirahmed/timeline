import { NextApiResponse } from "next";
import { NextIronRequest } from "./types";
import ky from "ky";

import getTimelineData from "./timeline/getTimelineData";

const RootUrl = "http://localhost:3000/JSON/";
type ApiHandler<T, U> = (baseHttpClient: typeof ky, params: U) => Promise<T>;

type MyHTTPOptions = {
  authRequired: boolean;
  additionalHeader?: AdditionalHeaderOptions[];
};

type AdditionalHeaderOptions = {
  key: string;
  value: string;
};
console.log(RootUrl, "RootUrl");
export class MyHTTP {
  public timeline;

  constructor(
    req: NextIronRequest,
    res: NextApiResponse,
    opts: MyHTTPOptions = { authRequired: true, additionalHeader: [] }
  ) {
    const baseUrl = RootUrl;
    const baseHttpClient = ky.create({
      prefixUrl: baseUrl,
      retry: 0,
      hooks: {
        beforeRequest: [
          (request) => {
            if (!opts) {
              return;
            }
            const accessToken = req.session.token;
            if (!accessToken) {
              throw new Error("missing valid session");
            }
            request.headers.set("Authorization", `Bearer ${accessToken}`);
          },
        ],
      },
    });
    const withApiClient =
      <T, U>(handler: ApiHandler<T, U>) =>
      async (params: U = {} as U): Promise<T> => {
        return handler(baseHttpClient, params);
      };
    this.timeline = {
      getTimelineData: withApiClient(getTimelineData),
    };
  }
}
