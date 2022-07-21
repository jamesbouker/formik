import './App.css';
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    onSubmit: (values) => {
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (values.email.length === 0) { errors.email = "Field required"; }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Username should be an email";
      }
      if (values.password.length === 0) { errors.password = "Field required"; }
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input type="text" id='emailField' name='email' value={formik.values.email} onChange={formik.handleChange} />
        {formik.errors.email ? <div id="emailError" style={{ color: "red" }}>{formik.errors.email}</div> : null}

        <div>Password</div>
        <input type="password" id='pswField' name='password' value={formik.values.password} onChange={formik.handleChange} />
        {formik.errors.password ? <div id='pswError' style={{ color: "red" }}>{formik.errors.password}</div> : null}

        <div>
          <button id='submitBtn' type="submit">Submit</button>
        </div>
      </form >
    </div >
  );
}

export default App;
