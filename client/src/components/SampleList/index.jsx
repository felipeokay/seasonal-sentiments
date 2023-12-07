import { useEffect } from 'react';
import SampleItem from '../SampleItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function SampleList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    // console.log("I got here", state.products)
    // if (!currentCategory) {
    //   return state.products;
    // }
   

    return state.products.filter(
        (product) => {
          if (product.category[0]?.name === "Most Popular"){
            return true
          } 
          if (product.category[1]?.name === "Most Popular"){
            return true
          }
            return false
        }
      );
  }

  return (
    <div className="my-40 text-center">
      <h2 className="text-4xl font-semibold text-[#4d6242] mb-8">Popular Easy Picks!</h2>
      {state.products.length ? (
        <div className="flex flex-wrap justify-center">
          {filterProducts().map((product) => (
            <SampleItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
    </div>
  );
}

export default SampleList;
