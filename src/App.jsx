import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./App.css";

function App() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1v6oyjc', 'template_cmjt28i', form.current, {
        publicKey: 'Wfcz-dT4r-9YVtswI',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset()
  };
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <main className="container d-flex flex-column justify-content-center align-items-center">
        <form className="form px-5 py-5" ref={form} onSubmit={sendEmail}>
          <div className="w-100 text-center">
            <h1 className="fw-bold">Contact Us</h1>
            <p className="fst-italic">
              You wanna talk to me? but, i wanna talk to you
            </p>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-md-6 postion-relative">
              <i className="bi bi-person-fill position-absolute translte-middle-y m-3"></i>
              <input
                type="text"
                name="user__fname"
                placeholder="First Name"
                className="form-control my-2 px-5"
              />
            </div>
            <div className="col-md-6 my-2">
              <input
                type="text"
                name="user__lname"
                placeholder="Last Name"
                className="form-control px-5"
              />
            </div>
          </div>

          <div class="my-2 position-relative">
            <i class="bi bi-envelope-fill position-absolute translate-middel-y mt-2 mx-3"></i>
            <input
              type="email"
              name="user_email"
              placeholder="email@xxxmail.com"
              class="form-control px-5"
              required
            />
          </div>

          <div class="my-3 position-relative">
            <i class="bi bi-telephone-fill position-absolute translate-middel-y mt-2 mx-3"></i>
            <input
              type="tel"
              name="user_phone"
              placeholder="Phone Number"
              class="form-control px-5"
              required
            />
          </div>

          <div class="my-3 position-relative">
            <i class="bi bi-chat-dots-fill position-absolute translate-middel-y mt-2 mx-3"></i>
            <input
              type="text"
              name="user_subject"
              placeholder="Subject"
              class="form-control px-5"
              required
            />
          </div>

          <div class="my-3 position-relative">
            <textarea
              type="textarea"
              name="user_message"
              placeholder="Message ..."
              class="form-control px-5"
              required
            ></textarea>
          </div>
          <div className="w-100 d-flex justify-content-center">
            <button type="submit" className="btn text-white w-50">
              Send
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
