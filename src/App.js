import Navbar from "./components/Navbar";
import Newscomponent from "./components/NewsComponent";
import data from "./components/new.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <>
    <Navbar/>
    <h1 style={{textAlign:'center'}}>News Yesterday</h1>
    <Routes>
    <Route exact path="/general" element={<Newscomponent articles={data.articles} style={{display:'flex',flexDirection:'column'}} pageSize={5} category='general'/>}/>
    <Route exact path="/" element={<Newscomponent articles={data.articles} style={{display:'flex',flexDirection:'column'}} pageSize={5} category='general'/>}/>
    <Route exact path="/sports" element={<Newscomponent articles={data.articles} style={{display:'flex',flexDirection:'column'}} pageSize={5} category='sports'/>}/>
    <Route exact path="/entertainment" element={<Newscomponent articles={data.articles} style={{display:'flex',flexDirection:'column'}} pageSize={5} category='entertainment'/>}/>
    <Route exact path="/business" element={<Newscomponent articles={data.articles} style={{display:'flex',flexDirection:'column'}} pageSize={5} category='business'/>}/>
    <Route exact path="/technology" element={<Newscomponent articles={data.articles} style={{display:'flex',flexDirection:'column'}} pageSize={5} category='technology'/>}/>
    <Route exact path="/health" element={<Newscomponent articles={data.articles} style={{display:'flex',flexDirection:'column'}} pageSize={5} category='health'/>}/>
    <Route exact path="/science" element={<Newscomponent articles={data.articles} style={{display:'flex',flexDirection:'column'}} pageSize={5} category='science'/>}/>

    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
