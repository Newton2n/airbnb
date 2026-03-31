# Airbnb Clone UI - Complete Project Documentation

## 📋 Project Overview

A fully functional Airbnb clone UI built with Next.js 16.2.1, React 19.2.4, Tailwind CSS, and Lucide React icons. The project features a home listing page, detailed home view, and a home creation form.

## ✨ Features Implemented

### 1. **Home/Listings Page** (`/`)

- Grid layout displaying all available homes (6 mock properties)
- Listing cards with:
  - Property image with hover effect
  - Title, location, and rating
  - Bedroom/bathroom/guest count
  - Price per night
  - Heart/wishlist button
  - Click to view details
- Search bar with filters (location, dates, guests, price, bedrooms)
- "Create Home" button for quick access
- Responsive grid (1 column mobile → 4 columns desktop)

### 2. **Home Details Page** (`/homes/[id]`)

- Dynamic routing with unique property IDs
- Full property information:
  - Large high-quality property image
  - Title, location, rating with review count
  - Bedroom, bathroom, guest capacity details
  - Comprehensive description
  - Amenities list with icons (WiFi, Kitchen, etc.)
  - Host profile information
  - Guest reviews section with star ratings
- Pricing breakdown:
  - Per-night rate
  - 7-night total calculation
  - "Reserve Now" button (demo)
- Back navigation to home page

### 3. **Create Home Page** (`/create-home`)

- Comprehensive form for listing new properties:
  - **Basic Information:**
    - Home title
    - Location
    - Price per night
    - Number of bedrooms/bathrooms
    - Max guests
    - Detailed description
  - **Amenities Selection:**
    - 17 amenity options (WiFi, Pool, Kitchen, etc.)
    - Checkbox selection interface
  - **Photo Upload:**
    - Drag-and-drop file upload area
    - Multi-file support
  - Form validation and submission handling
  - Cancel button to return to listings

### 4. **Navigation & Header**

- Sticky navigation bar with:
  - Airbnb logo (links to home)
  - "Browse Homes" button (links to home page)
  - "Become a Host" button (links to create home)
  - User profile icon
- Active on all pages for seamless navigation

### 5. **Footer**

- Multi-column footer with links:
  - About section
  - Community section
  - Host section
  - Support section
- Social media links (Facebook, Twitter, Instagram)
- Language and currency selector
- Copyright information

### 6. **Search & Filter Component**

- Sticky search bar with:
  - Location input with map pin icon
  - Check-in date picker
  - Check-out date picker
  - Guest count selector
  - Search button with icon
- Quick filter buttons (Filters, Price, Bedrooms)
- Mobile responsive layout

### 7. **Listing Card Component**

- Reusable card component for each property:
  - Responsive image with hover zoom effect
  - Property details
  - Star rating display
  - Reviews count
  - Wishlist heart button
  - Smooth hover animations

## 🗂️ Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── page.js                 # Home/listings page
│   │   ├── layout.js               # Root layout with metadata
│   │   ├── globals.css             # Global styles
│   │   ├── create-home/
│   │   │   └── page.js             # Create home page
│   │   └── homes/
│   │       └── [id]/
│   │           └── page.js         # Home details page (dynamic)
│   ├── components/
│   │   └── ui/
│   │       ├── header.jsx          # Navigation header
│   │       ├── footer.jsx          # Footer component
│   │       ├── listing-card.jsx    # Reusable listing card
│   │       └── search-filter.jsx   # Search and filter bar
│   └── lib/
│       └── mockData.js             # Mock property data (6 homes)
├── package.json
├── next.config.mjs
├── tailwind.config.mjs
└── postcss.config.mjs
```

## 📊 Mock Data

The project includes 6 sample properties in `/src/lib/mockData.js`:

1. **Cozy Downtown Apartment** - San Francisco, $150/night
2. **Luxury Beachfront Villa** - Malibu, $450/night
3. **Modern Studio in Tech Hub** - Austin, $120/night
4. **Mountain Cabin Retreat** - Aspen, $280/night
5. **Historic Brownstone Brooklyn** - Brooklyn, $200/night
6. **Tropical Paradise Bungalow** - Honolulu, $320/night

Each property includes:

- Title, location, price
- Ratings and reviews
- Images (from Unsplash)
- Bedrooms, bathrooms, guest capacity
- Description
- Amenities list

## 🎨 Design & Styling

- **Color Scheme:** Rose/pink (Airbnb-inspired), grays for secondary elements
- **Typography:** Geist font family for modern look
- **Layout:** Tailwind CSS for responsive design
- **Icons:** Lucide React for consistent icon library
- **Animations:** Smooth transitions and hover effects
- **Responsiveness:** Mobile-first design (1-4 column grid)

## 🚀 How to Run

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 📱 Key Pages & Routes

| Route          | Description                                              |
| -------------- | -------------------------------------------------------- |
| `/`            | Home - Browse all listings                               |
| `/homes/[id]`  | Home Details - View specific property (e.g., `/homes/1`) |
| `/create-home` | Create Home - Form to list new property                  |

## 🔧 Technologies Used

- **Next.js 16.2.1** - React framework
- **React 19.2.4** - UI library
- **Tailwind CSS 4** - Utility-first CSS
- **Lucide React 1.7.0** - Icon library
- **PostCSS 4** - CSS processing

## 💡 Features Notes

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Client-side routing with Next.js Link
- ✅ Dynamic routing for individual homes
- ✅ Form state management with React hooks
- ✅ Mock data implementation
- ✅ SEO-friendly metadata
- ✅ Smooth animations and transitions
- ✅ Accessible components

## 🎯 Next Steps (Optional Enhancements)

1. **Backend Integration:**
   - Connect to backend API for real data
   - Implement authentication
   - Database integration

2. **Additional Features:**
   - User profile pages
   - Wishlist/favorites functionality
   - Booking system with calendar
   - Reviews and ratings submission
   - Payment processing
   - Search filtering (by price, dates, amenities)

3. **Improvements:**
   - Image gallery carousel
   - Map integration
   - Advanced search
   - Admin dashboard
   - Host management panel

## 📝 Notes

- All data is currently mocked (in-memory)
- Images are sourced from Unsplash
- Form submission logs to console and shows alert
- No actual booking/reservation functionality (UI only)
- Ready to integrate with backend API
