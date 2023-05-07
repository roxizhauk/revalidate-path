import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  try {
    const { id } = req.query;
    await res.revalidate(id ? `/blog/${id}` : "/");
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
};

export default handler;
