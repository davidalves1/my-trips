import LinkWrapper from '@components/LinkWrapper';
import { Close } from '@styled-icons/evaicons-solid/Close';

import * as S from './styles';

export type PageTemplateProps = {
  heading: string;
  body: string;
};

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <Close size={32} />
    </LinkWrapper>

    <S.Title>{heading}</S.Title>

    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Body>
  </S.Content>
);

export default PageTemplate;
