import { useState } from "react";
import Pants from "./img/pants.png";
import Pants2 from "./img/pants2.png";
import Pants3 from "./img/pants3.png";
import Pants4 from "./img/pants4.png";

function App() {
  const [currentSelectedColor, setCurrentSelectedColor] = useState(0);
  const [currentSelectedSize, setCurrentSelectedSize] = useState(0);

  return (
    <div className="flex flex-col justify-center m-10 w-screen">
      <div className="flex flex-row space-x-3">
        <img src={Pants2} className="w-64 object-cover" />
        <div className="space-y-3">
          <img src={Pants4} className="w-48" />
          <img src={Pants3} className="w-48" />
        </div>
        <img src={Pants} className="w-72 object-cover" />
      </div>
      <div>
        <div className="font-bold text-3xl">Silfeel Jogger Pants</div>
        <div>
          <div>- Smooth twill fabric with an elegant drape.</div>
          <div> - Laid-back jogger pants with a smooth, comfortable feel. </div>
          <div>- Wrinkle-resistant for easy care.</div>
          <div>
            - Easy waist design with a neat look at the front and elastic at the
            back.
          </div>
          <div>- Sleek, 1-tuck jogger pants in a tapered cut.</div>
          <div> - Ideal for refined and casual styles.</div>
        </div>
      </div>
    </div>
  );
}

export default App;
