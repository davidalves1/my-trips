import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

import client from '@graphql/client';
import { GET_PLACES, GET_PLACE_BY_SLUG } from '@graphql/queries';
import { GetPlacesQuery, GetPlaceBySlugQuery } from '@graphql/generated/graphql';
import PlacesTemplate, { PlacesTemplateProps } from '@templates/Places';

export default function Place({ place }: PlacesTemplateProps) {
  const router = useRouter();

  // Também pode ser retornado um loading enquanto está sendo carregado
  if (router.isFallback) return null;

  return <PlacesTemplate place={place} />;
}

export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, { first: 3 });

  const paths = places.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(GET_PLACE_BY_SLUG, { slug: `${params?.slug}` });

  if (!place) return { notFound: true };

  return {
    revalidate: 60,
    props: { place },
  };
};
