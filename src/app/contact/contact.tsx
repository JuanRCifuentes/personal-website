"use client"

import { useAppContext } from '@/context/appContext';
import { useState } from 'react';

const Contact = () => {
  const { contactLinks } = useAppContext()

  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log(event)
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "0a1ff28f-163c-4ea5-ae43-fe3c39ed21cf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="py-10">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-12 sm:px-8 lg:flex">
            <div className="max-w-md">
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Let’s connect
                </h3>
                <p className="mt-3">
                    I&apos;m here to help and answer any question you might have.
                </p>
            </div>
            <div>
                <ul className="mt-12 gap-y-6 gap-x-12 sm:flex lg:gap-x-0 lg:mt-0">
                    <li className="sm:flex sm:flex-col sm:h-full sm:basis-1/2 space-y-3 border-t py-6 sm:max-w-sm sm:py-0 sm:border-t-0 lg:border-l lg:px-12 lg:max-w-none">
                      <div className='mb-3 text-2xl text-center'>Social Media</div>
                      {contactLinks.map((item, idx) => (
                          item.kind === 'social_media' && (
                            <div key={idx} className='h-40 mb-10'>
                                <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-700 text-2xl mb-2">
                                    {item.icon}
                                </div>
                                <h4 className="text-gray-800 text-lg font-medium xl:text-xl">
                                    {item.name}
                                </h4>
                                <p>
                                    {item.message}
                                </p>
                                <a href={item.url} target='_blank' className="flex items-center gap-1 text-sm text-blue-900 duration-150 hover:text-blue-500 font-medium">
                                    {item.urlName}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"> <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" /> </svg>
                                </a>
                            </div>
                        )))}
                    </li>
                    <li className="sm:flex sm:flex-col sm:h-full sm:basis-1/2 space-y-3 border-t py-6 sm:max-w-sm sm:py-0 sm:border-t-0 lg:border-l lg:px-12 lg:max-w-none">
                      <div className='mb-3 text-2xl text-center'>Directly</div>
                      {contactLinks.map((item, idx) => (
                          item.kind === 'directly' && (
                            <div key={idx} className='h-40 mb-10'>
                                <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-700 text-2xl mb-2">
                                    {item.icon}
                                </div>
                                <h4 className="text-gray-800 text-lg font-medium xl:text-xl">
                                    {item.name}
                                </h4>
                                <p>
                                    {item.message}
                                </p>
                                <a href={item.url} target='_blank' className="flex items-center gap-1 text-sm text-blue-900 duration-150 hover:text-blue-500 font-medium">
                                    {item.urlName}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"> <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" /> </svg>
                                </a>
                            </div>
                        )))}
                    </li>
                </ul>
            </div>
        </div>
        <span className='hidden w-3/4 h-px bg-gray-200 md:block mx-auto mt-10 mb-5'></span>
        <main>
            <div className="sm:mt-14 md:mt-3 w-full mx-auto px-4 text-gray-600 md:px-8 sm:px-8">
                <div className="mx-auto gap-16 lg:flex lg:max-w-none">
                    <div className="max-w-lg basis-1/3 space-y-3">
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Or just say hi!
                        </p>
                        <p>
                            You can also send me a message directly using the form below. I&apos;ll get back to you as soon as possible.
                        </p>
                        <p>
                            Every field is optional, but if you want me to get back to you, please provide an email address.
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <div className="max-w-lg flex-1 mt-12">
                            <form
                                onSubmit={onSubmit}
                                className="space-y-3"
                            >
                                <div>
                                    <label className="font-medium">
                                        Full name <a className='text-gray-400'>...or a nickname :D</a>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Email <a className='text-gray-400'>...so i can get back to you</a>
                                    </label>
                                    <input
                                        type="email"
                                        name='email'
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-900 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Company <a className='text-gray-400'>...if you dare!</a>
                                    </label>
                                    <input
                                        type="text"
                                        name='company'
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-900 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Message <a className='text-gray-400'>...if not, why would you come here?</a>
                                    </label>
                                    <textarea name='message' required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-blue-900 shadow-sm rounded-lg"></textarea>
                                </div>
                                <div className={`
                                    gap-5
                                    rounded-lg
                                    ${result === "" ? 'hidden' : 'block'}
                                    ${result === "Form Submitted Successfully" ? 'border-gray-400 border-2' : result === "Sending...." ? 'border-gray-400 border-2' : 'bg-red-100'}
                                    flex justify-left
                                    text-sm
                                    text-gray-400
                                    px-4 
                                    py-2`}
                                >
                                    <svg className={`${ result === "Sending...." ? 'block animate-spin' : 'hidden'} text-2xl`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"></path></svg>
                                    <svg className={`${ result === "Form Submitted Successfully" ? 'block' : 'hidden'} text-2xl`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
                                    <div>{result}</div>
                                </div>
                                <button
                                    disabled={result === "" ? false : true}
                                    type="submit"
                                    className={`${result === '' ? '' : 'bg-blue-300'} w-full px-4 py-2 text-white font-medium bg-blue-900 rounded-lg duration-150`}
                                >
                                    <p className='flex justify-center content-center gap-5'>
                                        Submit
                                    </p>
                                    
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
  )
}

export default Contact