export const getHouseData = async () => {
  try { 
    const initialFetch = await fetch(`http://localhost:3001/api/v1/houses`);
    return await initialFetch.json();
  } catch(error) {
    return 'Error'
  }
};

export const getSwornMember = async (id) => {
  try {
    const initialFetch = await fetch(`http://localhost:3001/api/v1/character/${id}`)
    // DIDN'T FINISH THE API CALL. PRETTY CLOSE I THINK.
  } catch(error) {
    return 'Error'
  }
}