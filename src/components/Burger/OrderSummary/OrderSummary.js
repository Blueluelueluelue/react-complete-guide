import React, { Fragment, Component } from 'react'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    UNSAFE_componentWillUpdate() {
        console.log('[OrderSummary.js] will update')
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(ingKey => {
            return (
                <li key={ingKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingKey}</span>:
                    {this.props.ingredients[ingKey]}
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
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Success" click={this.props.continue}>Continue</Button>
                <Button btnType="Danger" click={this.props.cancel}>Cancel</Button>
            </Fragment>
        );
    }
}
export default OrderSummary