/* eslint-disable no-lonely-if */
/* eslint-disable prettier/prettier */
// Write your JS code here
import { Component } from 'react'

import './index.css'

export default class RegistrationForm extends Component {

    state = {
        isOk: false,
        lastNameInput: '',
        nameInput: '',
        isFirstNameEmpty: false,
        isLastNameEmpty: false
    }

    emptyEverything = () => {
        this.setState({
            isOk: false,
            lastNameInput: '',
            nameInput: '',
            isFirstNameEmpty: false,
            isLastNameEmpty: false
        })

    }

    renderRegistrationPage = () => {
        const { isFirstNameEmpty, isLastNameEmpty } = this.state
        const border1 = isFirstNameEmpty ? 'red1' : null
        const border2 = isLastNameEmpty ? 'red2' : null

        return (
            <form className='form-container' onSubmit={this.onSubmit}>
                <div className='first-name-container'>
                    <label className='label' htmlFor='input' >
                        FIRST NAME
                        </label>
                    <br />
                    <input
                        type='text'
                        placeholder='First name'
                        className={`input-element ${border1}`}
                        id='input'
                        onBlur={this.onchangeName}
                    />
                    {isFirstNameEmpty && <p className='error'>Required</p>}

                </div>
                <div className='last-name-container'>
                    <label className='label' htmlFor='input' >
                        LAST NAME
                        </label>
                    <br />

                    <input
                        type='text'
                        placeholder='Last name'
                        className={`input-element ${border2}`}
                        id='input'
                        onBlur={this.onChangelast}
                    />
                    {isLastNameEmpty && <p className='error'>Required</p>}
                </div>

                <button type='submit' className='submit-btn'>
                    Submit
                       </button>
            </form>

        )
    }

    renderSuccessful = () => (
        <form className='form2' onSubmit={this.emptyEverything}>
            <img className='success-img' src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png' alt='success' />
            <p className='submit-status'>Submitted Successfully</p>
            <button type='submit' className='submit-btn'>Submit Another Response</button>
        </form>
    )

    onSubmit = (event) => {
        event.preventDefault()
        const { lastNameInput, nameInput } = this.state
        if (lastNameInput.length > 0 && nameInput.length > 0) {
            this.setState({ isOk: true })
        }
        else {

            if (nameInput.length < 1) {
                this.setState({ isFirstNameEmpty: true })
            }

            if (lastNameInput.length < 1) {
                this.setState({ isLastNameEmpty: true })
            }
        }

    }

    onchangeName = (event) => {
        // const value=event.target.value

        if (event.target.value.length < 1) {
            console.log('ok')
            this.setState({ isFirstNameEmpty: true })
        } else {
            this.setState({ nameInput: event.target.value, isFirstNameEmpty: false })
        }
    }

    onChangelast = (event) => {

        if (event.target.value < 1) {
            console.log('ok')
            this.setState({ isLastNameEmpty: true })
        } else {
            this.setState({ lastNameInput: event.target.value, isLastNameEmpty: false })
        }
    }


    render() {

        const { isOk } = this.state

        return (
            <div className='app-container'>
                <div className='registration-card'>
                    <h1 className='heading'>Registration</h1>

                    {isOk ? this.renderSuccessful() : this.renderRegistrationPage()}
                </div>
            </div>

        )
    }
}

