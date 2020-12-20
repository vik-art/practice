import React from 'react';
import s from "./Counter.module.css";


class Counter extends React.Component {
    state = {
        value: 0,
};
    handleIncrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            }
        })
    }
    handleDecrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value - 1,
            }
        })
    }
    render() {
    return (
        <>
        <div className={s.counter}>
            <div className={s.value}>{this.state.value}</div>
        </div>
        <div className={s.counterControlls}>
        <button type="button" className={s.button} onClick={
            this.handleIncrement
        }>Увеличить на 1</button>
        <button type="button" className={s.button} onClick={
            this.handleDecrement
        }>Уменьшить на 1</button>
        </div>
        </>
    )
    }
}

export default Counter;