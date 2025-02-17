import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import useAuthContext from "../../hooks/useAuthContext";
import {
  ProfileDataContainerStyled,
  ProfilePageStyled,
} from "./ProfilePage.styles";

const ProfilePage = () => {
  const {
    logOutUser,
    user: {
      data: { email, firstName, lastName, phone },
    },
  } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = () => {
    logOutUser();
    navigate("/login");
  };

  return (
    <ProfilePageStyled>
      <h3>Mi Perfil</h3>
      <ProfileDataContainerStyled>
        <h4>{`${firstName} ${lastName}`}</h4>
        <p>{email}</p>
        <p>Teléfono</p>
        <p>{phone}</p>
      </ProfileDataContainerStyled>
      <Button onClick={handleClick}>Cerrar Sesión</Button>
    </ProfilePageStyled>
  );
};

export default ProfilePage;
