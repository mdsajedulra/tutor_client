# 📚 Book Shop Application

A full-featured Book Shop web application with secure authentication, role-based dashboards, product management, and seamless user experience.

---

## 🔍 Project Overview & Objective

Create a Book Shop application with user-friendly features, secure authentication, and smooth product management. Ensure the platform is responsive, error-free, and visually appealing.

---

## 🚀 Live Demo

🔗 [View Live Application](https://tutor-client-amber.vercel.app/)

---

## ✨ Features

### ✅ User Registration & Authentication (Role-Based)
- Register with name, email, and password (default role: user).
- Passwords securely hashed before storing.
- JWT-based login and session handling via localStorage.
- Logout clears token and redirects to login.

### 🔓 Public Routes

#### 🏠 Home Page
- Navbar with logo, navigation, and auth buttons.
- Hero Banner or Carousel for special offers.
- Featured Products (Max 6) with “View All” button.
- Extra Section (Testimonials/Blog).
- Footer with essential links and social icons.

#### 📚 All Products Page
- Search by title, author, or category.
- Filter by price, author, category, and stock.
- Product Cards: name, author, price, and category.
- “View Details” button per product.

#### 📖 Product Details Page
- Detailed view with image and description.
- “Buy Now” button that redirects to Checkout.

#### ℹ️ About Page
- Mission, vision, and shop details.

### 🔒 Private Routes

#### 💳 Checkout Page
- Place orders with quantity check.
- Form includes product/user info and total price.
- Integrated with **SurjoPay** payment gateway.
- “Order Now” confirms the purchase.

#### 📊 Dashboard (Role-Based)
- **Admin Dashboard**:
  - Manage users (activate/deactivate).
  - Full CRUD on products.
  - Full CRUD on orders.
- **User Dashboard**:
  - View personal orders.
  - Update profile and password.

---

## 🧩 Tech Stack

- **Frontend**: React, Tailwind CSS
- **State Management**: Redux Toolkit, RTK Query
- **Routing**: React Router / Next.js App Router
- **Authentication**: JWT
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Payment**: SurjoPay Integration

---

## 🔐 Environment Variables

Create a `.env.local` file with:

```env
BACKEND_URL=https://github.com/mdsajedulra/tutor_client
```

---

## 🛠️ Setup & Installation

```bash
git clone https://github.com/mdsajedulra/tutor_client
cd book-shop-app
npm install
npm run dev
```

---

## 👤 Admin Access

You must manually update a user's role to `admin` from the database to access admin features.

---

## 📸 Screenshots

> Add images of Homepage, Dashboard, Product Detail, and Checkout here.

---

## 📜 License

This project is licensed under the MIT License.