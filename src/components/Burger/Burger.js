import React from 'react';
import classes from './Burger.module.css'

import BurgerIngedrient from './BurgerIngedrient/BurgerIngedrient'

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingkey => {
            return [...Array(props.ingredients[ingkey])]
                .map((_, i) => {
                    return <BurgerIngedrient key={ingkey + i} type={ingkey} />
                })
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p> Please start adding ingredients. </p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngedrient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngedrient type="bread-bottom"/>
        </div>
    )
}

export default Burger;