import { Link } from "react-router-dom";
import { Info, Picture, Root, Title } from "../styles/studyCaseStyles";

export default function StudyCase({ title, source, link }) {
  return (
    <Root>
      <Link to={link} preventScrollReset={false}>
        <Info>
          <Title>{title}</Title>
          <div>View Case Study</div>
        </Info>
        <Picture>
          <img src={source} alt="caseStudyImg" />
        </Picture>
      </Link>
    </Root>
  );
}
