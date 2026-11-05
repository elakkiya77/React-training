
import Child from "./Child";
import "./App.css";

function App() {
  return (
    <div>
      <h1>User Details</h1>

      <Child name="Elakkiya" city="Chennai" age="27" email="elakkiya@gmail.com" phone="9876543210" />

      <Child name="Deepika" city="Madurai" age="28" email="deepika@gmail.com" phone="9876543211" />

      <Child name="Maya" city="Coimbatore" age="26" email="maya@gmail.com" phone="9876543212" />

      <Child name="Arun" city="Salem" age="25" email="arun@gmail.com" phone="9876543213" />

      <Child name="Divya" city="Trichy" age="23" email="divya@gmail.com" phone="9876543214" />

    </div>
  );
}

export default App;
