import Navbar from "./components/Navbar";
import Newscomponent from "./components/NewsComponent";
import data from "./components/new.json";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useHistory } from "react-router-dom";

function App() {
  const [text, setText] = useState("");
  // const history = useHistory();

  // useEffect(() => {
  //   if (text === "business") {
  //     history.push("/business");
  //   } else if (text === "general") {
  //     history.push("/general");
  //   } else if (text === "sports") {
  //     history.push("/sports");
  //   } else if (text === "technology") {
  //     history.push("/technology");
  //   } else if (text === "health") {
  //     history.push("/health");
  //   } else if (text === "science") {
  //     history.push("/science");
  //   }
  // }, [text, history]);

  return (
    <BrowserRouter>
      <>
        <Navbar setText={setText} />
        <h1 style={{ textAlign: 'center', marginTop: "50px" }}>News Yesterday</h1>
        <Routes>
          <Route exact path="/general" element={<Newscomponent articles={data.articles} style={{ display: 'flex', flexDirection: 'column' }} pageSize={5} category='general' />} />
          <Route exact path="/" element={<Newscomponent articles={data.articles} style={{ display: 'flex', flexDirection: 'column' }} pageSize={5} category='general' />} />
          <Route exact path="/sports" element={<Newscomponent articles={data.articles} style={{ display: 'flex', flexDirection: 'column' }} pageSize={5} category='sports' />} />
          <Route exact path="/entertainment" element={<Newscomponent articles={data.articles} style={{ display: 'flex', flexDirection: 'column' }} pageSize={5} category='entertainment' />} />
          <Route exact path="/business" element={<Newscomponent articles={data.articles} style={{ display: 'flex', flexDirection: 'column' }} pageSize={5} category='business' />} />
          <Route exact path="/technology" element={<Newscomponent articles={data.articles} style={{ display: 'flex', flexDirection: 'column' }} pageSize={5} category='technology' />} />
          <Route exact path="/health" element={<Newscomponent articles={data.articles} style={{ display: 'flex', flexDirection: 'column' }} pageSize={5} category='health' />} />
          <Route exact path="/science" element={<Newscomponent articles={data.articles} style={{ display: 'flex', flexDirection: 'column' }} pageSize={5} category='science' />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
