import { Layout } from '@components/common';
import { GetStaticPaths, GetStaticPathsContext, GetStaticPropsContext, InferGetServerSidePropsType } from 'next';


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: {slug: "cool-hat"}},
      { params: {slug: "t-shirt"}},
      { params: {slug: "lightweight-jacket"}}
    ],
    fallback: false
  }
}

export const getStaticProps = async ({params}: GetStaticPropsContext<{slug: string}>) => {
  return {
    props: {
      product: {
        slug: params?.slug
      }
    }
  }
}

export default function ProductSlug({ product }: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <div>
      {product.slug}
    </div>
  );
}

ProductSlug.Layout = Layout
