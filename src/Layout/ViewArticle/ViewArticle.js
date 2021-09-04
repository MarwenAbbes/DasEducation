import React, { Component } from "react";
import classes from "./ViewArticle.module.css";
import { withRouter } from "react-router-dom";
import parse from "html-react-parser";
import { Container } from "reactstrap";
import firebase from "../../Config/firebase";

const db = firebase.firestore();

export function timeStampToString(ts) {
  const date = new Date(ts * 1000);
  return (
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
  );
}

class ViewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      isLoaded: false
    };
    console.log(this.props);
  }

  componentDidMount() {
    if (typeof this.props.location.state !== "undefined") {
      if (this.props.location.state.hasOwnProperty("article")) {
        this.setState(
          {
            article: this.props.location.state.article
          },
          () => {
            this.setState({
              isLoaded: true
            });
          }
        );
      }
    } else {
      this.getArticleByID(this.props.match.params.id);
    }
  }

  getArticleByID = (aID) => {
    db.collection("Articles")
      .doc(aID)
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.setState(
            {
              article: doc.data()
            },
            () => {
              this.setState({
                isLoaded: true
              });
            }
          );
        } else {
          this.props.history.push({ pathname: "/" });
        }
      });
  };

  render() {
    if (this.state.isLoaded) {
      return (
        <Container>
          <div className={classes.Article}>
            <div className={classes.ImageContainer}>
              <img
                className={classes.Image}
                src={this.state.article.FeatureImage}
                alt={this.state.article.Title}
              />
            </div>

            <div className={classes.ArticleInfomation}>
              <h1 className={classes.Title}>{this.state.article.Title}</h1>
              <div className={classes.Date}>
                {timeStampToString(this.state.article.LastModified.seconds)}
              </div>
            </div>

            <div className={classes.ArticleMain}>
              {parse(this.state.article.Content)}
            </div>
          </div>
        </Container>
      );
    } else {
      return <div> Loading ......</div>;
    }
  }
}
export default withRouter(ViewArticle);
