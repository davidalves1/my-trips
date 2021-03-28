import dynamic from 'next/dynamic';

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
  return <Map places={fakePlaces} />;
}
