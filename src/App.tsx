import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/mainContent/MainContent";
import Footer from "./components/footer/Footer";
import SelectLanguage from "./components/selectLanguage/SelectLanguage";

function App() {
  return (
    <>
      <Header />
      <Content />
      <SelectLanguage />
      <Footer />
    </>
  );
}

export default App;
