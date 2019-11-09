import React, {Component} from 'react'
import Table from './Table'
import 'bootstrap/dist/css/bootstrap.min.css'

class Article extends Component {

    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        
        console.log(data)

        this.setState({
            data:data
        })
    }
    
    state = {
        isOpen: false,
        data: []
    }
    
    render() {
        const body = this.state.isOpen && <Table data={this.state.data} />
        return (
            <div>
                <h2>Change Data Base to : 
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
            </div>
        )
    } 
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article