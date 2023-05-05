import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import Tags from "../components/Tags";
import Stars from "../components/Stars";
import Host from "../components/Host";
import "../assets/Lodging.css";
import { useLoaderData } from "react-router-dom";

function Lodging() {

    const { lodging } = useLoaderData();

    return (
        <div className="lodging-main">
            <Slideshow images={lodging.pictures} />
            <div className="head-block-lodging">
                <div className="block-location-tag-title">
                    <h2 className="lodging-title">{lodging.title}</h2>
                    <p className="lodging-location">{lodging.location}</p>
                    <Tags tags={lodging.tags} />
                </div>
                <div className="block-rating-host">
                    <Stars rating={lodging.rating} />
                    <Host infos={lodging.host} />
                </div>
            </div>
            <div className="collapses-lodging">
                <div className="collapse-descript">
                    <Collapse label="Description">
                        <p className="collapse-content">{lodging.description}</p>
                    </Collapse>
                </div>
                <div className="collapse-equip">
                    <Collapse label="Équipements">
                        <ul className="equipment-lodging">
                            {lodging.equipments.map((equip) =>
                                <li className="collapse-content" key={equip}>{equip}</li>)}
                        </ul>
                    </Collapse>
                </div>
            </div>
        </div>
    );
}

export default Lodging