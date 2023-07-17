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

export default function Clef() {
  return (
    <Root>
      <TitleSection backColor="#D8D6FF">
        <Title>Clef</Title>
        <Subtitle>Music Jamming App</Subtitle>
      </TitleSection>

      <Row>
        <div>
          <div className="thick large">Class Project</div>
          <div className="thin small">
            <div>Problem: No one to jam with.</div>
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
          src="https://www.figma.com/proto/DfiFKiu5hcIHiRWy6D20UL/CLEFFF?page-id=0%3A1&type=design&node-id=125-3820&viewport=1820%2C320%2C0.19&t=w57Ak8Q3ClWq9ORG-1&scaling=scale-down&starting-point-node-id=5%3A3&mode=design"
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
        <div className="thick regular top">Wireframes</div>
      </Row>
      <Row>
        <div>
          I created these wireframes based on the user interviews by gearing the
          app solely towards notifying the user when monthly budgets are getting
          used. Take away the complications - once the app is set up, it will do
          everything.
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
        <div>I then added the visual designs to the wireframes.</div>
      </Row>

      <Row>
        <img className="fourth" src={visual1} alt="visual1" />
        <img className="fourth" src={visual2} alt="visual2" />
        <img className="fourth" src={visual3} alt="visual3" />
        <img className="fourth" src={visual4} alt="visual4" />
      </Row>

      <Row>
        <div className="thick regular top">Final Prototype</div>
      </Row>
      <Row>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)", maxWidth: "100%" }}
          width="600"
          height="337.66"
          src="https://www.figma.com/proto/DfiFKiu5hcIHiRWy6D20UL/CLEFFF?page-id=0%3A1&type=design&node-id=125-3820&viewport=1820%2C320%2C0.19&t=w57Ak8Q3ClWq9ORG-1&scaling=scale-down&starting-point-node-id=5%3A3&mode=design"
          allowfullscreen
        ></iframe>
      </Row>
    </Root>
  );
}
