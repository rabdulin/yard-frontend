export default function get(req) {
  return fetch(`https://yard.moscow/api/v1${req}`).then(res => res.json());
}
