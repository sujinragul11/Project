import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './contexts/AuthContext';

// Layout Components
import Layout from './components/Layout/Layout';
import AdminLayout from './components/Layout/AdminLayout';

// Main Pages
import HomePage from './pages/HomePage';
import NexgenAcademy from './pages/NexgenAcademy';
import RithishFarms from './pages/RithishFarms';

// Course Pages
import CourseDetail from './pages/NexgenAcademy/CourseDetail';


// Admin Pages
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import ManageCourses from './pages/Admin/ManageCourses';
import ManageProducts from './pages/Admin/ManageProducts';
import ManagePackages from './pages/Admin/ManagePackages';
import ManageBookings from './pages/Admin/ManageBookings';

import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="nexgen" element={<NexgenAcademy />} />
                <Route path="nexgen/course/:id" element={<CourseDetail />} />
                <Route path="rithishfarms" element={<RithishFarms />} />
              </Route>

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="courses" element={<ManageCourses />} />
                <Route path="products" element={<ManageProducts />} />
                <Route path="packages" element={<ManagePackages />} />
                <Route path="bookings" element={<ManageBookings />} />
              </Route>

              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>

            {/*Roshan Tiles Routes */}
            <Router>
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<TilesAbout />} />
            <Route path="/contact" element={<TilesContact />} />
          </Routes>
        
      
    </Router>
          </div>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;