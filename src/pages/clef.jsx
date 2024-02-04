import {
  Root,
  TitleSection,
  Title,
  Subtitle,
  Row,
} from "../styles/pagesStyles";

import clef1 from "../Images/clef1.jpg";
import clef2 from "../Images/clef2.jpg";
import clef3 from "../Images/clef3.jpg";
import visual1 from "../Images/clefcolor1.jpg";
import visual2 from "../Images/clefcolor2.jpg";
import visual3 from "../Images/clefcolor3.jpg";

export default function Clef() {
  return (
    <Root>
      <TitleSection backColor="#64AFFF">
        <Title>Clef Changed!</Title>
        <Subtitle>Music Jamming App</Subtitle>
      </TitleSection>

      <Row>
        <div>
          <div className="thick large">Class Project</div>
          <div className="thin small">
            <div>Problem: No one to have jam sessions with.</div>
            <div>Role: Sole Designer</div>
          </div>
        </div>
      </Row>
      <Row>
        <div className="thick regular top">Final Prototype</div>
      </Row>
      <Row>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)", maxWidth: "100%" }}
          width="600"
          height="337.66"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDfiFKiu5hcIHiRWy6D20UL%2FCLEFFF%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D125-3820%26viewport%3D1820%252C320%252C0.19%26t%3Dw57Ak8Q3ClWq9ORG-1%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A3%26mode%3Ddesign"
          allowfullscreen
        ></iframe>
      </Row>
      <Row>
        <div className="thick regular top">User Development</div>
      </Row>
      <Row>
        <div className="thick small">Interviews</div>
      </Row>
      <Row>
        <div className="center third">
          <div className="medium extraLarge purple"> 100% </div>
          <div className="purple medium large"> Of Interviewees</div>
          <div>
            Said that their friends conflicting schedules lessens the amount of
            time they play.
          </div>
        </div>
        <div className="center third">
          <div className="medium extraLarge purple"> 66% </div>
          <div className="purple medium large"> Of Interviewees</div>
          <div>
            Said that lack of access to networking for musicians makes them not
            reach out to new musicians.
          </div>
        </div>
      </Row>
      <Row>
        <div className="thick regular top">Sketches</div>
      </Row>
      <Row>
        <div>
          I created these wireframes based on the user interviews by gearing the
          app towards creating an easy way for musicians to connect with other
          musicians.
        </div>
      </Row>

      <Row>
        <img className="fourth" src={clef1} alt="clef1" />
        <img className="fourth" src={clef2} alt="clef2" />
        <img className="fourth" src={clef3} alt="clef3" />
      </Row>

      <Row>
        <div className="thick regular top">Visual Design</div>
      </Row>
      <Row>
        <div>
          I then digitally created the visual wireframes based on the sketches.
        </div>
      </Row>
      <Row>
        <img className="fourth" src={visual1} alt="clef1" />
        <img className="fourth" src={visual2} alt="clef2" />
        <img className="fourth" src={visual3} alt="clef3" />
      </Row>
      <Row>
        <div className="thick regular top">Final Prototype</div>
      </Row>
      <Row>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)", maxWidth: "100%" }}
          width="600"
          height="337.66"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDfiFKiu5hcIHiRWy6D20UL%2FCLEFFF%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D125-3820%26viewport%3D1820%252C320%252C0.19%26t%3Dw57Ak8Q3ClWq9ORG-1%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A3%26mode%3Ddesign"
          allowfullscreen
        ></iframe>
      </Row>
    </Root>
  );
}
