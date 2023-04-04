import Featured from "./components/Featured"
import Nav from "./components/Nav"
import New from "./components/New"
import Trending from "./components/Trending"
import articles from "./helpers/articles"

function App() {

  return (
    <div className="App">
      <Nav />
      <div className="main-container">
        <Featured featured={articles.featured} />
        <New new={articles.new} />
        <Trending trending={articles.trending} />
      </div>
    </div>
  )
}

export default App
