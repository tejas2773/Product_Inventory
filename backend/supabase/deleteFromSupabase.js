import { supabase } from "./supabase.js";

export const deleteFromSupabase = async (imageUrl) => {
  console.log("IMAGE URL:", imageUrl);

  if (!imageUrl) return;

  const fileName = decodeURIComponent(
    imageUrl.split("/products/")[1]
  );

  console.log("EXTRACTED FILE NAME:", fileName);

  if (!fileName) return;

  const { data, error } = await supabase.storage
    .from("products")
    .remove([fileName]);

  console.log("SUPABASE DELETE DATA:", data);
  console.log("SUPABASE DELETE ERROR:", error);
};
