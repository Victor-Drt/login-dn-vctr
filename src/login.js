import React, { useState } from "react";
import './login.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { BrowserRouter, Link } from "react-router-dom";
import { AccountCircle, Lock, Visibility, VisibilityOff } from "@material-ui/icons";

let autenticado = false
const Login = () => {
    
    //atributos da classe
    const [user, setUser] = useState("") //atributos de user
    const [password, setPassword] = useState("") //atributos de senha
    const [show, setShow] = useState(false) //valor padrao para visualizar a senha


    //controla se a senha estara visivel ou nao
    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    //Toasts
    //toast de sucesso
    function handleSuccess() {
        toast.success('Acesso Permitido!');
    }

    //toast de erro
    function handleError() {
        toast.error('Acesso Negado!');
    }

    //validação estatica
    function validarUsuario(){
        
        if ((user == "admin") && (password == "pass123")) {
            handleSuccess()
            autenticado = true  
            return true
        }else{
            handleError()
            return false
        }
    }

    return(
        <div className="login">
            <div className="login-logo">
                <img src='https://cdn.worldvectorlogo.com/logos/denso-2.svg' alt="Login App"/>
            </div>

            <div className="login-right">
                <h1>Login</h1>
                <div className="login-loginInputUser">
                    <AccountCircle/>
                    <input type="text" placeholder="Digite o nome de usuario!"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    />
                </div>

                <div className="login-loginInputPassword">
                    {/* <BsLock/> */}
                    <Lock/>
                    <input type={show ? "text" : "password"} placeholder="Digite sua senha!"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <div className="login-eye">
                        {show ? (
                            <Visibility
                                size={20}
                                onClick={handleClick}
                            />
                        ) : (  
                            <VisibilityOff
                                size={20}
                                onClick={handleClick}
                            />
                        )}
                    </div>
                </div>
                
                <button type="submit" onClick={validarUsuario}>
                    Validar Usuário
                </button>

                <Link className="linkButton" to="/app" target="_self" onClick={validarUsuario}>
                        Dashboard
                </Link>
                
                <h4>Não tenho conta!</h4>

                <button type="submit">
                    Cadastrar
                </button>
            </div>
        </div>
    )
    
}

export const isAuthenticated = () => autenticado;
export default Login;