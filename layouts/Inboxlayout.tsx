import React from 'react'
import BaseLayout from './BaseLayout'

type Props = {
    title: string;
    children: React.ReactElement;
};

const InboxLayout = ({ children, title }: Props) => {

    return (
        <BaseLayout title={title}>
            <div className="flex">
                {/* Organizarion sidebar */}
                <h1>Sidebar</h1>				{/* Main content */}
                <div className="flex flex-col w-full">
                    <div className="flex align-middle justify-between px-6 py-4  bg-white sticky top-0 z-[100] shadow-[0_.23rem_.2rem_#00000023] w-full">
                        <div className="flex gap-3 items-center">
                            <div className="flex justify-center items-center text-xl font-bold h-12 w-12 bg-red-300 rounded-full">
                                O
                            </div>
                            <h2 className="text-2xl font-bold">Inbox</h2>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div>
                                <input type="text" className="rounded-md" placeholder='Search.....' />
                            </div>
                            <div className='flex items-center gap-4'>
                                <div></div>
                                <div className='bg-black p4 text-white rounded-full text-2xl h-10 w-10 flex justify-center items-center'>B</div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4">{children}</div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default InboxLayout;