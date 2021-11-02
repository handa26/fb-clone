import StoryCard from "./StoryCard";

const stories = [
  {
    id: "p1",
    name: "Ananda Muhammad Muthaqin",
    src: "https://i.ibb.co/L6MGgqZ/cat-boyy.jpg",
    profile: "https://links.papareact.com/l4v",
  },
  {
    id: "p2",
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    id: "p3",
    name: "Jeff Bezos",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    id: "p4",
    name: "Mark Zuckerberg",
    src: "https://i.ibb.co/L6MGgqZ/cat-boyy.jpg",
    profile: "https://links.papareact.com/snf",
  },
  {
    id: "p5",
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

const Stories = () => {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {stories.map(({ id, name, src, profile }) => {
        return <StoryCard key={id} name={name} src={src} profile={profile} />;
      })}
    </div>
  );
};

export default Stories;
