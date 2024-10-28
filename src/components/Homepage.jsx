import "./Homepage.css";

function Homepage() {
  const name = "Skypass Travels";
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to {name}</h1>
        <p>Your dream destinations, one click away!</p>
      </header>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Personalized tour packages</li>
          <li>Flight and hotel bookings</li>
          <li>24/7 support for all your travel needs</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: info@touragent.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>

      <footer className="footer">
        <button>Book Your Trip Today!</button>
      </footer>
    </div>
  );
}

export default Homepage;
