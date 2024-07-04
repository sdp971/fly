import Score from '../components/Score';
import Logo from '../components/Logo';

function Resultpage({count}) {
  return (
    <div>
      <Logo />
      <Score count={count} />
    </div>
  );
}

export default Resultpage;
