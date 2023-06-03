import { useState } from "react";
import "../css/Navbar.css";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-8 bg-transparent sticky top-0 z-50 w-full px-16">
      
      <img src="./ecell.png" alt="Logo" className="object-contain h-48 w-96"  />
     
      <nav>
  
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 z-50"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
              
            <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-5 right-5 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
                 
              <svg
                className="h-8 w-8 text-gray-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
               
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
           
          <ul className="flex flex-col items-center justify-between min-h-[250px] text-[#0060A1]"  >
              <li className="border-b border-slate-100 my-8 uppercase font-semibold text-slate-100 text-xl text-[#0060A1]">
                <a href="/HOME" class="mobile">HOME</a>
              </li>
              <li className="border-b border-slate-100 my-8 uppercase font-semibold text-slate-100 text-xl">
                <a href="/ABOUT US" class="moblie">ABOUT US</a>
              </li>
              <li className="border-b border-slate-100 my-8 uppercase font-semibold text-slate-100 text-xl">
                <a href="/EVENTS" class="mobile">INTIATIVES</a>
              </li>
              <li className="border-b border-slate-100 my-8 uppercase font-semibold text-slate-100 text-xl">
                <a href="/EVENTS" class="mobile">EVENTS</a>
              </li>
              <li className="border-b border-slate-100 my-8 uppercase font-semibold text-slate-100 text-xl">
                <a href="/BLOGS" class="mobile">BLOGS</a>
              </li>
              <li className="border-b border-slate-100 my-8 uppercase font-semibold text-slate-100 text-xl">
                <a href="/BLOGS" class="mobile">TEAM</a>
              </li>
              <li className="border-b border-slate-100  my-8 uppercase font-semibold  text-slate-100 text-xl">
                <a href="/CONTACT"  class="mobile">CONTACT</a>
              </li>
            </ul>
          </div>
        </section>

       <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-[#0060A1]" >
        
          <li className="text-xl font-semibold text-stone-950 text-[#0060A1]">
            <a href="/HOME" class="desktop">HOME</a>
          </li>
          <li className="text-xl font-semibold text-stone-950">
            <a href="/ABOUT US" class="desktop">ABOUT US</a>
          </li>
          <li className="text-xl font-semibold text-stone-950">
            <a href="/EVENTS" class="desktop">INTIATIVES</a>
          </li>
          <li className="text-xl font-semibold text-stone-950">
            <a href="/EVENTS" class="desktop">EVENTS</a>
          </li>
          <li className="text-xl font-semibold text-stone-950">
            <a href="/BLOGS" class="desktop">BLOGS</a>
          </li>
          <li className="text-xl font-semibold text-stone-950">
            <a href="/EVENTS" class="desktop">TEAM</a>
          </li>
          <li className="text-xl font-semibold  text-stone-950">
            <a href="/CONTACT" class="desktop">CONTACT</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgb(17 24 39);
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
     
.desktop  {
        background-image: linear-gradient(
          to right,
          ##0060A1,
          #0060A1 50%,
          #000 50%
        );
        background-size: 200% 100%;
        background-position: -100%;
        display: inline-block;
        padding: 5px 0;
        position: relative;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s ease-in-out;
      }
      
      .desktop:before {
        content: '';
        background: #54b3d6;
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 3px;
        transition: all 0.3s ease-in-out;
      }
      
     .desktop:hover {
       background-position: 0;
      }
      
      .desktop:hover::before {
        width:100%;
      }
      .mobile {
        background-image: linear-gradient(
          to right,
          #54b3d6,
          #54b3d6 50%,
          #ffffff 50%
        );
        background-size: 200% 100%;
        background-position: -100%;
        display: inline-block;
        padding: 5px 0;
        position: relative;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s ease-in-out;
      }
      
      .mobile:before {
        content: '';
        background: #54b3d6;
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 3px;
        transition: all 0.3s ease-in-out;
      }
      
     .mobile:hover {
       background-position: 0;
      }
      
      .mobile:hover::before {
        width:100%;
      }

    `}</style>
    </div>
  );
}
