import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
// Import custom components
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";

// Declare a first name variable (can be empty to test fallback)
const firstName = "Aya";

function App() {
  return (
    <>
      <Container className="mt-5 d-flex flex-column align-items-center">
        {/* Product Card using React-Bootstrap */}
        <Card style={{ width: "22rem", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}>
          {/* Product Image component */}
          <Image />
          <Card.Body>
            {/* Product Name component */}
            <Name />
            {/* Product Price component */}
            <Price />
            {/* Product Description component */}
            <Description />
          </Card.Body>
        </Card>

        {/* Personalized greeting below the card */}
        <div
          className="d-flex align-items-center justify-content-center mt-4"
          style={{ gap: "10px" }}
        >
          <h4>Hello, {firstName ? firstName : "there"}!</h4>

          {/* Show an avatar only if firstName is provided */}
          {firstName && (
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQEkCu72q8b0Uw/profile-displayphoto-crop_800_800/B4DZfgQAwmHkAI-/0/1751814024161?e=1757548800&v=beta&t=6mS7bQ8fvw9uyfOpYKtycSe6NWn1VLFHO8F1qYo2xFs"
              alt="Profile"
              className="rounded-circle mt-2"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
                border: "2px solid #0d6efd",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.25)",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          )}
        </div>
      </Container>
    </>
  );
}

export default App;
