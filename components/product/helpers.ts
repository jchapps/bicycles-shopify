import { Product } from "@common/types/product";

export type Choices = {
  [P in AvailableChoices]: string;
};

type AvailableChoices = "color" | "size" | string;

//check is color variant is the same as in choices so we can add to it cart

export const getVariant = (product: Product, choices: Choices) =>
  product.variants.find(variant =>
    variant.options.every(variantOption => {
      const optionName = variantOption.displayName.toLocaleLowerCase()
        return optionName in choices &&
         choices[optionName] === variantOption.values[0].label
    })
  )
