import type { NextPage } from "next";
import Footer from "./components/footer";
import { Container } from "@mui/system";
import MiddleBlock from "./components/middleblock"

const Home: NextPage = () => {
  
  return (
    <div>
      <Container maxWidth="sm">
        <MiddleBlock/>
        <Footer/>
      </Container>
    </div>
  );
};

export default Home;
