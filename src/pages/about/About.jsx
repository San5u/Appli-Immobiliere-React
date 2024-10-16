import Banner from "../../components/Framework/Banner";
import ImageAPropos from "../../assets/ImageApropos.png";
import Collapse from "../../components/Collapse/Collapse";
import aproposJson from "../../Information/About.json";

function Apropos()  {
    return (
        <div className="a-propos">
            <div className="banner-apropos-container">
                <Banner bgImage={ImageAPropos} alt="Montagnes"/>
            </div>
            <div className="collapse-apropos-container">
                {aproposJson.map((item, index) => {
                    return <Collapse key={index} titre={item.title}>{item.description}</Collapse>
                })}
            </div>
        </div>
    );
};

export default Apropos;