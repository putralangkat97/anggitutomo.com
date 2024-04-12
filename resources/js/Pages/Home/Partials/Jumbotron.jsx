import AlpineIcon from '@/Components/Icons/Alpine';
import LaravelIcon from '@/Components/Icons/Laravel';
import LivewireIcon from '@/Components/Icons/Livewire';
import ReactIcon from '@/Components/Icons/React';
import TailwindIcon from '@/Components/Icons/Tailwind';

const Jumbotron = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col lg:mt-16 items-start lg:items-center">
        <div className="w-full md:w-3/4 space-y-3 text-left">
          <h1 className="text-zinc-950 text-2xl lg:text-3xl font-bold">
            Hello there! I'm Anggit
          </h1>
          <p className="text-2xl lg:text-3xl text-zinc-950">
            I'm a fullstack developer who like to make things and who loves code with{' '}
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
            and{' '}
            <span className="font-bold react hover:text-[#61DAFB] transition-color duration-300">
              ReactJS
            </span>
          </p>
        </div>

        <div className="w-1/2 flex flex-row space-x-2 lg:space-x-5 mt-8 lg:mt-0 lg:ml-4 lg:px-5 lg:py-2">
          <div className="py-2 self-center hover:opacity-75 transition-opacity duration-300">
            <LaravelIcon className='h-[2.5rem]' />
          </div>
          <div className="py-2 self-center hover:opacity-75 transition-opacity duration-300">
            <LivewireIcon className='h-[2.5rem]' />
          </div>
          <div className="py-2 self-center hover:opacity-75 transition-opacity duration-300">
            <TailwindIcon className='h-[2.5rem]' />
          </div>
          <div className="py-2 self-center hover:opacity-75 transition-opacity duration-300">
            <AlpineIcon className='h-[2.5rem]' />
          </div>
          <div className="py-2 self-center hover:opacity-75 transition-opacity duration-300">
            <ReactIcon className='h-[2.5rem]' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
