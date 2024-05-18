'use client'

import Link from "next/link";
import StarRating from "react-rating-stars-component";
import { useState } from 'react';
import Image from 'next/image'
import imgSrc from '@images/images/payment-method.svg'
import { useRouter } from 'next/navigation'

export default function ProductList() {
    const [rating, setRating] = useState(0);
    const router = useRouter();

    const handleStarClick = (nextValue:any, prevValue:any, name:any) => {
        setRating(nextValue);
    }
    const linkTo = () => {
        router.push('/product');
      };
    return (
        <div className="min-h-svh">
            <nav className="bg-white border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <button data-collapse-toggle="navbar-multi-level" type="button" 
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
                        rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
                        dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                        aria-controls="navbar-multi-level" aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={'../../../../icons/Solevibe Logo 1.svg'} className="h-11 sm:h-14" alt="Flowbite Logo" />
                    </a>

 
                    <div className="hidden w-full lg:block lg:w-auto" id="navbar-multi-level">
                        <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 
                        lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white">
                            <li>
                                <a href="#" className="block py-2 px-3 text-black" aria-current="page">
                                    Home
                                </a>
                            </li>
                            
                            <li>
                                <a href="#" className="block py-2 px-3 text-black" aria-current="page">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-black" aria-current="page">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-black" aria-current="page">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="../../../../icons/shopping-bag 1.svg" className="h-8" alt="Flowbite Logo" />
                    </a>
                </div>
            </nav>
            <div className="banner w-100">
                <img src="../../../../images/banner1.svg" className="w-screen" alt="Flowbite Logo" />
            </div>
            <div className="container mx-auto ">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 mt-6">
                    <div className="relative max-w-sm m-3 bg-white border border-gray-200 rounded-lg shadow">
                        <a href="/product">
                            <img src="../../../../images/belt.png" className="w-screen" alt="Flowbite Logo" />
                        </a>
                        <div className="p-5 pb-[35%]">
                            <a href="/product">
                                <h5 className="text-center mb-2 text-lg lg:text-xl font-bold tracking-tight text-gray-900 text-black">
                                    Casual Nubuck Lace-Up Shoe For Men SB-S559 | Premium
                                </h5>
                            </a>
                            <div className="flex justify-center my-3">
                                <StarRating 
                                    value={rating} 
                                    onStarClick={(nextValue, prevValue, name) => 
                                        handleStarClick(nextValue, prevValue, name)}
                                    starCount={5}
                                    starColor={'#ffb400'}
                                    emptyStarColor={'#ccc'}
                                    size={20}
                                />
                            </div>
                            <div className="pricing flex justify-center mb-3">
                                <p className="regular text-lg text-black line-through pr-3">TK2000</p>
                                <p className="discount text-lg font-bold text-red-600">TK1,798</p>
                            </div>
                        </div>
                        <button className="inset-center uppercase w-9/12 py-2 text-sm 
                            font-medium text-center text-white bg-red-700 
                            rounded-lg hover:bg-red-800 focus:ring-4 
                            focus:outline-none focus:ring-red-300 
                            dark:bg-red-600 dark:hover:bg-red-700 
                            dark:focus:ring-red-800"
                        >
                            Order Now
                        </button>
                    </div>
                    
                    <div className="max-w-sm m-3 bg-white relative border border-gray-200 rounded-lg shadow">
                        <a href="/product">
                            <img src="../../../../images/shoes.png" className="w-screen" alt="Flowbite Logo" />
                        </a>
                        <div className="p-5 pb-[35%]">
                            <a href="/product">
                                <h5 className="text-center mb-2 text-lg lg:text-xl font-bold tracking-tight text-gray-900 text-black">
                                    Elegance Medicated Loafer Shoes For Men SB-S544 | Executive
                                </h5>
                            </a>
                            <div className="flex justify-center my-3">
                                <StarRating 
                                    value={rating} 
                                    onStarClick={(nextValue, prevValue, name) => 
                                        handleStarClick(nextValue, prevValue, name)}
                                    starCount={5}
                                    starColor={'#ffb400'}
                                    emptyStarColor={'#ccc'}
                                    size={20}
                                />
                            </div>
                            <div className="pricing flex justify-center mb-3">
                                <p className="regular text-lg text-black line-through pr-3">TK2000</p>
                                <p className="discount text-lg font-bold text-red-600">TK1,798</p>
                            </div>
                        </div>
                        <button className="inset-center uppercase w-9/12 py-2 text-sm 
                            font-medium text-center text-white bg-red-700 
                            rounded-lg hover:bg-red-800 focus:ring-4 
                            focus:outline-none focus:ring-red-300 
                            dark:bg-red-600 dark:hover:bg-red-700 
                            dark:focus:ring-red-800"
                        >
                            Order Now
                        </button>
                    </div>

                    <div className="relative max-w-sm m-3 bg-white border border-gray-200 rounded-lg shadow">
                        <a href="/product">
                            <img src="../../../../images/shoes.png" className="w-screen" alt="Flowbite Logo" />
                        </a>
                        <div className="p-5 pb-[35%]">
                            <a href="/product">
                                <h5 className="text-center mb-2 text-lg lg:text-xl font-bold tracking-tight text-gray-900 text-black">
                                    Elegance Medicated Loafer Shoes For Men SB-S544 | Executive
                                </h5>
                            </a>
                            <div className="flex justify-center my-3">
                                <StarRating 
                                    value={rating} 
                                    onStarClick={(nextValue, prevValue, name) => 
                                        handleStarClick(nextValue, prevValue, name)}
                                    starCount={5}
                                    starColor={'#ffb400'}
                                    emptyStarColor={'#ccc'}
                                    size={20}
                                />
                            </div>
                            <div className="pricing flex justify-center mb-3">
                                <p className="regular text-lg text-black line-through pr-3">TK2000</p>
                                <p className="discount text-lg font-bold text-red-600">TK1,798</p>
                            </div>
                            
                        </div>
                        <button className="inset-center uppercase w-9/12 py-2 text-sm 
                            font-medium text-center text-white bg-red-700 
                            rounded-lg hover:bg-red-800 focus:ring-4 
                            focus:outline-none focus:ring-red-300 
                            dark:bg-red-600 dark:hover:bg-red-700 
                            dark:focus:ring-red-800"
                        >
                            Order Now
                        </button>
                    </div>
                    
                    <div className="relative max-w-sm m-3 bg-white border border-gray-200 rounded-lg shadow">
                        <a href="/product">
                            <img src="../../../../images/shoes.png" className="w-screen" alt="Flowbite Logo" />
                        </a>
                        <div className="p-5 pb-[35%]">
                            <a href="/product">
                                <h5 className="text-center mb-2 text-lg lg:text-xl font-bold tracking-tight text-gray-900 text-black">
                                    Elegance Medicated Loafer Shoes For Men SB-S544 | Executive
                                </h5>
                            </a>
                            <div className="flex justify-center my-3">
                                <StarRating 
                                    value={rating} 
                                    onStarClick={(nextValue, prevValue, name) => 
                                        handleStarClick(nextValue, prevValue, name)}
                                    starCount={5}
                                    starColor={'#ffb400'}
                                    emptyStarColor={'#ccc'}
                                    size={20}
                                />
                            </div>
                            <div className="pricing flex justify-center mb-3">
                                <p className="regular text-lg text-black line-through pr-3">TK2000</p>
                                <p className="discount text-lg font-bold text-red-600">TK1,798</p>
                            </div>
                        </div>
                        <button className="inset-center uppercase w-9/12 py-2 text-sm 
                            font-medium text-center text-white bg-red-700 
                            rounded-lg hover:bg-red-800 focus:ring-4 
                            focus:outline-none focus:ring-red-300 
                            dark:bg-red-600 dark:hover:bg-red-700 
                            dark:focus:ring-red-800"
                        >
                            Order Now
                        </button>
                    </div>
                    <div className="relative max-w-sm m-3 bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img src="../../../../images/shoes.png" className="w-screen" alt="Flowbite Logo" />
                        </a>
                        <div className="p-5 pb-[35%]">
                            <a href="#">
                                <h5 className="text-center mb-2 text-lg lg:text-xl font-bold tracking-tight text-gray-900 text-black">
                                    Elegance Medicated Loafer Shoes For Men SB-S544 | Executive
                                </h5>
                            </a>
                            <div className="flex justify-center my-3">
                                <StarRating 
                                    value={rating} 
                                    onStarClick={(nextValue, prevValue, name) => 
                                        handleStarClick(nextValue, prevValue, name)}
                                    starCount={5}
                                    starColor={'#ffb400'}
                                    emptyStarColor={'#ccc'}
                                    size={20}
                                />
                            </div>
                            <div className="pricing flex justify-center mb-3">
                                <p className="regular text-lg text-black line-through pr-3">TK2000</p>
                                <p className="discount text-lg font-bold text-red-600">TK1,798</p>
                            </div>
                        </div>
                        <button className="inset-center uppercase w-9/12 py-2 text-sm 
                            font-medium text-center text-white bg-red-700 
                            rounded-lg hover:bg-red-800 focus:ring-4 
                            focus:outline-none focus:ring-red-300 
                            dark:bg-red-600 dark:hover:bg-red-700 
                            dark:focus:ring-red-800"
                        >
                            Order Now
                        </button>
                    </div>
                    <div className="relative max-w-sm m-3 bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img src="../../../../images/shoes.png" className="w-screen" alt="Flowbite Logo" />
                        </a>
                        <div className="p-5 pb-[35%]">
                            <a href="#">
                                <h5 className="text-center mb-2 text-lg lg:text-xl font-bold tracking-tight text-gray-900 text-black">
                                    Elegance Medicated Loafer Shoes For Men SB-S544 | Executive
                                </h5>
                            </a>
                            <div className="flex justify-center my-3">
                                <StarRating 
                                    value={rating} 
                                    onStarClick={(nextValue, prevValue, name) => 
                                        handleStarClick(nextValue, prevValue, name)}
                                    starCount={5}
                                    starColor={'#ffb400'}
                                    emptyStarColor={'#ccc'}
                                    size={20}
                                />
                            </div>
                            <div className="pricing flex justify-center mb-3">
                                <p className="regular text-lg text-black line-through pr-3">TK2000</p>
                                <p className="discount text-lg font-bold text-red-600">TK1,798</p>
                            </div>
                        </div>
                        <button className="inset-center uppercase w-9/12 py-2 text-sm 
                            font-medium text-center text-white bg-red-700 
                            rounded-lg hover:bg-red-800 focus:ring-4 
                            focus:outline-none focus:ring-red-300 
                            dark:bg-red-600 dark:hover:bg-red-700 
                            dark:focus:ring-red-800"
                        >
                            Order Now
                        </button>
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

            {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>



                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="text-sm text-end mt-2">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link href="/auth/sign-up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign Up now
                        </Link>
                    </p>
                </div>
            </div> */}
        </div>
    )
}
