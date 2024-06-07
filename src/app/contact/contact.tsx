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
                                className="space-y-5"
                            >
                                <div>
                                    <label className="font-medium">
                                        Full name <a className='text-gray-400'>...or a nickname :D</a>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
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
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-900 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Company <a className='text-gray-400'>...if you dare!</a>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-900 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Message <a className='text-gray-400'>...if not, why would you come here?</a>
                                    </label>
                                    <textarea name='message' required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-blue-900 shadow-sm rounded-lg"></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-white font-medium bg-blue-900 rounded-lg duration-150"
                                >
                                    Submit
                                </button>
                            </form>
                            <span>{result}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
  )
}

export default Contact