exports.getProducts = async (req, res) => {
    const productsSnapshot = await db.collection('products').get();
    const products = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(products);
  };
  
  exports.addProduct = async (req, res) => {
    const { name, description, price, stock } = req.body;
    const productRef = db.collection('products').doc();
    await productRef.set({ name, description, price, stock, visible: true });
    res.status(201).json({ message: "Product added successfully" });
  };
  