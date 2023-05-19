
const BlogCard = (props) => {

    let description = (props.shortDescription).toString();
    description = description.slice(0, 100);

    const getSlug =(e)=>{
        let temp = e.target.closest(".card");
        props.getSlug(temp.getAttribute("data-slug"));
    }

    return <>
        <div className="card" onClick={getSlug} data-slug={props.slug} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <img src={props.thumb} className="card-img-top card-image" alt="..." />
            <div className="card-body">
                <h5 className="card-title" style={{ fontFamily: "Quicksand", fontWeight: "600" }}>{props.title}</h5>
                <p className="card-text" style={{ fontFamily: "Quicksand", fontWeight: "500", textAlign: "justify" }}>{description}</p>
            </div>
        </div>
    </>
}


export default BlogCard;