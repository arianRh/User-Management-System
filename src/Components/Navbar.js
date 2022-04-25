import { Link } from "react-router-dom";

export function Navbar() {
	return (
		<>
			<nav className='border-gray-200 px-6 py-4 rounded'>
				<div className='flex flex-row'>
					<div className='basis-4/12 sm:basis-1/12'>
						<Link
							className='text-white hover:text-slate-200 text-sm font-semibold mr-4'
							to='/'
						>
							Register
						</Link>
					</div>
					<div className='basis-4/12 sm:basis-1/12'>
						<Link
							className='text-white hover:text-slate-200 text-sm font-semibold'
							to='/users'
						>
							Users
						</Link>
					</div>
					<div className='basis-3/12 sm:basis-9/12'></div>
					<div className='basis-1/12'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' />
						</svg>
					</div>
				</div>
			</nav>
		</>
	);
}
