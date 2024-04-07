import { Github, Instagram, Linkedin } from 'lucide-react';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="w-full h-16 border-blue-400">
      <div className="container flex justify-between">
        <div className="flex gap-4">
          <Linkedin />
          <Instagram />
          <Github />
        </div>
        <div className="md:text-md text-sm">
          <p className="italic">
            Built by {''}
            <span className="font-semibold border-b border-blue-400">
              &copy; Putra Satria
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
