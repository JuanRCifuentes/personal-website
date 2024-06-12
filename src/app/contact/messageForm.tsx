import { useState } from 'react'

const MessageForm = () => {
    const [submissionResult, setSubmissionResult] = useState("");
  
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      console.log(event)
      event.preventDefault();
      setSubmissionResult("Sending....");
      const formData = new FormData(event.target as HTMLFormElement);
  
      formData.append("access_key", "0a1ff28f-163c-4ea5-ae43-fe3c39ed21cf");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setSubmissionResult("Form Submitted Successfully");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setSubmissionResult(data.message);
      }
    };

  return (
    <main>
        <div className="sm:mt-14 md:mt-3">
            <div className="mx-auto gap-16 lg:flex lg:max-w-none">
                <div className="max-w-lg basis-1/3 space-y-3">
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Or just say hi!
                    </p>
                    <p>
                        You can also send me a message directly using the form below. I&apos;ll get back to you as soon as possible.
                    </p>
                    <p>
                        <span className='text-blue-900 text-xl font-bold'>Every field is optional</span> (except the message one), but if you want me to get back to you, please provide an email address.
                    </p>
                </div>
                <div className='text-gray-800 flex justify-center basis-2/3'>
                    <div className="sm:max-w-lg lg:max-w-full mt-12">
                        <form
                            onSubmit={onSubmit}
                            className="space-y-3"
                        >
                            <div>
                                <label className="font-medium">
                                    Full name <span className='text-gray-500'>...or a nickname &#x28;&#xac;&#x5f;&#xac;&#x29;</span>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="font-medium">
                                    Email <span className='text-gray-500'>...so I can get back to you &#xaf;&#x5c;&#x5f;&#x28;&#x30c4;&#x29;&#x5f;&#x2f;&#xaf;</span>
                                    <input
                                        type="email"
                                        name='email'
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-900 shadow-sm rounded-lg"
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="font-medium">
                                    Company <span className='text-gray-500'>...if you dare! &#x295;&#x2022;&#x1d25;&#x2022;&#x294;</span>
                                    <input
                                        type="text"
                                        name='company'
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-900 shadow-sm rounded-lg"
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="font-medium">
                                    Feedback <span className='text-gray-500'>... &#x28;&#xe07;&#x27;&#x300;&#x2d;&#x27;&#x301;&#x29;&#xe07;</span>
                                    <input
                                        type="text"
                                        name='feedback'
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-900 shadow-sm rounded-lg"
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="font-medium">
                                    Message <span className='text-gray-500'>...I know you want to &#x7e;&#x28;&#x2d8;&#x25be;&#x2d8;&#x7e;&#x29;</span>
                                    <textarea name='message' required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-blue-900 shadow-sm rounded-lg"></textarea>
                                </label>
                            </div>
                            <div className={`gap-5 rounded-lg items-center justify-left text-sm text-gray-500 px-4 py-2
                                ${submissionResult === "" ? 'hidden' : 'flex'}
                                ${submissionResult === "Form Submitted Successfully" ? 'border-gray-500 border-2' : submissionResult === "Sending...." ? 'border-gray-500 border-2' : 'bg-red-100'}`
                            }
                            >
                                <svg className={`${ submissionResult === "Sending...." ? 'animate-spin' : 'hidden'} text-xl`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z" /> </svg>
                                <svg className={`${ submissionResult === "Form Submitted Successfully" ? 'block' : 'hidden'} text-xl`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
                                <div>{submissionResult}</div>
                            </div>
                            <button
                                disabled={submissionResult === "" ? false : true}
                                type="submit"
                                className={`${submissionResult === "" ? '' : 'bg-blue-100'} w-full px-4 py-2 text-white font-medium bg-blue-900 rounded-lg duration-150`}
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
  )
}

export default MessageForm