import "../assets/Host.css"

function Host({ infos }) {
    return (
        <section className="host-block">
            <p className="host-name">{infos.name}</p>
            <img src={infos.picture} alt={infos.name} className="host-image" />
        </section>
    )
}

export default Host