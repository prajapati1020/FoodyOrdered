import Cart from "./Component/Cart.jsx";
import Checkout from "./Component/Checkout.jsx";
import Header from "./Component/Header.jsx";
import Meals from "./Component/Meals.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserContextProgress.jsx";
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
      
      <Header/>
      <Meals/>
      <Cart/>
      <Checkout/>
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
