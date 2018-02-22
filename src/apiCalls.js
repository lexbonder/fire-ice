export const getHouseData = async () => {
  const initialFetch = await fetch(`http://localhost:3001/api/v1/houses`)
  return await initialFetch.json();
}