const IMAGE_FOLDER_PATH = '/images';

export const fetchImageUrl = (directory: string, imageName: string): string => {
  return `${IMAGE_FOLDER_PATH}/${directory}/${imageName}`;
};