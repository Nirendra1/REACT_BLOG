import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const SignUp = () => {

  // const [inputs, setInputs] = useState([]);
  const [userName, setUserName] = useState();
  const [emailAddress ,setEmailaddress] = useState();
  const [language, setLanguage] = useState();
  const [experience, setExperience] = useState();
  const [userPassword, setUserPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault()
    // debugger
    // console.log(inputs);
    const Posts = {username:userName, email:emailAddress, language:language, experience:experience, password: userPassword }

    if(Posts.username && Posts.email && Posts.language && Posts.experience && Posts.password){

    axios.post('http://localhost:3000/userRoute/register', Posts)
      .then((response) => {
     //  debugger
      console.log(response, 'responcesignup')

      if (response?.status == 200) {

        Swal.fire({
            title: 'Successfully Submited !',
            text: 'You clicked the button.',
            icon: 'success',
            timer: 1500
        })
        navigate("/");
    } else { 
        Swal.fire({

            icon: 'error',
            title: 'Oops...',
            text: 'Email and Password is Not Valid !',
            // footer: '<a href="">Why do I have this issue?</a>',
            timer: 1500
            
        })
    }

    })
    document.getElementById('LoginForm').reset();
    } else {
        // console.log("All field are required ")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'All field are required !',
            // footer: '<a href="">Why do I have this issue?</a>',
            timer: 1500
        })
    }
  }


  return (

   <div>
   <section className="vh-100" style={{backgroundColor: '#9A616D', height:'935px'}}>
   <div className="container py-5 h-100">
     <div className="row d-flex justify-content-center align-items-center h-100">
       <div className="col col-xl-10">
         <div className="card" style={{borderRadius: '1rem'}}>
           <div className="row g-0">
             <div className="col-md-6 col-lg-5 d-none d-md-block">
               <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem', height:'90%'}} />
             </div>
             <div className="col-md-6 col-lg-7 d-flex align-items-center">
               <div className="card-body p-4 p-lg-5 text-black">
                 <form id="SigUpForm" onSubmit={handleSubmit}>
                   <div className="d-flex align-items-center mb-3 pb-1">
                     <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}} />
                     <span className="h1 fw-bold mb-0">SignUp</span>
                   </div>
                   <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>SignUp into your account</h5>
                   <div className="form-outline mb-4">
                   <label className="form-label" htmlFor="form2Example17">User Name</label>
                     <input type="name" id="form2Example17" className="form-control form-control-lg" name="userName" style={{border:'1px solid '}} onChange={(e) => setUserName(e.target.value)} />

                   </div>
                   <div className="form-outline mb-4">
                   <label className="form-label" htmlFor="form2Example17">Email address</label>

                     <input type="email" id="form2Example17" className="form-control form-control-lg" name="email" style={{border:'1px solid '}}  onChange={(e) => setEmailaddress(e.target.value)} />

                   </div>
                   <div className="form-outline mb-4">
                   <label className="form-label" htmlFor="form2Example17">Language</label>
                     <input type="language" id="form2Example17" className="form-control form-control-lg" name="about_me" style={{border:'1px solid '}} onChange={(e) => setLanguage(e.target.value)} />

                   </div>
                   <div className="form-outline mb-4">
                   <label className="form-label" htmlFor="form2Example27">Experience</label>
                     <input type="text" id="form2Example27" className="form-control form-control-lg" name="experience" style={{border:'1px solid'}} onChange={(e) => setExperience(e.target.value)} />

                   </div>
                   <div className="form-outline mb-4">
                   <label className="form-label" htmlFor="form2Example27">Password</label>
                     <input type="password" id="form2Example27" className="form-control form-control-lg" name="password"  style={{border:'1px solid'}} onChange={(e) => setUserPassword(e.target.value)} />

                   </div>
                   <div className="pt-1 mb-4">

                    <button className="btn btn-dark btn-lg " type="submit">Login</button>
                   </div>
                   <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>You have an account? <a href="/" style={{ color: '#393f81' }}>Login here</a></p>
                   <a href="#!" className="small text-muted">Terms of use.</a>
                   <a href="#!" className="small text-muted">Privacy policy</a>
                 </form>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
</div>
  )
}

export default SignUp;
