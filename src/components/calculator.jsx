// src/MortgageCalculator.js
import React, { Component } from 'react';

class MortgageCalculator extends Component {
  constructor() {
    super();
    this.state = {
      principal: '',
      interestRate: '',
      loanTerm: '',
      monthlyPayment: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  calculateMortgage = () => {
    const { principal, interestRate, loanTerm } = this.state;

    if (principal && interestRate && loanTerm) {
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
      const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
      const monthlyPayment = (principal * (numerator / denominator)).toFixed(2);

      this.setState({
        monthlyPayment,
      });
    }
  };

  render() {
    return (
      <div className='morgage-container'>
        <div className="calculator">
       
        <div className='calculator-item'>
          <label>Property Price:</label>
            <input
              type="number"
              name="principal"
              value={this.state.principal}
              onChange={this.handleInputChange}
            />
          
        </div>
        <div className='calculator-item'>
          <label>Interest Rate (%):</label>
            <input
              type="number"
              name="interestRate"
              value={this.state.interestRate}
              onChange={this.handleInputChange}
            />
        </div>
        <div className='calculator-item'>
          <label> Loan Term (years): </label>
            <input
              type="number"
              name="loanTerm"
              value={this.state.loanTerm}
              onChange={this.handleInputChange}
            />
        </div>
        <button onClick={this.calculateMortgage}>Calculate</button>
        </div>
        <div className='result'>
            <div className="result-content">
            <h2>XOBANK</h2>
        <div className='results-cont'>
            <div className='results'>
            {this.state.monthlyPayment && (
           <p className="value">${this.state.monthlyPayment}</p>
              )}
            <p className="label">Monthly Payment</p>
          </div>
            <div className='info'>
                <p>
                *Indicative monthly rates.
                Please register your interest 
                for details
                </p>
                </div>
        </div>
        <button>Register Interest</button>
        </div>
        </div>
      </div>
    );
  }
}

export default MortgageCalculator;
