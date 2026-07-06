import { Mail, Clock, Hash, Users, Pin, Camera } from 'lucide-react';

export function TopBar() {
  return (
    <div className="hidden lg:flex w-full h-10 animate-shimmer border-b border-[#7c3aed]/15 text-[12px] text-gray-400 font-body items-center">
      <div className="container px-4 flex justify-between items-center h-full">
        <div className="flex items-center space-x-8">
          <p>Welcome to Kenet Technologies — Intelligent Software Solutions</p>
        </div>
        
        <div className="flex items-center h-full">
          <div className="flex items-center space-x-6 mr-8">
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3 text-accent-light" />
              <span className="hover:text-white transition-colors cursor-pointer">contact@kenettechnologies.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-3 h-3 text-accent-purple" />
              <span>Mon - Sat: 9.00 am - 6.00 pm</span>
            </div>
          </div>
          
          {/* Social Icons Block */}
          <div className="h-full flex items-center px-4 space-x-4 border-l border-[#7c3aed]/15">
            <a href="#" className="text-gray-400 hover:text-accent-light hover:scale-110 transition-all duration-300"><Hash className="w-3.5 h-3.5" /></a>
            <a href="#" className="text-gray-400 hover:text-accent-light hover:scale-110 transition-all duration-300"><Users className="w-3.5 h-3.5" /></a>
            <a href="#" className="text-gray-400 hover:text-accent-light hover:scale-110 transition-all duration-300"><Pin className="w-3.5 h-3.5" /></a>
            <a href="#" className="text-gray-400 hover:text-accent-light hover:scale-110 transition-all duration-300"><Camera className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
