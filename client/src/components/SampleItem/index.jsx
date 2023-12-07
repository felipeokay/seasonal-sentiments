import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
// import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function SampleItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
  } = item;

  const { cart } = state

  //   const addToCart = () => {
  //     const itemInCart = cart.find((cartItem) => cartItem._id === _id)
  //     if (itemInCart) {
  //       dispatch({
  //         type: UPDATE_CART_QUANTITY,
  //         _id: _id,
  //         purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
  //       });
  //       idbPromise('cart', 'put', {
  //         ...itemInCart,
  //         purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
  //       });
  //     } else {
  //       dispatch({
  //         type: ADD_TO_CART,
  //         product: { ...item, purchaseQuantity: 1 }
  //       });
  //       idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
  //     }
  //   }

  return (
    <div className="max-w-md mx-14 mb-14 bg-white border border-gray-300 rounded-xl overflow-hidden shadow-md">
      <Link to={`/products/${_id}`} className="block">
        <img
          alt={name}
          src={`/images/${image}`}
          className="w-full h-60 object-contain"
        />
        <div className="p-3">
          <p className="font-semibold text-md text-gray-800 truncate">{name}</p>
        </div>
      </Link>
    </div>
  );
}

export default SampleItem;