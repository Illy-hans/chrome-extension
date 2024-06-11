import { useEffect, useState } from 'react';
import { fetchURL } from './service/fetchImage'

function App(): JSX.Element {
  const [imageURL, setImageURL] = useState<string | null>(null);

  useEffect (() => {
    const getImageURL = async (): Promise<void> => {
    try { 
        const apiURL: string = await fetchURL();
        setImageURL(apiURL);
    
    } catch (error) {
      console.error('Error fetching the URL:', error);
    }
  };
    getImageURL();
  }, []);

  return (
    <>
      <div data-testid="background-div" style={{ 
        backgroundImage: imageURL ? `url("${imageURL}")` : undefined,
        width: '100vw', 
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      </div>
    </>
  )
}

export default App;
