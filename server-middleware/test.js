export default function (req, res, next) {
  console.log('current host', req.headers.host)
  next()
}
