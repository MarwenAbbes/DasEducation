import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  Badge
} from "reactstrap";
import classes from "./ArticleCard.module.css";
import { Link } from "react-router-dom";

export function timeStampToString(ts) {
  const date = new Date(ts * 1000);
  return (
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
  );
}

const ArticleCard = (props) => {
  return (
    <Card className={classes.ArticleCard}>
      <Link
        to={{
          pathname: "article/" + props.data.id,
          state: { article: props.data }
        }}
      >
        <CardImg
          top
          width="100%"
          src={props.data.FeatureImage}
          alt="Card Image"
          className={classes.CardImage}
        />
      </Link>

      <CardBody className={classes.CardBody}>
        <Link
          to={{
            pathname: "article/" + props.data.id,
            state: { article: props.data }
          }}
        >
          <CardTitle className={classes.CardTitle}>
            {props.data.Title}
          </CardTitle>
        </Link>

        <CardSubtitle className={classes.CardSubtitle}>
          <Badge className={classes.ArticleLable}>
            {props.data.CategoryLAbel}
          </Badge>

          <Badge className={classes.createDate}>
            {timeStampToString(props.data.CreatedDate.seconds)}
          </Badge>
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;
