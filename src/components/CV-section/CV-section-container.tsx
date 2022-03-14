import CVSection from "./CV-section";
import { CVSectionContainerStyles } from "./styles";

interface CVSectionContainerProps {
  CVData: any;
}

const CVSectionContainer = ({
  CVData,
}: CVSectionContainerProps): JSX.Element => {
  return (
    <CVSectionContainerStyles>
      <CVSection item={CVData.Profile} title="Profile"></CVSection>
      <CVSection item={CVData.Experience} title="Experience"></CVSection>
      <CVSection item={CVData.Education} title="Education"></CVSection>
    </CVSectionContainerStyles>
  );
};

export default CVSectionContainer;
