import { useFormik } from "formik";
import React, { useState } from "react";
import styled from "styled-components";

// Define needed props [fieldsObj, validatii]
// Use map to display inputs fields

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

const InputField = styled('div')`
	/* text-align: start; */
`;

const FormComponent = styled('form')`
  margin: 1rem 0.5rem;
	padding: 0 1em;
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

const ErrorMessage = styled('div')`
	font-weight: 300;
	color: #fff;
	font-size: 0.8em;
	text-align: start;
`;


// button
const RowItemRight = styled(Row)`
	justify-content: right;
`;

const Button = styled('button')`
	padding: 1em;
	font-weight: 500;
`;


function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

function Form({formFields, formValue, validate}) {
	// get initial value and initialize form state
	const [value, setValue] = useState(formValue)

	const formik = useFormik({
			initialValues: value,
			validate,
			onSubmit: ((values) => {
				setValue(values)
			})
	})
	
	return(
		<FormComponent onSubmit={formik.handleSubmit}>
			<Container>
				{
					formFields.map((field) => {
						return (
							<Row>
								<Label>{capitalize(field.name)}</Label>
								<InputField>
									<Input type={field.type} id={field.id} name={field.name} onChange={formik.handleChange} value={formik.values[field.name]} />
									{
										formik.errors[field.name] ? <ErrorMessage>{formik.errors[field.name]}</ErrorMessage> : null
									}
								</InputField>
							</Row>
						)
					})
				}
				<RowItemRight>
					<Button type="submit">Log in!</Button>
				</RowItemRight>
			</Container>
		</FormComponent>
	)
}

export default Form 