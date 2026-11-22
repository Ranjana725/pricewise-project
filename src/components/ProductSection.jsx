
import { useMemo, useState } from 'react';

import {
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Search,
  Star,
  ArrowUpDown,
  TrendingDown,
  X
} from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Samsung Galaxy S25',
    brand: 'Samsung',
    category: 'Phones',
    price: 42999,
    oldPrice: 49999,
    score: 82,
    store: 'Flipkart',
    icon: Smartphone,
    color: 'blue',
    description: 'Premium smartphone with advanced performance.'
  },
  {
    id: 2,
    name: 'iPhone 16',
    brand: 'Apple',
    category: 'Phones',
    price: 64999,
    oldPrice: 79900,
    score: 91,
    store: 'Amazon',
    icon: Smartphone,
    color: 'purple',
    description: 'Apple smartphone with powerful camera features.'
  },
  {
    id: 3,
    name: 'MacBook Air M4',
    brand: 'Apple',
    category: 'Laptops',
    price: 89990,
    oldPrice: 99900,
    score: 76,
    store: 'Amazon',
    icon: Laptop,
    color: 'cyan',
    description: 'Lightweight laptop for work and productivity.'
  },
  {
    id: 4,
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'Audio',
    price: 24990,
    oldPrice: 29990,
    score: 94,
    store: 'Croma',
    icon: Headphones,
    color: 'green',
    description: 'Wireless headphones with noise cancellation.'
  },
  {
    id: 5,
    name: 'Samsung Galaxy Watch',
    brand: 'Samsung',
    category: 'Accessories',
    price: 18999,
    oldPrice: 24999,
    score: 68,
    store: 'Flipkart',
    icon: Watch,
    color: 'orange',
    description: 'Smart wearable for daily activity tracking.'
  },
  {
    id: 6,
    name: 'Dell Inspiron 15',
    brand: 'Dell',
    category: 'Laptops',
    price: 52990,
    oldPrice: 62990,
    score: 85,
    store: 'Amazon',
    icon: Laptop,
    color: 'blue',
    description: 'Everyday laptop for study and office work.'
  }
];

const categories = [
  'All',
  'Phones',
  'Laptops',
  'Audio',
  'Accessories'
];

function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}
function ProductSection() {

  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('recommended');
  const [favorites, setFavorites] = useState([]);
  const [selected, setSelected] = useState(null);


const filteredProducts = useMemo(() => {
  let result = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      category === 'All' || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sort === 'price-low') {
    result.sort((a, b) => a.price - b.price);
  }

  if (sort === 'price-high') {
    result.sort((a, b) => b.price - a.price);
  }

  if (sort === 'score') {
    result.sort((a, b) => b.score - a.score);
  }

  return result;
}, [searchQuery, category, sort]);

  function toggleFavorite(id) {
    setFavorites(previous =>
      previous.includes(id)
        ? previous.filter(item => item !== id)
        : [...previous, id]
    );
  }

  return (
    <section className="product-section" id="deals">

      <div className="product-heading">

        <div>
          <span className="eyebrow">
            PRICEWISE PRODUCT DISCOVERY
          </span>

          <h2>
            Explore <span>smart deals.</span>
          </h2>

          <p>
            Find products, compare prices and discover
            better buying opportunities.
          </p>
        </div>

        <div className="catalog-count">
          <strong>{filteredProducts.length}</strong>
          <span>Products found</span>
        </div>

      </div>

      {/* SEARCH AND FILTERS */}

      <div className="catalog-toolbar">

        <div className="catalog-search">
          <Search size={19}/>

          <input
            type="text"
            placeholder="Search products or brands..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />

          {searchQuery && (
            <button onClick={() => setSearchQuery('')} aria-label="Clear search">
              <X size={17}/>
            </button>
          )}
        </div>

        <div className="catalog-sort">
          <ArrowUpDown size={17}/>

          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="score">Highest Deal Score</option>
          </select>
        </div>

      </div>

      {/* CATEGORY FILTER */}

      <div className="category-list">
        {categories.map(item => (
          <button
            key={item}
            className={`category-chip ${
              category === item ? 'selected' : ''
            }`}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* PRODUCT CARDS */}

      <div className="catalog-grid">

        {filteredProducts.map(product => {
          const Icon = product.icon;
          const discount = Math.round(
            ((product.oldPrice - product.price) / product.oldPrice) * 100
          );

          return (
            <article className="catalog-card" key={product.id}>

              <div className="catalog-card-top">

                <span className="catalog-category">
                  {product.category}
                </span>

                <button
                  className={`favorite-button ${
                    favorites.includes(product.id) ? 'saved' : ''
                  }`}
                  onClick={() => toggleFavorite(product.id)}
                  aria-label="Toggle watchlist"
                  title="Save to watchlist"
                >
                  <Star
                    size={19}
                    fill={favorites.includes(product.id) ? 'currentColor' : 'none'}
                  />
                </button>

              </div>

              <div className={`catalog-image ${product.color}`}>
                <Icon size={68} strokeWidth={1.5}/>
              </div>

              <div className="catalog-product-info">

                <span className="catalog-brand">
                  {product.brand}
                </span>

                <h3>{product.name}</h3>

                <div className="catalog-prices">
                  <strong>{formatPrice(product.price)}</strong>
                  <del>{formatPrice(product.oldPrice)}</del>
                </div>

                <div className="catalog-discount">
                  <TrendingDown size={14}/>
                  {discount}% below listed original price
                </div>

                <div className="catalog-score">
                  <div>
                    <span>PRICEWISE Deal Score</span>
                    <strong>{product.score}/100</strong>
                  </div>

                  <div className="score-track">
                    <div
                      className="score-progress"
                      style={{width: `${product.score}%`}}
                    />
                  </div>
                </div>

                <div className="catalog-store">
                  <span>Available at</span>
                  <strong>{product.store}</strong>
                </div>

                <button
                  className="analyze-button"
                  onClick={() => setSelected(product)}
                >
                  View product details →
                </button>

              </div>

            </article>
          );
        })}

      </div>

      {filteredProducts.length === 0 && (
        <div className="empty-products">
          <Search size={35}/>
          <h3>No products found</h3>
          <p>Try another product name or category.</p>

          <button onClick={() => {
            setSearchQuery('');
            setCategory('All');
          }}>
            Clear filters
          </button>
        </div>
      )}

      <p className="catalog-disclaimer">
        Demo catalogue: all product prices, scores and store
        information are illustrative, not verified live offers.
      </p>

      {/* PRODUCT QUICK VIEW */}

      {selected && (
        <div className="quick-view-overlay">
          <div className="quick-view">

            <button
              className="quick-close"
              onClick={() => setSelected(null)}
              aria-label="Close product details"
            >
              <X/>
            </button>

            <span className="eyebrow">PRODUCT QUICK VIEW</span>

            <h2>{selected.name}</h2>

            <p>{selected.description}</p>

            <div className="quick-price">
              {formatPrice(selected.price)}
            </div>

            <div className="quick-stat">
              <span>Deal Score</span>
              <strong>{selected.score}/100</strong>
            </div>

            <div className="quick-stat">
              <span>Store</span>
              <strong>{selected.store}</strong>
            </div>

            <p className="quick-note">
              Detailed price history and buying recommendations
              will be connected in our next development phase.
            </p>

            <button
              className="analyze-button"
              onClick={() => setSelected(null)}
            >
              Close details
            </button>

          </div>
        </div>
      )}

    </section>
  );
}

export default ProductSection;
