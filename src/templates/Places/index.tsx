import LinkWrapper from '@components/LinkWrapper';
import { Close } from '@styled-icons/evaicons-solid/Close';

import * as S from './style';

type ImageProps = {
  url: string;
  width: number;
  height: number;
};

export type PlacesTemplateProps = {
  place: {
    slug: string;
    name: string;
    description: {
      html: string;
    };
    gallery: ImageProps[];
  };
};

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  return (
    <>
      <LinkWrapper href="/">
        <Close size={32} />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body dangerouslySetInnerHTML={{ __html: place.description.html }} />

          <S.Gallery>
            {place.gallery.map((photo, index) => (
              <img key={`photo-${index}`} src={photo.url} alt={place.name} />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
