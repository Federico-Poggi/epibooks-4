import { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

const AddComment = (props) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: "",
    elementId: props.asin,
  });

  const [showAllert, setShowAllert] = useState(false);

  const onComentSend = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmY2VjZGIzOTczNDAwMTRkNWU4YjciLCJpYXQiOjE2OTg3NTk0MDQsImV4cCI6MTY5OTk2OTAwNH0.-pNvGmD14wkvIlxz1-V1GPeDQsWkcQJ4bOyBVrb0npE",
          },
        }
      );

      if (response.ok) {
        alert("commento inviato");
        setComment({
          comment: "",
          rate: 1,
          elementId: this.props.asin,
        });
        setShowAllert(true);
      }
    } catch (error) {
      throw new Error("");
    }
    return (
      <div className="my-3">
        <Form onSubmit={(onComentSend(), showAllert && <Alert>inviato</Alert>)}>
          <Form.Group className="mb-2">
            <Form.Label>Recensione</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci qui il testo"
              value={comment.comment}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...comment,
                    comment: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Valutazione</Form.Label>
            <Form.Control
              as="select"
              value={comment.rate}
              onChange={useEffect({
                comment: {
                  ...comment,
                  rate: comment.rate.value,
                },
              })}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Invia
          </Button>
        </Form>
      </div>
    );
  };
};
export default AddComment;
