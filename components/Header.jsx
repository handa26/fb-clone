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

const Header = () => {
  return (
    <div>
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
            className='flex ml-2 items-center bg-transparent outline-none placeholder-gray-500'
          />
        </div>
      </div>

      {/* Center Nav */}

      {/* Right Nav */}
    </div>
  );
};

export default Header;
