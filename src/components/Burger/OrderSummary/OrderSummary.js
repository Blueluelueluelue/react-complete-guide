import React, { Fragment } from 'react'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => {
            return (
                <li key={ingKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingKey}</span>:
                    {props.ingredients[ingKey]}
                </li>
            )
        })

    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients.</p> 
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Success" click={props.continue}>Continue</Button>
            <Button btnType="Danger" click={props.cancel}>Cancel</Button>
        </Fragment>
    );
}

export default OrderSummary