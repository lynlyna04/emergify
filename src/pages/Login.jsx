import React from 'react'
import { motion } from 'framer-motion'
export const Login = () => {
  return (
    <section className=' lg:px-[250px] p-8 lg:py-32' style={{backgroundImage: `url("/signBg.png")`, backgroundRepeat: "repeat"}}>

  <motion.div
  initial={{y:  200, opacity:0}}
  animate={{y: 0, opacity: 1}}
  transition={{ duration: 1}}
  className="mx-auto bg-white w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 rounded-[10px] shadow-lg lg:py-32" >
    <div className="">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Log in</h2>
    
      </div>
      <form className="mb-4 text-left sm:px-4 mt-8 md:px-20" name="wf-form-name" method="get">

        <div class="mb-4">
          <label for="field" className="mb-1 font-medium">Email</label>
          <input type="text" className="h-9 w-full bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]" placeholder="" required="" />
        </div>
        
        <div class="mb-4">
          <label for="field" className="mb-1 font-medium">Password</label>
          <input type="password" className="h-9 w-full bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]" placeholder="" required="" />
        </div>
 <br /> <br />
        <a href="#" className="mr-5 flex w-full items-center justify-center bg-main px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] md:mr-6 lg:mr-8">
          <p className="mr-6 font-bold">Access your account now</p>
        </a>
      </form>
    </div>
  </motion.div>

        </section>
  )
}
