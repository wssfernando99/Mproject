import React from 'react'
//import React, {useState} from 'react'


export default function Login() {
  return (
    <div className='container'>
        <form>
            <label for="email" type="email">Email</label>
            <input type="email" name="email" id="email" placeholder="xxxx@gmail.com"/>
            <label for="password">Password</label>
            <input for="password" type="password"></input>
            <button>Login</button>
        </form>
    </div>
  )
}






  