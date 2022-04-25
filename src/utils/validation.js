import * as Yup from "yup";

export const registerSchema = Yup.object({
	firstName: Yup.string()
		.max(15, "Must be 15 character or less !")
		.required("Required !"),
	lastName: Yup.string()
		.max(20, `Must be 20 character or less !`)
		.required("Required !"),
	email: Yup.string().email("Invalid email address !").required("Required !"),
	password: Yup.string()
		.min(6, "Must be 7 character or more !")
		.required("Required !"),
	passwordVerifi: Yup.string()
		.oneOf([Yup.ref("password"), null], "Password must match !")
		.required("Required !"),
	age: Yup.number()
		.typeError("you must specify a number")
		.required("Required !"),
	acceptTerms: Yup.bool().oneOf(
		[true],
		"Accept Terms & Conditions is required !"
	),
});
