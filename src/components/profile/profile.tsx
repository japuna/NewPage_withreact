import { ProfileStyles } from './styles'
import profileImage from '../../assets/profile.jpg'

interface ButtonProps {
}

const Profile = ({ }: ButtonProps): JSX.Element => {
  return (
    <ProfileStyles>
      <div className="w-3/4">
        <h2><span className="text-white">Curriculum</span><span className="text-secondary">Vitae</span></h2>
      </div>  
      <img src={profileImage} alt="photo profile" />
    </ProfileStyles>  
  );
};

export default Profile;