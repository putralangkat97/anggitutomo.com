import LinkedinIcon from '@/Components/Icons/Linkedin';
import TwitterIcon from '@/Components/Icons/Twitter';
import GithubIcon from '@/Components/Icons/Github';
import InstagramIcon from '@/Components/Icons/Instagram';
import { Link } from '@inertiajs/react';

const Footer = ({ blog }) => {
  return (
    <footer className={`flex flex-col md:flex-row items-center lg:space-y-0 space-y-6 md:justify-between mt-20 mb-8 mx-8`}>
      <div className="text-zinc-950">
        <div className="flex md:flex-row flex-col items-center">
          <p className="text-lg">&copy; 2023 <a href={"/"} className='text-orange-500 hover:underline transition-all duration-300'>Anggit Utomo</a>.</p>
          <p className="text-lg">&nbsp;Built with ❤️</p>
        </div>
      </div>
      <div className="text-zinc-950">
        <div className="flex flex-col">
          <div className="flex flex-row justify-end -mr-2">
            <a
              href={"https://www.instagram.com/_heysephia_/"}
              target="_blank"
              className="hover:text-orange-500 transisition-opacity duration-300"
            >
              <InstagramIcon />
            </a>
            <a
              href={"https://twitter.com/_heysephia_"}
              target="_blank"
              className="hover:text-orange-500 transisition-opacity duration-300"
            >
              <TwitterIcon />
            </a>
            <a
              href={"https://www.linkedin.com/in/anggit-ari-utomo/"}
              target="_blank"
              className="hover:text-orange-500 transisition-opacity duration-300"
            >
              <LinkedinIcon />
            </a>
            <a
              href={"https://github.com/putralangkat97/"}
              target="_blank"
              className="hover:text-orange-500 transisition-opacity duration-300"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
