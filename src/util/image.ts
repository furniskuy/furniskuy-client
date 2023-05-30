export const baseImageURL = import.meta.env.VITE_BASE_IMAGE_URL as string;

export const productPlaceHolderURL = `${baseImageURL}/furniskuy/public/uploads/product-placeholder.png`;

export const getImageUrl = (url?: string) => {
  if (!url) {
    return productPlaceHolderURL;
  }
  return `${baseImageURL}/${url}`;
};
