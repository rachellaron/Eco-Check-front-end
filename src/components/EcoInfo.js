import { Component } from 'react';
import axios from 'axios'

class EcoInfo extends Component {
    state = {
        test: ''
    }

    // Run this function at the start
    componentDidMount() {
        axios.get('/api/show')
            .then(res => {
                for (var i = 0; i < res.data.data.length; i++) {
                    console.log(res.data.data[i])   
                }
            })
    }
    render() {
        return (
            <div>
                <h1>hello</h1>
                <p>{this.state.test}</p>
            </div>
        )

    }
}

export default EcoInfo;



