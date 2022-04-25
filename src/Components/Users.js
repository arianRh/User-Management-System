import { useEffect } from "react";
import profile from "../img/profile.jfif";
import { Navbar } from "./Navbar";

export function Users({ users }) {
	useEffect(() => {
		document.title = "Users";
	}, []);
	return (
		<>
			<div className='flex flex-row justify-center'>
				<div className='basis-full sm:basis-10/12 md:basis-10/12 rounded-b-xl bg-orange-500'>
					<Navbar users={users} />
				</div>
			</div>
			<div className='flex flex-row justify-center'>
				<div className='basis-3/4 pt-28'>
					<div className='flex flex-row flex-wrap justify-center'>
						{!users.length ? (
							<div className='basis-full sm:basis-2/3 bg-slate-50 rounded-xl drop-shadow-lg h-36 sm:h-44 md:h-60 px-5 lg:h-72 grid justify-items-center'>
								<h1 className='my-auto text-xl text-center sm:text-1xl md:text-2xl lg:text-3xl text-orange-200/70 xl:text-5xl'>
									No members have registered.
								</h1>
							</div>
						) : null}
						{users.map((user) => {
							return (
								<div
									key={user.email}
									className='basis-full sm:basis-1/2 md:basis-1/3 flex-wrap mb-32'
								>
									<div className='bg-slate-50 w-11/12 grid h-64 drop-shadow-xl pb-5 pl-5'>
										<img
											className='rounded-full justify-self-end -mt-16 md:justify-self-center w-28 h-28  md:-mt-16 md:mb-5 drop-shadow-2xl'
											src={user.imgUrl ? user.imgUrl : profile}
											alt=''
										></img>
										<ul className='list-disc list-inside inline'>
											<li>
												<p className='inline text-sm capitalize'>
													<span className='font-semibold'>First Name : </span>
													{user.firstName}
												</p>
											</li>
											<li>
												<p className='inline text-sm capitalize'>
													<span className='font-semibold'>Last Name : </span>
													{user.lastName}
												</p>
											</li>
											<li>
												<p className='inline text-sm capitalize'>
													<span className='font-semibold'>Age : </span>
													{user.age}
												</p>
											</li>
											{user.country ? (
												<li>
													<p className='inline text-sm capitalize'>
														<span className='font-semibold'>Country : </span>
														{user.country}
													</p>
												</li>
											) : null}
											<li>
												<p className='inline text-sm'>
													<span className='font-semibold'>Email : </span>
													{user.email}
												</p>
											</li>
										</ul>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
