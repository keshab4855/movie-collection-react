import "./App.css";
import { Container } from "react-bootstrap";
import SearchForm from "./components/SearchForm";
import CustomCard from "./components/CustomCard";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <SearchForm></SearchForm>
        <div className="mt-4 d-flex justify-content-center">
          <CustomCard></CustomCard>
        </div>

        <div>card view for the seacrh result mpvie</div>
      </Container>
    </div>
  );
}

export default App;
