import React, { useEffect, useState } from "react";
import "./App.css"; 

function Home() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          setToken(data.token.slice(0,23)+"...");
          localStorage.setItem("token", data.token); 
        }
      })
      .catch((error) => console.error("Error fetching token:", error));
  }, []);

  return (
    <div className="home-container">
      <h1>Thankyou</h1>
      {token ? (
        <>
          <p>Your token is:</p>
          <pre>{token}</pre>
        </>
      ) : (
        <p className="loading-message">Fetching token...</p>
      )}
    </div>
  );
}

export default Home;
