import ProductSection from '../components/ProductSection.jsx';
import { useState } from 'react';
import {
  Search,
  ArrowRight,
  TrendingDown,
  ShieldCheck,
  Smartphone,
  ChartNoAxesCombined
} from 'lucide-react';

function Home() {
  const [search, setSearch] = useState('');

function handleSearch(e) {
  e.preventDefault();

  if (!search.trim()) {
    return;
  }

  document.getElementById('deals')?.scrollIntoView({
    behavior: 'smooth'
  });
}

  return (
    <>
      <section className="hero" id="home">

        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-badge">
              <span className="pulse-dot"></span>
              YOUR SMART SHOPPING ASSISTANT
            </div>

            <h1>
              Know the real price
              <br />
              <span>before you buy.</span>
            </h1>

            <p className="hero-description">
              Don't get fooled by big discount labels.
              Compare stores, analyze historical prices
              and discover whether you should BUY NOW or WAIT.
            </p>

            <form className="search-box" onSubmit={handleSearch}>
              <Search size={21} />

              <input
                type="text"
                placeholder="Search products, brands or categories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button type="submit">
                Search <ArrowRight size={17} />
              </button>
            </form>

            <div className="hero-points">
              <span><ShieldCheck size={16}/> Historical price insights</span>
              <span><TrendingDown size={16}/> Better deals</span>
            </div>

          </div>

          <div className="hero-visual">

            <div className="floating-label">
              <TrendingDown size={19}/>
              <div>
                <strong>Price dropped!</strong>
                <small>Smart deal detected</small>
              </div>
            </div>

            <div className="analytics-card">

              <div className="analytics-top">
                <div>
                  <span className="eyebrow">PRICEWISE ANALYTICS</span>
                  <h3>Deal Overview</h3>
                </div>

                <div className="analytics-icon">
                  <ChartNoAxesCombined size={23}/>
                </div>
              </div>

              <div className="product-preview">
                <div className="phone-icon">
                  <Smartphone size={38}/>
                </div>

                <div>
                  <strong>Samsung Galaxy S25</strong>
                  <small>256 GB • Smartphone</small>
                </div>
              </div>

              <div className="price-row">
                <div>
                  <small>Current best price</small>
                  <h2>₹42,999</h2>
                </div>

                <span className="discount">-14%</span>
              </div>

              <div className="chart-box">
                <div className="chart-title">
                  <strong>Historical price</strong>
                  <span>6 months</span>
                </div>

                <div className="chart-bars">
                  {[80,65,74,53,68,43,56,32,45,24,35,15].map((h,i) => (
                    <div
                      key={i}
                      className="chart-bar"
                      style={{height: `${h}%`}}
                    />
                  ))}
                </div>

                <div className="chart-months">
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                </div>
              </div>

              <div className="recommendation">
                <div className="score-circle">
                  <strong>82</strong>
                </div>

                <div className="recommendation-text">
                  <strong>Good Deal!</strong>
                  <small>Attractive current price</small>
                </div>

                <span className="buy-now">BUY NOW</span>
              </div>

              <div className="sample-note">
                Illustrative sample data – not live prices
              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="benefits">
        <div>
          <strong>01</strong>
          <span>Track historical prices</span>
        </div>

        <div>
          <strong>02</strong>
          <span>Compare online stores</span>
        </div>

        <div>
          <strong>03</strong>
          <span>Analyze deal scores</span>
        </div>

        <div>
          <strong>04</strong>
          <span>BUY NOW or WAIT</span>
        </div>
      </section>

      <ProductSection
  searchQuery={search}
  setSearchQuery={setSearch}
/>
    </>
  );
}

export default Home;

