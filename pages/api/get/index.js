import { getDatas } from "@/config/controller";

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      res.status(200).json({ method, name: "GET Request" });
      break;
    case "POST":
      getDatas(req, res);
      // get todo list
      // res.status(200).json({ method, name: "POST Request" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowd`);
      break;
  }
}
