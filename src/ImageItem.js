import React, { Component } from 'react'


export default class ImageItem extends Component {
    render() {
        // const {
        //     image: {
        //         keyword,
        //         horns,
        //         title,
        //         url
        //     }
        // } = this.props;
        return (
            <li className="individual-image">
                <p>{this.props.imageProp.keyword}</p>
                <p>{this.props.imageProp.horns}</p>
                <img alt={this.props.imageProp.title} src={this.props.imageProp.url} className="animal-image" />

            </li>

        )

    }
}
