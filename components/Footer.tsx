import Button from "./Button";
import Input from "./Input";
import React, { useState } from "react";

const Footer = () => {
  const [emailAddress, setEmailAddress] = useState("");
  return (
    <footer className="flex px-24 py-12 bg-blue-900 text-white">
      <div className="mr-20">
        <img width="121" height="50" src="/images/logo.png" />
      </div>
      <div className="flex-1 grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
        <ul>
          <li className="text-sm font-bold uppercase">Our Company</li>
          <li className="text-xs">About</li>
          <li className="text-xs">Teams</li>
          <li className="text-xs">Careers</li>
          <li className="text-xs">Press</li>
          <li className="text-xs">Blog</li>
          <li className="text-xs">FAQs</li>
        </ul>
        <ul>
          <li className="text-sm font-bold uppercase">Our Practices</li>
          <li className="text-xs">Diversity</li>
          <li className="text-xs">Equity</li>
          <li className="text-xs">Sustainability</li>
          <li className="text-xs">Safety and Wellness</li>
        </ul>
        <ul>
          <li className="text-sm font-bold uppercase">Events</li>
          <li className="text-xs">Virtual</li>
          <li className="text-xs">Onsite</li>
          <li className="text-xs">Hybrid</li>
        </ul>
        <ul>
          <li className="text-sm font-bold uppercase">Teams</li>
          <li className="text-xs">Strategy</li>
          <li className="text-xs">Creative</li>
          <li className="text-xs">Web</li>
          <li className="text-xs">Broadcast</li>
          <li className="text-xs">Experimental</li>
        </ul>
        <ul>
          <li className="text-sm font-bold uppercase">Freelancers</li>
          <li className="text-xs">Sign in</li>
          <li className="text-xs">Learning Resources</li>
          <li className="text-xs">Become a Specialist</li>
        </ul>
        <ul>
          <li className="text-sm font-bold uppercase">Pricing</li>
          <li className="text-xs">Full Service</li>
          <li className="text-xs">On Demand</li>
        </ul>
        <ul>
          <li className="text-sm font-bold uppercase">Contact</li>
          <li className="text-xs">About</li>
          <li className="text-xs">Teams</li>
          <li className="text-xs">Careers</li>
        </ul>
        <ul>
          <li className="text-sm font-bold uppercase">Support</li>
          <li className="text-xs">FAQs</li>
          <li className="text-xs">Terms of Service</li>
          <li className="text-xs">Privacy Policy</li>
          <li className="text-xs">Copyright</li>
          <li className="text-xs">Certifications</li>
        </ul>
        <ul>
          <li className="text-sm font-bold uppercase">Existing Clients</li>
          <li className="text-xs">Sign in</li>
        </ul>
        <div>
          <h3 className="text-sm font-bold uppercase">
            Subscribe to our newsletter
          </h3>
          <div>
            <Input
              className="bg-transparent text-white text-xs placeholder-gray border-b-2 border-white"
              placeholder="EMAIL ADDRESS"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>
          <Button
            color="white"
            size="small"
            onClick={() => {
              console.log(emailAddress, "user subscribed");
              setEmailAddress("");
            }}
          >
            Sign up
          </Button>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase">Follow Us</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
