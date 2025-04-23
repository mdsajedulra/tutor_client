// src/hooks/useImageUpload.ts
import { useState } from "react";

const useImageUpload = () => {
  const [loading, setLoading] = useState(false);

  const uploadImage = async (file: File) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(`https://api.imgbb.com/1/upload?key=27cdb22085bcaa04b4acf0c3470b76c1`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        return data.data.url; // ekhane image URL paba
      } else {
        throw new Error("Upload failed!");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      return null;
    }
  };

  return { uploadImage, loading };
};

export default useImageUpload;
