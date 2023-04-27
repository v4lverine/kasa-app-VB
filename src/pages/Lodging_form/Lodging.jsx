import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import Tags from "../../components/Tags";
import Stars from "../../components/Stars";
import Host from "../../components/Host";
import "../../assets/Lodging.css";
import { useLoaderData } from "react-router-dom";

function Lodging() {

    const { lodging } = useLoaderData();

    return (
        <div className="lodging-main">
            <div className="block-location-tag-title">
                <Slideshow images={lodging.pictures} />
                <h2 className="lodging-title">{lodging.title}</h2>
                <p className="lodging-location">{lodging.location}</p>
                <Tags tags={lodging.tags} />
            </div>
            <div className="block-rating-host">
                <Host infos={lodging.host} />
                <Stars rating={lodging.rating} />
            </div>
            <div className="collapses-lodging">
                <Collapse label="Description" className="collapse-descript">
                    <p className="collapse-content">{lodging.description}</p>
                </Collapse>
                <Collapse label="Équipements" className="collapse-equip">
                    <ul className="equipment-lodging">
                        {lodging.equipments.map((equip) =>
                            <li className="collapse-content" key={lodging.equipments}>{equip}</li>)}
                    </ul>
                </Collapse>
            </div>
        </div>
    );
}

export default Lodging