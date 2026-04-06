# RecipeLearn 🍳

A modern recipe discovery and browsing application built with React and Vite. Browse recipes by category, cuisine, search for your favorite dishes, and explore trending recipes with detailed information.

## ✨ Features

- 🔍 **Recipe Search** - Search for recipes by name
- 🍽️ **Category Filtering** - Browse recipes by different meal categories
- 🌍 **Cuisine Filtering** - Filter recipes by cuisine or area
- 📱 **Recipe Details** - View detailed information about each recipe including ingredients and instructions
- ⭐ **Trending Recipes** - Discover trending and popular recipes
- 🎨 **Responsive Design** - Beautiful and responsive UI built with Tailwind CSS
- 🎠 **Interactive Sliders** - Smooth carousel views using Swiper
- ⚡ **Fast Performance** - Optimized with Vite for quick loading and hot module replacement

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 8.0
- **Styling**: Tailwind CSS 4.2
- **Routing**: React Router DOM 7.13
- **UI Components**: Lucide React (Icons), Swiper (Carousels)
- **API**: TheMealDB API


## 📋 Prerequisites

- Node.js (v18 or higher)
- npm  package manager



### Installation


2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```



## 📁 Project Structure

```
recipeLearn/
├── src/
│   ├── components/              # React components
│   │   ├── AreaView.jsx        # Area/cuisine filtering view
│   │   ├── CategorySelection.jsx # Category selection component
│   │   ├── CategoryView.jsx     # Category browsing view
│   │   ├── Cuisine.jsx          # Cuisine/area filtering
│   │   ├── HomeView.jsx         # Home page view
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── RecipeCard.jsx       # Recipe card component
│   │   ├── RecipeDetailView.jsx # Detailed recipe view
│   │   ├── RecipeSlider.jsx     # Recipe carousel/slider
│   │   ├── SearchView.jsx       # Search results view
│   │   └── TrendingRecipe.jsx   # Trending recipes section
│   ├── hooks/
│   │   └── useFetch.js          # Custom fetch hook for API calls
│   ├── Routes/
│   │   └── MainRoute.jsx        # Route configuration
│   ├── assets/                  # Static assets
│   ├── App.jsx                  # Main App component
│   ├── index.css                # Global styles
│   └── main.jsx                 # Application entry point
├── public/                      # Static files
├── package.json                 # Project dependencies
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML template
└── README.md                   # This file
```

## 🎯 How It Works

1. **Navbar Navigation** - Navigate between different sections using the navbar
2. **Home View** - Browse featured and trending recipes
3. **Search** - Use the search functionality to find recipes by name
4. **Category/Cuisine Filtering** - Browse recipes by category or cuisine type
5. **Recipe Details** - Click on any recipe to view full details including ingredients, measurements, and cooking instructions

## 🔌 API Integration

The application uses **TheMealDB API** for recipe data. The API provides:
- Recipe search by name
- Filtering by category
- Filtering by cuisine/area
- Detailed recipe information including ingredients and instructions

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop browsers
- Tablets
- Mobile devices

## 🎨 Design Features

- Modern and clean UI with Tailwind CSS
- Smooth animations and transitions
- Interactive carousels with Swiper
- Icon-based navigation with Lucide React
- Card-based recipe layout

## 🧪 Development



## 📦 Dependencies Summary

| Package | Version | Purpose |
|---------|---------|---------|
| React | 18.3 | UI Framework |
| Vite | 8.0 | Build Tool |
| React Router DOM | 7.13 | Client-side Routing |
| Tailwind CSS | 4.2 | Styling |
| Swiper | 12.1 | Carousels/Sliders |
| Lucide React | 1.7 | Icons |



**Happy Cooking! 👨‍🍳**
