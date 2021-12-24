import React, { useState, useEffect } from "react"
import SearchBar from "./components/SearchBar"
import Header from "./components/Navbar"
import CharacterList from "./components/CharacterList"
import axios from "./components/api"
import Spinner from "./components/Spinner"


function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("")

  useEffect(() => {
    const fetchItems = async () => {

      const results = await axios.get(`/characters?name=${query}`)
      setItems(results.items)
      setLoading(false)
    };
    fetchItems();
  }, [query]);
  console.log(items)
  return (
    <div className="App">
      <Header />
      <SearchBar setQuery={(query) => setQuery(query)} />
      {loading ? <Spinner /> : <CharacterList items={items} />}
    </div>
  );
}

export default App;
