import Featured from "./components/Featured"
import Nav from "./components/Nav"
import New from "./components/New"

function App() {

  return (
    <div className="App">
      <Nav />
      <div className="main-container">
        <Featured />
        <New />
      </div>
    </div>
  )
}

export default App
