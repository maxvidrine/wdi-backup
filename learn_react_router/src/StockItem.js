import React, { Component } from 'react';

class StockItem extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default StockItem;