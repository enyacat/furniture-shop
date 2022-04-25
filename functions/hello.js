// domain/.netlify/functions/hello

const items = [
  {
    id: 1,
    name: 'cat',
  },
  { id: 2, name: 'dog' },
]
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  }
}
