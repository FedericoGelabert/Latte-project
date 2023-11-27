import { motion } from "framer-motion";
import { xTransition } from "../../utils/transitions";

const Coffee = () => {
  return (
    <div id="coffee" className='coffee'>
      <div className="coffee__text">
        <h2>Coffee</h2>
        <p>
          Each coffee we offer requires a unique roast profile to create a cup with maximum aroma, acidity, body and flavor. By working
          in a delicate balance of heat, time and artistry, our master roasters bring out these unique characteristics of each coffee bean.
        </p>
      </div>
    </div>
  )
}

export default Coffee;