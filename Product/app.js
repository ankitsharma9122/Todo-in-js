// --------------------
// Mock Product Data
// --------------------
const products = [
    {
      id: 1,
      title: 'iPhone 14',
      price: 69999,
      rating: 4.5,
      category: 'Mobile',
      image: 'https://via.placeholder.com/200'
    },
    {
      id: 2,
      title: 'Samsung Galaxy S23',
      price: 64999,
      rating: 4.3,
      category: 'Mobile',
      image: 'https://via.placeholder.com/200'
    },
    {
      id: 3,
      title: 'Nike Shoes',
      price: 4999,
      rating: 4.0,
      category: 'Fashion',
      image: 'https://via.placeholder.com/200'
    },
    {
      id: 4,
      title: 'Sony Headphones',
      price: 2999,
      rating: 3.8,
      category: 'Electronics',
      image: 'https://via.placeholder.com/200'
    }
  ];
  
  // --------------------
  // State
  // --------------------
  let filteredProducts = [...products];
  
  // --------------------
  // DOM Elements
  // --------------------
  const productGrid = document.getElementById('productGrid');
  const categoryFilter = document.getElementById('categoryFilter');
  const ratingFilter = document.getElementById('ratingFilter');
  const sortPrice = document.getElementById('sortPrice');
  
  // --------------------
  // Initial Setup
  // --------------------
  init();
  
  function init() {
    populateCategories();
    renderProducts(filteredProducts);
    attachEvents();
  }
  
  // --------------------
  // Render Products
  // --------------------
  function renderProducts(list) {
    productGrid.innerHTML = '';
  
    if (!list.length) {
      productGrid.innerHTML = '<p>No products found</p>';
      return;
    }
  
    list.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
  
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <div class="product-title">${product.title}</div>
        <div class="product-price">₹${product.price}</div>
        <div class="product-rating">⭐ ${product.rating}</div>
      `;
  
      productGrid.appendChild(card);
    });
  }
  
  // --------------------
  // Populate Categories
  // --------------------
  function populateCategories() {
    const categories = [...new Set(products.map(p => p.category))];
  
    console.log('Unique Categories:', categories);
  
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });
  }
  
  // --------------------
  // Event Handlers
  // --------------------
  function attachEvents() {
    categoryFilter.addEventListener('change', applyFilters);
    ratingFilter.addEventListener('change', applyFilters);
    sortPrice.addEventListener('change', applySorting);
  }
  
  // --------------------
  // Filters
  // --------------------
  function applyFilters() {
  
    const selectedCategory = categoryFilter.value;
    const minRating = Number(ratingFilter.value);
  
    filteredProducts = products.filter(product => {
      const categoryMatch = product.category === selectedCategory;
  
      const ratingMatch = product.rating >= minRating;
  
      return categoryMatch && ratingMatch;
    });
  
    applySorting();
  }
  
  // --------------------
  // Sorting
  // --------------------
  function applySorting() {
    const sortValue = sortPrice.value;
  
    if (sortValue === 'low') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'high') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }
  
    renderProducts(filteredProducts);
  }
  