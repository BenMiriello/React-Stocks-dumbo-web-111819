import React, { Component } from 'react';
import Stonk from '../components/Stonk'

class PortfolioContainer extends Component {

  renderStonks = () => {
    return this.props.stonks.map(stonk => 
      
      <Stonk 
        key={'p' + stonk.id} 
        stonk={stonk} 
        addRemove={this.props.removeFromPortfolio} 
      />
    
    )
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          this.renderStonks()
        }
      </div>
    );
  }

}

export default PortfolioContainer;

