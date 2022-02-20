import React, { useState } from "react";


 function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };
  
  return (
<div>
<div class="card mx-5 mb-4 bg-dark bg-gradient border-2">
  
  <div class="card-body">
    <h5 class="card-title display-6 fst-italic text-white text-center">Contact Info</h5><hr class="text-white"/>
    <p class="card-text lead text-white text-center">Feel free to enter your name, email and a brief message if you'd like to contact me about services or collaborations.</p>
    <hr class="text-white"/>
    <div class="row">
  <div class="col-sm-12">
    <input type="text" class="form-control mb-3" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col-sm-12">
    <input type="text" class="form-control mb-3" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>
    <input type="email" class="form-control" id="" placeholder="name@example.com"/>
    <div class="mb-3">
  <label for="text-area" class="form-label m-3 text-white">Message</label>
  <textarea class="form-control" id="text-area" rows="3"></textarea>
  <button type="button" class="btn btn-primary mt-3">Submit</button>
</div>

  </div>
  
</div>
</div>
  );
}
