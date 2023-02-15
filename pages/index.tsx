import type { NextPage } from "next";
import Header from "./components/header";
import Footer from "./components/footer";
import { Container } from "@mui/system";
import MiddleBlock from "./components/middleblock"
import ResponsiveAppBar from "./components/appbar";

const Home: NextPage = () => {
  
  return (
    <div>
        <ResponsiveAppBar/>
      <Container maxWidth="sm">
        <MiddleBlock/>
        <Footer/>
      </Container>
    </div>
  );
};

export default Home;
