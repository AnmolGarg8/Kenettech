import { Reveal } from '../ui/Reveal';

export function Footer() {
  const links = ["Privacy Policy", "Terms of Service", "Security Policy", "Imprint"];

  return (
    <footer className="border-t border-white/10 bg-bg-dark py-8 relative z-20">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          <Reveal direction="up" delay={0}>
            <p className="text-[13px] text-color-text-muted mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Kenet Technologies. All rights reserved.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <div className="flex space-x-6">
              {links.map((link, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="text-[13px] text-color-text-muted hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </footer>
  );
}
