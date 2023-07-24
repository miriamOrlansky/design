import {
  Root,
  TitleSection,
  Title,
  Subtitle,
  Row,
} from "../styles/pagesStyles";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

export default function Graphics() {
  return (
    <Root>
      <TitleSection backColor="#64AFFF">
        <Title>Graphic Design</Title>
        <Subtitle>Various Graphic Design Projects</Subtitle>
      </TitleSection>
    </Root>
  );
}
