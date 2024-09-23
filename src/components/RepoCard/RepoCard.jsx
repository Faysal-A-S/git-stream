import Tablet from "./Tablet/Tablet";

const RepoCard = () => {
  const arr = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="bg-white p-4 rounded-[.5rem]">
      <h2 className="text-[1rem] font-bold mb-1">RepoCard</h2>
      <p className="text-[.7rem] text-slate-400 mb-4">10 mins ago</p>
      <p className="text-[.7rem] text-slate-400 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda
        rerum molestias distinctio quis saepe officia, quibusdam tenetur
        dolorum, sapiente aperiam maxime?
      </p>
      <div className="flex gap-3 flex-wrap">
        {arr?.map((tab, index) => {
          return <Tablet key={index} />;
        })}
      </div>
    </div>
  );
};

export default RepoCard;
