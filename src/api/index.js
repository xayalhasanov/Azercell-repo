const API_URL = 'https://api.simsim.az';

export const fetchNumberListings = async (params) => {
    const response = await fetch(`${API_URL}/number-listings?${params.toString()}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const jsonData = await response.json();
    return jsonData.numberListings;
}

export const getStoreData = async (storeId) => {
    const response = await fetch(`${API_URL}/stores/${storeId}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const jsonData = await response.json();
    return jsonData;
}