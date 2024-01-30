import qs from "query-string";

import { Product } from "@/types";

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringify({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  console.log(url);
  const res = await fetch(URL, { next: { revalidate: 0 } });
  return res.json();
};

export { getProducts };
