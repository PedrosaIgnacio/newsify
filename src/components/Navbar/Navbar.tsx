export default function Navbar() {
   return (
      <div className="my-2 h-[3.75rem] w-full bg-white-50 justify-between flex items-center">
         <div>
            <p className="text-blue-50 text-[1.2rem] lg:text-[2.125rem] font-inter font-semibold">Newsify</p>
         </div>
         <div className="flex gap-4 md:gap-10 items-center justify-center">
            <p className="font-inter text-[0.65rem] md:text-[0.75rem] lg:text-[1rem]  text-black-50 font-medium">Home</p>
            <p className="font-inter text-[0.65rem] md:text-[0.75rem] lg:text-[1rem]  text-black-50 font-medium">About Us</p>
            <p className="font-inter text-[0.65rem] md:text-[0.75rem] lg:text-[1rem]  text-black-50 font-medium">Pricing</p>
            <p className="font-inter text-[0.65rem] md:text-[0.75rem] lg:text-[1rem]  text-black-50 font-medium">Demo</p>
            <div className="gap-4 hidden 2xl:flex">
               <input type="text" className="px-10 py-3 border-gray-50 border-[1px] rounded-3xl outline-none" placeholder="Search" />
               <button className="text-white-50 px-10 py-3 bg-blue-50 font-inter rounded-3xl md:text-[1rem] font-bold">Register</button>
            </div>
         </div>
      </div>
   );
}
