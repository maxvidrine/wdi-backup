import React, { Component } from 'react';
import StockItem from './StockItem'
import axios from 'axios'

class Stocks extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
        }
    }
    let data = []
    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/SF-WDI-LABS/react-router-intro/master/src/data/stock-data.json')
        .then(response => {
            this.setState({
                data: response.data
        })
        
    render() {
        let stockData = this.state.data
        let stockItem = <StockItem key={idx} name={datum.name} />
        console.log(data)
        return (
            <div>
                <p>{data}</p>
            </div>
        )
    }
}

export default Stocks;