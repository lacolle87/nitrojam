import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8090';

export const getImage = async (directory: string, imageName: string): Promise<string> => {
  try {
    const url = `${API_BASE_URL}/api/images/${directory}/${imageName}`;
    console.log(`Fetching image from ${url}`);

    const response = await axios.get(url, {
      responseType: 'blob', // Указание на получение данных как Blob
      headers: {
        'Accept': 'image/*',  // Указание принимаемых типов данных
      },
    });

    console.log("Response received", response);

    // Создание URL для Blob данных
    return URL.createObjectURL(response.data);
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error;
  }
};
