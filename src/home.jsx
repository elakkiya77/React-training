
function Home({ onLogout }) {

  const users = [
    {
      id: 1,
      name: "Elakkiya",
      email: "elakkiya@gmail.com",
      age: 27,
      city: "Chennai",
      role: "Developer"
    },
    {
      id: 2,
      name: "Deepika",
      email: "Deepika@gmail.com",
      age: 24,
      city: "Madurai",
      role: "Designer"
    },
    {
      id: 3,
      name: "Mala",
      email: "mala@gmail.com",
      age: 21,
      city: "Coimbatore",
      role: "Tester"
    },
    {
      id: 4,
      name: "Akash",
      email: "akash@gmail.com",
      age: 25,
      city: "Salem",
      role: "Developer"
    },
    {
      id: 5,
      name: "Divya",
      email: "divya@gmail.com",
      age: 23,
      city: "Trichy",
      role: "Manager"
    }
  ];

  return (
    <div className="home">

      <h1>Home Page</h1>
      <h2>User Details</h2>

      <button onClick={onLogout}>Logout</button>

      <div className="user-container">

        {users.map((user) => (
          <div className="card" key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>
            <p>Role: {user.role}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Home;
