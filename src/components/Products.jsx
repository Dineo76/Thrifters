import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import { AppContext } from "./AppContext";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState(""); 
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const categories = ["All", "Men's Clothing", "Women's Clothing", "Jewelery", "Electronics"];

  const convertToRand = (usd) => (usd * 18.5).toFixed(2);

  const handleAddToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const handleRemoveFromCart = (product) => {
    dispatch({ type: REMOVE_FROM_CART, payload: product });
  };

  const isInCart = (productId) => state.cart?.some((item) => item.id === productId);

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" ||
      p.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="loading-text">Loading products...</p>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-img" />
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">R {convertToRand(product.price)}</span>
                  {isInCart(product.id) ? (
                    <button className="add-btn" onClick={() => handleRemoveFromCart(product)}>Remove</button>
                  ) : (
                    <button className="add-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && filteredProducts.length === 0 && (
        <p className="no-products">No products found matching your search.</p>
      )}
    </div>
  );
}
