import React, { Component } from "react";
import ArticleCard from "../../../Component/ArticleCard/ArticleCard";
import Firebase from "../../../Config/firebase";
import { Container } from "reactstrap";

const db = Firebase.firestore();
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      articles: []
    };
  }

  componentDidMount() {
    this.getMyArticles();
  }

  getMyArticles = () => {
    db.collection("Articles")
      .limit(10)
      .get()
      .then((docs) => {
        if (!docs.empty) {
          let allArticles = [];
          docs.forEach((doc) => {
            const article = {
              id: doc.id,
              ...doc.data()
            };
            allArticles.push(article);
          });

          this.setState(
            {
              articles: allArticles
            },
            () => {
              this.setState({
                isLoaded: true
              });
            }
          );
        }
      });
  };

  render() {
    return (
      <div>
        <Container>
          {this.state.isLoaded
            ? this.state.articles.map((article, index) => {
                return <ArticleCard key={index} data={article} />;
              })
            : ""}
        </Container>
      </div>
    );
  }
}
export default Main;
