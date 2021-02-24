import "./App.css";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search.jsx";
import Books from "./Components/Books/Books"
import { useEffect, useState } from "react";
function App() {
  let value="shin";
  const [books,setbooks] = useState([]);
  const [search, setsearch] = useState("");
  const url=`https://api.jikan.moe/v3/search/anime?q=${search}&order_by=title&sort=asc`

  useEffect(() => {
      fetch(url)
      .then((body)=>body.json())
      .then((data)=>setbooks(data.results))
      .catch((e)=>console.log("error al hacer la peticion"))

  }, [search]);

  return (
    <div className="container">
      <Header />
      <main>
        <Search setsearch={setsearch}/>
      </main>
        <Books books={books}/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
