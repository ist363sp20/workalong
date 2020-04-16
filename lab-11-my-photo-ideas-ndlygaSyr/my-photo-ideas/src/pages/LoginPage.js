import React from 'react';
import {
    withRouter
} from 'react-router-dom'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null
        }
    }
    loginHandler = (evt) => {
        evt.preventDefault();
        const formData = new FormData(evt.target);
        const user = {};
        for (let pair of formData.entries()) {
            user[pair[0]] = pair[1];
        }
        var self = this;
        console.log(self.props);
        this.props.firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(() => {
                self.props.history.push('/my-photos');
            })
            .catch(function(error) {
                self.setState({error: error.message})
            });

    }
    render() {
        return (
            <div className="container-fluid py-5">
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
                        <img src="../logo.png" className="logo" alt="logo" />
                        <h1 className="sr-only">Login</h1>
                        {this.state.error && 
                            <p>{this.state.error}</p>
                        }
                        <form className="form" onSubmit={this.loginHandler}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" required />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" required />
                            </div>
                            <button className="btn btn-primary" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginPage)