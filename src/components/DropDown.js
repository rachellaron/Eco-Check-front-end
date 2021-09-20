import { Component } from 'react';
import Select from 'react-select';
import axios from 'axios'

const productoptions = [
    { value: '', label: '' },
    { value: '', label: '' },
    { value: '', label: '' },
];

const keyoptions = [
    { value: '', label: '' },
    { value: '', label: '' },
    { value: '', label: '' },
];


class DropDown extends Component {
    state = {
        selectedOption: null,
        test: ''
    };

    componentDidMount() {
        axios.get('/api/show')
            .then(res => {
                for (var i = 0; i < res.data.data.length; i++) {
                    productoptions[i]["label"] = (res.data.data[i].product_key)
                    productoptions[i]["value"] = (res.data.data[i].product_key)
                }

                for (var j = 0; j < res.data.data.length; j++) {
                    //console.log(res.data.data[i].product_key)
                    keyoptions[j]["label"] = (res.data.data[j].name_key)
                    keyoptions[j ]["value"] = (res.data.data[j].name_key)
                }
            })
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () => {
            console.log(this.state.selectedOption.value)
            return (this.state.selectedOption.value)
        }
        );

    };

    DisplayInfo = () => {
        console.log(this.state.selectedOption.value)
        return(this.state.selectedOption.value)
    }

    render() {
        const { selectedOption } = this.state;
        //console.log(selectedOption)
        //console.log(this.handleChange)

        return (
            <div>

                <Select 
                    //value={selectedOption}
                    onChange={this.handleChange}
                    options={productoptions}
                />

                <Select
                    //value={selectedOption}
                    onChange={this.handleChange}
                    options={keyoptions}
                />

                r
                </div>
        );
    }
}
export default DropDown