import React, { Component } from 'react';
import axios from 'axios';
import AOS from 'aos';


import PortfolioItem from './portfolio-item';
import { timingSafeEqual } from 'crypto';

export default class PortfolioContainer extends Component {

    constructor() {
        super();
        AOS.init();
        this.state = { // Initial state
            isLoading: false,
            pageTitle: "Welcome to my portfolio",
            data: []
        };
        this.handleFilter = this.handleFilter.bind(this);
        this.getPortfolioItems = this.getPortfolioItems.bind(this);


    }

    handleFilter(filter) {
        if (filter === "CLEAR_FILTER") {
            this.getPortfolioItems();
        } else {
            this.getPortfolioItems(filter);
        }
    }

    getPortfolioItems(filter = null) {
        axios
            .get('https://drewgoodman.devcamp.space/portfolio/portfolio_items')
            .then(response => {
                if (filter) {
                    this.setState({
                        data: response.data.portfolio_items.filter(item => {
                            return item.category === filter;
                        })
                    });
                } else {
                    this.setState({
                        data: response.data.portfolio_items
                    });
                }
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    };

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem key={item.id} item={item} />;
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div className="homepage-wrapper">
                <div className="filter-links">
                    <button className="btn" onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                    <button className="btn" onClick={() => this.handleFilter('Technology')}>Technology</button>
                    <button className="btn" onClick={() => this.handleFilter('Nonprofit')}>Nonprofit</button>
                    <button className="btn" onClick={() => this.handleFilter('CLEAR_FILTER')}>All</button>
                </div>
                <div className="portfolio-items-wrapper">
                    {this.portfolioItems()}
                </div>
            </div>
        )
    }
}