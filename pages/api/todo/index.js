import { addDatas, updateDatas } from "@/config/controller";

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      res.status(200).json({ method, name: "GET Request" });
      break;
    case "POST":
      addDatas(req, res);
      break;
    case "PATCH":
      updateDatas(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PATCH"]);
      res.status(405).end(`Method ${method} Not Allowd`);
      break;
  }
}
