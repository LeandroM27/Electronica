import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Signup = () => {

    const [newUser, setNewUser] = useState({
        id_usuario: "", 
        correo:"", 
        contrasenia:""
    })

    const handleChange = ({target}) =>{
        setNewUser({
            ...newUser,
            [target.name] : target.value,
        })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            //convertir el nic para poder enviarlo en el post
            const user = parseInt(newUser.id_usuario)
            const mail = newUser.correo;
            const password = newUser.contrasenia;

            const data = {id_usuario: user, correo: mail, contrasenia: password}

            const response = await axios.post("http://localhost:8080/auth/signup", data);

            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Registro con exito',
                    text: "Usuario registrado con exito",
                  })
            }
        } 
        catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Usuario existente',
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
                            <div className="col-lg-7">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header" id="cardTitle"><h3 className="text-center text-white font-weight-light my-4">Crear cuenta</h3></div>
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
                                                    value={newUser.correo}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label>Correo Electronico</label>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <input 
                                                    className="form-control" 
                                                    id="inputNic" 
                                                    type="text" 
                                                    placeholder="NIC" 
                                                    name="id_usuario"
                                                    value={newUser.id_usuario}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label>NIC</label>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-12">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input 
                                                            className="form-control" 
                                                            id="inputPassword" 
                                                            type="password" 
                                                            placeholder="Create a password"
                                                            name="contrasenia"
                                                            value={newUser.contrasenia}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                        <label>Contraseña</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4 mb-0">
                                                <div className="d-grid"><button className="btn btn-primary btn-block">Crear cuenta</button></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small">¿Tienes una cuenta? Inicia sesión aqui</div>
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
 
export default Signup;