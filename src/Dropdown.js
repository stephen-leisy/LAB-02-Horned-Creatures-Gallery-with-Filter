import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <select value={this.props.currentValue} onChange={this.props.handleChanges}>
                {
                    this.props.options.map(animalItem => <option value={animalItem}>{animalItem}</option>)
                }

            </select>
        )
    }
}
