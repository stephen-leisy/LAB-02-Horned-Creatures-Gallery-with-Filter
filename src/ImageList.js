import React, { Component } from 'react'


export default class ImageList extends Component {
    render() {
        return (
            <li
                className="individual-image">
                <p>{this.props.image.keyword}</p>
                <p>{this.props.image.horns}</p>
                <img alt={this.props.image.title} src={this.props.image.url} className="animal-image" />
            </li>
        )

    }
}
