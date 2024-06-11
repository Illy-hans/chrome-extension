
const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_KEY)

export async function fetchURL(): Promise<string> {

    const url: string = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    try {
        const response: Response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.hdurl;
    } catch (error) {
        console.error('Error fetching the APOD URL:', error);
        throw error; 
    }
}


