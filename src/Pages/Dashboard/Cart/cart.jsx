import useCart from "../../../Hooks/useCart";


const cart = () => {
    const [addToCart]=useCart()
    console.log(addToCart);
    const totalPrice = addToCart.reduce((total, item) => {
        const price = item.price; 
        console.log(price);
        return total + price;
    }, 0);


    return (
        <div>
            <h2 className="text-4xl">
                items:{addToCart.length}
            </h2>
            <h2 className="text-4xl">
                Total Price:{totalPrice}
            </h2>
            <button className="btn btn-primary">Pay</button>
        </div>
    );
};

export default cart;