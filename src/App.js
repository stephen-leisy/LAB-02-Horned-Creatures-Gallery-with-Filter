import React from 'react';
import images from './data.js';
import './App.css';
// import ImageItem from './ImageItem.js';
import MainHeader from './mainHeader.js';
import ImageList from './ImageList.js';
import Dropdown from './Dropdown.js';

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
  handlerKeywordChanges = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }
  handlerHorns = (e) => {
    this.setState({
      horns: Number(e.target.value)
    });
  }

  render() {

    const uniqueAnimalItems = [...new Set(images.map(image => image.keyword))];

    console.log(uniqueAnimalItems)
    const filteredImages = images.filter((image) => {
      if (!this.state.keyword && !this.state.horns) return true;

      if (this.state.keyword && !this.state.horns) {
        if (image.keyword === this.state.keyword) return true;
      }
      if (this.state.horns && !this.state.keyword) {
        if (image.horns === this.state.horns) return true;
      }
      if (this.state.keyword && this.state.horns) {
        if (image.keyword === this.state.keyword && image.horns === this.state.horns) return true;
      }
      console.log(this.state)
      return false;
    });


    return (
      < body >
        <MainHeader />
        <form className="form-data">

          Name <input value={this.state.name} onChange={this.handlerNameChange} />
          Type
          <Dropdown currentValue={this.state.keyword} handleChanges={this.handlerKeywordChanges}
            options={uniqueAnimalItems} />

          Number of horns
          <Dropdown currentValue={this.state.horns} handleChanges={this.handlerHorns}
            options={[1, 2, 3, 100]} />

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
          <ImageList filteredImages={filteredImages} />
        </ul>


      </body >
    )
  }
}

// ['narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon']
