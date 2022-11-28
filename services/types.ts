import { NextApiRequest } from "next";
import { IronSession } from "iron-session";

export type NextIronRequest = NextApiRequest & { session: IronSession };

export type JsonData = {
  title: string;
  data: [
    {
      id: number;
      date: string;
      month: string;
      place: string;
      thisYearTripCount: number;
      year: string;
    }
  ];
};
