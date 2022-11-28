import { NextIronRequest } from "./src/services/types";

declare module "iron-session" {
  interface IronSession {
    token: string;
    save: Function;
  }

  interface NextApiHandler {
    req: NextIronRequest;
  }
}
