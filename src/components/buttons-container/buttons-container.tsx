import { ButtonContainerStyles } from './styles'
import ButtonPage  from '../button/button'

interface ButtonProps {
}

const ButtonContainer = ({ }: ButtonProps): JSX.Element => {
  return (
    <ButtonContainerStyles>
      <ButtonPage text="CV"></ButtonPage>
      <ButtonPage text="Portfolio"></ButtonPage>
      <ButtonPage text="Contact"></ButtonPage>
    </ButtonContainerStyles>
  );
};

export default ButtonContainer;