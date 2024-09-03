// import formikUser
import { Formik, useFormik } from "formik"

function Login(params) {
	// call formik
	// define initial values
	//  onsubmit method

	const formik = useFormik({
		initialValues: {
			email: 'example@example',
			password: ''
		},
		onSubmit: ((values) => {
			console.log('values: ', values)
		})
	})

	return (
		// use html tag ( form, label input )
		//  form call the onsubmit method
		//  handleChange, handlesubmit are formik methods

		<>
			{/* formm component */}
			<h1>Welcome back!</h1>
			<h3>Subtitle</h3>
			<div className="login-form">
				<form onSubmit={formik.handleSubmit}>
					<div className="input-container">
						<label htmlFor="email">Email:</label>
						{/* id, name, type, onChange, value */}
						<input for="email"
							id="email"
							name="email"
							type="email"
							onChange={formik.handleChange}
							value={formik.values.email}></input>
					</div>
					<div className="input-container">
						<label htmlFor="password">Password:</label>
						<input for="password"
							id="password"
							name="password"
							type="password"
							onChange={formik.handleChange}
							value={formik.values.password}></input>
					</div>
					{/* suubmit btn */}
					<button type="submit">Log in!</button>
				</form>
			</div>
		</>
	)
}
export default Login
