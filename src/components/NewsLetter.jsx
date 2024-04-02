const NewsLetter = () => {
    return(
        <section className="bg-[#F1DED1] md:px-8 py-16">
            <div className="w-full mx-auto flex flex-col justify-center items-center gap-y-4 max-w-[250px] sm:max-w-[360px] md:max-w-[666px]">
                <h1 className="text-3xl font-semibold">Get Exclusive Offers on Your Email</h1>
                <h1 className="uppercase font-medium">Subscribe to our newsletter and stay updated</h1>
                <div className="flex flex-col justify-between items-center gap-2 sm:flex-row">
                    <input type="email" placeholder="Your Email Address" className=" px-8 py-2 md:px-16  outline-none" />

                    <button className="btn-dark  px-3 py-1 sm:px-6 sm:py-2 w-full">Subscribe</button>
                </div>
            </div>
        </section>
    )
}
export default NewsLetter;