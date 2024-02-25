// import React from 'react';

// const NewsItem = ({article}) => {
//     const { source, author, title, url, urlToImage, publishedAt, content } = article;

//     return (
//         <div className='mx-2 my-5' style={{width:'31%'}}>
//             <div className="card" style={{ width: '18rem',borderRadius:"10px"}}>
//                 <img className="card-img-top" src={urlToImage?urlToImage:"https://th.bing.com/th/id/OIP.QkJjNqT9zyz_2qqZPQDXyQAAAA?rs=1&pid=ImgDetMain"} alt="Card image cap" />
//                 <div className="card-body" >
//                     <h5 className="card-title">{title}</h5>
//                     <p className="card-text">{content?content.split(" ").length > 20? content.split(" ").slice(0, 20).join(" ") + "...": content:"Sorry no content available..."}</p>
//                     <a href={url} className="btn btn-primary">Read more</a>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default NewsItem;

import React from 'react';
import { useState } from 'react';

const NewsItem = ({ article }) => {
    const { source, author, title, url, urlToImage, publishedAt, content } = article;
    const [hover,setHover]=useState(false);

    function handleEnter(){
        setHover(true);
    }

    function handleLeave(){
        setHover(false);
    }

    return (
        <div className='col-lg-4 col-md-6 mb-4 my-5'>
            <div className="card" onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={{ borderRadius: "10px" , boxShadow:hover?"5px 5px 10px lightblue":"none" ,transform:hover? 'scale(1.02)' : 'scale(1)',transition: "transform 0.3s ease-in-out"}}>
                    
                    <span className="position-absolute top-100 start-100 translate-middle badge rounded-pill bg-primary" style={{marginTop:"171px",borderRadius:"10px"}}>
                        <span className="visually-hidden" ><h6 style={{color:'white'}}>{source.name}</h6></span>
                    </span>
                <img className="card-img-top" width={"328px"} height={"189px"} style={{borderRadius:"10px"}} src={urlToImage ? urlToImage : "https://th.bing.com/th/id/R.92b9c9edc227f9d262ecc5c31c23db8e?rik=LwiU3pX8Ri6mLg&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f04%2fgood-wallpapers7.jpg&ehk=PcxVBXrwfkwP7QV%2bDIDHLrnDav4uXJY8vMTIeQaJfKI%3d&risl=&pid=ImgRaw&r=0"} alt="Not found" />
                <div className="card-body">
                    <h5 className="card-title">{title ? title.split(" ").length > 17 ? title.split(" ").slice(0, 17).join(" ") + "..." : title : "Sorry no content available..."}</h5>
                    <p className="card-text">{content ? content.split(" ").length > 20 ? content.split(" ").slice(0, 20).join(" ") + "..." : content+"..." : "Sorry no content available..."}<a href={url} > Read more</a></p>
                    <p>Published by {author ? author : "Newsdesk"} at {(new Date(publishedAt)).toLocaleTimeString('en-US', { hour: "numeric", minute: "numeric" })} </p>
                    
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
