import Featured from "./components/Featured"
import Nav from "./components/Nav"

function App() {

  return (
    <div className="App">
      <Nav />
      <div className="main-container">
        <Featured />
      </div>
    </div>
  )
}

export default App
