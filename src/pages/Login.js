import React, {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {agregarStorage, leerStorage} from '../helper/tokens'
import { useHistory } from 'react-router-dom';
//para leer token
import jwt from 'jwt-decode'

const Login = () => {

    const [user, setUser] = useState({
        correo:"", 
        contrasenia:""
    })

    const handleChange = ({target}) =>{
        setUser({
            ...user,
            [target.name] : target.value,
        })
    }

    const history = useHistory();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const response = await axios.post("http://localhost:8080/auth/login", user);

            //console.log(response.data.accessToken);

            if (response.data) {
                agregarStorage(response.data.accessToken);
            }
            
            const rango = leerStorage();

            /*
            como sacar valor administrador de token
            console.log(jwt(rango.token).usuario.administrador);
            */

            const moverA = (administrador) => {
                if (administrador === 1) {
                  history.push('factura');
                } else if (administrador === 0) {
                  history.push('/Dashboard');
                }
            };

            moverA(jwt(rango.token).usuario.administrador);
            
            
            /*
            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: response.data.msg
                  })
            }*/
        } 
        catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Usuario invalido',
                text: error.response.data.msg,
                })

        }
    }

    return ( 
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header" id="cardTitle"><h3 className="text-center text-white font-weight-light my-4">Inicio de Sesión</h3></div>
                                    <div className="card-body">
                                        <form
                                            onSubmit={handleSubmit}
                                        >
                                            <div className="form-floating mb-3">
                                                <input 
                                                className="form-control" 
                                                id="inputEmail" 
                                                type="email" 
                                                placeholder="name@example.com"
                                                name="correo"
                                                value={user.correo}
                                                onChange={handleChange}
                                                required
                                                />
                                                <label for="inputEmail">Correo Electronico</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input 
                                                className="form-control" 
                                                id="inputPassword" 
                                                type="password" 
                                                placeholder="Password"
                                                name="contrasenia"
                                                value={user.contrasenia}
                                                onChange={handleChange}
                                                required
                                                />
                                                <label for="inputPassword">Contraseña</label>
                                            </div>
                                            <div className="form-check mb-3">
                                                <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                <label className="form-check-label" for="inputRememberPassword">Recordar</label>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a className="small" href>.</a>
                                                <button className="btn btn-primary" href>Iniciar sesión</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small">¿No tienes una cuenta? <a href>Crea una ¡aqui!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default Login;