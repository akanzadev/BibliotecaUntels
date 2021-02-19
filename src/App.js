import "./App.css";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import Books from "./Components/Books/Books"
function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Search />
      </main>
      <Books/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
