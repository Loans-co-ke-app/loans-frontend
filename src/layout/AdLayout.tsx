import React from 'react'


interface IProps {
    children: JSX.Element
}
const AdLayout = ({ children }: IProps) => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap'>
            <div className='flex-[8]'>
                {children}
            </div>
            <div className='flex-[4]'>

            </div>
        </div>
    )
}

export default AdLayout