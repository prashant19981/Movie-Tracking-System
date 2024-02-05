import { Container } from "semantic-ui-react";
import MovieDashboard from "../../features/movies/MovieDashboard";
import HeaderLogo from "./HeaderLogo";
import Navbar from "./Navbar";

function App() {

  return (
    <>
      <Navbar />
      <div style={{ marginTop: '5em' }}>
        <Container>
          <HeaderLogo />
          <MovieDashboard />
        </Container>
      </div>
    </>
  );
}

export default App;
