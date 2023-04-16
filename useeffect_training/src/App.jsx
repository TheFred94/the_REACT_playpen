import { useState, useEffect } from "react";

import "./App.css";

function App() {
  //  Creates state and set it to []
  const [articles, setArticles] = useState([]);

  //  Uses an arrow function for the callback
  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products")
      .then((res) => res.json())
      .then((data) => {
        // set state which triggers the render again
        setArticles(data);
      });
    // provides an empty array so it runs once
  }, []);

  return (
    <>
      {/* When the page is refreshed it shows "Loading..." before showing the content of articles. */}
      {articles.length === 0 ? (
        <p>LOADING...</p>
      ) : (
        <ul>
          {articles.map((art) => (
            <li>
              <article>{art.productdisplayname}</article>
              {/* Conditional rendering (Short curcuit evaluation) - If the product has a discount it shows "On sale now!"  */}
              {art.discount && <p>On sale now!</p>}
            </li>
          ))}
        </ul>
      )}
      {/* This one is automatic */}
    </>
  );
}

export default App;