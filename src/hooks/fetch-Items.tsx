const apiUrl = import.meta.env.VITE_API_URL;

async function fetchItems({ queryKey }: { queryKey: [number] }) {
  const [itemId] = queryKey;
  return fetch(`${apiUrl}/items/${itemId}`).then((res) => res.json());
}
export default fetchItems;
