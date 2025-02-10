import { ProfileDataContainerStyled, ProfilePageStyled } from './ProfilePage.styles';

const ProfilePage = () => {
  return (
    <ProfilePageStyled>
      <h3>Mi Perfil</h3>
      <ProfileDataContainerStyled>
        <h4>Juan Perez</h4>
        <p>juan.perez@correo.com</p>
        <p>Teléfono</p>
        <p>+56 999 999 999</p>
      </ProfileDataContainerStyled>
    </ProfilePageStyled>
  );
};

export default ProfilePage;
