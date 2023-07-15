import "./Home.scss";
import logo from "../assets/logo.png";
import key from "../assets/key.png";
import airbaloon from "../assets/airbaloon.jpeg";
import astric from "../assets/astric.jpg";
import downarrow from "../assets/down-arrow.png";
import support from "../assets/support.jpg";
import CustomCarousal from "../carousal/Carousal";
import { useEffect } from "react";
import WOW from "wowjs";
import "animate.css";

export default function Home() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
      animateClass: "animate__animated",
    }).init();
  }, []);

  return (
    <div>
      <div className="home-layout">
        {/* NAVIGATION BAR */}
        <header className="container mx-auto flex items-center justify-between wow animate__fadeInDown">
          <div className="logo-container">
            <img className="logo spin-image" src={logo} />
          </div>
          <nav className="col-span-4 flex justify-center gap-8">
            <a
              href="#"
              className="text-gray-300 px-3 text-lg font-medium active-nav"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 px-3 text-lg font-medium flex items-center"
            >
              Services
              <span title="End" className="arrow down mb-1"></span>
            </a>
            <a href="#" className="text-gray-300 px-3 text-lg font-medium">
              About us
            </a>
            <a href="#" className="text-gray-300 px-3 text-lg font-medium">
              Blog
            </a>
            <a href="#" className="text-gray-300 px-3 text-lg font-medium">
              Career
            </a>
          </nav>
          <div className="login-container flex justify-center items-center">
            <button className="contact-us hover:opacity-80 py-3 mx-3 rounded-full text-black font-semibold text-lg border-blue btn-primary">
              Contact us
            </button>
            <img src={key} className="ml-3 h-4" />
            <a href="#" className="text-gray-300 px-3 text-lg font-medium">
              Login
            </a>
          </div>
        </header>

        {/* BOTTOM CONTENT */}
        <div className="container mx-auto grid grid-cols-2 justify-between content-section-gap my-0">
          <div className="main-heading text-gray-100 wow animate__slideInLeft">
            Darcy's insurance products
          </div>
          <div className="grid grid-cols-2 pl-12">
            <div className="grid grid-rows-3 mt-2.5 max-width-top-header wow animate__zoomIn">
              <div>
                <div className="rounded-full h-8 w-8 bg-white flex items-center justify-center">
                  <img
                    className="spin-image rounded-full h-5 w-5"
                    src={astric}
                  />
                </div>
                <p className="text-gray-300 text-lg my-8">
                  Our{" "}
                  <a href="#" className="underline color-blue">
                    plans
                  </a>{" "}
                  are saving policyholders 30% - 60% on premiums
                </p>
              </div>
              <div>
                <div className="rounded-full h-8 w-8 bg-white flex items-center justify-center">
                  <img
                    className="spin-image rounded-full h-5 w-5"
                    src={astric}
                  />
                </div>
                <p className="text-gray-300 text-lg my-8">
                  We offer a choice of low dedactibles and include no cost
                  value-added services
                </p>
              </div>
              <div className="capsule-div flex items-center justify-center ">
                <img className="h-10" src={downarrow} />
              </div>
            </div>
            <div className="flex justify-center items-center wow animate__fadeInUp">
              <img className="capsule-image-xl object-cover" src={airbaloon} />
            </div>
          </div>
        </div>
        {/* IMAGE GROUP PART */}
        <div className="container mx-auto grid grid-rows-2 content-section-gap">
          <div className="grid grid-cols-3 mb-8 gap-5 wow animate__zoomIn">
            <div className="grid grid-cols-4 col-span-2 gap-5">
              <div className="grid-image top-row bg-home col-span-3">
                <button className="grid-image-btn">Home insurance</button>
              </div>

              <div className="grid-image-capsule top-row bg-tube"></div>
            </div>
            <div className="best-choice-card grid grid-rows-4 py-7 px-10 text-gray-300">
              <h2 className="best-choice-text">Best choice</h2>
              <p className="row-span-2">
                Not all insurance are the same. That's why agency knows that
                your insurance should be customized to fit your situation.
              </p>
              <div className="flex flex-col-reverse">
                <button className="best-choice-btn">View all services</button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 wow animate__slideInUp">
            <div className="grid-image bg-car">
              <button className="grid-image-btn">Vehicle damage</button>
            </div>
            <div className="grid-image bg-cabin">
              <button className="grid-image-btn">Mortgage insurance</button>
            </div>
            <div className="grid-image bg-med">
              <button className="grid-image-btn">Medical expenses</button>
            </div>
          </div>
        </div>
        {/* IMAGE CAROUSAL PART */}
        <div className="container mx-auto grid grid-cols-3 mb-36 wow animate__slideInRight">
          <div className="col-span-2">
            <CustomCarousal></CustomCarousal>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center">
              <div className="my-4 rounded-full h-8 w-8 bg-white flex items-center justify-center">
                <img className="spin-image rounded-full h-5 w-5" src={astric} />
              </div>
              <h3 className="mx-4 expert-says-text text-white">
                Our experts say
              </h3>
            </div>
          </div>
        </div>
        {/* SUPPORT PART */}
        <div className="container mx-auto grid grid-cols-3 justify-between items-center content-section-gap my-0 support-section">
          <div className="text-8xl text-white font-bold wow animate__slideInLeft">
            <h2 className="max-w-xs heading-font-family">
              Support at every
              <span className="block">step</span>
            </h2>
          </div>
          <div className="max-w-sm wow animate__fadeIn">
            <div>
              <div className="rounded-full h-8 w-8 bg-white flex items-center justify-center">
                <img className="spin-image rounded-full h-5 w-5" src={astric} />
              </div>
              <p className="text-gray-300 text-lg my-8">
                Participate in the{" "}
                <a href="#" className="underline color-blue">
                  loyalty program
                </a>
                . Pay for the service online to get bonuses for our other
                services. We have a lot of bonuses!
              </p>
            </div>
            <div>
              <div className="rounded-full h-8 w-8 bg-white flex items-center justify-center">
                <img className="spin-image rounded-full h-5 w-5" src={astric} />
              </div>
              <p className="text-gray-300 text-lg my-8">
                You can help other people: choose a donation fund and share the
                link with your friends!
              </p>
            </div>
            <button className="w-64 h-16 text-red-300 ring-2 ring-red-300 rounded-full">
              Choose a fund
            </button>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="capsule-image-xl object-cover flip-img"
              src={support}
            />
          </div>
        </div>
        {/* SERVICES PART */}
        <div className="container mx-auto grid grid-cols-2 justify-between items-center content-section-gap">
          <div className="grid grid-rows-4 pr-64 gap-0 wow animate__slideInLeft">
            <h2 className="text-4xl text-white text-bold">Need numbers?</h2>
            <div className="flex justify-between">
              <button className="w-24 h-9 text-sm rounded-full bg-gray-100 text-black">
                Travel
              </button>
              <button className="w-24 h-9 text-sm rounded-full bg-gray-800 text-gray-200">
                Health
              </button>
              <button className="w-24 h-9 text-sm rounded-full bg-gray-800 text-gray-200">
                CASCO
              </button>
              <button className="w-24 h-9 text-sm rounded-full bg-gray-800 text-gray-200">
                Mortgage
              </button>
              <button className="w-24 h-9 text-sm rounded-full bg-gray-800 text-gray-200">
                Fire
              </button>
            </div>
            <div className="flex justify-center gap-2">
              <div className="w-full">
                <label className="text-xs text-gray-300 block mb-2">
                  Enter the country
                </label>
                <input className="w-full h-14 text-sm px-2 rounded-full bg-gray-800 text-white" />
              </div>
              <div className="w-full">
                <label className="text-xs text-gray-300 block mb-2">
                  Choose travel dates
                </label>
                <input
                  className="w-full h-14 text-sm px-2 rounded-full bg-gray-800 text-white"
                  type="date"
                />
              </div>
            </div>
            <button className="mt-10 w-full h-12 text-white text-lg bg-primary-red rounded-full">
              Calculate
            </button>
          </div>
          <div className="grid grid-rows-3 pr-40 pl-40 wow animate__slideInRight">
            <div>
              <h5 className="text-lg text-white">Insurance services</h5>
              <div className="mt-4">
                <a href="#" className="footer-small-text">
                  Medical expenses
                </a>
                <a href="#" className="footer-small-text">
                  Family health insurance
                </a>
                <a href="#" className="footer-small-text">
                  Vehicle damage
                </a>
                <a href="#" className="footer-small-text">
                  Property loss
                </a>
                <a href="#" className="footer-small-text">
                  Fire
                </a>
              </div>
            </div>
            <div className="mt-8">
              <h5 className="text-lg text-white">Company</h5>
              <div className="mt-4">
                <a href="#" className="footer-small-text">
                  About us
                </a>
                <a href="#" className="footer-small-text">
                  Career
                </a>
                <a href="#" className="footer-small-text">
                  Help
                </a>
                <a href="#" className="footer-small-text">
                  FAQ
                </a>
                <a href="#" className="footer-small-text">
                  Blog
                </a>
              </div>
            </div>
            <div className="mt-8">
              <h5 className="text-lg text-white">Bonus</h5>
              <div className="mt-4">
                <a href="#" className="footer-small-text">
                  Gift certifications
                </a>
                <a href="#" className="footer-small-text">
                  Affiliate program
                </a>
                <a href="#" className="footer-small-text">
                  Trainings
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* FOOTER SECTION */}
      </div>
      <footer>
        <div className="container mx-auto py-12 text-gray-100 flex justify-between items-center wow animate__slideInUp">
          <div className="logo-container flex items-center gap-4">
            <img className="logo spin-image grayscale" src={logo} />
            Darcy' insurance products
          </div>
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}
