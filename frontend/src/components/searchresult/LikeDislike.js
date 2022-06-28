import React, {Component} from "react";
import "./SearchResult.css"
import axios from "axios";

export default class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotelName: this.props.hotelName,
            userSession: this.props.session,
            likeCount: parseInt(this.props.like),
            likeClicked: false,
            dislikeCount: parseInt(this.props.dislike),
            dislikeClicked: false,
        }
    }

    onLikeClick = async (clicked) => {

        if (!this.state.likeClicked && !this.state.dislikeClicked) {
            await this.setState(state => ({
                likeCount: this.state.likeCount + 1,
                likeClicked: true
            }))
            this.SaveLike(0).then();

        } else if (this.state.likeClicked) {
            await this.setState(state => ({
                likeCount: this.state.likeCount - 1,
                likeClicked: false
            }))
            this.SaveLike(0).then();
        }
    }

    SaveLike = async (e) => {
        try {
            const url = "http://localhost:3000/rooms/like";
            const data = {
                hotelName: this.state.hotelName,
                like: this.state.likeCount + e
            }
            console.log(data.like)
            const {data: res} = await axios.post(url, data);
            console.log(res.data.message)
            // localStorage.setItem("token", res.data);
            // window.location = "/";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                this.setError(error.response.data.message);
            }
        }
    }

    onDislikeClick = async (clicked) => {

        if (!this.state.dislikeClicked && !this.state.likeClicked) {
            await this.setState(state => ({
                dislikeCount: this.state.dislikeCount + 1,
                dislikeClicked: true
            }))
            this.SaveDislike(0).then();
        } else if (this.state.dislikeClicked) {
            await this.setState(state => ({
                dislikeCount: this.state.dislikeCount - 1,
                dislikeClicked: false
            }));
            this.SaveDislike(0).then();
        }
    }

    SaveDislike = async (e) => {
        try {
            const url = "http://localhost:3000/rooms/dislike";
            const data = {
                hotelName: this.state.hotelName,
                dislike: this.state.dislikeCount + e
            }
            console.log(data.dislike)
            const {data: res} = await axios.post(url, data);
            console.log(res.data.message)
            // localStorage.setItem("token", res.data);
            // window.location = "/";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                this.setError(error.response.data.message);
            }
        }
    }

    render() {
        return (
            <div className="d-flex justify-content-center pb-3">

        <span className="likes-counter me-1">
          {this.state.userSession && <button
              onClick={this.onLikeClick}
              className={`btn btn-outline-success btn-sm liked-button ${this.state.likeClicked ? "liked" : ""}`}
          >
            {" "}
              Like | {this.state.likeCount}{" "}
          </button>}
        </span>

                <span className="dislikes-counter ms-1">
          {this.state.userSession && <button
              onClick={this.onDislikeClick}
              className={`btn btn-outline-danger btn-sm dislike-button ${
                  this.state.dislikeClicked ? "disliked" : ""
              }`}
          >
              {" "}
              Dislike | {this.state.dislikeCount} {" "}
          </button>}
        </span>

            </div>
        );
    }
}