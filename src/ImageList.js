import React, { Component } from 'react'
import ImageItem from './ImageItem.js'

export default class ImageList extends Component {
    render() {

        return (
            <ul className="Image-list-styling">
                { this.props.filteredImages.map(image =>
                    <ImageItem
                        key={image.name}
                        imageProp={image} />)}
            </ul>
        )
    }
}
