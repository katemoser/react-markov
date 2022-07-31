import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";

/**
 * PoemSaveForm displays the new poem, allows you to title it, and save
 * 
 * props: initial formdata like: {seed_id, text}
 */

function PoemSaveForm({ initialFormData, handleSave }) {
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
        console.log("handleSubmit in save poem. formData:", formData);
        handleSave(formData);
        setFormData(formData => ({seed_id: 1, title: "", text: ""}));
    }


  return (
    <Form onSubmit={handleSubmit}>

      <FormGroup row>
        <Label for="title" sm={2}>
          Title:    
        </Label>
        <Col sm={10}>
          <Input name="title" value={formData.title} onChange={handleChange} />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="text" sm={2}>
          Text:
        </Label>
        <Col sm={10}>
        <p name="text">{formData.text}</p>
        </Col>
      </FormGroup>
      <Button>Save Poem</Button>
    </Form>
  );
}
export default PoemSaveForm;
