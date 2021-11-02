import Stories from "./Stories";
// mx-auto max-w-md md:max-w-lg
const Feed = () => {
  return (
    <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto'>
      <div className=''>
        {/* Stories */}
        <Stories />
        
        {/* InputBox Post */}
        {/* Posts */}
      </div>
    </div>
  );
};

export default Feed;
