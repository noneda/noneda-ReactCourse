import { useContextGlobal } from "../../Config";
import { hookCard } from "../../Hooks";

import Item from "./item";
const Cart = () => {
  const { state, dispatch } = useContextGlobal();
  const { totalCart, DeleteAll } = hookCard(state, dispatch);

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      {state.length ? (
        <>
          <div>
            {state.map((_) => (
              <Item key={_.id} actions={dispatch} {..._} />
            ))}
          </div>
          <footer>
            <hr />
            <div className="cart-total">
              total
              <span>${totalCart}</span>
            </div>
            <button className="btn btn-hipster" onClick={DeleteAll}>
              Clear Cart
            </button>
          </footer>
        </>
      ) : (
        <h4 className="empty-cart">is currently empty</h4>
      )}
    </section>
  );
};

export default Cart;
