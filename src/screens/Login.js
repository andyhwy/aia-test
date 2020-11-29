import React from 'react';
import {Colors} from '../styles';

export default function Login(props) {
  return (
    <form>
      <h3>Sign In</h3>
      <div className="form-group">
        <label>Login ID</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter login ID"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        style={{backgroundColor: Colors.aiaRed, borderWidth: 0}}>
        Login
      </button>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
}
