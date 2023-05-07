import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  try {
    const path = (req.query.path as string) || "/";
    await res.revalidate(path);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
};

export default handler;
