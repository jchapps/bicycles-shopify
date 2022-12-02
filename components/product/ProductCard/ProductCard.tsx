import { Product } from "@common/types/product";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image"

interface Props {
  product: Product;
}

const placeholderImg = "/product-image-placeholder.svg"
const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a>
        <div>
          <h3>
            <span>{product.name}</span>
          </h3>
          <span>100</span>
            {product.images && <Image
              alt={product.name ?? "Product Name"}
              src={placeholderImg}
              height={540}
              width={540}
              quality="85"
              layout="responsive"
            />}

        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
