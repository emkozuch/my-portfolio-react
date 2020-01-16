import React, { Component } from 'react'
import '../Styles/Components/Filter.scss'

class Filter extends Component {
    state = {
        clickedButton: "all"
    }

    handleClick = (e) => {
        this.setState({
            clickedButton: e.target.value
        }, () => this.sendData())
    }
    sendData = () => {
        this.props.parentCallback(this.state.clickedButton)
    }
    updateFilter = () => {
        const buttons = document.getElementsByTagName('button')
        const buttonsArr = Array.from(buttons)
        buttonsArr.map((button) => {
            if (button.value !== this.state.clickedButton) {
                button.classList.remove("active")
            }
            if (button.value === this.state.clickedButton) {
                button.classList.add("active")
            }
        })
    }
    componentDidUpdate() {
        this.updateFilter()
    }
    componentDidMount(){
        this.updateFilter()
        this.sendData()
    }

    render() {

        return (
            <div className="filter-container">
                <div className="filter-panel">
                    <button onClick={this.handleClick} value="all">all</button>
                    <button onClick={this.handleClick} value="html/css"  >html/css</button>
                    <button onClick={this.handleClick} value="js" >JS</button>
                    <button onClick={this.handleClick} value="react" >React</button>
                </div>
            </div>
        )
    }
}

export default Filter
