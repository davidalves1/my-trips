import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { MapProps } from '@components/Map';
import { Info } from '@styled-icons/evaicons-solid/Info';
import LinkWrapper from '@components/LinkWrapper';

const Map = dynamic(() => import('@components/Map'), { ssr: false });

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went"
        canonical="https://my-trips.davidalves1.com"
      />
      <LinkWrapper href="/about">
        <Info size={32} />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
