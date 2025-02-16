import useAuthContext from '../../hooks/useAuthContext';
import { ProfileDataContainerStyled, ProfilePageStyled } from './ProfilePage.styles';

const ProfilePage = () => {
  const {
    user: {
      data: { email, firstName, lastName, phone },
    },
  } = useAuthContext();

  return (
    <ProfilePageStyled>
      <h3>Mi Perfil</h3>
      <ProfileDataContainerStyled>
        <h4>{`${firstName} ${lastName}`}</h4>
        <p>{email}</p>
        <p>Teléfono</p>
        <p>{phone}</p>
      </ProfileDataContainerStyled>
    </ProfilePageStyled>
  );
};

export default ProfilePage;
