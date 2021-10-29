import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  return (
    <div className='sticky flex items-center z-50 bg-white top-0 p-2 lg:px-5 shadow-md'>
      {/* Left Nav */}
      <div className='flex items-center'>
        <Image
          src='https://links.papareact.com/5me'
          width={40}
          height={40}
          alt='Facebook Logo'
          layout='fixed'
        />

        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className='h-5 text-gray-600' />
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Search Facebook'
            autoComplete='off'
            className='flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink'
          />
        </div>
      </div>

      {/* Center Nav */}
      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right Nav */}
    </div>
  );
};

export default Header;
