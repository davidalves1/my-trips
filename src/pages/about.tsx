import client from '@graphql/client';
import { GET_PAGES } from '@graphql/queries';
import PagesTemplate from '@templates/Pages';
import { useRouter } from 'next/dist/client/router';

export default function PageTemplate() {
  const router = useRouter();

  if (router.isFallback) return null;

  return <PagesTemplate />;
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES);

  const paths = pages.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

// export const getStaticProps = async () => {
//   const { pages } = await client.request(GET_PAGES);
//   console.log(pages);

//   return {
//     props: {},
//   };
// };
