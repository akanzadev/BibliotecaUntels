import "./App.css";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Search />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
