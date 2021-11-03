import { useSession } from "next-auth/client";
import Image from "next/image";

import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";

const InputBox = () => {
  const [session] = useSession();

  const userFirstName = session.user.name.split(" ")[0];

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
      <div className='flex space-x-4 p-4 items-center'>
        <Image
          className='rounded-full'
          src={session.user.image}
          width={40}
          height={40}
          layout='fixed'
          alt='Profile Image'
        />
        <form className='flex flex-1'>
          <input
            type='text'
            className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
            placeholder={`What's on your mind, ${userFirstName}?`}
          />
          <button hidden type='submit' onClick={sendPost}>
            Post
          </button>
        </form>
      </div>

      <div className='flex justify-evenly p-3 border-t'>
        <div className='inputIcon'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
        <div className='inputIcon'>
          <CameraIcon className='h-7 text-green-400' />
          <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
        </div>
        <div className='inputIcon'>
          <EmojiHappyIcon className='h-7 text-yellow-300' />
          <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;