import { useQuery } from '@tanstack/react-query';
import Layout from '../components/Layout';
import { getProducts } from '../api/productApi';

export const Products = () => {
  const { data } = useQuery(
    {
      queryKey: ['products'],
      queryFn: getProducts
  })
  return (
    <>
      <Layout>
        <h1>Products</h1>
        {
          data?.map(product => <p id={product.id?.toString()}>{product.name} | {product.description} | {product.price}</p>)
        }
      </Layout>
    </>
  );
}
