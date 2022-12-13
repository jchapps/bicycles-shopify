import type { InferGetStaticPropsType } from "next";
import { getAllProducts } from "@framework/product";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid, Hero, Marquee } from "@components/ui";

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="New Arrivals"
        description="This is a test store but we do sell bikes of only the highest quality. Trusted by millions around the world. Offroad, racing, mountain biking. We have everything."
      />
      <Marquee>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} variant="slim" product={product} />
        ))}
      </Marquee>
    </>
  );
}

Home.Layout = Layout;
