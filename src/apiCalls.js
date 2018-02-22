export const getHouseData = async () => {
  try { 
    const initialFetch = await fetch(`http://localhost:3001/api/v1/houses`);
    return await initialFetch.json();
  } catch(error) {
    return 'Error'
  }
};