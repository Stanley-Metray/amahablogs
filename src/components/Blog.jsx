
import { useEffect, useRef, useState } from "react";

const Blog = (props) => {
    const bodyText = useRef();
    const [blog, setBlog] = useState({ "cover": "", title: "" });

    useEffect(()=>{
        fetch("https://api.theinnerhour.com/v1/blogdetail/your-productivity-doesnt-determine-your-worth")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setBlog(data.blog);
      });
        bodyText.current.innerHTML = blog.body;
    });

    return <>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <button type="button" className="btn-close rounded-pill bg-dark d-block p-2 btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div className="modal-body" style={{ padding: "0px", margin: "0px" }}>
                        <img src={props.cover} className="card-img-top modal-img" alt="..." />
                        <div className="container p-3">
                            <h5 className="card-title pt-0 pb-2" style={{ fontFamily: "Quicksand", fontWeight: "600" }}>{props.slug}</h5>
                            <p ref={bodyText} className="card-text pt-0 pb-2" style={{ fontFamily: "Quicksand", fontWeight: "500" }}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

// const Blog = ()=>{
//     return <>

//     </>
// }


export default Blog;