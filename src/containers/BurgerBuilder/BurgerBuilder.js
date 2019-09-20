import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(res => this.setState({ ingredients: res.data }))
            .catch(error => this.setState({ error }));
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    updatePurchaseState = (ingredients) => {
        const purchasable = Object.values(ingredients).some(count => count > 0)
        this.setState({ purchasable })
    }

    addIngredientHandler = (type) => {        
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] - 1;
        if (updatedCount < 0) {
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                address: {
                    street: 'test street',
                    zip: '123456',
                    country: 'India'
                },
                email: 'example@eg.com'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json', order).then(res => {
            console.log(res);
            this.setState({ loading: false, purchasing: false });
        })
        .catch(err => {
            console.log(err);
            this.setState({ loading: false, purchasing: false });
        });
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };
        Object.keys(disabledInfo).forEach(type => {
            disabledInfo[type] = disabledInfo[type] <= 0
        });

        
        let burger = this.state.error ? <p>Can't load ingredients</p> : <Spinner />;
        let orderSummary;
        if (this.state.ingredients) {
            burger = 
                <Fragment>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabledInfo={disabledInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        placeOrder={this.purchaseHandler} />
                </Fragment>
            orderSummary = <OrderSummary 
                ingredients={this.state.ingredients}
                continue={this.purchaseContinueHandler}
                cancel={this.purchaseCancelHandler}
                price={this.state.totalPrice} />;
        }
        
        if (this.state.loading) {
            orderSummary = <Spinner /> ;
        }

        return (
            <Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Fragment>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);