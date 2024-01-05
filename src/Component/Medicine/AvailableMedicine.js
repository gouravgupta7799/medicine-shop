import React, { useState } from 'react';

import classes from './AvailableMedicine.module.css';
import MedicineItem from './MedicineItem';
import Card from '../UI/Card';
import MedicineForm from './MedicineForm';

const AvailableMedicine = () => {

  const [setAvailableMedicine, setAvailableMedicineHandler] = useState([]);

  const addMedicineHandler = (medicine) => {
    setAvailableMedicineHandler((prevMedicine) => {
      const updatedMedicine = [...prevMedicine, medicine];
      return updatedMedicine;
    })
  }

  const availableMedicine = setAvailableMedicine.map((medicine) =>
    <MedicineItem key={medicine.id} id={medicine.id} name={medicine.medicine} description={medicine.desc} price={medicine.price} quantity={medicine.quantity} />)
  return (
    <section className={classes.Medicine}>
      <Card>
        <MedicineForm onAddStock={addMedicineHandler} />
        <ul>{availableMedicine}</ul>
      </Card>
    </section>
  )
}

export default AvailableMedicine;