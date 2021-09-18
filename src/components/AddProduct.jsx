import React, { useState } from 'react';
import {TextField, Button, Paper} from "@material-ui/core"

const AddProduct = () => {
    const [pet, setPet] = useState({
        title: "",
        description: "",
        price: "",
        photo: "",
        breed: ""
    })

    return (
        <div className = "add-inputs">
                <form >
                    <TextField 
                            required
                            variant="outlined"
                            value = {pet.title}
                            id="standard-basic" 
                            label="Питомец" 
                            name = "title" 
                            // onChange = {handleInputs}
                        />
                    <TextField 
                            required
                            variant="outlined"
                            value = {pet.description}
                            id="standard-basic" 
                            label="Описание" 
                            name = "description" 
                            // onChange = {handleInputs}
                        />
                    <TextField 
                            required
                            variant="outlined"
                            value = {pet.price}
                            id="standard-basic" 
                            label="Цена" 
                            name = "price" 
                            // onChange = {handleInputs}
                        />
                    <TextField 
                            required
                            variant="outlined"
                            value = {pet.photo}
                            id="standard-basic" 
                            label="Ссылка на Фото" 
                            name = "photo" 
                            // onChange = {handleInputs}
                        />
                    <TextField 
                            required
                            variant="outlined"
                            value = {pet.breed}
                            id="standard-basic" 
                            label="Порода" 
                            name = "breed"
                            // onChange = {handleInputs}
                        />
                    
                        <Button
                            // onClick = {(e) => {
                            //     e.preventDefault()
                            //     if (
                            //         !pet.title.trim() ||
                            //         !pet.description.trim() ||
                            //         !pet.price.trim() ||
                            //         !pet.photo.trim() ||
                            //         !pet.breed.trim()) {
                            //             alert("Заполните все поля!")
                            //             return
                            //         }
                            //     createProduct({
                            //         title: pet.title.trim(),
                            //         description: pet.description.trim(),
                            //         price: pet.price.trim(),
                            //         photo: pet.photo.trim(),
                            //         brand: pet.breed.trim()
                            //     })
                            // }}
                            variant="outlined" 
                            color="primary"
                            >Создать
                        </Button>
                </form>
        </div>
    );
};

export default AddProduct;