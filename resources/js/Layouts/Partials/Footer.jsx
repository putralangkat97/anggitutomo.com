import LinkedinIcon from '@/Components/Icons/Linkedin';
import TwitterIcon from '@/Components/Icons/Twitter';
import GithubIcon from '@/Components/Icons/github';
import InstagramIcon from '@/Components/Icons/instagram';
import { Link } from '@inertiajs/react';

const Footer = () => {
  return (
    <footer className="flex justify-between mt-16 mb-10 mx-6">
      <div className="text-zinc-950">
        <div className="flex flex-col">
          <p className="text-sm lg:text-lg">This site was built with Laravel</p>
          <p className="text-sm lg:text-lg">&copy; 2023 Anggit Utomo.</p>
        </div>
      </div>
      <div className="text-zinc-950">
        <div className="flex flex-col">
          <p className="text-sm lg:text-lg text-bold self-end">Find me on:</p>
          <div className="flex flex-row justify-end -mr-2">
            <Link
              href="#"
              target="_blank"
              className="hover:opacity-75 transisition-opacity duration-300"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="hover:opacity-75 transisition-opacity duration-300"
            >
              <TwitterIcon />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="hover:opacity-75 transisition-opacity duration-300"
            >
              <LinkedinIcon />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="hover:opacity-75 transisition-opacity duration-300"
            >
              <GithubIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
