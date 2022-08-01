import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";

const defaultFormData = {
  seed_id: 1,
};

/** PoemFormHandler: renders a form for a new poem
 * choose a seed, generate poem text
 *
 * props: 
 *  initial formData like {seed_id}, 
 *  handleSave
 *
 * state: 
 *  formData like {seed_id}
 * 
 * PoemApp -> PoemForm
 */

function PoemForm({ initialFormData = defaultFormData, seeds, handleSave }) {
  const [formData, setFormData] = useState(initialFormData);
  console.debug("PormForm, formData:", formData, "seeds:", seeds, "handleSave:", handleSave)

  /**update form input */
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.debug("handleSubmit. handleSave:", handleSave);
    handleSave(formData);
    setFormData(initialFormData);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="seed_id" sm={2}>
          Select Seed Text:
        </Label>
        <Col sm={10}>
          <Input
            name="seed_id"
            value={formData.seed_id}
            onChange={handleChange}
            type="select"
          >
            {seeds.map(seed => (
              <option key={seed.id} value={seed.id}>
                {seed.title} by {seed.author}
              </option>
            ))}
          </Input>
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

export default PoemForm;
