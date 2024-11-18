import Productmodel from "../Models/Productmodel.js";

export const addProduct = async (req, res) => {
  try {
    const { age, salary } = req.body;
    const newProduct = new Productmodel({ age, salary });
    await newProduct.save();
    res.status(200).json({ message: 'Product added successfully', newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add product', error });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await Productmodel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product updated successfully', updatedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update product', error });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Productmodel.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete product', error });
  }
};
