import { deleteFromSupabase } from "../supabase/deleteFromSupabase.js";
import Product from "../models/Product.js";
import { uploadToSupabase } from "../supabase/uploadToSupabase.js";

export const createProduct = async (req, res) => {
  try {
    const imageUrl = await uploadToSupabase(req.file);

    const product = await Product.create({
      ...req.body,
      image: imageUrl,
    });

    res.status(201).json({message:"created"});
  } catch (err) {
    res.status(500).json({ message: "error while creating" });
  }
};

export const getSpecificProduct=async(req,res)=>{
  try {
    let id=req.params.id;
    let data=await Product.findById(id);
    res.json(data)
  } catch (error) {
    res.status(500).json({message:"can`t get data"})
  }
}

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const updateProduct = async (req, res) => {
  try {
    let data=await Product.findById(req.params.id);   // storing old data from DB
    let updateData=req.body;                    // storing new data
    if (req.file) {
      await deleteFromSupabase(data.image);

      let imageUrl=await uploadToSupabase(req.file);
      updateData.image=imageUrl;
    }
    await Product.findByIdAndUpdate(req.params.id,updateData,{new:true});
    res.status(200).json({ Message: "data updates" });
  } catch (err) {
    res.status(500).json({ message: "error while updating" });
  }
};

// DELETE
export const deleteProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let product =await Product.findById(id);
    console.log(product);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    await deleteFromSupabase(product.image);
    await Product.findByIdAndDelete(id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: "delete failed" });
  }
};
