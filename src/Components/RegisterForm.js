import { useCallback, useState } from "react";
import { Formik, Field, Form } from "formik";
import { registerSchema } from "../utils/validation";
import { InitialValues } from "../utils/initialValues";

export function RegisterForm({ setUsers }) {
	const [success, setSuccsess] = useState(false);

	const handleSubmit = useCallback(
		(values, { setSubmitting, resetForm }) => {
			setUsers((prevUsers) => {
				return [...prevUsers, values];
			});
			setSubmitting(false);
			resetForm();
			setSuccsess(true);
			setTimeout(() => {
				setSuccsess(false);
			}, 5000);
		},
		[setUsers]
	);

	return (
		<Formik
			initialValues={InitialValues}
			validationSchema={registerSchema}
			onSubmit={handleSubmit}
		>
			{({ errors, touched, values }) => (
				<Form className='w-full px-8'>
					<h1 className='text-center text-6xl text-orange-600 font-semibold mb-9 mt-8'>
						Register
					</h1>
					<hr />
					<div className='flex flex-wrap mt-14 -mx-3 mb-6'>
						<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
							<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
								First Name
							</label>

							<Field
								className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								name='firstName'
								type='text'
								placeholder='Enter your name...'
							/>

							{errors.firstName && touched.firstName ? (
								<div className='text-red-800 text-xs'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-3 w-3 inline mr-1'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
											clipRule='evenodd'
										/>
									</svg>
									<span>{errors.firstName}</span>
								</div>
							) : null}
						</div>
						<div className='w-full md:w-1/2 px-3'>
							<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
								Last Name
							</label>
							<Field
								className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								name='lastName'
								type='text'
								placeholder='Enter your Last Name...'
							/>

							{errors.lastName && touched.lastName ? (
								<div className='text-red-800 text-xs'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-3 w-3 inline mr-1'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
											clipRule='evenodd'
										/>
									</svg>
									<span>{errors.lastName}</span>
								</div>
							) : null}
						</div>
					</div>
					<div className='flex flex-wrap -mx-3 mb-6'>
						<div className='w-full px-3'>
							<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
								email address
							</label>
							<Field
								className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								name='email'
								type='email'
								placeholder='Enter your email address...'
							/>

							{errors.email && touched.email ? (
								<div className='text-red-800 text-xs'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-3 w-3 inline mr-1'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
											clipRule='evenodd'
										/>
									</svg>
									<span>{errors.email}</span>
								</div>
							) : null}
						</div>
					</div>
					<div className='flex flex-wrap -mx-3 mb-6'>
						<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
							<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
								Password
							</label>
							<Field
								className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								name='password'
								type='password'
								placeholder='******'
							/>
							{errors.password && touched.password ? (
								<div className='text-red-800 text-xs'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-3 w-3 inline mr-1'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
											clipRule='evenodd'
										/>
									</svg>
									<span>{errors.password}</span>
								</div>
							) : null}
						</div>
						<div className='w-full md:w-1/2 px-3'>
							<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
								PASSWORD VERIFICATION
							</label>
							<Field
								className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								name='passwordVerifi'
								type='password'
								placeholder='****** '
							/>
							{errors.passwordVerifi && touched.passwordVerifi ? (
								<div className='text-red-800 text-xs'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-3 w-3 inline mr-1'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
											clipRule='evenodd'
										/>
									</svg>
									{errors.passwordVerifi}
								</div>
							) : null}
						</div>
					</div>
					<div className='flex flex-wrap -mx-3 mb-2'>
						<div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
							<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
								Age
							</label>
							<Field
								className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								name='age'
								type='text'
							/>
							{errors.age && touched.age ? (
								<div className='text-red-800 text-xs'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-3 w-3 inline mr-1'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
											clipRule='evenodd'
										/>
									</svg>
									{errors.age}
								</div>
							) : null}
						</div>
						<div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
							<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
								Country
							</label>
							<Field
								className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								name='country'
								type='text'
							/>
						</div>
						<div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
							<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
								IMG URL
							</label>
							<Field
								className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								name='imgUrl'
								type='text'
							/>
						</div>
					</div>
					<div className='flex flex-wrap my-5'>
						<span className='mb-5'>
							<Field type='checkbox' name='acceptTerms' />
							<label className='text-xs ml-1'>Accept Terms & Conditions</label>
							{errors.acceptTerms && touched.acceptTerms ? (
								<div className='text-red-800 text-xs'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-3 w-3 inline mr-1'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
											clipRule='evenodd'
										/>
									</svg>
									{errors.acceptTerms}
								</div>
							) : null}
						</span>
						{success ? (
							<div className='flex flex-wrap justify-center w-full '>
								<div className='basis-1/2 bg-green-100 border mt-5 mb-6 animate-bounce border-green-400 text-green-700 px-4 py-3 rounded'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 inline mr-1'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'
										/>
									</svg>
									<strong className='font-bold'>User </strong>
									<span className='block sm:inline'>successfully added </span>
								</div>
							</div>
						) : null}
						<button
							className='bg-orange-500 w-full disabled:bg-orange-200 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
							type='submit'
							disabled={!values.acceptTerms}
						>
							Register
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
}
