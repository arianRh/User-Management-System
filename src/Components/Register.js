import { useEffect } from "react";
import { Navbar } from "./Navbar";
import heroBg from "../img/heroBg.jpg";
import { CustomForm } from "./Form";

export function Register() {
	useEffect(() => {
		document.title = "Register";
	}, []);
	return (
		<>
			<div className='flex flex-row justify-center'>
				<div className='basis-full sm:basis-10/12 md:basis-8/12 bg-orange-500'>
					<Navbar />
				</div>
			</div>
			<div className='flex flex-row justify-center'>
				<div className='basis-full sm:basis-10/12 md:basis-8/12 relative'>
					<img
						className='w-full h-3/4 opacity-30 rounded-b-xl'
						src={heroBg}
						alt=''
					/>
					<div className='flex flex-row absolute w-full justify-center top-1/3'>
						<div className='basis-11/12  md:basis-9/12 bg-slate-50 mb-20 rounded-lg border-2 drop-shadow-xl'>
							<CustomForm />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
