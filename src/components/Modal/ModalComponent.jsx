import React, { useState } from 'react';
import {
    Button, Form, Input, Label
} from 'reactstrap';
import { plansData } from '../../data/plansData';
import './ModalComponent.css';

const ModalComponent = ({ closeModal }) => {
    const [name, setName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [gmail, setGmail] = useState('')
    const [address, setAddress] = useState('')
    const [checked, setChecked] = useState(2);
    const handleSubmit = (e) => {
        // alert 
        alert('Welcome to the Fit Gym ===> New Members: ' + name
        );
        console.log({
            name,
            dateOfBirth,
            phoneNum,
            gmail,
            address,
        });
        e.preventDefault();
    }

    return (
        <div className='modalBackGround'>
            <div className='modalContainer'>
                <div className="container">
                    <div className="modalTitle">
                        <h3>Joining Form</h3>
                        <button className='closeBtn'
                            onClick={() => closeModal(false)}>X</button>
                    </div>
                    <div className='flex'>
                        <Form onSubmit={handleSubmit}>
                            <div className='form-content'>
                                <label className='form-label' htmlFor='fullName'
                                >Full Name:</label>
                                <input className='form-input'
                                    placeholder='Full Name'
                                    type='text' id='fullName' name='fullName'
                                    required
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className='form-content'>
                                <Label htmlFor='dob'>Date of birth:</Label>
                                <input className='form-input' type='date' id='dob' name='dob'
                                    placeholder='Enter your birth date' required
                                    onChange={e => setDateOfBirth(e.target.value)}
                                />
                            </div>
                            <div className='form-content'>
                                <Label htmlFor='phoneNumber'>Phone:</Label>
                                <input className='form-input' type='tel' id='phoneNumber' name='phoneNumber'
                                    placeholder='Tel.' required
                                    onChange={e => setPhoneNum(e.target.value)}
                                />
                            </div>
                            <div className='form-content'>
                                <Label htmlFor='mail'>Gmail:</Label>
                                <input className='form-input' type='email' id='mail' name='mail'
                                    placeholder='Enter your Gmail' required
                                    onChange={e => setGmail(e.target.value)}
                                />
                            </div>
                            <div className='form-content'>
                                <Label htmlFor='address'>Address:</Label>
                                <input className='form-input' type='text' id='address' name='address'
                                    placeholder='Enter your address'
                                    onChange={e => setAddress(e.target.value)}
                                />
                            </div>
                            <div className='form-content' check>
                                <Label check>
                                    Select your choice:
                                    {plansData.map((plan) => (
                                        <div key={plan.id}>
                                            <Input type='radio' id={plan.id}
                                                onChange={() => setChecked(plan.id)}
                                                checked={checked === plan.id}
                                            />
                                            <Label for={plan.id}>{plan.name} </Label>
                                        </div>
                                    ))}
                                </Label>
                            </div>
                            <Button className='closeBtn'
                                onClick={() => closeModal(false)}>
                                Cancel
                            </Button>
                            <Button className='submitBtn'
                                type="submit" value="submit" color="primary"
                            >Submit</Button>

                        </Form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ModalComponent;