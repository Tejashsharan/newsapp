import Navbar from "./components/Navbar";
import Newscomponent from "./components/NewsComponent";
import data from "./components/new.json";

function App() {
  return (
    <>
    <Navbar/>
    <h1 style={{textAlign:'center'}}>News Yesterday</h1>
    <div className="container">
    <Newscomponent articles={data.articles} style={{display:'flex',flexDirection:'column'}} pageSize={5}/>
    </div>
    </>
  );
}

export default App;
