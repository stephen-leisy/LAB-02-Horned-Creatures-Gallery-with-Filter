import React from 'react';
import images from './data.js';
import './App.css';
import ImageList from './ImageList.js';
import MainHeader from './mainHeader.js';

export default class App extends React.Component {
  state = {
    keyword: '',
    horns: '',
  }
  handlerNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  render() {
    const filteredImages = images.filter((image) => {
      if (!this.state.keyword) return true;

      if (image.keyword === this.state.keyword || image.horns === Number(this.state.horns)) return true;


      return false;
    });

    const imagesForSearch = filteredImages.map(image =>
      <ImageList
        key={image.name}
        image={image} />);
    return (

      <body>
        <MainHeader />
        <form className="form-data">

          Name <input value={this.state.name} onChange={this.handlerNameChange} />
          Type Of Animal <select value={this.state.keyword} onChange={(e) => {
            this.setState({
              keyword: e.target.value
            })
          }}
          >
            <option>Select One</option>
            <option value='narwhal'>narwhal</option>
            <option value='rhino'>rhino</option>
            <option value='unicorn'>unicorn</option>
            <option value='unilego'>unilego</option>
            <option value='triceratops'>triceratops</option>
            <option value='markhor'>markhor</option>
            <option value='mouflon'>mouflon</option>
            <option value='addax'>addax</option>
            <option value='chameleon'>chameleon</option>
          </select>
          Number of horns <select value={this.state.horns} onChange={(e) => {
            this.setState({
              horns: e.target.value
            })
          }}
          >
            <option>Select One</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='100'>100</option>
          </select>

        </form>
        <div className="form-data">
          Name: {this.state.name}
        </div>
        <div className="form-data">
          Animal Type: {this.state.keyword}
        </div>
        <div className="form-data">
          Number of Horns: {this.state.horns}
        </div>

        <ul className="Image-list-styling">
          {imagesForSearch}
        </ul>


      </body>
    )
  }
}


