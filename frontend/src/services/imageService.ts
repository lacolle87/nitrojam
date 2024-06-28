import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://nitrojamrec.ru';

export const fetchImageUrl = async (directory: string, imageName: string): Promise<string> => {
  try {
    const url = `${API_BASE_URL}/api/images/${directory}/${imageName}`
    console.log(`Fetching image from ${url}`)

    const response = await axios.get(url, {
      responseType: 'blob',
      headers: {
        'Accept': 'image/*',
      },
    });

    console.log("Response received", response)

    return URL.createObjectURL(response.data)
  } catch (error) {
    console.error('Error fetching image:', error)
    throw error
  }
}
