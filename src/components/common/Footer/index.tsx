import { Separator } from '@/components/ui/separator';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="w-full h-20 border-blue-400">
      <div className="container flex justify-between flex-col">
        <Separator orientation="horizontal" />
        <div className="flex justify-between pt-6">
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
      </div>
    </footer>
  );
};
export default Footer;
