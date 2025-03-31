import { createContext } from 'react'
const CartContext = createContext();
export default function CartProvider({children}) {
    const [contador, setContador] = useState(0);
  return (
    <CartContext.Provider value={{contador}}>
        {children}
    </CartContext.Provider>
  )
}


