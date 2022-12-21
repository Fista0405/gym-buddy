import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Container className="d-flex justify-content-center">
      <Row>
        <Form
          className="d-flex flex-column align-items-start"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Label>Email address</Form.Label>
          <input
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input type="text" placeholder="Username" {...register} />
          <input
            type="password"
            placeholder="Password"
            {...register("Password", { required: true, maxLength: 12 })}
          />
          <input
            type="undefined"
            placeholder="Confirm Password"
            {...register("ConfirmPassword", { required: true, maxLength: 12 })}
          />
          <Button className="justify-self-center" variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default Register;
