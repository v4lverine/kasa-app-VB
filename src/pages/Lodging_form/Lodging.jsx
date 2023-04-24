import Slideshow from "../../components/Slideshow";
import "../../assets/Lodging.css"

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
        "location": "Ile de France - Paris 17e",
        "equipments": [
            "Équipements de base",
            "Micro-Ondes",
            "Douche italienne",
            "Frigo",
            "WIFI"
        ],
        "tags": [
            "Batignolle",
            "Montmartre"
        ]
    }
    //affiche le contenu d'un logement
    return (
        <div className="lodging-main"> 
            <div>
                <Slideshow images={lodging.pictures}/>
                <h2>{lodging.title}</h2>
            </div>
        </div>
        );
    }
    
    export default Lodging