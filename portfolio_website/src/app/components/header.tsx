import Link from "next/link";

export default () => {
  return (
    <header className="hidden w-100% bg-slate-800 h-24 lg:grid grid-rows-2 grid-flow-col">
      <div className='row-span-2 w-5/6 flex'>
        <Link href={'/'}>
          <div className=''>
            <h1 className='text-slate-200 text-2xl pt-8 pl-20 font-bold'>Casper Van Damme</h1>
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/casper-van-damme-18a98520b/">
          <img className="pt-9 pl-4" src="/icons/linkedin.png" alt="linkedin icon"/>
        </Link>
      </div>
        <div className='row-span-2 justify-self-end pt-2'>
          <div className='grid grid-rows-3 grid-flow-col justify-items-end pr-20 gap-16'>
            <Link className="row-span-3 text-slate-200 text-xl pt-6 font-semibold h-20" href={'/about'}>About</Link>
            <Link className="row-span-3 text-slate-200 text-xl pt-6 font-semibold h-20" href={'/projects'}>Projects</Link>
            <div className='border-sky-400 border-2 mt-4 p-2 rounded-xl'>
              <Link className="row-span-3 text-slate-200 text-xl font-semibold pt-6" href={'/contactme'}>Contact Me</Link>
            </div>
          </div>
        </div>
    </header>
  );
};

