import { Component } from 'react';
import Select from 'react-select';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './SearchBar.css'
import binimage from './images/all-bins-imgs.png'
import React, { useState } from 'react'
import _ from 'underscore'



const productoptions = []
const keyoptions = []
const allInfo = []
const unique = []
console.log(keyoptions)

// const [click, setClick] = useState(false)

class SearchBar extends Component {
    state = {
        selectedOption: null,
    };

    componentDidMount() {
        axios.get('/api/show')
            .then(res => {
                for (var i = 0; i < res.data.data.length; i++) {

                    productoptions.push({ value: res.data.data[i].product_name, label: res.data.data[i].product_name })
                    allInfo.push(res.data.data[i])

                    let isAlreadyAnOption = false;
                    for (var a = 0; a < keyoptions.length; a++) {
                        if (keyoptions[a].value == res.data.data[i].recycle_number) {
                            isAlreadyAnOption = true;
                        }
                    }
                    if (!isAlreadyAnOption) {
                        keyoptions.push({ value: res.data.data[i].recycle_number, label: res.data.data[i].recycle_number })
                    }
                }
            })
    }

    handleChange = (event) => {
        //console.log(event.value)
        this.setState({ selectedOption: event.value })
    };

    handleClick = () => {
        return('Click happened');
      }



    ProductKeyDisplayInfo = () => {
        for (var i = 0; i < allInfo.length; i++) {
            //.log(allInfo[i].product_key)
            if (this.state.selectedOption == allInfo[i].product_name) {
                return allInfo[i].info
            }
        }
    }

    ProductKeyBin = () => {
        for (var i = 0; i < allInfo.length; i++) {
            //.log(allInfo[i].product_key)
            if (this.state.selectedOption == allInfo[i].product_name) {
                return `Your Product goes in the ${allInfo[i].bin_info}`
            }
        }
    }

    ProductKeyImage = () => {
        for (var i = 0; i < allInfo.length; i++) {
            //.log(allInfo[i].product_key)
            if (this.state.selectedOption == allInfo[i].product_name) {
                return allInfo[i].image
            }
        }
    }

    ProductKeyCommonForm = () => {
        for (var i = 0; i < allInfo.length; i++) {
            //.log(allInfo[i].product_key)
            if (this.state.selectedOption == allInfo[i].product_name) {
                return `Common Forms: ${allInfo[i].common_form}`
            }
        }
    }

    RecycleKeyDisplayInfo = () => {
        for (var i = 0; i < allInfo.length; i++) {
            // console.log(allInfo[i].product_key)
            if (this.state.selectedOption == allInfo[i].recycle_number) {
                return allInfo[i].info
            }
        }
    }

    RecycleKeyBin = () => {
        for (var i = 0; i < allInfo.length; i++) {
            //.log(allInfo[i].product_key)
            if (this.state.selectedOption == allInfo[i].product_name) {
                return `Your Product goes in the ${allInfo[i].bin_info}`
            }
        }
    }

    RecycleKeyImage = () => {
        for (var i = 0; i < allInfo.length; i++) {
            // console.log(allInfo[i].product_key)
            if (this.state.selectedOption == allInfo[i].recycle_number) {
                return allInfo[i].image
            }
        }
    }

    RecycleKeyCommonForm = () => {
        for (var i = 0; i < allInfo.length; i++) {
            //.log(allInfo[i].product_key)
            if (this.state.selectedOption == allInfo[i].recycle_number) {
                return `Common Forms: ${allInfo[i].common_form}`
            }
        }
    }

    render() {
        const { selectedOption } = this.state;
        const isProductRecycable = this.ProductKeyDisplayInfo()
        const productCommonForms = this.ProductKeyCommonForm()
        const isReycleKeyRecycable = this.RecycleKeyDisplayInfo()
        const recycleKeyCommonForms = this.RecycleKeyCommonForm()
        const ProductKeyImage = this.ProductKeyImage()
        const RecycleKeyImage = this.RecycleKeyImage()
        const ProductKeyBin = this.ProductKeyBin()
        const RecycleKeyBin = this.RecycleKeyBin()
        const handleClick = this.handleClick()


        return (
            <div>
                <div className="search">
                    <h1> Let’s Check Your Product </h1>
                    <p>Search here by the <Link to='/'>Recycle Number</Link> on your product or choose from one of the <Link to='/'>Product Dropdowns</Link> listed.</p>
                    <Select className="search-bar"
                        //value={this.state.selectedOption}
                        onChange={this.handleChange}
                        options={productoptions}
                    />

                    <Select className="search-bar2"
                        //value={selectedOption}
                        onChange={this.handleChange}
                        options={keyoptions}
                    />

                </div>

                <div className="main-info-container">

                    <div className="waiting">
                        <h1 style={{ visibility: this.state.selectedOption ? 'hidden' : 'visible' }}>Waiting for your chosen product...</h1>
                        <p style={{ visibility: this.state.selectedOption ? 'hidden' : 'visible' }}><i className="fas fa-recycle fa-spin"></i></p>
                        <img className="all-bins-img" src={binimage} style={{ visibility: this.state.selectedOption ? 'hidden' : 'visible' }} alt="this is car image" />
                    </div>


                    <div style={{ visibility: this.state.selectedOption ? 'visible' : 'hidden' }} className="display-info">

                        <h2 style={{ visibility: this.state.selectedOption ? 'visible' : 'hidden' }}>Your Chosen Product is: {this.state.selectedOption}</h2>

                    </div>

                    <div className="information-container">

                        <h3>{ProductKeyBin}</h3>
                        <p>{isProductRecycable}</p>
                        <p>{productCommonForms}</p>


                        <p>{isReycleKeyRecycable}</p>
                        <p>{recycleKeyCommonForms}</p>

                        <img className="product-img" src={ProductKeyImage}></img>
                        <img className="product-img" src={RecycleKeyImage}></img>

                    </div>

                </div>


            </div>
        );
    }
}
export default SearchBar