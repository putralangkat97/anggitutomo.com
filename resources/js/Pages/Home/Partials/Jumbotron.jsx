import AlpineIcon from '@/Components/Icons/Alpine';
import LaravelIcon from '@/Components/Icons/Laravel';
import LivewireIcon from '@/Components/Icons/Livewire';
import ReactIcon from '@/Components/Icons/React';
import TailwindIcon from '@/Components/Icons/Tailwind';

const Jumbotron = () => {
  return (
    <>
      <div className="flex lg:mt-16 items-center">
        <div className="w-full lg:1/2 space-y-3 text-center sm:text-left">
          <h1 className="text-zinc-950 text-2xl lg:text-4xl font-bold">
            Hi, I'm Anggit
          </h1>
          <p className="text-2xl lg:text-4xl text-zinc-950">
            I'm a fullstack developer who loves code with{' '}
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
            ,{' '}
            <span className="font-bold alpine hover:text-[#77C1D2] transition-color duration-300">
              AlpineJS
            </span>{' '}
            and{' '}
            <span className="font-bold react hover:text-[#61DAFB] transition-color duration-300">
              ReactJS
            </span>
          </p>
        </div>

        <div className="lg:w-1/2 lg:block lg:flex space-x-5 hidden lg:ml-4 px-5 py-2">
          <div className="py-2 self-center hover:opacity-75 transition-opacity duration-300">
            <LaravelIcon />
          </div>
          <div className="py-2 self-center hover:opacity-75 transition-opacity duration-300">
            <LivewireIcon />
          </div>
          <div className="py-2 self-center hover:opacity-75 transition-opacity duration-300">
            <TailwindIcon />
          </div>
          <div className="py-2 self-center hover:opacity-75 transition-opacity duration-300">
            <AlpineIcon />
          </div>
          <div className="py-2 self-center hover:opacity-75 transition-opacity duration-300">
            <ReactIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
