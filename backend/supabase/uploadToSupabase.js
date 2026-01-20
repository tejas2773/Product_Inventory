import { supabase } from "./supabase.js";

export const uploadToSupabase = async (file) => {
  if (!file) return res.status(400).json({ message: "Image is required" });

  const fileName = `${Date.now()}-${file.originalname}`;

   await supabase.storage
   .from("products")
   .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  const { data } = supabase.storage
    .from("products")
    .getPublicUrl(fileName);

  return data.publicUrl;
};
