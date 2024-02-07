import { Link } from "react-router-dom";
import { Info, Picture, Root, Title } from "../styles/caseStudyStyles";

export default function CaseStudy({ title, source, link }) {
  return (
    <Root>
      <Link to={link} preventScrollReset={false}>
        <Picture>
          <img src={source} alt="caseStudyImg" />
        </Picture>
        <Info>
          <Title>{title}</Title>
          <div>View Case Study</div>
        </Info>
      </Link>
    </Root>
  );
}
