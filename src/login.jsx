
function Login({ onLogin }) {
  return (
    <div className="login">
      <h1>Welcome!</h1>
      <p>Please login to continue</p>

      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default Login;
