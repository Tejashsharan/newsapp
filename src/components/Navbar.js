// import React, { useState } from 'react';

// const Navbar = (props) => {
//   // function onchange(e) {
//   //   props.setText(e.target.value);
//   // }
//   // const [hover,setHover]=useState(false);
//   // const mouseenter=()=>{
//   //   setHover("true");
//   // }
//   // const onMouseLeave=()=>{
//   //   setHover("true");
//   // } 
  
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light  fixed-top" style={{backgroundColor:'grey'}}>
//         <a className="navbar-brand" href="/">NewsYesterday</a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto" >
//             <li className="nav-item active">
//               <a className="nav-link" href="/">General <span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item active">
//               <a className="nav-link" href="/science">Science <span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item active">
//               <a className="nav-link" href="/technology">Technology <span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item active">
//               <a className="nav-link" href="/entertainment">Entertainment <span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item active">
//               <a className="nav-link" href="/sports">Sports <span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item active">
//               <a className="nav-link" href="/health">Health <span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item active">
//               <a className="nav-link" href="/business">Business <span className="sr-only">(current)</span></a>
//             </li>
//           </ul>
//           <form className="d-flex" onSubmit={onchange}>
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//             <button className="btn btn-outline-primary" type="submit">Search</button>
//           </form>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';

const Navbar = (props) => {
  // function onchange(e) {
  //   props.setText(e.target.value);
  // }
  // const [hover,setHover]=useState(false);
  // const mouseenter=()=>{
  //   setHover("true");
  // }
  // const onMouseLeave=()=>{
  //   setHover("true");
  // } 
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  fixed-top" style={{backgroundColor:'grey'}}>
        <a className="navbar-brand" href="/">NewsYesterday</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" >
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={(e) => e.target.classList.add('active')}>General</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/science" onClick={(e) => e.target.classList.add('active')}>Science</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/technology" onClick={(e) => e.target.classList.add('active')}>Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/entertainment" onClick={(e) => e.target.classList.add('active')}>Entertainment</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sports" onClick={(e) => e.target.classList.add('active')}>Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/health" onClick={(e) => e.target.classList.add('active')}>Health</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/business" onClick={(e) => e.target.classList.add('active')}>Business</a>
            </li>
          </ul>
          <form className="d-flex" onSubmit={onchange}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
