import React from 'react'

function Form() {
  return (
    <div>

    <form className='container'>

    <input type='email' placeholder='Email adress or phone number'/>
    <input type='password' placeholder='Password' />
    <button>Login</button>
    <a className='for' href=''>Forgetten Password</a>
    <hr className='hr'/>
    <a className='new' href=''>Create New Account</a>
    </form>
    </div>
  )
}

export default Form