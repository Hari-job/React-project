import React from 'react';


const Register = React.createClass({
  render() {
    return (
     
      <section className="column is-offset-6 is-4">
        <center>
          <h1>Register Your Account</h1>
          
          <table cellPadding={10} cellSpacing={10} style={{backgroundColor:'black',color:'white',padding:'20px'}}>
            <form action="/register" method="post">
              <tr>
                <td>Name</td>
                <td><input type="text" name="username"/></td>
              </tr>
              <tr>
                <td>Email</td>
                <td><input type="email" name="email"/></td>
              </tr>
              <tr>
                <td>Phone</td>
                <td><input type="text" name="phone"/></td>
              </tr>
              <tr>
                <td>Password</td>
                <td><input type="password" name="pwd"/></td>
              </tr>
              <tr>
                <td>Date of birth:</td>
                <td> <input type="date" name="dob"/></td>
              </tr>
              
              <tr>
                <td align="center" colspan="2"><input style={{border:'0px;',backgroundColor:'teal',color:'white',padding:'20px'}} type="submit"value="Register" name="regOrLogin" class="class1"/></td>
                <td></td>
              </tr>
            </form>
          </table>
          <br></br>
          <td align="center" colspan="2"><a href='/' ><button style={{border:'0px;',backgroundColor:'teal',color:'white',padding:'20px',textDecoration:'underline'}}>Already Have account</button></a></td>
        </center>
      </section>

    )
  },
});

export default Register
