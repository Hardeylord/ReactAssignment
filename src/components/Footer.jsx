import myImage from '../assets/React.svg'

function Footer() {
  return(
    <div className="bg-black flex flex-col md:flex-row shadow h-[300px] border border-[#525252] ">
      <div className='w-1/3 flex justify-center items-center'>
        <img className='size-40' src='react.svg'/>
        </div>
      <div className='w-1/3 flex justify-center items-center'>
      <ul className="space-y-3">
          <li className="text-white"><a href="http://">Home</a></li>
          <li className="text-white"><a href="http://">Services</a></li>
          <li className="text-white"><a href="http://">About Us</a></li>
          <li className="text-white"><a href="http://">Blog</a></li>
          <li className="text-white"><a href="http://">Contact</a></li>
        </ul>
      </div>
      <div className='w-1/3 flex flex-col justify-center'>
      <p className='text-[#0081A3] mb-3'>Subscribe To Our Newsletter</p>
      <div><input className='bg-white rounded-l-3xl  pl-4 py-2 outline-0' type="text"/><button className='text-white cursor-pointer px-5  py-2 bg-[#0081A3] rounded-r-3xl'>Subscribe</button></div>
      </div>
    </div>
  )
}

export default Footer;