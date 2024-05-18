'use client'

import Link from "next/link";
import StarRating from "react-rating-stars-component";
import { useState } from 'react';
import Image from 'next/image'
import thankyou from '@images/icons/thankyou.svg'
import imgSrc from '@images/images/payment-method.svg'

const OrderSuccess = () => {
    const [rating, setRating] = useState(0);
    const handleStarClick = (nextValue:any, prevValue:any, name:any) => {
        setRating(nextValue);
    }
    let minValue = 0, maxValue = 100
    const [count, setCount] = useState(minValue);

    const handleIncrementCounter = () => {
        if (count < maxValue) {
        setCount((prevState) => prevState + 1);
        }
    };

    const handleDecrementCounter = () => {
        if (count > minValue) {
        setCount((prevState) => prevState - 1);
        }
    };
    return (
        <div className="min-h-svh">
            <nav className="bg-white border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={'../../../../icons/Solevibe Logo 1.svg'} className="h-14" alt="Flowbite Logo" />
                    </a>

                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="../../../../icons/shopping-bag 1.svg" className="h-8" alt="Flowbite Logo" />
                    </a>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                            </li>
                            
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mx-auto">
                <div className="border border-gray-200 rounded-lg shadow p-5 bg-[#EFEFEF] my-10 mx-6">  
                    <div className="flex flex-col items-center">
                        <Image
                            src={thankyou}
                            alt="payment-method"
                            className="mt-5"
                            width={96}
                            height={80}
                            quality={100}
                        />
                        <h2 className="text-xl font-bold mt-5 leading-9 text-gray-900">
                            Thank You.
                        </h2>
                        <h3 className="font-bold leading-9 text-gray-900">
                            Your Order Has Been Placed Successfully.
                        </h3>
                        <p className="text-gray-900">We will Call You Shortly. Please Keep the Phone With You</p>
                        <h4 className="font-bold leading-9 mt-6 mb-3 text-gray-900">
                            Total Bill
                        </h4>
                    </div>

                    <div className="grid grid-cols-7 gap-3 py-5 px-8 bg-[#fff] border border-gray-200 rounded-lg">
                        <div className="col-span-5">
                            <p className="text-lg text-black mb-2">Subtotal: </p>
                            <p className="text-lg text-black mb-2">Delivery Charge: </p>
                            <p className="text-lg text-black mb-2">Total: </p>
                        </div>
                        <div className="col-span-2"> 
                            <p className="text-lg text-red-600 mb-2"> TK 1,798 </p>
                            <p className="text-lg text-red-600 mb-2"> TK 80 </p>
                            <p className="text-lg text-red-600 mb-2"> TK 1,998 </p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="mx-auto text-center text-red-600">
                            If you Don’t Receive The Product Then Please Pay <br /> the Delivery Charge.
                        </p>
                    </div>
                </div>

            </div>
            <div className="footer text-center bg-zinc-900 pt-10 pb-5">
                <h5 className="pb-4" >CORPORATE OFFICE</h5>
                <p className="pb-5 text-base">Road No 3, kamrangirchar, <br /> East Rasulpur, Dhaka, Bangladesh</p>
                <h5 className="pb-8">Call/ WhatsApp: 01926644575</h5>
                <h5>PAYMENT METHODS</h5>
                <div className="flex justify-center pt-3 pb-5">
                    <Image
                        src={imgSrc}
                        alt="payment-method"
                        width={250}
                        height={400}
                        quality={100}
                    />
                </div>
                <p className="text-xs" >copyright 2024 @Adwise</p>

            </div>
        </div>
    )
}

export default OrderSuccess;