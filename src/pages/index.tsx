import dynamic from 'next/dynamic';
import { Info } from '@styled-icons/evaicons-solid/Info';
import LinkWrapper from '@components/LinkWrapper';

const Map = dynamic(() => import('@components/Map'), { ssr: false });

const fakePlaces = [
  {
    id: '1',
    name: 'Baixo Guandu',
    slug: 'baixo-guandu',
    location: {
      latitude: -19,
      longitude: -40,
    },
  },
];

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <Info size={32} />
      </LinkWrapper>
      <Map places={fakePlaces} />
    </>
  );
}
