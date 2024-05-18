'use client'

import Link from "next/link";
import StarRating from "react-rating-stars-component";
import { useState } from 'react';
import Image from 'next/image'
import product from '@images/images/product.svg'
import imgSrc from '@images/images/payment-method.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import beltImg from '@images/images/belt.png';
import banner1 from '@images/images/banner1.svg';
import footwareSize from '@images/images/footware-size.svg';

const Checkout = () => {
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

    function SampleNextArrow(props:any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style}}
                onClick={onClick}
            />
        );
    }
    
    function SamplePrevArrow(props:any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
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
                <div className="flex justify-center">
                    <h3 className="font-bold leading-9 mx-auto text-gray-900">
                        Please fill Up The Form To Complete The Order
                    </h3>
                </div>

                <div className="border border-gray-200 rounded-lg shadow p-5 bg-[#EFEFEF] my-10 mx-6">
                    <Image
                        src={product}
                        alt="product"
                        // width={100%}
                        height={410}
                        style={{ width: '100%' }}
                        quality={100}
                    />
                    <div className="px-7 mt-3">
                        <Slider {...settings}>
                            <div className="text-black bg-[#f2f2f2] rounded-lg" >
                                <Image
                                    src={product}
                                    alt="img1"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '5px' }} // optional
                                />
                            </div>
                            <div className="text-black bg-[green] rounded">
                                <Image
                                    src={banner1}
                                    alt="product"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '5px' }} // optional
                                />
                            </div>
                            <div className="text-black bg-[red] rounded">
                                <Image
                                    src={beltImg}
                                    alt="product"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '5px' }} // optional
                                />
                            </div>
                            <div className="text-black bg-[blue] rounded-lg">
                                <Image
                                    src={banner1}
                                    alt="product"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '5px' }} // optional
                                />
                            </div>
                        </Slider>
                    </div>
                    <h3 className="font-bold leading-9 mt-6 text-gray-900">
                        Elegance Medicated Loafer Shoes For Men SB-S544 | Executive
                    </h3>
                    <div className="rating-data">
                        <div className="grid grid-cols-8 py-2">
                            <div className="col-span-3 md:col-span-2">
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
                            <div className="col-span-8 md:col-span-5"> 
                                <p className="text-gray-900 mt-[6px]">4.98/5.00 (175 customer Reviews)</p>
                            </div>
                        </div>
                    </div>
                    <p className="font-bold text-lg text-red-600 pr-3">CODE: SB-S544</p>
                    <p className="discount text-lg font-bold text-red-600">
                        PRICE: <span className="text-black text-base line-through">TK 2,500</span> TK 1,798
                    </p>
                    <div className="flex justify-center mt-3">
                        <h3 className="leading-9 mx-auto text-lg text-[#EC1E24]">
                            Please Select your Shoe Size
                        </h3>
                    </div>
                    <div className="flex flex-wrap justify-evenly bg-[#EC1E24] px-3 my-3 rounded">
                        <span className="select-size">Size 39</span>
                        <span className="select-size">Size 40</span>
                        <span className="select-size">Size 41</span>
                        <span className="select-size">Size 42</span>
                        <span className="select-size">Size 43</span>
                        <span className="select-size">Size 44</span>
                    </div>
                    <a href="/checkout" className="block text-center bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 mb-3 rounded">
                        ORDER NOW
                    </a>
                    <button className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 mb-3 rounded">
                        ADD TO CART
                    </button>
                    <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 mb-3 rounded">
                        WhatsApp Order
                    </button>
                    <button className="w-full bg-white text-black border border-black font-bold py-2 px-4 mb-3 rounded">
                        Call Now: 01926644575
                    </button>
                </div>

                <div className="border border-gray-200 rounded-lg shadow p-5 bg-[#EFEFEF] my-10 mx-6">
                    <h3 className="font-bold leading-9 mx-auto text-gray-900">
                        DESCRIPTION
                    </h3>
                    <p className="text-black">Loafers for men. SSB Leather has a wide trendy collection of unique designs and great quality for men’s loafers of all ages 
                        at affordable prices. Best Price of SSB Leather in Bangladesh.
                    </p>
                    <Image
                        src={footwareSize}
                        alt="payment-method"
                        className="mt-4"
                        width={0}
                        height={0}
                        quality={100}
                        style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '5px' }} // optional
                    />
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

export default Checkout;