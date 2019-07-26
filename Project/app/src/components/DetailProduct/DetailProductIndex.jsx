import React from 'react';
class DetailProduct extends React.Component {

    constructor(props) {
      super(props);
      this.state = {curPic:"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"};
    }

    otherPic=["https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"];

    
    createTable = () => {
      var pics = []
      for (let i = 0; i < this.otherPic.length; i++) {
        pics.push(<li key={i}><img width="50px" height="50px" src={this.otherPic[i]} alt='product'/></li>)
      }
      return pics;
    }

    render() {
      return (
          <div className="detailProduct">
          <div className="picProduct">
          <ul>{this.createTable()}</ul>
          </div>
          <img src={this.state.curPic} alt="papi"/>

          </div>
      );
    }
  }
  
  export default DetailProduct;
