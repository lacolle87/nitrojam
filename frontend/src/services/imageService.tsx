import axios, { AxiosResponse } from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || ''

const imageUrlCache: Record<string, string> = {};


export const fetchImageUrl = async (
  directory: string,
  imageName: string
): Promise<string> => {
  try {
    const url = `${API_BASE_URL}/nj_api/images/${directory}/${imageName}`

    if (imageUrlCache[url]) {
      return imageUrlCache[url]
    }

    const response: AxiosResponse<Blob> = await axios.get(url, {
      responseType: 'blob',
      headers: {
        'Accept': 'image/*',
      },
    })

    console.log("Response received", response)

    imageUrlCache[url] = URL.createObjectURL(new Blob([response.data]))
    return imageUrlCache[url];
  } catch (error) {
    console.error('Error fetching image:', error)
    throw error
  }
}
