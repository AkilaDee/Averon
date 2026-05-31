// src/pages/SearchResults/SearchResults.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SITE_INDEX } from '../../Components/Data/siteData'; // Import your search index database
import './SearchResults.css';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  // Extract the ?q= parameter from the address bar URL
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const cleanQuery = searchQuery.toLowerCase().trim();

    // Scan your whole database array for matching words
    const matchedItems = SITE_INDEX.filter(item => 
      item.title.toLowerCase().includes(cleanQuery) ||
      item.text.toLowerCase().includes(cleanQuery) ||
      item.type.toLowerCase().includes(cleanQuery)
    );

    setResults(matchedItems);
  }, [location.search, searchQuery]);

  return (
    <div className="search-results-page">
      <div className="search-results-container">
        <span className="search-meta-badge">System Index Scan</span>
        <h1 className="search-results-heading">
          Search Results for: <span>"{searchQuery}"</span>
        </h1>
        <p className="search-match-count">
          Found {results.length} relevant index matches across the platform.
        </p>

        <div className="results-wrapper-list">
          {results.length > 0 ? (
            results.map((item, index) => (
              <div key={index} className="result-item-card">
                <span className="result-type-tag">{item.type}</span>
                <h3 className="result-item-title">
                  <Link to={item.url}>{item.title}</Link>
                </h3>
                <p className="result-item-excerpt">
                  {/* Displays a snippet text to user */}
                  {item.text.length > 180 ? `${item.text.substring(0, 180)}...` : item.text}
                </p>
                <Link to={item.url} className="result-action-link">
                  Navigate to target page →
                </Link>
              </div>
            ))
          ) : (
            <div className="no-results-alert-box">
              <h3>No Index Entries Found</h3>
              <p>We couldn't locate any site text matching your query. Verify your spelling or search for alternative terms like "Cinnamon", "Compliance", or "Sourcing".</p>
              <Link to="/products" className="fallback-btn">Browse Product Catalogue</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;