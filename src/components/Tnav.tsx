import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import moment from 'moment';
import { faFacebook, faGoogle, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFeed, faLanguage, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons';

const Tnav = () => {
	return (
		<div className='w-full hidden md:block'>
			{' '}
			<div className={'flex flex-col gap-2 z-[1000]'} >
				{/* First level navigation */}
				<div className={'flex bg-gray-700 text-[.85rem] py-2 w-full'}>
					<div
						className={
							'w-full max-w-7xl mx-auto flex justify-between items-center p-2 text-white'
						}
					>
						{/* Left */}
						<div className="flex items-center gap-2">
							<div
								className={
									'flex items-center gap-1 text-[12px]'
								}
							>
								<FontAwesomeIcon icon={faLocationDot} />
								<span>Nairobi</span>
							</div>
							<div>Today ({moment().format('LLL')})</div>
						</div>
						{/* Right */}
						<div
							className={'flex items-center gap-1 text-[.85rem]'}
						>
							<div className="flex items-center gap-1">
								<FontAwesomeIcon icon={faUser} />
								<button>Login/Register</button>
							</div>
							<div className="flex gap-1 items-center border-r border-l px-2">
								<FontAwesomeIcon icon={faLanguage} />
								<select className="bg-opacity-0 bg-gray-600">
									<option className="bg-gray-600" value="en">
										English
									</option>
									<option className="bg-gray-600" value="fr">
										French
									</option>
									<option className="bg-gray-600" value="es">
										Spanish
									</option>
								</select>
							</div>
							<div className="flex items-center px-2 gap-2 ">
								<FontAwesomeIcon icon={faFacebook} />
								<FontAwesomeIcon icon={faTwitter} />
								<FontAwesomeIcon icon={faGoogle} />
								<FontAwesomeIcon icon={faFeed} />
								<FontAwesomeIcon icon={faYoutube} />
							</div>
						</div>
					</div>
				</div>
				{/* Second level navigation */}
				<div
					className={
						'flex max-w-7xl mx-auto justify-between items-center w-full py-2 bg-white'
					}
					// ref={header2Ref}
				>
					<div className={''}>
						<h2 className="text-4xl font-extrabold uppercase text-purple-600">
							loans.co.ke
						</h2>
					</div>
					<div className={'text-purple-600'}>
						<h2>Workout your financial stats</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tnav;
