import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;


/**
 * CONDITIONAL RENDERING
 * 1. use if or if ese to set a variable that will contain an element,component
 * 2.ternary operator : condition ? "for true" : "false"
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is false then the next thing will be displayed) 
 *
*/

/**
 * CONDITIONAL Css Class 
 * 1. use ternary
 * 2.ternary inside template string 
 * 
*/