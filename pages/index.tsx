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
        description="This is a test store with placeholder products. Bicycles were introduced in the 19th century in Europe. By the early 21st century, more than 1 billion were in existence. These numbers far exceed the number of cars, both in total and ranked by the number of individual models produced."
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
