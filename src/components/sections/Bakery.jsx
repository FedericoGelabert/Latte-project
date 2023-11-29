const Bakery = () => {
  return (
    <div className="h-screen w-full relative" id="bakery">
      <div className="container px-20">
        <table className="bakery-table absolute top-36 left-48">
          <div>
            <h2 className="text-latte-gray text-5xl mb-1">Bakery</h2>
            <hr className="w-[450px] absolute h-1 bg-black" />
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
        <div className="absolute right-0 top-16 -mr-80 -rotate-0">
          <img className="w-[1200px]" style={{filter:'drop-shadow(1px 5px 3px black);'}} src="https://res.cloudinary.com/federicog/image/upload/v1679430434/Latte/Cookies_Cream_Baby_CC_montage_w2vecu.png"
            alt="Latte Cheescake"
          />
        </div>
      </div>
    </div>
  )
}

export default Bakery;