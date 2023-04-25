import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import Tags from "../../components/Tags";
import Stars from "../../components/Stars";
import Host from "../../components/Host";
import "../../assets/Lodging.css";

function Lodging() {

    const lodging = {
        "id": "c67ab8a7",
        "title": "Appartement cosy",
        "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "pictures": [
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
        ],
        "description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
        "host": {
            "name": "Nathalie Jean",
            "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
        },
        "rating": "5",
        "location": "Île-de-France - Paris 17e",
        "equipments": [
            "Équipements de base",
            "Micro-ondes",
            "Douche italienne",
            "Frigo",
            "WIFI"
        ],
        "tags": [
            "Batignolle",
            "Montmartre"
        ]
    }

    const equips = lodging.equipments;

    
    //affiche le contenu d'un logement
    return (
        <div className="lodging-main">
            {/* <div className="upper-block">  */}
                <div className="block-location-tag-title">
                    <Slideshow images={lodging.pictures}/>
                    <h2 className="lodging-title">{lodging.title}</h2>
                    <p className="lodging-location">{lodging.location}</p>
                    <Tags tags={lodging.tags}/>
                </div>
                <div className="block-rating-host">
                    <Host infos={lodging.host}/>
                    <Stars rating={lodging.rating}/>
                </div>
            {/* </div> */}
            <div className="collapses-lodging">
                <Collapse label="Description" className="collapse-descript">
                    <p className="collapse-content">{lodging.description}</p>
                </Collapse>
                <Collapse label="Équipements" className="collapse-equip">
                    <ul className="equipment-lodging">
                        {equips.map((equip) => <li className="collapse-content" key={equips}>{equip}</li>)}
                    </ul>
                </Collapse>
            </div>
        </div>
        );
    }
    
    export default Lodging