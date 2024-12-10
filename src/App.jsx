import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    businessname: "",
    contact: "",
    email: "",
    address: "",
    type: "",
  })
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => {
      return { ...prev, [name]: value }
    })

  };                                                                       


  const handleSubmit = (e) => {
    e.preventDefault();
    for (const [key, value] of Object.entries(data)) {
      document.write(`${key}: ${value}` + "<br/>");
    }

  }

  return (
    <>
      <h1 className='head1'>Register Your Business</h1>
      <form method='post' onSubmit={handleSubmit}>
        <fieldset className='feildset'>

          <br />
          <hr />
          <h2>All feilds marked with * are required and must be filled.</h2>
          <hr /><br />
          <label htmlFor=" Owner name" className='label'>Owner Name <span className='star'>*</span></label>
          <p> <input type="text" placeholder='Firstname' required className='inputs' name="firstname" onChange={handleChange} /> <input type="text" placeholder='Lastname' required className='inputs' name="lastname" onChange={handleChange} /></p>
          <label htmlFor="Business name" className='label'>Business name <span className='star'>*</span></label>
          <p><input type="text" placeholder='Business name' required className='inputs' name="businessname" onChange={handleChange} ></input> </p>
          <label htmlFor="Contact" className='label'>Contact <span className='star'>*</span></label>
          <p><input type="number" placeholder='Contact' required className='inputs' name="contact" onChange={handleChange} ></input> </p>
          <label htmlFor="E-mail" className='label'>E-mail <span className='star'>*</span></label>
          <p><input type="email" placeholder='ex: myname@example.com' required className='inputs' name="email" onChange={handleChange} ></input> </p>
          <label htmlFor="Address" className='label'>Address <span className='star'>*</span></label>
          <p><textarea placeholder='Enter your full Address' required className='inputs1' name="address" onChange={handleChange} ></textarea></p>
          <label htmlFor="Type of business" className='label'>Type of business <span className='star'>*</span></label>
          <p><select name="type" required className='inputs' onChange={handleChange} >
            <option value="Please Select">Please Select</option>
            <option value="Shop/cafe">Shop/Cafe</option>
            <option value="Lending">Lending</option>
            <option value="Store">Store</option>
            <option value="Others,please specify">Other,please specify below</option>
          </select></p>

          <button type='submit' className='buttonsubmit'>Submit</button>
        </fieldset>

      </form>
    </>
  );
}
export default App

