// Write your code here

import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {arrayIndex: 1}

  previousReview = () => {
    const {arrayIndex} = this.state
    if (arrayIndex === 1) {
      this.setState({arrayIndex: 1})
    } else {
      this.setState(prevState => ({arrayIndex: prevState.arrayIndex - 1}))
    }
  }

  nextReview = () => {
    const {reviewsList} = this.props
    const {arrayIndex} = this.state
    if (arrayIndex === reviewsList.length) {
      this.setState({arrayIndex: reviewsList.length})
    } else {
      this.setState(prevState => ({arrayIndex: prevState.arrayIndex + 1}))
    }
  }

  render() {
    const {arrayIndex} = this.state
    const {reviewsList} = this.props
    const index = arrayIndex - 1
    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div className="app-container">
        <div className="review-card-container">
          <h1 className="review-head">Reviews</h1>
          <div className="carousel-container">
            <div>
              <button
                className="arrow-btn"
                type="button"
                onClick={this.previousReview}
                data-testid="leftArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  alt="left arrow"
                  className="left-arrow"
                />
              </button>
            </div>
            <div className="review-container">
              <img src={imgUrl} alt={username} className="person-image" />
              <p className="person-name">{username}</p>
              <p className="company-name">{companyName}</p>
              <p className="review-description">{description}</p>
            </div>
            <div>
              <button
                className="arrow-btn"
                type="button"
                onClick={this.nextReview}
                data-testid="rightArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  alt="right arrow"
                  className="right-arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
