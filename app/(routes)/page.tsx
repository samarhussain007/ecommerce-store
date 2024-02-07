import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import ProductList from "@/components/ProductList";
import Billboard from "@/components/ui/Billboard";
import { Container } from "@/components/ui/Container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({
    isFeatured: true,
  });

  console.log(products);

  const billboard = await getBillboard("11e92db3-b3e7-46d0-8d4f-41161b4da048");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Product" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
