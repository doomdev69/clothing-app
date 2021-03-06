import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, signInWithTwitter } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';
import { auth } from '../../firebase/firebase.utils';


class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '', 
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        }catch(error){
            console.log(error);
        }

        this.setState({email: '', password: ''});
    }

    handleChange = event => {
       const { value, name } = event.target; 
       this.setState({ [name]: value })
    }

    render() { 
        return (
            <div className='sign-in'>
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        label='Email'
                        required
                    />
                    <FormInput 
                        name='password' 
                        type = 'password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit' isGoogleSignIn={false}>Sign In</CustomButton>
                        <CustomButton style={{marginTop: '5px'}} onClick={signInWithGoogle} isGoogleSignIn={true}>Sign In With Google <i class="fa fa-google" aria-hidden="true"></i></CustomButton>
                        <CustomButton style={{marginTop: '5px'}} onClick={signInWithTwitter} isTwitterSignIn={true}>Sign In With Twitter <i class="fa fa-twitter" aria-hidden="true"></i></CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;

