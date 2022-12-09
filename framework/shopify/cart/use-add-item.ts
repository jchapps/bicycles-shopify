import { useAddItem } from "@common/cart";

export default useAddItem


export const handler = {
  fetcherL: () => {
    console.log("fetching data")
  },
  useHook: () => {
    return (input: any) => {
      return {
        output: JSON.stringify(input) + 'hello function'
      };
    };
  }
}
