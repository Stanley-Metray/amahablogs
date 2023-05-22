import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import NavBar from './components/NavBar';
import Header from './components/Header';
import Blog from './components/Blog';
import AllBlogs from "./components/AllBlogs";
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(new Array(0));
  const [searchTitle, setSearchTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [cover, setCover] = useState("");

  useEffect(() => {
    fetch("https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=10")
      .then(response => {
        return response.json()
      }).then(data => {
        setData(data.data);
      });
  }, []);

  const getSearchTitle = (childData) => {
    setSearchTitle(childData);
  }

  const getSlug = (childData)=>{
    setSlug(childData);
  }

  const getCover = (childData)=>{
    console.log(childData);
    setCover(childData);
  }

  return (
    <div className="container pb-5">
      <Header />
      <NavBar getSearchTitle={getSearchTitle} />
      <AllBlogs getSlug={getSlug} getCover={getCover} data={data} searchTitle={searchTitle} />
      <Blog slug={slug} cover={cover} />
    </div>
  )
}

export default App;
