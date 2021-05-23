import '../style/comp.css'
import notice from '../images/notice.jpg';

function Notice() {
    return (
      <div>
        <div className="App" class="center">
            <h2> Notice </h2>
        </div>
        <div class="center">
          <img src={notice} alt="BigCo Inc. logo"  />
        </div>
      </div>     
    );
  }
  
  export default Notice;