import React from 'react'
import FooterNewsLetter from './FooterNewsLetter'

const FooterMain = () => {
    return (
        <div className='w-full py-10 bg-gray-600 bg-opacity-50 text-white'>
            <div className='flex flex-col items-center gap-5 max-w-7xl mx-auto min-h-[30rem] w-full'>
                <FooterNewsLetter />
                <div className='flex w-full justify-between'>

                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl'>Loans.co.ke</h2>
                        <p className='text-sm'>© 2021 Loans.co.ke</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl'>About</h2>
                        <p className='text-sm'>About us</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl'>Contact</h2>
                        <p className='text-sm'>Contact us</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl'>Legal</h2>
                        <p className='text-sm'>Terms of use</p>
                        <p className='text-sm'>Privacy policy</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FooterMain