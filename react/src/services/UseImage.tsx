import { useState, useEffect } from 'react'
import { fetchImageUrl } from './ImageService'

function UseImage(directory: string, imageName: string, delay = 0): string {
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    const fetchAndSetImage = async () => {
      try {
        const fetchedImageUrl = fetchImageUrl(directory, imageName)
        // Apply delay before setting the image URL
        setTimeout(() => {
          setImageUrl(fetchedImageUrl)
        }, delay);
      } catch (error) {
        console.error("Failed to fetch image:", error);
      }
    };

    fetchAndSetImage()
  }, [directory, imageName, delay]) // Include delay in dependency array

  return imageUrl
}

export default UseImage;
