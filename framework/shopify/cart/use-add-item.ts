import { useAddItem } from "@common/cart";
import { MutationHook } from "@common/types/hooks";

export default useAddItem;

export const handler: MutationHook = {
  fetcher: (input: any) => {
    console.log("fetching data");
    return JSON.stringify(input) + "hello function";
  },
  useHook: ({fetch}) => {
    return (input: any) => {
      const response = fetch(input);

      return {
        output: response,
      };
    };
  },
};
