import client from '@graphql/client';
import { GET_PLACES } from '@graphql/queries';
import { MapProps } from '@components/Map';
import HomeTemplate from '@templates/Home';

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />;
}

export const getStaticProps = async () => {
  const { places } = await client.request(GET_PLACES);

  return { props: { places } };
};
