// import formikUser
import { Formik, useFormik } from "formik"
import styled from "styled-components"
import logoLanding from '../assets/logo-landing.png'

// Defining styled components

const Title = styled('h1')`
	line-height: 120%;
  letter-spacing: 0px;
  font-size: 22px;
`;

const Subtitle = styled('h2')`
	font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.2px;
  font-size: 15px;
`;

const Input = styled('input')`
	font-size: 1em;
	padding: 0.5rem;
	border-style: hidden;
	border-radius: 0.5rem;
`;

const Label = styled('label')`
	font-size: 1em;
	font-weight: 500;
`;

const Wrapped = styled('div')`
	height: 100%;
	width: 100%;
`;

const Container = styled('div')`
	display: flex;
	flex-direction: column;
	row-gap: 1em;
	min-width: 300px;
`;

const ContainerForm = styled(Container)`

`;

const Row = styled('div')`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-content: center;
	column-gap: 0.5em;
`;

const RowItemRight = styled(Row)`
	justify-content: right;
`;

const Button = styled('button')`
	padding: 1em;
	font-weight: 500;
`;

const Logo = styled('img')`
	width: 100%;
	height: 340px;
	background-size: cover;
	object-fit: cover;
	background-repeat: no-repeat;
	/* background-image: url(${logoLanding}); */
	border-style: none;
`;

const ContainerLogo = styled(Container)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 2rem 0;
	/* padding: 0.5em; */
`;

const ContainerText = styled(Container)`
	row-gap: 1em;
	padding: 0 1em;
`;

const Form = styled('form')`
  margin: 1rem 0.5rem;
	padding: 0 1em;
`;

const InputField = styled('div')`
	/* text-align: start; */
`;

const ErrorMessage = styled('div')`
	font-weight: 300;
	color: #fff;
	font-size: 0.8em;
	text-align: start;
`;

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

// formik handle form values, validation,and error messages

// validate must recibe the obj values and return and obj with errors
const validate = values => {
	const errors = {}

	for (const prop in values) {
		// formik manual validation
		switch (prop) {
			case 'email':
				if (values[prop].length <= 0) {
					errors[prop] = `${capitalize(prop)} required`
				} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values[prop])) {
					errors[prop] = 'Invalid email address'
				}
				break;
			
				case 'password':
				if (!values[prop]) {
					errors[prop] = `${capitalize(prop)} required`
				} else if (values[prop].length < 8) {
					// must have minimun 8 characteres
					errors[prop] = `${capitalize(prop)} must be 8 characters minimun`
				} else if (!values[prop].match(/^[A-Z]*/)) {
					// must have a capitalize letter
					errors[prop] = `${capitalize(prop)} must have at least an upper character`
				} else if (!values[prop].match(/[^\w\*]/)) {
					// must have an special character
					errors[prop] = `${capitalize(prop)} must have at least an special character`
				} else if (!values[prop].match(/^[0-9]*/)) {
					// must have a number
					errors[prop] = `${capitalize(prop)} must contain a number`
				}
				console.log(errors[prop], 'err');

				break
			default:
				break;
		}
		console.log(errors, 'errors');


		// return !values[prop] ? errors[prop] = true : errors[prop] = false;
	}
	return errors;

}


function Login(params) {
	// call formik
	// define initial values
	//  onsubmit method

	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validate,
		// call validate fn
		onSubmit: ((values) => {
			console.log('values: ', values)
		})
	})

	return (
		// use html tag ( form, label input )
		//  form call the onsubmit method
		//  handleChange, handlesubmit are formik methods

		<Wrapped>
			{/* formm component */}

			<Container>

				<ContainerLogo>
					<Logo src={logoLanding} />
				</ContainerLogo>

				<ContainerForm>
					<ContainerText>
						<Title>Task Management &
							To-Do List</Title>
						<Subtitle>This productive tool is designed to help
							you better manage your task
							project-wise conveniently!</Subtitle>
					</ContainerText>
					<Form onSubmit={formik.handleSubmit}>
						<Container>
							<Row>
								<Label>Email</Label>
								{/* input field */}
								<InputField>
									<Input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
									{/* error message label */}
									{
										formik.errors.email ? <ErrorMessage>{formik.errors.email}</ErrorMessage> : null
									}
								</InputField>
							</Row>

							<Row>
								<Label>Password</Label>
								<InputField>
									<Input type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
									{
										formik.errors.password ? <ErrorMessage>{formik.errors.password}</ErrorMessage> : null
									}
								</InputField>
							</Row>
							<RowItemRight>
								<Button type="submit">Log in!</Button>
							</RowItemRight>

						</Container>
					</Form>
				</ContainerForm>
			</Container>

		</Wrapped>
	)
}
export default Login


// To-Do
// [/] Add form validations using formik
// Separate components from main view
// import components

// Nice to do
// Work on responsivness (tablet/desktop)
// change theme to ligth
