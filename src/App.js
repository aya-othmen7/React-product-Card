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
<Card className="product-card">
          <Image />
          <Card.Body>
            <Name />
            <Price />
            <Description />
          </Card.Body>
        </Card>

        {/* Personalized greeting below the card */}
        <div className="greeting-container mt-4">
          <h4 className="greeting-text">Hello, {firstName ? firstName : "there"}!</h4>

          {firstName && (
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQEkCu72q8b0Uw/profile-displayphoto-crop_800_800/B4DZfgQAwmHkAI-/0/1751814024161?e=1757548800&v=beta&t=6mS7bQ8fvw9uyfOpYKtycSe6NWn1VLFHO8F1qYo2xFs"
              alt="Profile"
              className="profile-img"
            />
          )}
        </div>
      </Container>
    </>
  );
}

export default App;
