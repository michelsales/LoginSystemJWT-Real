import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";

export function Login(){ 
    const auth = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    async function handleFinish(email: string, password: string) {
        console.log('chamou');

        try {
            await auth.authenticate(email, password)
            navigate('/profile');
        } catch {
            alert('Preencha os campos corretamente!');
        }
    }

   return (
        <div>
            <input type="email" placeholder="Your Email" onChange={(e) => { setEmail(e.target.value)}} />
            <input type="password" placeholder="Your password" onChange={(e) => { setPassword(e.target.value)}} /><br/>
            <button onClick={() => handleFinish(email, password)}>Logar</button>
        </div>
   )
}