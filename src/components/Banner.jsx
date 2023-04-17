import "../assets/Banner.css";

function Banner(props){
    const pageName = props.pageName
    let imgBanner = "";
    let bannerText = document.getElementsByClassName("kasa-banner-text"[0]);

    // if(pageName != "Home") {bannerText = ""};
    
    switch (pageName) {
        case "Home":
            imgBanner = "../images/kasa-banner-home.png";
            break;
        case "About":
            imgBanner = "../images/kasa-banner-about.png";
            // bannerText = "";
            break;
    }

    return (
        <div className="kasa-banner">
                <img className="kasa-banner-img" src={imgBanner} alt="Image de la bannière du site"/>
                <p className="kasa-banner-text">Chez vous, partout et ailleurs</p>
        </div>
    );
} 

export default Banner