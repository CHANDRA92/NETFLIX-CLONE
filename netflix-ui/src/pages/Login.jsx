import React, { useState } from "react";
import styled from "styled-components";
// import logo from "../assets/logo.png";
// import background from "../assets/login.jpg";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      // Redirect to the appropriate page depending on the user's email domain
      if (email.includes("@netflix.com")) {
        // Redirect to admin page if the user's email is from '@netflix.com'
        onAuthStateChanged(firebaseAuth, (currentUser) => {
          if (currentUser) navigate("/admin");
        });
        // navigate("/admin");
      } else {
        // Redirect to user page for other email domains
        onAuthStateChanged(firebaseAuth, (currentUser) => {
          if (currentUser) navigate("/");
        });
        // navigate("/user");

      }

    } catch (error) {
      console.log(error.code);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  // const Aemail = formValues.email;

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input
                type="email"
                required=""
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                required=""
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {/* <button className="Bu" onClick={handleLogin}>Login to your account</button> */}
              <button onClick={handleLogin}>Login to your account</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}




const Container = styled.div`
  position: relative;
  .content {
  

    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;

            color: #fff;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;

            &:hover {
            background: #b30000; /* Replace with your preferred hover background color */

          }
        }
      }
    }
  }
`;

export default Login;