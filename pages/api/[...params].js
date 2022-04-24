export default function handler(req, res) {
  const { params } = req.query;
  // console.log(params, "s");
  res.status(200).json("hello");
}
