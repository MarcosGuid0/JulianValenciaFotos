import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js"

export const checkout = () => {
    const cantidad = 1;
    const producto = {
        id: 30,
        nombre: "Xbox",
        precio: 6000
    };
  return (
    <div>
    <h1>checkout</h1>
    {cantidad === 0 ? (<p>Carrito Vacio</p>) : 
    (
    <div key = {producto.id}>
        <h3> {producto.nombre} </h3>
        <p>{producto.precio}</p>
    </div>
    )

    }
    (
    {cantidad > 0 && (
    <PayPalButtons
        createOrder={(data, actions) => {
            return actions.order.create(
            {
            purchase_units: [
                    {
                    description: "Compra o lloro",
                    amount: {
                        currency_code: "MXN",
                        value: producto.precio,
                        breackdown: {
                            item_tota: {
                                currency_code: "MXN",
                                value: producto.precio
                            },
                        },
                    },
                    },
                ],
            },
            )
        }
        }
    />
    )}
    </div>
  )
}

export default checkout;