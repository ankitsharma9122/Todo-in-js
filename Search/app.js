// --------------------
// Data
// --------------------
const products = [
    'iPhone 14',
    'Samsung Galaxy',
    'Redmi Note',
    'Realme Narzo',
    'Sony Headphones',
    'Apple Watch',
    'Nike Shoes',
    'Adidas Shoes'
  ];
  
  // --------------------
  // DOM
  // --------------------
  const searchInput = document.getElementById('searchInput');
  const resultList = document.getElementById('resultList');
  
  // --------------------
  // Debounce Function
  // --------------------
  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }
  
  // --------------------
  // Search Logic
  // --------------------
  function handleSearch(event) {
    const query = event.target.value.toLowerCase().trim();
  
    resultList.innerHTML = '';
  
    if (!query) return;
  
    const filtered = products.filter(item =>
      item.toLowerCase().includes(query)
    );
  
    filtered.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = highlightText(item, query);
      resultList.appendChild(li);
    });
  }
  
  // --------------------
  // Highlight Matched Text
  // --------------------
  function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  }
  
  // --------------------
  // Attach Debounced Event
  // --------------------
  const debouncedSearch = debounce(handleSearch, 300);
  searchInput.addEventListener('input', debouncedSearch);
  