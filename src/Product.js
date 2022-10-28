
import { Formik, Field, Form, ErrorMessage } from "formik";

import {useState} from "react";
import axios from "axios";
import {Navigate} from 'react-router-dom';

const FORM_INITIAL_VALUES = {

    Name: "",
    Specification:"",
    Quantity:"",
    Price:"",
    PackagingDate:"",
    ExpiryDate:""
}

function ProductCreation(props) {
   
    return (
        <>
            <Formik
                initialValues={FORM_INITIAL_VALUES}

                // Create Product
                
                onSubmit={ async (values) => {
                    await axios.post('https://621b0f70faa12ee45004607f.mockapi.io/Products', values );
                    alert("Congrats!!! Your products have been posted successfully")
                    setNavigate(true);

                  }
                }

            validate={(values) => {
                const errors = {}  
                if (!values.Name) {
                    errors.Name = <span style={{ color: "red" }}> *Name is required</span>
                }
                if (!values.Specification) {
                    errors.Specification = <span style={{ color: "red" }}> *Specification is required</span>
                }
                if (!values.Quantity) {
                    errors.Quantity = <span style={{ color: "red" }}> *Quantity is required</span>
                }
                if (!values.Price) {
                    errors.Price = <span style={{ color: "red" }}> *Price is required</span>
                }
                if (!values.PackagingDate) {
                    errors.PackagingDate = <span style={{ color: "red" }}> *PackagingDate is required</span>
                }
                if (!values.ExpiryDate) {
                    errors.ExpiryDate = <span style={{ color: "red" }}> *ExpiryDate is required</span>
                }
    
                return errors;
            }}


            >
            {({ handleBlur, handleChange, handleSubmit, values, touched, errors }) => {

                return (
                    <>
                    <Form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="Name">Name</label>
                            <input
                                type="text"
                                name="Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Name}
                                className="form-control"
                            />
                            {errors.Name && touched.Name && errors.Name}
                        </div>
                       
                        <br />
                        <div className="form-group">
                            <label htmlFor="Specification">Specification</label>
                            <input
                                type="text"
                                name="Specification"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Specification}
                                className="form-control"
                            />
                            {errors.Specification && touched.Specification && errors.Specification}
                        </div>
                       
                        <br />
                        <div className="form-group">
                            <label htmlFor="Quantity">Quantity</label>
                            <input
                                type="text"
                                name="Quantity"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Quantity}
                                className="form-control"
                            />
                            {errors.Quantity && touched.Quantity && errors.Quantity}
                        </div>
                       
                        <br />
                        <div className="form-group">
                            <label htmlFor="Price">Price</label>
                            <input
                                type="text"
                                name="Price"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Price}
                                className="form-control"
                            />
                            {errors.Price && touched.Price && errors.Price}
                        </div>
                       
                        <br />
                        <div className="form-group">
                            <label htmlFor="PackagingDate">Packaging Date</label>
                            <input
                                type="text"
                                name="PackagingDate"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.PackagingDate}
                                className="form-control"
                            />
                            {errors.PackagingDate && touched.PackagingDate && errors.PackagingDate}
                        </div>
                       
                        <br />
                        <div className="form-group">
                            <label htmlFor="ExpiryDate">Expiry Date</label>
                            <input
                                type="text"
                                name="ExpiryDate"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.ExpiryDate}
                                className="form-control"
                            />
                            {errors.ExpiryDate && touched.ExpiryDate && errors.ExpiryDate}
                        </div>
                        <br />
                        <div className="Submit">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </Form>
                   </>

                )
            }}


        </Formik>
        </>
    )
}

export default ProductCreation


