import React, {useState} from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    // The logo to display in the header/mobile menu
    const logo = "/zena.svg"

    // Determines whether the mobile menu is displayed
    const [mobileMenu, toggleMobileMenu] = useState(false)

    return <header className="z-50">
        <div className="relative bg-white">
            <div
                className="flex justify-between items-center max-w-8xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link href="/">
                        <a>
                            <span className="sr-only">Zena Health</span>
                            <img className="h-8 w-auto sm:h-10" src={logo} alt=""/>
                        </a>
                    </Link>

                </div>
                {/*<div className="-mr-2 -my-2 md:hidden">*/}
                {/*    /!*Button that opens the mobile menu*!/*/}
                {/*    <button type="button" onClick={() => toggleMobileMenu(true)}*/}
                {/*            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">*/}
                {/*        <span className="sr-only">Open menu</span>*/}
                {/*        /!* Heroicon name: menu *!/*/}
                {/*        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                {/*             stroke="currentColor" aria-hidden="true">*/}
                {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}*/}
                {/*                  d="M4 6h16M4 12h16M4 18h16"/>*/}
                {/*        </svg>*/}
                {/*    </button>*/}
                {/*</div>*/}

                {/*Center buttons*/}
              {/*  <nav className="hidden md:flex space-x-10">*/}
              {/*      <div className="relative">*/}
              {/*          /!* Item active: "text-gray-900", Item inactive: "text-gray-500" *!/*/}
              {/*          <button type="button"*/}
              {/*                  className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">*/}
              {/*              <span>Solutions</span>*/}
              {/*              /!**/}
              {/*  Heroicon name: chevron-down*/}

              {/*  Item active: "text-gray-600", Item inactive: "text-gray-400"*/}
              {/**!/*/}
              {/*              <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"*/}
              {/*                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"*/}
              {/*                   aria-hidden="true">*/}
              {/*                  <path fillRule="evenodd"*/}
              {/*                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"*/}
              {/*                        clipRule="evenodd"/>*/}
              {/*              </svg>*/}
              {/*          </button>*/}
              {/*      </div>*/}
              {/*      <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">*/}
              {/*          Pricing*/}
              {/*      </a>*/}
              {/*      <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">*/}
              {/*          Partners*/}
              {/*      </a>*/}
              {/*      <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">*/}
              {/*          Company*/}
              {/*      </a>*/}
              {/*  </nav>*/}

                <div className="flex items-center justify-end md:flex-1 lg:w-0">
                    <Link href="/article/1">
                        <a className="whitespace-nowrap text-base font-bold text-gray-500 hover:text-gray-900 hidden md:block">
                            Learn more
                        </a>
                    </Link>
                    <a href="#newsletter"
                       className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-mediumyarn dev text-white bg-green-600 hover:bg-green-700">
                        Get notified
                    </a>
                </div>
            </div>
            {/*Mobile menu -- show/hide based on mobileMenu state*/}
            {mobileMenu &&
            <div className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div
                    className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <img className="h-8 w-auto" src={logo} alt="Workflow"/>
                            </div>
                            <div className="-mr-2">
                                {/*Button that closes the mobile menu*/}
                                <button type="button" onClick={() => toggleMobileMenu(false)}
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                    <span className="sr-only">Close menu</span>
                                    {/* Heroicon name: x */}
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <nav className="grid grid-cols-1 gap-7">
                                <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                                    <div
                                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-600 text-white">
                                        {/* Heroicon name: inbox */}
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                                        </svg>
                                    </div>
                                    <div className="ml-4 text-base font-medium text-gray-900">
                                        Inbox
                                    </div>
                                </a>
                                <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                                    <div
                                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-600 text-white">
                                        {/* Heroicon name: annotation */}
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                                        </svg>
                                    </div>
                                    <div className="ml-4 text-base font-medium text-gray-900">
                                        Messaging
                                    </div>
                                </a>
                                <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                                    <div
                                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-600 text-white">
                                        {/* Heroicon name: chat-alt-2 */}
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                                        </svg>
                                    </div>
                                    <div className="ml-4 text-base font-medium text-gray-900">
                                        Live Chat
                                    </div>
                                </a>
                                <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                                    <div
                                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-600 text-white">
                                        {/* Heroicon name: question-mark-circle */}
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                    </div>
                                    <div className="ml-4 text-base font-medium text-gray-900">
                                        Knowledge Base
                                    </div>
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div className="py-6 px-5">
                        <div className="grid grid-cols-2 gap-4">
                            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Pricing
                            </a>
                            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Partners
                            </a>
                            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Company
                            </a>
                        </div>
                        <div className="mt-6">
                            <a href="#"
                               className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700">
                                Sign up
                            </a>
                            <p className="mt-6 text-center text-base font-medium text-gray-500">
                                Existing customer?
                                <a href="#" className="text-gray-900">
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    </header>
}

export default Navbar