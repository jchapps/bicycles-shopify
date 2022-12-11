import useCart from "@common/cart/use-cart";
import { createCheckout } from "@framework/utils";


export default useCart;

export const handler = {
  fetchOptions: {
    //get checkout query
    query: "query {hello}",
  },
  async fetcher({ fetch, options, input: { checkoutId } }: any) {
    //need checkoutid
    let checkout;
    //check if checkout exists
    if (checkoutId) {
      const { data } = await fetch({ ...options });

      checkout = data.node;
    } //no checkout then create checkout
    else {
      checkout = await createCheckout(fetch)
    }

    return checkout
  },
  useHook: ({ useData }: any) => {
    const data = useData();
    return {
      data,
    };
  },
};
