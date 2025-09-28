// import React, { useState } from 'react';
// import Navbar from './Components/Navbar';
// import Sidebar from './Components/Sidebar';
// import Footer from './Components/Footer';
// import './App.css';
// import ProductsSlide from './Components/ProductsSlide';
// import ProductsTable from './Components/ProductsTable'
// import UserProfile from './Components/UserProfile'

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="ecom-app">
//       <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
//       {/* <Sidebar 
//         isOpen={isSidebarOpen} 
//         onClose={() => setIsSidebarOpen(false)} 
//       /> */}
      
//       <main className="ecom-main">
//           {/* <UserProfile /> */}
//          <ProductsSlide />
//           {/* < ProductsTable /> */}
//       </main>
      
//       <Footer />
//     </div>
//     // <>
//     // <h1 className='text-3xl bg-sky-400 text-white'>React App with Vite</h1>
//     // </>
//   );
// }

// export default App;




import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroBanner from './Components/HeroBanner';
import CategoryGrid from './Components/CategoryGrid';
import SearchBar from './Components/SearchBar';
import ProductCard from './Components/ProductCard';
import ProtectedRoute from './Components/Authorized/ProtectedRoute';
import './App.css';
import ProductsSlide from './Components/ProductsSlide';
import Home from './Pages/Common/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AboutPage from './Pages/Common/AboutPage';
import ContactPage from './Pages/Common/ContactPage';
import CartPage from './Pages/Users/CartPage';
import ProductDetail from './Pages/Common/Product/ProductDetail';
import OrderTrackingPage from './Pages/Users/OrderTrackingPage';
import CheckoutPage from './Pages/Users/CheckoutPage';
import WishlistPage from './Pages/Users/WishlistPage';
import LoginPage from './Pages/Common/Auth/LoginPage';
import RegisterPage from './Pages/Common/Auth/RegisterPage';
import ProductListPage from './Pages/Common/Product/ProductListPage';
import DealsPage from './Pages/Common/Deals/DealsPage';
import FAQ from './Pages/Common/FAQ';
import TermsOfService from './Pages/Common/TermsOfService';
import PrivacyPolicy from './Pages/Common/PrivacyPolicy';
function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        // <Router>
        //     <div className="App">
        //         {/* Header with Search */}
        //         <SearchBar />
                
        //         {/* Hero Banner */}
        //         <HeroBanner />

        //         <ProductsSlide />
                
        //         {/* Category Grid */}
        //         <CategoryGrid />
                
        //         <ProductsSlide />
        //         {/* Sample Product Cards */}
        //         {/* <div style={{ 
        //             maxWidth: '1200px', 
        //             margin: '3rem auto', 
        //             padding: '0 1rem',
        //             display: 'grid',
        //             gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        //             gap: '2rem'
        //         }}>
        //             <ProductCard />
        //             <ProductCard />
        //             <ProductCard />
        //             <ProductCard />
        //             <ProductCard />
        //         </div> */}

        //         {/* Protected Route Example */}
        //         <Routes>
        //             <Route 
        //                 path="/profile" 
        //                 element={
        //                     <ProtectedRoute isAuthenticated={isAuthenticated}>
        //                         <div>Protected Profile Page</div>
        //                     </ProtectedRoute>
        //                 } 
        //             />
        //         </Routes>
        //     </div>
        // </Router>
        <>
        <Router>
        <Navbar />
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/order-tracking" element={<OrderTrackingPage />} />
                <Route path='/checkout' element={<CheckoutPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signin" element={<LoginPage />} />
                <Route path='/products' element={<ProductListPage />} />
                <Route path='/deals' element={<DealsPage />} />
                <Route path='/faq' element={<FAQ />} />
                <Route path='/terms-of-service' element={<TermsOfService />} />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path="/signup" element={<RegisterPage />} />
                <Route path="/verify-email" element={<h1>Verify Email Page</h1>} />
                <Route path="/forgot-password" element={<h1>Forgot Password Page</h1>} />
                <Route path="/reset-password" element={<h1>Reset Password Page</h1>} />
                <Route path="/something-went-wrong" element={<h1>Something Went Wrong</h1>} />
                <Route path="/maintenance" element={<h1>Site Under Maintenance</h1>} />
                <Route path="/coming-soon" element={<h1>Coming Soon</h1>} />

                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        
        {/* <Home />
        <AboutPage />
        <ContactPage /> */}
        <Footer />
        </Router>
        </>
        
    );
}

export default App;

// import React, { useState } from 'react';
// import { BookingModal, ConfirmationModal } from './Components/Modal';
// import { ToastContainer, useToast } from './Components/Toast';
// import Loader from './Components/Loader';
// import Pagination from './Components/Pagination';

// function App() {
//   const [isBookingModalOpen, setBookingModalOpen] = useState(false);
//   const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const { toasts, removeToast, success, error } = useToast();
//   const [isLoading, setLoading] = useState(false);

//   const product = {
//     name: "Wireless Headphones",
//     price: 99.99,
//     image: "/headphones.jpg"
//   };

//   const handleBookingConfirm = (bookingData) => {
//     setLoading(true);
//     // Simulate API call
//     setTimeout(() => {
//       setLoading(false);
//       setBookingModalOpen(false);
//       success('Booking confirmed successfully!');
//     }, 2000);
//   };

//   const handleDeleteConfirm = () => {
//     setConfirmModalOpen(false);
//     success('Item deleted successfully!');
//   };

//   return (
//     <div className="app">
//       {/* Toast Container */}
//       <ToastContainer toasts={toasts} removeToast={removeToast} />

//       {/* Loading State */}
//       {isLoading && <Loader fullScreen text="Processing your booking..." />}

//       {/* Demo Buttons */}
//       <div style={{ padding: '2rem', textAlign: 'center' }}>
//         <button onClick={() => setBookingModalOpen(true)}>
//           Open Booking Modal
//         </button>
//         <button onClick={() => setConfirmModalOpen(true)}>
//           Open Confirmation Modal
//         </button>
//         <button onClick={() => error('Something went wrong!')}>
//           Show Error Toast
//         </button>
//       </div>

//       {/* Pagination Demo */}
//       <Pagination
//         currentPage={currentPage}
//         totalPages={15}
//         onPageChange={setCurrentPage}
//         showFirstLast={true}
//         showPrevNext={true}
//         size="medium"
//       />

//       {/* Modals */}
//       <BookingModal
//         isOpen={isBookingModalOpen}
//         onClose={() => setBookingModalOpen(false)}
//         onConfirm={handleBookingConfirm}
//         product={product}
//       />

//       <ConfirmationModal
//         isOpen={isConfirmModalOpen}
//         onClose={() => setConfirmModalOpen(false)}
//         onConfirm={handleDeleteConfirm}
//         title="Confirm Deletion"
//         message="Are you sure you want to delete this item? This action cannot be undone."
//         confirmText="Delete"
//         cancelText="Cancel"
//         type="warning"
//       />
//     </div>
//   );
// }

// export default App;