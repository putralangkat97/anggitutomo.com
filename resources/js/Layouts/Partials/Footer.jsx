import LinkedinIcon from '@/Components/Icons/Linkedin';
import TwitterIcon from '@/Components/Icons/Twitter';
import GithubIcon from '@/Components/Icons/Github';
import InstagramIcon from '@/Components/Icons/Instagram';
import { Link } from '@inertiajs/react';

const Footer = ({ blog }) => {
  return (
    <footer className={`flex flex-col md:flex-row items-center lg:space-y-0 justify-center mt-24 md:mt-44 mx-4 md:mx-8`}>
      <div className="text-zinc-950">
        <div className="flex md:flex-row flex-col items-center">
          <p className="text-lg">&copy; {new Date().getFullYear()} <a href={"/"} className='text-orange-600 hover:text-orange-700 hover:underline transition-all duration-150'>Anggit Utomo</a>.</p>
          <p className="text-lg">&nbsp;Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
