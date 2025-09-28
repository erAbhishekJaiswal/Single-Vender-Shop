// import React, { useState, useEffect } from "react";
// import "../ComponentsCSS/ProductsSlide.css";

// const ProductsSlide = () => {
//   const [currentSlide, setCurrentSlide] = useState(1);
//   const [isTransitioning, setIsTransitioning] = useState(true);

//   const products = [
//     {
//       id: 1,
//       name: "Wireless Bluetooth Headphones",
//       category: "Electronics",
//       price: "$129.99",
//       rating: 4.5,
//       reviews: 128,
//       image:
//         "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
//       description: "High-quality sound with noise cancellation",
//     },
//     {
//       id: 2,
//       name: "Smart Fitness Watch",
//       category: "Wearables",
//       price: "$199.99",
//       rating: 4.3,
//       reviews: 89,
//       image:
//         "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
//       description: "Track your health and fitness goals",
//     },
//     {
//       id: 3,
//       name: "Organic Cotton T-Shirt",
//       category: "Clothing",
//       price: "$29.99",
//       rating: 4.7,
//       reviews: 256,
//       image:
//         "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300",
//       description: "Comfortable and eco-friendly",
//     },
//     {
//       id: 4,
//       name: "Stainless Steel Water Bottle",
//       category: "Accessories",
//       price: "$24.99",
//       rating: 4.6,
//       reviews: 167,
//       image:
//         "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=300",
//       description: "Keep your drinks hot or cold for hours",
//     },
//     {
//       id: 5,
//       name: "Professional Camera Lens",
//       category: "Photography",
//       price: "$599.99",
//       rating: 4.8,
//       reviews: 42,
//       image:
//         "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300",
//       description: "Capture stunning photos with clarity",
//     },
//   ];

//   const extendedProducts = [
//     products[products.length - 1], // Clone last item
//     ...products,
//     products[0], // Clone first item
//   ];

//   // useEffect(() => {
//   //         const timer = setInterval(() => {
//   //             setCurrentSlide((prev) => (prev + 1) % products.length);
//   //         }, 3000);

//   //         return () => clearInterval(timer);
//   //     }, [products.length]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => prev + 1);
//       setIsTransitioning(true);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (currentSlide === extendedProducts.length - 1) {
//       setTimeout(() => {
//         setIsTransitioning(false);
//         setCurrentSlide(1);
//       }, 300); // Matches CSS transition time
//     }

//     if (currentSlide === 0) {
//       setTimeout(() => {
//         setIsTransitioning(false);
//         setCurrentSlide(extendedProducts.length - 2);
//       }, 300);
//     }
//   }, [currentSlide, extendedProducts.length]);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % products.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
//   };

//   // const scrollLeft = () => {
//   //     document.querySelector('.products-slide-track').scrollBy({ left: -300, behavior: 'smooth' });
//   // };

//   // const scrollRight = () => {
//   //     document.querySelector('.products-slide-track').scrollBy({ left: 300, behavior: 'smooth' });
//   // };

//   const renderStars = (rating) => {
//     return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
//   };

//   return (
//     <div className="products-slide-container">
//       <div className="products-slide-header">
//         <h2 className="products-slide-title">Featured Products</h2>
//         <p className="products-slide-subtitle">
//           Discover our most popular items loved by customers worldwide
//         </p>
//       </div>

//       <div className="products-slide-wrapper">
//         <div className="products-slide-track">
//           <div
//             className={`products-slide-track ${
//               !isTransitioning ? "no-transition" : ""
//             }`}
//             style={{
//               transform: `translateX(-${currentSlide * 100}%)`,
//               width: `${extendedProducts.length * 100}%`,
//             }}
//           >
//            {extendedProducts.map((product, index) => (
//         <div key={index} className="products-slide-item" style={{ width: '100%' }}>
//             <img
//                 src={product.image}
//                 alt={product.name}
//                 className="products-slide-image"
//               />
//               <div className="products-slide-content">
//                 <div className="products-slide-category">
//                   {product.category}
//                 </div>
//                 <h3 className="products-slide-name">{product.name}</h3>
//                 <p className="products-slide-description">
//                   {product.description}
//                 </p>
//                 <div className="products-slide-price">{product.price}</div>
//                 <div className="products-slide-rating">
//                   <span className="products-slide-stars">
//                     {renderStars(product.rating)}
//                   </span>
//                   <span className="products-slide-review">
//                     ({product.reviews} reviews)
//                   </span>
//                 </div>
//                 <button className="products-slide-button">Add to Cart</button>
//               </div>
//         </div>
//     ))}
//           </div>
//           {/* {products.map((product) => (
//             <div
//               key={product.id}
//               style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//               className="products-slide-item"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="products-slide-image"
//               />
//               <div className="products-slide-content">
//                 <div className="products-slide-category">
//                   {product.category}
//                 </div>
//                 <h3 className="products-slide-name">{product.name}</h3>
//                 <p className="products-slide-description">
//                   {product.description}
//                 </p>
//                 <div className="products-slide-price">{product.price}</div>
//                 <div className="products-slide-rating">
//                   <span className="products-slide-stars">
//                     {renderStars(product.rating)}
//                   </span>
//                   <span className="products-slide-review">
//                     ({product.reviews} reviews)
//                   </span>
//                 </div>
//                 <button className="products-slide-button">Add to Cart</button>
//               </div>
//             </div>
//           ))} */}
//         </div>
//       </div>

