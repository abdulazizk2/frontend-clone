import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full p-14 bg-black text-white'>
            <div className=' grid md:grid-cols-5 gap-10 mb-10'>
                <div>
                    <div className="logo text-2xl">Prodmast</div>
                    <p>
                        Our solutions make production faster and cheaper. Contact us for more information.
                    </p>
                </div>
                <div className=''>
                    <h1 className='text-2xl'>
                        Company
                    </h1>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Newsroom</a></li>
                        <li><a href="#">Events</a></li>




                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl'>
                        Industries
                    </h1>
                    <ul>
                        <li><a href="#">Precision Metalforming</a></li>
                        <li><a href="#">Industrial Manufacturing</a></li>
                        <li><a href="#">High Tect & electronics</a></li>
                        <li><a href="#">Aerospace</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl'>
                        Products
                    </h1>
                    <ul>
                        <li><a href="#">Manufacturing Execution System</a></li>
                        <li><a href="#">Enterprise Resource Planning</a></li>
                        <li><a href="#">Quality Management System</a></li>
                        <li><a href="#">Supply Chain Planning</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl'>
                        Get In Touch
                    </h1>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className='bg-slate-800 min-h-[1px]'/>
            <div className='flex flex-col md:flex-row justify-between mt-10'>
                <div>
                    <p>2024 Prodmast, All rights reserved</p>
                </div>
                <div className='flex mt-2 md:mt-0 flex-col md:flex-row gap-2'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer