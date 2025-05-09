export default function Contact() {
    return (
        <div className="w-full bg-indigo-800 text-center ">
            <div className="flex flex-col mx-4 py-20 justify-center">
                <h3 className="text-white font-bold text-3xl">
                    Stay Updated with Educational Innovations
                </h3 >
                <p className="text-gray-200 mt-7 text-xl">Join thousands of educators and students receiving our newsletter with the latest trends, tips, and updates in educational technology.</p>

                <div className="w-full mt-10 flex flex-col">
                    <input className="bg-white rounded-4xl shadow-xl mb-3 px-4 py-3" type="text" name="" id="" placeholder="Enter your email address" />
                    <button className="px-4 py-3 rounded-4xl shadow-xl border border-indigo-400 bg-indigo-600 text-white">Subscribe</button>
                </div>

                <p className="mt-4 text-sm text-gray-200">
                    We respect your privacy. Unsubscribe at any time.
                </p>

                <ul className='mt-6 flex w-full justify-center gap-7 mb-4'>
                    <li className='mt-5 hover:text-indigo-400 transition duration-200'><a href=""><i className="fa-brands text-white text-xl fa-facebook text-[17px]"></i></a></li>
                    <li className='mt-5 hover:text-indigo-400 transition duration-200'><a href=""><i className="fa-brands text-white text-xl fa-twitter"></i></a></li>
                    <li className='mt-5 hover:text-indigo-400 transition duration-200'><a href=""><i className="fa-brands text-white text-xl fa-instagram fa-lg"></i></a></li>
                    <li className='mt-5 hover:text-indigo-400 transition duration-200'><a href=""><i className="fa-brands text-white text-xl fa-youtube fa-lg"></i></a></li>
                </ul>
            
            </div>
        </div>
    )
}