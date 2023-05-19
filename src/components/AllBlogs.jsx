import BlogCard from "./BlogCard"

const AllBlogs = (props) => {
    let searchTitle = props.searchTitle.toLowerCase();
    const searchResult = new Array();

    if (props.searchTitle) {

        let arr = props.data;

        for (let i in arr) {
            if (arr[i].title.toLowerCase().includes(searchTitle))
                searchResult.push(arr[i]);
        }

        return <>
            <h4 className="text-dark content-title">Search results for: {searchTitle}</h4>
            {
                <div className="row row-cols-1 row-cols-md-3 g-4 pt-3">
                    {
                        searchResult.map((currElement, index) => {
                            return <div key={currElement.title.toString()} className="col">
                                <BlogCard getSlug={props.getSlug} slug={currElement.slug} thumb={currElement.thumb} title={currElement.title} shortDescription={currElement.short_description} />
                            </div>
                        })
                    }
                </div>
            }
        </>
    }
    else {
        return <>
            <div className="row row-cols-1 row-cols-md-3 g-4 pt-3">
                {
                    props.data.map((currElement, index) => {
                        return <div key={currElement.title.toString()} className="col">
                            <BlogCard getSlug={props.getSlug} slug={currElement.slug} thumb={currElement.thumb} title={currElement.title} shortDescription={currElement.short_description} />
                        </div>
                    })
                }
            </div>
        </>
    }
}

export default AllBlogs;