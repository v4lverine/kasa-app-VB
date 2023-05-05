import "../assets/Tags.css"

function Tags({ tags }) {
    return (
        <ul className="tag-list">
            {tags.map((tag) => <li key={tag} className="tag-name">{tag}</li>)}
        </ul>
    )
}

export default Tags 