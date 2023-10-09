
import React from 'react'

export const Register = () => {
  return (
    <div className='container'>
        <form>
            <label>First Name</label>
            <input type='text' id='fname' name='fname'></input>
            <label>Last Name</label>
            <input type="text" id='lname' name='lname' />
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' />
            <label>Password</label>
            <input type="password" id="password" name='password' />
            <label>Confirm Password</label>
            <input type="password" id='confirmpassword' name='confirmpassword'/> 
            <button>Confirm</button> 
        </form>
    </div>
  )
}

