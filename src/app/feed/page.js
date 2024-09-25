import RepoCard from "@/components/RepoCard/RepoCard";

const Feed = () => {
  return (
    <div>
      <div className="flex justify-between place-items-center mb-10">
        <h2 className="text-[1.5rem] font-bold">Feed</h2>
        <div className="flex gap-3">
          <p>Filter</p>
          <p>Sort</p>
        </div>
      </div>
      <div className="grid gap-4">
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
      </div>
    </div>
  );
};

export default Feed;
