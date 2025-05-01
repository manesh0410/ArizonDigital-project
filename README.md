# Nxt Trendz - Product Details & Cart Features

This project implements a full-fledged e-commerce product page and cart system using React JS. It demonstrates routing, authentication, API integration, cart management using Context API, and responsive UI design.

---

## 📁 Design Files

| Viewport Sizes | Links |
|----------------|-------|
| Small Devices (XS, SM) | [View Design](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-sm-output-v0.png) |
| Medium & Large Devices (MD, LG, XL) | [View Design](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-lg-output.png) |
| Empty Cart View | [Empty Cart](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-empty-cart-view.png) |

---

## ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd nxt-trendz-app
Install dependencies:

bash
Copy
Edit
npm install
Start the app:

bash
Copy
Edit
npm start
🔐 Login Credentials
User Type	Username	Password
Prime User	rahul	rahul@2021
Non-Prime User	raja	raja@2021

🧠 Features
🔐 Authentication
Users must log in to access /products/:id and /cart

Redirects unauthenticated users to the /login page

🛍️ Product Details Page (/products/:id)
Fetch product details via API

Show loading spinner while fetching

Render product details with quantity control

Handle 404/failure view with "Continue Shopping" button

Icons: BsPlusSquare, BsDashSquare (from react-icons)

Alt text for image: set to product title

🛒 Cart Features (/cart)
Cart is managed using Context API (CartContext)

Each item includes:

Image, title, brand, quantity, total price

Increment and decrement buttons (data-testid: plus, minus)

Remove button (data-testid: remove) using AiFillCloseCircle

Cart summary with total items and cost

"Remove All" button to clear the cart and show empty view

CartContext provides:
js
Copy
Edit
{
  cartList,
  addCartItem,
  removeCartItem,
  removeAllCartItems,
  incrementCartItemQuantity,
  decrementCartItemQuantity
}
🧱 Components Breakdown
css
Copy
Edit
src/
├── App.js
├── components/
│   ├── Login/
│   ├── Header/
│   ├── ProductItemDetails/
│   ├── Cart/
│   ├── CartItem/
│   ├── CartSummary/
│   ├── NotFound/
│   └── ProtectedRoute/
🎨 UI Resources
Colors
Color	Hex
Primary Blue	#0b69ff
Dark Blue	#171f46
Gray	#616e7c
White	#ffffff

Fonts
Roboto

🛠️ Tech Stack
React JS

React Router

React Context API

React Icons

CSS Modules

📝 Notes
All components must be placed inside src/components

Component and file names should not be changed

Use data-testid attributes correctly for testing

Responsive design should be maintained

Follow proper alt text and semantic HTML

✅ Completion Checklist
 Product Details fetched with auth

 Cart page protected route

 Increment/decrement cart quantity

 Remove individual cart items

 Remove all cart items

 Cart summary reflects totals

 UI matches design across screen sizes
