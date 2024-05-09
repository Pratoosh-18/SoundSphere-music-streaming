import React from "react";

const Footer = () => {
  return (
    <div className="sm:flex w-full px-5 pt-10 gap-2 sm:gap-5 md:gap-14">
      <div className="flex gap-2 sm:gap-5 md:gap-14 justify-between">
        <div>
          <div className="text-lg font-semibold pb-3">Company</div>
          <div className="text-gray-400">About</div>
          <div className="text-gray-400">Jobs</div>
          <div className="text-gray-400">For the record</div>
        </div>
        <div>
          <div className="text-lg font-semibold pb-3">Communities</div>
          <div className="text-gray-400">For Artists</div>
          <div className="text-gray-400">Developers</div>
          <div className="text-gray-400">Advertising</div>
          <div className="text-gray-400">Investors</div>
          <div className="text-gray-400">Vendors</div>
        </div>
      </div>
      <div className="flex gap-2 sm:gap-5 md:gap-14 justify-between mt-6 sm:mt-0">
        <div>
          <div className="text-lg font-semibold pb-3">Useful Links</div>
          <div className="text-gray-400">Support</div>
          <div className="text-gray-400">Free Mobile App</div>
        </div>
        <div>
          <div className="text-lg font-semibold pb-3">Spotify Plans</div>
          <div className="text-gray-400">Premium Individual</div>
          <div className="text-gray-400">Premium Duo</div>
          <div className="text-gray-400">Premium Family</div>
          <div className="text-gray-400">Premium Student</div>
          <div className="text-gray-400">Spotify Free</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
