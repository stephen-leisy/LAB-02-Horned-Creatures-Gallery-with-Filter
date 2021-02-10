import React from 'react';
import images from './data.js';
import './App.css';
import ImageList from './ImageList.js'

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
      if (!this.state.horns) return true;

      if (image.horns === this.state.horns) return true;

      return false;
    });

    const imagesForSearch = filteredImages.map(image =>
      <ImageList
        key={image.name}
        image={image} />);
    return (
      <div>
        <ul>
          {imagesForSearch}
        </ul>
        <form>
          Name <input value={this.state.name} onChange={this.handlerNameChange} />
          Number of horns <select value={this.state.horns} onChange={(e) => {
            this.setState({
              horns: e.target.value
            })
          }}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          <button>Submit</button>
        </form>
        <div>
          Name: {this.state.name}
        </div>
        <div>
          Number of Horns: {this.state.horns}
        </div>

      </div>
    )
  }
}


