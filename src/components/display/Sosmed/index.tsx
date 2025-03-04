import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

const Sosmed = () => {
  return (
    <div className="flex items-center gap-2">
      <Button
        className="rounded-full text-white bg-purple-600 hover:bg-purple-500 cursor-pointer"
        size="icon"
      >
        <Github />
      </Button>
      <Button
        className="rounded-full text-white bg-blue-500 hover:bg-blue-400 cursor-pointer"
        size="icon"
      >
        <Linkedin />
      </Button>
    </div>
  );
};
export default Sosmed;
