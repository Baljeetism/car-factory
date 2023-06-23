import React, { useState, useEffect, createContext } from 'react'
import Navbar from './Navbar'
import Crousel from './Crousel'
import Card from './Card'
import Cart from './Cart'





const data = createContext();
function Home() {

  const [carCat, setcarCat] = useState([])
  const [carItems, setcarItems] = useState([])
  const [Search, setSearch] = useState("")
  const [cart, setCart] = useState([]);


  const loadcarItems = async () => {
    let response = await fetch("http://localhost:5000/api/carData", {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }

    });
    response = await response.json()
    setcarCat(response[1]);
    setcarItems(response[0]);
    // setFoodItems(response[0])
    // setFoodCat(response[1])
  }
  function handleChange(e) {
    setSearch(e.target.value)
  }

  useEffect(() => {
    loadcarItems()
  }, [])
  function handleClick(item) {


    setCart([...cart, item])
    // console.log(cart);

  }
  function handleClick2(lol) {
    console.log(lol);

    const filteredItems = cart.filter(item => item.name !== lol.name);
    setCart(filteredItems)
    // console.log(cart)

  }
  console.log(cart)




  return (
    <div>
      <Navbar />
      <Crousel />

      {(localStorage.getItem("This")) ? <div >
     
        <div className="container mt-5 mb-5">
          <div className="d-flex justify-content-center row">
            <div className="col-md-8 ">
              <div className='bg-dark text-white'>
                <h4>Shopping cart</h4>
              </div>

              {cart.map((item) => (
                <div key={item.id}>
                  <Cart name={item.name} src={item.src} handleClick={handleClick2} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='home-con'>
                  <input type='text' onChange={handleChange} />
                  <button>Search</button>
                </div>
        {carCat !== [] ?
          carCat.map((data) => {
            return (
              <div>
                <div className='ok123'>


                  {data.CategoryName}



                </div>
                
                <div className='car-cards'>
                
                  {carItems !== [] ? carItems.filter(
                    (items) => ((items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(Search.toLocaleLowerCase()))))
                    .map(filterItems => {
                      return (
                        <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                          {console.log(filterItems.url)}
                          <Card name={filterItems.name} src={filterItems.img} handleClick={handleClick} ></Card>
                        </div>
                      )
                    }) : <div> No Such Data </div>}

                </div>

              </div>

            )
          }) :
          " "
        }

      </div> : ""}











    </div>
  )
}
export default Home;
export { data };