//       <div className="products-slide-nav">
//         <button className="products-slide-prev" onClick={prevSlide}>
//           ‹
//         </button>
//         {products.map((_, index) => (
//           <div
//             key={index}
//             className={`products-slide-dot ${
//               index === currentSlide ? "products-slide-dot-active" : ""
//             }`}
//             onClick={() => goToSlide(index)}
//           />
//         ))}
//         <button className="products-slide-next" onClick={nextSlide}>
//           ›
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductsSlide;





import React, { useState, useEffect } from "react";
import "../ComponentsCSS/ProductsSlide.css";

const ProductsSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      category: "Electronics",
      price: "$129.99",
      rating: 4.5,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
      description: "High-quality sound with noise cancellation",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      category: "Wearables",
      price: "$199.99",
      rating: 4.3,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
      description: "Track your health and fitness goals",
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      category: "Clothing",
      price: "$29.99",
      rating: 4.7,
      reviews: 256,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300",
      description: "Comfortable and eco-friendly",
    },
    {
      id: 4,
      name: "Stainless Steel Water Bottle",
      category: "Accessories",
      price: "$24.99",
      rating: 4.6,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=300",
      description: "Keep your drinks hot or cold for hours",
    },
    {
      id: 5,
      name: "Professional Camera Lens",
      category: "Photography",
      price: "$599.99",
      rating: 4.8,
      reviews: 42,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300",
      description: "Capture stunning photos with clarity",
    },
    {
      id: 6,
      name: "Smart Phone Case",
      category: "Wearables",
      price: "$199.99",
      rating: 4.3,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
      description: "Track your health and fitness goals",
    },
    {
      id: 7,
      name: "Sony Camera Lens",
      category: "Photography",
      price: "$599.99",
      rating: 4.8,
      reviews: 42,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300",
      description: "Capture stunning photos with clarity",
    },
  ];

  const extendedProducts = [
    products[products.length - 2], // Clone last
    ...products,
    products[0], // Clone first
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
      setIsTransitioning(true);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Handle loop transitions
  useEffect(() => {
    if (currentSlide === extendedProducts.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
      }, 300); // Match transition duration
    }
    if (currentSlide === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(extendedProducts.length - 2);
      }, 300);
    }
  }, [currentSlide, extendedProducts.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index + 1); // Account for cloned first
    setIsTransitioning(true);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
    setIsTransitioning(true);
  };

  const renderStars = (rating) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  return (
    <div className="products-slide-container">
      <div className="products-slide-header">
        <h2 className="products-slide-title">Featured Products</h2>
        <p className="products-slide-subtitle">
          Discover our most popular items loved by customers worldwide
        </p>
      </div>

      <div className="products-slide-wrapper">
        <div
          className={`products-slide-track ${!isTransitioning ? "no-transition" : ""}`}
          style={{
            transform: `translateX(-${currentSlide * 10}%)`,
            width: `${extendedProducts.length * 10}%`,
          }}
        >
          {extendedProducts.map((product, index) => (
            <div key={index} className="products-slide-item" style={{ width: `${100 / extendedProducts.length}%` }}>
              <img src={product.image} alt={product.name} className="products-slide-image" />
              <div className="products-slide-content">
                <div className="products-slide-category">{product.category}</div>
                <h3 className="products-slide-name">{product.name}</h3>
                <p className="products-slide-description">{product.description}</p>
                <div className="products-slide-price">{product.price}</div>
                <div className="products-slide-rating">
                  <span className="products-slide-stars">{renderStars(product.rating)}</span>
                  <span className="products-slide-review">({product.reviews} reviews)</span>
                </div>
                <button className="products-slide-button">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="products-slide-nav">
        <button className="products-slide-prev" onClick={prevSlide}>‹</button>
        {/* {products.map((_, index) => (
          <div
            key={index}
            className={`products-slide-dot ${index === currentSlide - 1 ? "products-slide-dot-active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))} */}
        <button className="products-slide-next" onClick={nextSlide}>›</button>
      </div>
    </div>
  );
};

export default ProductsSlide;
