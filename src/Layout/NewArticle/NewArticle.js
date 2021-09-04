import React, { Component } from "react";
import classes from "./NewArticle.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
class NewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        Title: "",
        Content: "",
        CreatedDate: new Date(),
        FeatureImage: "",
        IsPublushed: false,
        LastModified: new Date(),
        CreatedUserID: ""
      }
    };
  }

  modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {}
    }
  };

  formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color"
  ];

  onchangeArticleTitle = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        Title: value
      }
    });
  };

  onChangeArticleContent = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        Content: value
      }
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xm={9} lg={9} md={8} sm={12} xs={12}>
            <h2 className={classes.SectionTitle}> New Article </h2>
            <FormGroup>
              <Label className={classes.Label}>Title </Label>
              <Input
                type="text"
                name="articleTitle"
                id="articleTitle"
                onChange={(e) => this.onchangeArticleTitle(e.target.value)}
                value={this.state.article.Title}
              />
            </FormGroup>

            <FormGroup>
              <ReactQuill
                ref={(el) => (this.quill = el)}
                value={this.state.article.Content}
                onChange={(e) => this.onChangeArticleContent(e)}
                theme="snow"
                module={this.modules}
                formats={this.formats}
              />
            </FormGroup>
          </Col>

          <Col xl={3} lg={3} md={4} ms={12} xs={12}>
            <Button onClick={(e) => console.log(this.state)}>Click ME</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default NewArticle;
