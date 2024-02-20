import {
  Root,
  TitleSection,
  Title,
  Subtitle,
  Row,
} from "../styles/pagesStyles";
import bundtAsset from "../Images/bundtAsset.png";
import cookieAsset from "../Images/cookieAsset.png";
import crossiontAsset from "../Images/crossiontAsset.png";
import mainPetite from "../Images/mainPetite.png";
import inspo1 from "../Images/inspo1.jpg";
import inspo2 from "../Images/inspo2.jpg";
import inspo3 from "../Images/inspo3.jpg";
import inspo4 from "../Images/inspo4.jpg";
import inspo7 from "../Images/inspo7.jpg";
import inspo8 from "../Images/inspo8.jpg";
import primary1 from "../Images/primary1.jpg";
import primary2 from "../Images/primary2.jpg";
import primary3 from "../Images/primary3.jpg";
import secondary1 from "../Images/secondary1.jpg";
import secondary2 from "../Images/secondary2.jpg";
import secondary3 from "../Images/secondary3.jpg";
import alternate1 from "../Images/alternate1.jpg";
import alternate2 from "../Images/alternate2.jpg";
import alternate3 from "../Images/alternate3.jpg";
import cakebox from "../Images/cakebox.jpg";

export default function Petite() {
  return (
    <Root>
      <TitleSection backColor="#c49a6c">
        <Title>Petite Patisserie</Title>
        <Subtitle>Branding for a quaint french bakery</Subtitle>
      </TitleSection>
      <Row>
        <div className="thick regular top">Company Statement</div>
      </Row>
      <Row>
        <div>
          <div className="thin small">
            <div>
              {" "}
              Petite Patisserie is your local homemade bakery. We strive to
              cater to the individual and to the community as a whole.
            </div>
          </div>
        </div>
      </Row>
      <Row>
        <img className="twoThird" src={mainPetite} alt="mainPetite" />
      </Row>
      <Row>
        <div className="thin small top">Supporting Branding</div>
      </Row>
      <Row>
        <img className="third" src={cookieAsset} alt="cookie" />
        <img className="third" src={bundtAsset} alt="bundt" />
        <img className="third" src={crossiontAsset} alt="crossiont" />
      </Row>

      <Row>
        <div className="thick regular top">Brand Development</div>
      </Row>
      <Row>
        <div className="thin small">Brand Inspiration</div>
      </Row>
      <Row>
        <div>
          <img className="sevenths" src={inspo1} alt="inspo1" />
          <img className="sevenths" src={inspo2} alt="inspo1" />
          <img className="sevenths" src={inspo3} alt="inspo1" />
          <img className="sevenths" src={inspo4} alt="inspo1" />
          <img className="sevenths" src={inspo7} alt="inspo1" />
          <img className="sevenths" src={inspo8} alt="inspo1" />
        </div>
      </Row>
      <Row>
        <div className="thin small top">Primary Colors</div>
      </Row>
      <Row>
        <img className="third" src={primary1} alt="primary1" />
        <img className="third" src={primary2} alt="primary2" />
        <img className="third" src={primary3} alt="primary3" />
      </Row>
      <Row>
        <div className="thin small top">Secondary Colors</div>
      </Row>
      <Row>
        <img className="third" src={secondary1} alt="secondary1" />
        <img className="third" src={secondary2} alt="secondary2" />
        <img className="third" src={secondary3} alt="secondary3" />
      </Row>
      <Row>
        <div className="thin small top">Alternate Logo Uses</div>
      </Row>
      <Row>
        <img className="third" src={alternate1} alt="alternate1" />
        <img className="third" src={alternate2} alt="alternate2" />
        <img className="third" src={alternate3} alt="alternate3" />
      </Row>
      <Row></Row>
      <Row>
        <div className="thin small top">Mockup</div>
      </Row>
      <Row>
        <img className="twoThird" src={cakebox} alt="cakebox" />
      </Row>
    </Root>
  );
}
