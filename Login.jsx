import React from 'react'

const Login = React.createClass({
  getInitialState() {
    return { error: false }
  },

  render() {
    return (
      <section className="column is-offset-6 is-4">
        <center>
          <h1>Login Form</h1>
         
          <table cellPadding={10} cellSpacing={10} style={{backgroundColor:'black',color:'white',padding:'20px'}}>
            <form action="/login" method="post">
              <tr>
                <td>Username</td>
                <td><input type="text" name="username"/></td>
              </tr>
              <tr>
                <td>Password</td>
                <td><input type="password" name="pwd"/></td>
              </tr>
              <tr>
                <td colspan="2" align="center"><input style={{border:'0px;',backgroundColor:'teal',color:'white',padding:'20px'}} type="submit" value="Login" name="regOrLogin" class="class1"/></td>
              </tr>
            </form>
          </table>
          <br></br>
          <td align="center" colspan="2"><a href='/register' ><button style={{border:'0px;',backgroundColor:'teal',color:'white',padding:'20px',textDecoration:'underline'}}>Create New Account </button></a></td>
        </center>
      </section>
    )
  },
})

export default Login
