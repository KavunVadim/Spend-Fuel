import { Dna } from 'react-loader-spinner';
import style from './style.module.css';

function Loader() {
  return (
    <div className={style.container}>
      <Dna
        visible={true}
        height="150"
        width="150"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}

export default Loader;
