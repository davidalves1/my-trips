import LinkWrapper from '@components/LinkWrapper';
import { Close } from '@styled-icons/evaicons-solid/Close';

import * as S from './styles';

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <Close size={32} />
    </LinkWrapper>

    <S.Title>My Trips</S.Title>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Id venenatis a
        condimentum vitae sapien pellentesque habitant morbi tristique.
      </p>
    </S.Body>
  </S.Content>
);

export default AboutTemplate;
