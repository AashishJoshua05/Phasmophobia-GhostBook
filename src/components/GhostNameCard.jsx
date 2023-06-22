import ghosts from "../assets/ghosts";

function findingGhosts(checkedEvidence, ghosts) {
  const test = checkedEvidence
    .map((ele, index) => (ele ? index : undefined))
    .filter((index) => index !== undefined);

  const matchingGhosts = ghosts
    .filter((ele) => {
      return test.every((index) => ele.evidence.includes(index));
    })
    .map((ele) => ele.name);

  return matchingGhosts;
}

const GhostName = (evidence) => {
  const matchingGhosts = findingGhosts(evidence.evidence, ghosts);
  return (
    <>
      <ul className="flex flex-wrap border-2  bg-slate-950 rounded-md w-3/4">
        {matchingGhosts.map((name, index) => (
          <button
            key={index}
            className="text-white bg-gray-900 p-2 m-4 rounded-md w-32 h-4/5"
          >
            {name}
          </button>
        ))}
      </ul>
    </>
  );
};

export default GhostName;
