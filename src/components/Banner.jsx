import "../assets/Banner.css";

function Banner(props) {
    const pageName = props.pageName
    let imgBanner = "";
    let bannerText = "";

    switch (pageName) {
        case "Home":
            imgBanner = "../images/kasa-banner-home.png";
            bannerText = "Chez vous, partout et ailleurs"
            break;
        case "About":
            imgBanner = "../images/kasa-banner-about.png";
            break;
        default:
            break;
    }

    return (
        <section className="kasa-banner">
            <img className="kasa-banner-img" src={imgBanner} alt="Bannière du site qui représente un paysage" />
            <p className="kasa-banner-text">{bannerText}</p>
        </section>
    );
}

export default Banner