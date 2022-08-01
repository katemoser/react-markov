import React, { useState } from "react";
import { Form, FormGroup, Label, Input, FormText, Col, Button } from "reactstrap";


const defaultFormData = {
    title:"",
    author:"",
    text:""
}

/** Seed form:create new seed
 *
 * props: 
 *  initialFormData like {title:"", author:"",text:""}, 
 *  handleSave
 *
 * state: formData
 * 
 *  SeedApp -> SeedForm
 */

function SeedForm({initialFormData=defaultFormData, handleSave}) {
  const [formData, setFormData] = useState(initialFormData);
  console.debug("SeedForm, gormData:", formData, "handlesave:", handleSave);

  /**update form input */
  function handleChange(evt) {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
      evt.preventDefault();
      console.debug("handleSubmit. handleSave:", handleSave);
      handleSave(formData);
      setFormData(formData => (initialFormData));
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="title" sm={2}>
          Title
        </Label>
        <Col sm={10}>
          <Input name="title" value={formData.title} onChange={handleChange} />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="author" sm={2}>
          Author
        </Label>
        <Col sm={10}>
          <Input
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="text" sm={2}>
          Text
        </Label>
        <Col sm={10}>
          <Input
            name="text"
            value={formData.text}
            onChange={handleChange}
            type="textarea"
          />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col
          sm={{
            offset: 2,
            size: 10,
          }}
        >
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default SeedForm;
