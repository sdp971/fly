import { useScore } from "../context/UserProvider";


function Score() {

  const { count } = useScore();


  return <div>Score: {count} </div>;
}

export default Score;
