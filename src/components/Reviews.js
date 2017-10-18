import React, { Component } from 'react';

class Reviews extends Component {

  constructor() {
    super();
    this.state = {
      visible: false
    }

    this.numOfReviews = '';
    this.reviewList = [];


  }  // constructor

  handleReviewClick = ()=> {
    console.log('handleReviewClick');
    if (this.state.visible) {
      this.reviewList = [];
    } else {
      this.reviewList = this.props.reviews.map((review, idx) => {
        return <li key={idx}>{review.description}</li>
      })
    }
    this.setState({visible:!this.state.visible});
  }

  render() {
    if (this.props.reviews.length === 1) {
      this.numOfReviews = <p onClick={this.handleReviewClick}><a>1 review</a></p>;
    } else {
      this.numOfReviews = <p onClick={this.handleReviewClick}><a>{this.props.reviews.length} reviews</a></p>;
    }

    return (
      <div>
        {this.numOfReviews}
        <ul>
          {this.reviewList}
        </ul>
    </div>
    );
  }  // render

}  // class Reviews

export default Reviews;
