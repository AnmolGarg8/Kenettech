import { Hash, Users, Pin, Camera, Send, Phone, Mail, MapPin, Check } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export function Footer() {
  const quickLinks = ["IT Strategy Consulting", "Software Development", "Cloud Architecture", "Data Intelligence", "Cybersecurity", "IoT Solutions"];

  return (
    <footer className="bg-[#0a0a1a] text-white pt-[100px] border-t border-white/5">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <Reveal direction="up" delay={0}>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 text-white mb-6 group cursor-pointer">
                <div className="w-10 h-10 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-accent-purple/20 rounded-full blur-md group-hover:bg-accent-purple/40 transition-colors"></div>
                  <div className="absolute w-8 h-8 border-2 border-accent-purple rotate-45 transform group-hover:rotate-90 transition-transform duration-500"></div>
                  <div className="absolute w-8 h-8 border-2 border-accent-light -rotate-45 transform opacity-70 group-hover:0 transition-transform duration-500"></div>
                </div>
                <span className="text-3xl font-display font-bold tracking-tight drop-shadow-md text-white">kenet</span>
              </div>
              <p className="text-white/50 text-[14px] leading-[1.7] mb-8 pr-4">
                Kenet Technologies provides enterprise-grade software solutions, data intelligence, and IT consulting to help businesses see what others miss in the digital landscape.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-[36px] h-[36px] rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-accent-purple hover:border-accent-purple transition-all duration-300"><Hash className="w-3.5 h-3.5" /></a>
                <a href="#" className="w-[36px] h-[36px] rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-accent-purple hover:border-accent-purple transition-all duration-300"><Users className="w-3.5 h-3.5" /></a>
                <a href="#" className="w-[36px] h-[36px] rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-accent-purple hover:border-accent-purple transition-all duration-300"><Pin className="w-3.5 h-3.5" /></a>
                <a href="#" className="w-[36px] h-[36px] rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-accent-purple hover:border-accent-purple transition-all duration-300"><Camera className="w-3.5 h-3.5" /></a>
              </div>
            </div>
          </Reveal>

          {/* IT Services Column */}
          <Reveal direction="up" delay={0.1}>
            <div>
              <h4 className="text-[18px] font-display font-bold mb-4">IT Services</h4>
              <div className="w-[30px] h-[2px] bg-accent-purple mb-6"></div>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-white/60 hover:text-white text-[15px] transition-all duration-300 flex items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-purple mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Newsletter Column */}
          <Reveal direction="up" delay={0.2}>
            <div>
              <h4 className="text-[18px] font-display font-bold mb-4">Newsletter</h4>
              <div className="w-[30px] h-[2px] bg-accent-purple mb-6"></div>
              <p className="text-white/60 text-[14px] leading-[1.7] mb-6">
                Subscribe to our newsletter to receive the latest updates, enterprise tech news, and case studies.
              </p>
              <form className="mb-4">
                <div className="flex w-full mb-3 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded overflow-hidden">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-[#11112b] text-white px-4 py-3 text-[14px] outline-none border border-transparent focus:border-accent-purple transition-colors placeholder:text-white/30"
                  />
                  <button type="button" className="w-[50px] bg-accent-purple flex items-center justify-center text-white hover:bg-[#6c2bd9] transition-colors flex-shrink-0">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <label className="flex items-start space-x-2 cursor-pointer group">
                  <div className="relative w-4 h-4 mt-1 flex-shrink-0">
                    <input type="checkbox" className="peer sr-only" defaultChecked />
                    <div className="w-4 h-4 border border-white/20 rounded bg-[#11112b] peer-checked:bg-accent-purple peer-checked:border-accent-purple transition-colors"></div>
                    <Check className="w-3 h-3 text-white absolute inset-0 m-auto opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                  </div>
                  <span className="text-[13px] text-white/50 leading-tight">I agree to the <a href="#" className="text-white hover:text-accent-purple transition-colors">Privacy Policy</a>.</span>
                </label>
              </form>
            </div>
          </Reveal>

          {/* Contact Column */}
          <Reveal direction="up" delay={0.3}>
            <div>
              <h4 className="text-[18px] font-display font-bold mb-4">Contact Info</h4>
              <div className="w-[30px] h-[2px] bg-accent-purple mb-6"></div>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-accent-purple" />
                  </div>
                  <div>
                    <p className="text-[12px] text-white/40 uppercase tracking-wider mb-1">Phone Number</p>
                    <p className="text-[15px] font-semibold text-white/90">+91 98765 43210</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-accent-purple" />
                  </div>
                  <div>
                    <p className="text-[12px] text-white/40 uppercase tracking-wider mb-1">Email Address</p>
                    <p className="text-[15px] font-semibold text-white/90">contact@kenettechnologies.com</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-accent-purple" />
                  </div>
                  <div>
                    <p className="text-[12px] text-white/40 uppercase tracking-wider mb-1">Office Location</p>
                    <p className="text-[15px] font-semibold text-white/90 leading-snug">Bengaluru, Karnataka,<br/>India</p>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-[#05050f] py-5 mt-10">
        <div className="container px-4 text-center">
          <p className="text-[13px] text-white/40">
            &copy; {new Date().getFullYear()} Kenet Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
