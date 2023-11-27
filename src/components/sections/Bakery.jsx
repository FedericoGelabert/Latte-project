import { motion } from "framer-motion";
import { xTransition } from "../../utils/transitions";

const Bakery = () => {
  return (
    <div className="bakery" id="bakery">
      <div className="bakery__menu">
        <table className="bakery__table">
          <div className="bakery__theader">
            <h2>Bakery</h2>
            <hr />
          </div>
          <div style={{ paddingTop: 50 }}>
            <tr>
              <td>Bagel</td>
              <td style={{ textAlign: "center" }}>$ 1.50</td>
            </tr>
            <tr>
              <td>Cookies</td>
              <td style={{ textAlign: "center" }}>$ 2.00</td>
            </tr>
            <tr>
              <td>Croissant</td>
              <td style={{ textAlign: "center" }}>$ 2.50</td>
            </tr>
            <tr>
              <td>Brownie</td>
              <td style={{ textAlign: "center" }}>$ 3.50</td>
            </tr>
            <tr>
              <td>Chocolate Bread</td>
              <td style={{ textAlign: "center" }}>$ 4.50</td>
            </tr>
            <tr>
              <td>Apple Pie Slice</td>
              <td style={{ textAlign: "center" }}>$ 5.00</td>
            </tr>
            <tr>
              <td>Carrot Cake</td>
              <td style={{ textAlign: "center" }}>$ 5.50</td>
            </tr>
            <tr>
              <td>Tiramisu</td>
              <td style={{ textAlign: "center" }}>$ 6.00</td>
            </tr>
            <tr>
              <td>Cheescake</td>
              <td style={{ textAlign: "center" }}>$ 6.50</td>
            </tr>
            <tr>
              <td>Lemon Pie</td>
              <td style={{ textAlign: "center" }}>$ 6.50</td>
            </tr>
          </div>
        </table>
        <div className="bakery__img">
          <img src="https://res.cloudinary.com/federicog/image/upload/v1679430434/Latte/Cookies_Cream_Baby_CC_montage_w2vecu.png"
            alt="Latte Cheescake"
          />
        </div>
      </div>
    </div>
  )
}

export default Bakery;