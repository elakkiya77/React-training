
import React, { useEffect, useState } from "react";

export default function UseEffectAPI() {

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getUsers = () => {
    setLoading(true);
    setError("");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
        console.log("API request completed");
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">

      <h1>User Details</h1>
      <p className="subtitle">User information from API</p>

      {loading ? (
        <h2 className="loading">Loading users...</h2>
      ) : error ? (
        <h2 className="error">{error}</h2>
      ) : (
        <div className="user-container">
          {user.map((person) => (
            <div className="user-card" key={person.id}>

              <h2>{person.name}</h2>

              <p><b>ID:</b> {person.id}</p>
              <p><b>Username:</b> {person.username}</p>
              <p><b>Email:</b> {person.email}</p>
              <p><b>Phone:</b> {person.phone}</p>
              <p><b>Website:</b> {person.website}</p>

            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <button onClick={getUsers}>Try Again</button>
      )}

    </div>
  );
}
