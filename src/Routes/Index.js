import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from '../features/books/AddBook';
import BooksView from '../features/books/BooksView';
import Navbar from '../layout/Navbar';
import Error from '../Pages/Error';
import Home from '../Pages/Home';

const Index = () => {
    return <BrowserRouter>
    <Navbar></Navbar>
    <main>
    <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/show-books" element={<BooksView></BooksView>}/>
        <Route path="/add-book" element={<AddBook></AddBook>}/>
        <Route path="*" element={<Error></Error>}/>
    </Routes>
    </main>
    </BrowserRouter>
};

export default Index;