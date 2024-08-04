import { useState, useEffect } from 'react'
import { fetchImageUrl } from './ImageService'

function UseImage(directory: string, imageName: string): string {
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    const fetchAndSetImage = async () => {
      try {
        const fetchedImageUrl = await fetchImageUrl(directory, imageName)
        setImageUrl(fetchedImageUrl)
      } catch (error) {
        console.error('Failed to fetch image:', error)
      }
    };

    fetchAndSetImage()
  }, [directory, imageName])

  return imageUrl
}

export default UseImage;