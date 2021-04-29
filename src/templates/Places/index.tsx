import Image from 'next/image';
import { Close } from '@styled-icons/evaicons-solid/Close';

import LinkWrapper from '@components/LinkWrapper';

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
    description?: {
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

          <S.Body dangerouslySetInnerHTML={{ __html: place.description?.html || '' }} />

          <S.Gallery>
            {place.gallery.map((photo, index) => (
              <Image key={`photo-${index}`} src={photo.url} alt={place.name} width={1000} height={600} quality={75} />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
