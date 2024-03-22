import HeaderSnack from './components/HeaderSnack/HeaderSnack';
import Navbar from './components/Navbar/Navbar';
import HiIcon from './assets/hi-icon.png';
import PhoneBrand from './assets/phone-app.png';
import StripeLogo from './assets/stripe-logo.png';
import GoogleLogo from './assets/google-logo.png';
import SamsungLogo from './assets/samsung-logo.png';
import VisaLogo from './assets/visa-logo.png';
import SpotifyLogo from './assets/spotify-logo.png';
import LinkedinLogo from './assets/linkedin-logo.png';
import ZoomLogo from './assets/zoom-logo.png';
import DashboardDesign from './assets/dashboard-design.png';
import CardArrow from './assets/card-arrow.png';

function App() {
   return (
      <div className="h-screen w-full">
         <HeaderSnack />
         <div className="px-8 md:px-32 lg:px-44">
            <Navbar />
            <div className="md:my-14 xl:relative flex flex-col items-center xl:block xl:flex-row">
               <div className="flex gap-2 w-full">
                  <p className="font-inter font-medium text-[1.2rem]">Hey, Everyone</p>
                  <img src={HiIcon} alt="hi-icon" />
               </div>
               <div className="xl:max-w-[60%] text-start my-2 ">
                  <p className="font-inter text-[1.75rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[3rem] font-semibold tracking-[0.75px] xl:-tracking-[2] xl:leading-[5rem]">
                     Newsify is the email newsletter that works completely automated
                  </p>
               </div>
               <div className="w-full xl:max-w-[33%] text-start my-2 flex flex-col gap-10">
                  <p className="text-[1.375rem]">Track connections in real time. See who your community being lead by and find the most active</p>
                  <div className="flex justify-between gap-4">
                     <input type="text" className="px-4 w-[70%] py-3 border-gray-50 border-[1px] rounded-3xl outline-none" placeholder="Your email address" />
                     <button className="text-white-50 w-[30%] px-4 py-3 bg-blue-50 font-inter rounded-3xl md:text-[1rem] font-bold">Register</button>
                  </div>
               </div>
               <div className="xl:absolute xl:right-0 xl:top-0 ">
                  <img src={PhoneBrand} alt="phone-brand" className="w-[28rem]" />
               </div>
            </div>
         </div>
         <div className="bg-blue-50 h-[2.875rem] md:h-[6.875rem] w-full flex justify-between px-4 md:px-20">
            <img src={StripeLogo} className="aspect-square w-[2rem] md:w-[4rem] lg:w-[5rem] xl:w-[6rem] object-contain" />
            <img src={GoogleLogo} className="aspect-square w-[2rem] md:w-[4rem] lg:w-[5rem] xl:w-[6rem] object-contain" />
            <img src={SamsungLogo} className="aspect-square w-[2rem] md:w-[4rem] lg:w-[5rem] xl:w-[6rem] object-contain" />
            <img src={VisaLogo} className="aspect-square w-[2rem] md:w-[4rem] lg:w-[5rem] xl:w-[6rem] object-contain" />
            <img src={SpotifyLogo} className="aspect-square w-[2rem] md:w-[4rem] lg:w-[5rem] xl:w-[6rem] object-contain" />
            <img src={LinkedinLogo} className="aspect-square w-[2rem] md:w-[4rem] lg:w-[5rem] xl:w-[6rem] object-contain" />
            <img src={ZoomLogo} className="aspect-square w-[2rem] md:w-[4rem] lg:w-[5rem] xl:w-[6rem] object-contain" />
         </div>

         <div className="flex flex-col items-center w-full my-32 gap-10">
            <div className="w-[80%] xl:w-[48%] text-center gap-10 flex flex-col ">
               <p className="text-black-50 text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem] leading-[72px] font-inter font-bold">Let Your Newsletter Do the talk</p>
               <p className="text-black-50 text-[1rem] lg:text-[1.375rem] leading-[36px] font-inter">
                  Let`s clam it , today we don`t the time to talk or time to scroll over groups or other plateforms . So it is better for your automated newsletter to do the tlk. What cloud be done
                  better? Stay connected to your community.
               </p>
            </div>
            <div className="w-[90%] xl:w-[60%] gap-20 my-10">
               <img src={DashboardDesign} alt="dashboard-design" className="object-contain w-full" />
               <div className="w-full gap-5 flex flex-wrap md:flex-nowrap mt-20 justify-center xl:justify-between">
                  <div className="p-5 w-[400px] xl:w-[400px] h-[300px] xl:h-[359px] bg-white-100 gap-5 flex flex-col justify-center items-center relative">
                     <div className="absolute rounded-full bg-white-100 md:h-[75px] md:w-[75px] h-[100px] w-[100px] -top-12 border-4 border-white-50 items-center flex justify-center">
                        <img src={CardArrow} alt="card-arrow" />
                     </div>
                     <div className="w-full gap-5 flex flex-col">
                        <p className="text-black-50 text-[1.375rem] leading-[30px] font-semibold font-inter">Direct Connections</p>
                        <p className="md:text-[0.85rem] lg:text-[1rem] xl:text-[1.125rem]">
                           No logins or anything is needed. Directly connect with everyone with only one permission. Let us control your business world for you. Easy, customizable and quick way of
                           connecting with others
                        </p>
                     </div>
                  </div>
                  <div className="p-5 w-[400px] xl:w-[400px] h-[300px] xl:h-[359px] bg-blue-50 gap-5 flex flex-col justify-center items-center relative">
                     <div className="absolute rounded-full bg-blue-50 md:h-[75px] md:w-[75px] h-[100px] w-[100px] -top-12 border-4 border-white-50 items-center flex justify-center">
                        <img src={CardArrow} alt="card-arrow" />
                     </div>
                     <div className="w-full gap-5 flex flex-col">
                        <p className="text-white-50 text-[1.375rem] leading-[30px] font-semibold font-inter">Don't let the team stagenate</p>
                        <p className="text-white-50 md:text-[0.85rem] lg:text-[1rem] xl:text-[1.125rem]">
                           Don`t let the team get board by unnecessary messages. Let your team stay connected in the way they should- only important things. Rest could stay in other apps, we take the
                           important part.
                        </p>
                     </div>
                  </div>
                  <div className="p-5 w-[400px] xl:w-[400px] h-[300px] xl:h-[359px] bg-white-100 gap-5 flex flex-col justify-center items-center relative">
                     <div className="absolute rounded-full bg-white-100 md:h-[75px] md:w-[75px] h-[100px] w-[100px] -top-12 border-4 border-white-50 items-center flex justify-center">
                        <img src={CardArrow} alt="card-arrow" />
                     </div>
                     <div className="w-full gap-5 flex flex-col">
                        <p className="text-black-50 text-[1.375rem] leading-[30px] font-semibold font-inter">Complete Automated</p>
                        <p className="md:text-[0.85rem] lg:text-[1rem] xl:text-[1.125rem]">
                           Your members need to stay active? You can craete polls, feedback papers and a lot more stuff our widgets to keep them connected and everything with one click
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
