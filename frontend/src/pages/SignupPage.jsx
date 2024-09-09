import './signupPage.css';

const SignupPage = () => {
  return (
    <section className="signup-section">
      <div className="signup-container">
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form">
          <input
            type="text"
            placeholder="Username"
            className="signup-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="signup-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
            required
          />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </section>
  );
};

export default SignupPage;
