import GithubIcon from '@/Components/Icons/Github';
import LinkedinIcon from '@/Components/Icons/Linkedin';
import TwitterIcon from '@/Components/Icons/Twitter';
import { useState } from 'react';

const Jumbotron = () => {
  const [showContactIcon, setShowContactIcon] = useState(false);

  return (
    <>
      <div className="flex flex-col mt-32 items-center">
        <div className="w-full md:w-3/4 space-y-3 text-left">
          <h1 className="text-zinc-950 text-2xl lg:text-3xl font-bold">
            Hello there! I'm Anggit
          </h1>
          <p className="text-2xl lg:text-3xl text-zinc-950">
            I'm a fullstack developer who like to make things and who loves code
            with{' '}
            <span className="font-bold laravel hover:text-[#FB503B] transition-color duration-300">
              Laravel
            </span>
            ,{' '}
            <span className="font-bold livewire hover:text-[#FB70A9] transition-color duration-300">
              Livewire
            </span>
            ,{' '}
            <span className="font-bold tailwind hover:text-[#38BDF8] transition-color duration-300">
              Tailwind
            </span>
            , and{' '}
            <span className="font-bold react hover:text-[#61DAFB] transition-color duration-300">
              ReactJS
            </span>
          </p>
        </div>

        <button
          className="mt-8"
          onClick={() => setShowContactIcon(!showContactIcon)}
        >
          <div className="group relative inline-block focus:outline-none focus:ring">
            <span className="relative inline-block px-8 py-3 text-sm font-bold uppercase tracking-widest group-active:text-opacity-75 bg-white border-2 border-black">
              contact me
            </span>
            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-orange-400 transition-transform group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 border-2 border-black text-black font-bold uppercase tracking-widest text-sm px-[30px] py-3">
              Contact Me
            </span>
          </div>
        </button>

        <div
          className={
            'text-zinc-950 mt-4' +
            (showContactIcon === true ? ' visible' : ' invisible')
          }
        >
          <div className="flex items-center flex-col">
            <div className="flex flex-row space-x-5">
              <a
                href={'https://twitter.com/_heysephia_'}
                target="_blank"
                className="hover:text-orange-500 transisition-opacity duration-300"
              >
                <TwitterIcon />
              </a>
              <a
                href={'https://www.linkedin.com/in/anggit-ari-utomo/'}
                target="_blank"
                className="hover:text-orange-500 transisition-opacity duration-300"
              >
                <LinkedinIcon />
              </a>
              <a
                href={'https://github.com/putralangkat97/'}
                target="_blank"
                className="hover:text-orange-500 transisition-opacity duration-300"
              >
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="w-1/2 flex flex-row space-x-2 lg:space-x-5 mt-8 lg:mt-0 lg:ml-4 lg:px-5 lg:py-2">
          <div className="py-2 self-center hover:opacity-75 transition-opacity duration-300">
            <LaravelIcon className="h-[2.5rem]" />
          </div>
          <div className="py-2 self-center hover:opacity-75 transition-opacity duration-300">
            <LivewireIcon className="h-[2.5rem]" />
          </div>
          <div className="py-2 self-center hover:opacity-75 transition-opacity duration-300">
            <TailwindIcon className="h-[2.5rem]" />
          </div>
          <div className="py-2 self-center hover:opacity-75 transition-opacity duration-300">
            <AlpineIcon className="h-[2.5rem]" />
          </div>
          <div className="py-2 self-center hover:opacity-75 transition-opacity duration-300">
            <ReactIcon className="h-[2.5rem]" />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Jumbotron;
