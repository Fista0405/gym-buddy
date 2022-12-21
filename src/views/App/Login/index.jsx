import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Container className="border vh-100 d-flex align-items-center justify-content-center">
      <Form className="d-flex flex-column align-items-center">
        {/* <Image class="mb-4" src="" alt="login image" width="72" height="57" /> */}
        <h3>Please sign in</h3>
        <div className="my-2 form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="my-2 form-floating">
          <input
            type="password"
            id="floatingPassword"
            className="form-control"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <label className="my-2">
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
        <button class="mt-2 w-100 btn btn-lg btn-dark" type="submit">
          Sign in
        </button>
      </Form>
    </Container>
  );
};
export default Login;
