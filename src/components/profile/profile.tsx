import { ProfileStyles } from './styles'
import profileImage from '../../assets/profile.jpg'

interface ButtonProps {
}

const Profile = ({ }: ButtonProps): JSX.Element => {
  return (
    <ProfileStyles>
      <img src={profileImage} alt="photo profile" />
      <h3 className="w-2/3 text-lg font-normal"> Hi! Thanks for visiting my page. I'm <strong>Julio</strong> and I'm from Colombia. I'm a <b>Front-end developer</b> with over 7 years' experience. I'm going to <b>show you a little bit about me and my work</b>. If you need more info or you have any question, <b>do not hesitate to contact me.</b></h3>
    </ProfileStyles>  
  );
};

export default Profile;