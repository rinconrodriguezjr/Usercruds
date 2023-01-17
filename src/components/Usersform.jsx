import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert'
import Swal from "sweetalert2"

const Usersform = ({getUser, selectUser, userSelected}) => {
    
    //3. Crear un variable para vaciar la informacion del formulario y evitar errores en la actualizacion
    const emptyForm = {
        first_name: "",
        last_name: "",
        email: "",
        birthday: "",
        password: "",
    };

    //1. Crear el useForm handleSubmit, el handleSubmit sirve para los formulario, reduce codigo
    const { handleSubmit, register, reset } = useForm ();

    //4. Crear el useEffect para crear las dependencias
    useEffect(()=>{
        if(userSelected !== null){
            reset(userSelected)
        } else{
            reset(emptyForm)
        }
    },[userSelected]);

    //2. Crear una funcion que se asignara al onSubmit del handleSubmit del Formulario, continuando con el POST de la API que lleva 2 parametros "URL y Data"
    const submit = (data) => {
        console.log(data);
        if(userSelected){
            axios.put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
                .then(()=>{
                    getUser()
                    selectUser(null)
                    reset(emptyForm)
                });
        } else {
        axios.post(`https://users-crud.academlo.tech/users/`, data)
            .then(()=>{
                getUser()
                reset(emptyForm)
            });
    }};



    //

    return (
        <form onSubmit={handleSubmit(submit)} className="form" >
                <h1 className='title'><b>Users Form</b></h1> <br />
            <div className='formcontainer'>
                <br />
                <div className='info-container subtitle'>
                    <label htmlFor="first_name" className='placeholder'> {" "} <b>First name:</b> {" "}</label>
                    <br />
                    <input required
                        className='input'
                        type="text" 
                        id='first_name'
                        {...register("first_name")}
                        placeholder=""
                    />   
                    <div class="cut"></div>
                </div>
                <div className='info-container'>
                    <label htmlFor="last_name" className='placeholder'> {" "} <b>Last name:</b> {" "}</label>
                    <br />
                    <input required
                        className='input'
                        type="text" 
                        id='last_name'
                        {...register("last_name")}
                        placeholder=""
                    />
                    <div className="cut"></div>
                </div>
                <div className='info-container'>
                    <label htmlFor="email" className='placeholder'> {" "} <b>Email:</b> {" "}</label>
                    <br />
                    <input required
                        className='input'
                        type="email" 
                        id='email'
                        {...register("email")}
                        placeholder=""
                    />   
                    <div className="cut cut-short"></div>
                </div>
                <div className='info-container'>
                    <label htmlFor="birthday" className='placeholder'> {" "} <b>Birthday:</b> {" "}</label>
                    <br />
                    <input required
                        className='input'
                        type="date" 
                        id='birthday'
                        {...register("birthday")}
                        placeholder=""
                    />   
                    <div className="cut"></div>
                </div>
                <div className='info-container'>
                    <label htmlFor="password" className='placeholder'> {" "} <b>Password:</b> {" "}</label>
                    <br />
                    <input required
                        className='input'
                        type="password" 
                        id='password' 
                        {...register("password")}
                        placeholder=""
                    />   
                    <div className="cut"></div>
                </div>
                <br />

            </div> <br /> <br />
                <button className='button sub' onClick={submit()}><b>Submit</b></button>
            
        </form>
    );
};

export default Usersform;