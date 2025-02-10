import NotFoundImage from '../../assets/NOT_FOUND.png';
import { NotFoundPageStyled } from './NotFoundPage.styles';

const NotFoundPage = () => {
  return (
    <NotFoundPageStyled>
      <img src={NotFoundImage} alt='Error 404' />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
