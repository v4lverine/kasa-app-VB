import "../assets/Tags.css"

function Tags({tags}){
    return <ul className="tag-list">
                {tags.map((tag) => <li key={tags} className="tag-name">{tag}</li>)}
            </ul>
}

export default Tags 