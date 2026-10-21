// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

import { useEffect, useState } from 'react';
import './App.css';

function getMobileIdFromPath() {
  const match = window.location.pathname.match(/^\/products\/(\d+)\/?$/);
  return match ? Number(match[1]) : null;
}

const phonePlaceholderImage = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 520"><rect width="400" height="520" fill="#f8f6fb"/><rect x="125" y="45" width="150" height="430" rx="24" fill="#6241a1"/><rect x="137" y="72" width="126" height="370" rx="14" fill="#e9e1f8"/><circle cx="200" cy="458" r="8" fill="#e9e1f8"/></svg>'
)}`;

const additionalMobiles = [
  {
    id: 137,
    title: 'Google Pixel 9 Pro XL',
    brand: 'Google',
    price: 999,
    discountPercentage: 0,
    rating: 4.8,
    stock: 18,
    category: 'smartphones',
    description: 'Sample catalog listing for the Google Pixel 9 Pro XL.',
    thumbnail: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Pixel_9_Pro_XL.jpg/960px-Pixel_9_Pro_XL.jpg',
    imageCredit: 'Miyako Fujimiya · CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Pixel_9_Pro_XL.jpg',
  },
  {
    id: 138,
    title: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 1299,
    discountPercentage: 0,
    rating: 4.8,
    stock: 15,
    category: 'smartphones',
    description: 'Sample catalog listing for the Samsung Galaxy S24 Ultra.',
    thumbnail: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/SAMSUNG_Galaxy_S24_Ultra.jpg/960px-SAMSUNG_Galaxy_S24_Ultra.jpg',
    imageCredit: 'Dinkun Chen · CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:SAMSUNG_Galaxy_S24_Ultra.jpg',
  },
  {
    id: 139,
    title: 'Apple iPhone 15',
    brand: 'Apple',
    price: 799,
    discountPercentage: 0,
    rating: 4.7,
    stock: 20,
    category: 'smartphones',
    description: 'Sample catalog listing for the Apple iPhone 15.',
    thumbnail: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Back_of_iPhone_15.jpg/960px-Back_of_iPhone_15.jpg',
    imageCredit: 'ThePhotoGraphIc · CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Back_of_iPhone_15.jpg',
  },
  {
    id: 140,
    title: 'OnePlus 8T',
    brand: 'OnePlus',
    price: 799,
    discountPercentage: 0,
    rating: 4.7,
    stock: 12,
    category: 'smartphones',
    description: 'Sample catalog listing for the OnePlus 8T.',
    thumbnail: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/OnePlus_8T_Front_View.png/960px-OnePlus_8T_Front_View.png',
    imageCredit: 'Willwongprd · CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:OnePlus_8T_Front_View.png',
  },
].map(mobile => ({
  ...mobile,
  images: [mobile.thumbnail],
  availabilityStatus: `${mobile.stock} in stock`,
  warrantyInformation: 'Not specified',
  shippingInformation: 'Not specified',
  tags: [],
}));

function App() {
  const [mobiles, setMobiles] = useState([]);
  const [status, setStatus] = useState(0);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [selectedMobileId, setSelectedMobileId] = useState(getMobileIdFromPath);

  useEffect(() => {
    const fetchMobiles = async () => {
      try {
        const response = await fetch(
          'https://dummyjson.com/products/category/smartphones?limit=0'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch mobiles');
        }

        const data = await response.json();
        setMobiles([...data.products, ...additionalMobiles]);
        setStatus(200);
      } catch {
        setStatus(500);
      }
    };

    fetchMobiles();
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setSelectedMobileId(getMobileIdFromPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const filteredMobiles = mobiles.filter(mobile =>
    `${mobile.title} ${mobile.brand || ''}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalPages = Math.min(5, Math.max(1, filteredMobiles.length));
  const phonesPerPage = Math.floor(filteredMobiles.length / totalPages);
  const extraPhones = filteredMobiles.length % totalPages;
  const start = (page - 1) * phonesPerPage + Math.min(page - 1, extraPhones);
  const pageSize = phonesPerPage + (page <= extraPhones ? 1 : 0);
  const currentMobiles = filteredMobiles.slice(start, start + pageSize);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const openMobileDetails = (event, mobileId) => {
    event.preventDefault();
    window.history.pushState({}, '', `/products/${mobileId}`);
    setSelectedMobileId(mobileId);
    window.scrollTo(0, 0);
  };

  const returnToCatalog = () => {
    window.history.pushState({}, '', '/');
    setSelectedMobileId(null);
    window.scrollTo(0, 0);
  };

  const selectedMobile = mobiles.find(mobile => mobile.id === selectedMobileId);

  return (
    <div className="app">
      {selectedMobileId !== null ? (
        <main className="main detail-main">
          <button className="back-button" onClick={returnToCatalog}>
            ← Back to phones
          </button>

          {status === 0 && (
            <div className="status loading">Loading phone details...</div>
          )}

          {status === 500 && (
            <div className="status error">
              Unable to load phone details. Check your internet and try again.
            </div>
          )}

          {status === 200 && !selectedMobile && (
            <p className="message">Phone not found.</p>
          )}

          {selectedMobile && (
            <article className="mobile-detail">
              <div className="detail-image-wrap">
                <img
                  className="detail-image"
                  src={selectedMobile.images?.[0] || selectedMobile.thumbnail}
                  alt={selectedMobile.title}
                  onError={event => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = phonePlaceholderImage;
                  }}
                />
                {selectedMobile.imageCredit && (
                  <a
                    className="image-credit"
                    href={selectedMobile.imageSource}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Image: {selectedMobile.imageCredit}
                  </a>
                )}
              </div>

              <div className="detail-info">
                <p className="detail-category">{selectedMobile.category}</p>
                <h1>{selectedMobile.title}</h1>
                <p className="detail-description">
                  {selectedMobile.description}
                </p>
                <p className="detail-price">${selectedMobile.price}</p>

                <dl className="detail-specifications">
                  <div><dt>Brand</dt><dd>{selectedMobile.brand || 'N/A'}</dd></div>
                  <div><dt>Rating</dt><dd>{selectedMobile.rating} / 5</dd></div>
                  <div><dt>Availability</dt><dd>{selectedMobile.availabilityStatus || `${selectedMobile.stock} in stock`}</dd></div>
                  <div><dt>Discount</dt><dd>{selectedMobile.discountPercentage}%</dd></div>
                  <div><dt>Warranty</dt><dd>{selectedMobile.warrantyInformation || 'Not specified'}</dd></div>
                  <div><dt>Shipping</dt><dd>{selectedMobile.shippingInformation || 'Not specified'}</dd></div>
                  {selectedMobile.weight && (
                    <div><dt>Weight</dt><dd>{selectedMobile.weight}</dd></div>
                  )}
                  {selectedMobile.dimensions && (
                    <div>
                      <dt>Dimensions</dt>
                      <dd>
                        {selectedMobile.dimensions.width} × {selectedMobile.dimensions.height} × {selectedMobile.dimensions.depth}
                      </dd>
                    </div>
                  )}
                </dl>

                {selectedMobile.tags?.length > 0 && (
                  <p className="detail-tags">
                    <strong>Tags:</strong> {selectedMobile.tags.join(', ')}
                  </p>
                )}
              </div>
            </article>
          )}
        </main>
      ) : (
        <>
          <h1 className="page-title">Explore Mobile Phones</h1>

          <input
            className="search-input"
            type="text"
            placeholder="Search mobile name or brand..."
            value={search}
            onChange={handleSearch}
          />

          {status === 0 && (
            <div className="status loading">Loading mobiles...</div>
          )}

          {status === 200 && (
            <div className="status success">
              Status 200: Mobiles fetched successfully!
            </div>
          )}

          {status === 500 && (
            <div className="status error">
              Status 500: Failed to load mobiles.
            </div>
          )}

          <main className="main">
            {status === 200 && (
              <div className="result-count">
                {filteredMobiles.length} mobiles found
              </div>
            )}

            {status === 200 && filteredMobiles.length === 0 && (
              <p className="message">
                No mobiles found. Try another name.
              </p>
            )}

            {status === 200 && filteredMobiles.length > 0 && (
              <>
                <div className="mobile-grid">
                  {currentMobiles.map(mobile => (
                    <div className="mobile-card" key={mobile.id}>
                      <img
                        className="mobile-image"
                        src={mobile.thumbnail}
                        alt={mobile.title}
                        onError={event => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = phonePlaceholderImage;
                        }}
                      />
                      {mobile.imageCredit && (
                        <a
                          className="image-credit"
                          href={mobile.imageSource}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Image: {mobile.imageCredit}
                        </a>
                      )}

                      <div className="mobile-info">
                        <h2>
                          <span>Model:</span> {mobile.title}
                        </h2>

                        <p>
                          <span>Brand:</span> {mobile.brand || 'N/A'}
                        </p>

                        <p>
                          <span>Price:</span> ${mobile.price}
                        </p>

                        <p>
                          <span>Discount:</span>{' '}
                          {mobile.discountPercentage}%
                        </p>

                        <p>
                          <span>Rating:</span> {mobile.rating}
                        </p>

                        <p>
                          <span>Stock:</span> {mobile.stock}
                        </p>

                        <p>
                          <span>Category:</span> {mobile.category}
                        </p>

                        <p className="description">
                          <span>Description:</span> {mobile.description}
                        </p>

                        <a
                          href={`/products/${mobile.id}`}
                          onClick={event => openMobileDetails(event, mobile.id)}
                          className="details-link"
                        >
                          View Details ↗
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pagination">
                  <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                  >
                    ← Previous
                  </button>

                  <div className="page-numbers" aria-label="Catalog pages">
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
                      <button
                        key={pageNumber}
                        className={pageNumber === page ? 'active' : ''}
                        aria-current={pageNumber === page ? 'page' : undefined}
                        aria-label={`Page ${pageNumber}`}
                        onClick={() => setPage(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    ))}
                  </div>

                  <button
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                  >
                    Next →
                  </button>
                </div>

                <p className="showing">
                  Showing {start + 1}–
                  {Math.min(start + currentMobiles.length, filteredMobiles.length)}
                  {' '}of {filteredMobiles.length} mobiles
                </p>
              </>
            )}
          </main>
        </>
      )}
    </div>
  );
}

export default App;