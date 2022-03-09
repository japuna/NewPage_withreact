import { ButtonSection } from './styles'

interface ButtonProps {
  text: string;
}

const ButtonPage = ({ text}: ButtonProps): JSX.Element => {
  return (
    <ButtonSection className="hover:border-primary hover:text-white hover:bg-primary">
      {text}
    </ButtonSection>
  );
};

export default ButtonPage;