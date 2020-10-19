import React from 'react'

const Result = (props) => {
    return (
        <div className="u-full-width result">
            <h2>Results:</h2>
            <p>The Loan Amount: $ {props.amount}</p>
            <p>Months to Repay: {props.term}</p>
            <p>Total Payment: $ {props.total}</p>
            <p>Monthly Paymnent: $ { (props.total / props.term).toFixed(2) }</p>
        </div>
    );
}

export default Result;
