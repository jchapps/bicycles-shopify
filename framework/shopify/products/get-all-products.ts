import getAllProductsQuery from "../utils/queries/get-all-products";
import fetchApi from "../utils/fetch-api";
import { ProductConnection } from "../schema";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<{ products: ProductConnection }>({
    query: getAllProductsQuery,
  });

  return data.products;
};

export default getAllProducts;
