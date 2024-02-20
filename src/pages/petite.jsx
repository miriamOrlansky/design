import {
  Root,
  TitleSection,
  Title,
  Subtitle,
  Row,
} from "../styles/pagesStyles";
import personas from "../Images/personas.png";
import journey from "../Images/journeyFridgIt.png";
import sketch1 from "../Images/sketch1.jpg";
import sketch2 from "../Images/sketch2.jpg";
import sketch3 from "../Images/sketch3.jpg";
import sketch4 from "../Images/sketch4.jpg";
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
      <Row>
        {" "}
        <div className="thick regular">Design Development</div>
      </Row>
      <Row>
        <div>
          <div className="thick small">Sketches</div>
          <div>
            Flow charts - make sure everything is well connected and the user
            can navigate easily.
          </div>
          <div>
            I used a horizontal layout for this design to allow the user to see
            full-screen recipes and videos, as well as to create an open and
            free interface with space in between the elements
          </div>
        </div>
      </Row>

      <Row>
        <img src={sketch1} alt="sketch1" />
        <img src={sketch2} alt="sketch2" />
      </Row>

      <Row>
        <img src={sketch3} alt="sketch3" />
        <img src={sketch4} alt="sketch4" />
      </Row>
      <Row>
        <div className="thick medium">UI Design</div>
      </Row>
      <Row>
        <div>
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)", maxWidth: "100%" }}
            width="600"
            height="337.66"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3pNgPA3INnIdGQiWkHrc66%2FFridg-It%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D271-4233%26viewport%3D80%252C253%252C0.02%26scaling%3Dscale-down%26starting-point-node-id%3D9%253A93"
            allowfullscreen
          ></iframe>
        </div>
        <div className="thin small">
          <div>
            Once I tested out all usability mistakes, I started designing the
            final screens in Figma.
          </div>
          <div>
            The visual style for this design was fresh and light, as it is
            supposed to help organize and not add stress to the user's life.
          </div>
        </div>
      </Row>
      <Row>
        <div>
          <div className="thick medium">Takeaway</div>
          <div className="thin small">
            During this project, I learned how much needs to be sketched and
            planned out before. This was the first time I did a project on this
            scale, and I struggled with the prototyping because I didn't plan
            everything with enough detail, to begin with.
          </div>
        </div>
      </Row>
    </Root>
  );
}
