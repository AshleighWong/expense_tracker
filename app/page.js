'use client'
import React, {useState, useEffect} from 'react';
import {addDoc, collection} from 'firebase/firestore';
import {db} from './firebase';

export default function Home() {

  const [items, setItems] = useState([
    {name: 'Coffee', price: 3.50},
    {name: 'Lunch', price: 12.00},
    {name: 'dinner', price: 20.95}, 
  ]);

  const[newItem, setNewItem] = useState({name: '', price: ''});

  const [total, setTotal] = useState(0);

  //add items to database
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== '' && newItem.price !== '') {
      //setItems([...items, newItem])
      await addDoc(collection(db, 'expenses'), {
        name: newItem.name.trim(),
        price: newItem.price,
      });
      setNewItem({name: '', price: ''});
    }
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl p-4 text-center">Expense Tracker</h1>
        <div className="bg-slate-800 p-4 rounded-lg">
          <form className="grid grid-cols-6 items-center text-black">
            <input value={newItem.name} onChange={(e)=> setNewItem({...newItem, name: e.target.value})} className="col-span-3 p-3 border-2" type="text" placeholder="Enter Item"></input>
            <input value={newItem.price} onChange={(e)=> setNewItem({...newItem, price: e.target.value})} className="col-span-2 p-3 border-2 mx-3" type="text" placeholder="Enter $"></input>
            <button className="text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl" type="submit">+</button>
          </form>
          <ul>
            {items.map((item, id)=> (
              <li key={id} className="my-4 w-full flex justify-between bg-slate-950">
                  <div className="p-4 w-full flex justify-between">
                    <span className="mx-2 capitalize">{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                  <button onClick={addItem} className="ml-8 p-4 border-l-2 border-slate-900 hover:bg-slate-900 w-16">X</button>
              </li>
            ))}
          </ul>
          {items.length < 1 ? ('') : (
            <div className="p-4 w-full flex justify-between">
              <span>Total</span>
              <span>${total}</span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
