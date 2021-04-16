import React from 'react';
import './App.css';
import axios from 'axios';
import "./styles/global.scss";

const MASHUrl = 'http://localhost:8080'

export default class App extends React.Component{

    state = {
        data: []
    };

    componentDidMount() { 
        axios
            .get(MASHUrl)
            .then(res => {
                this.setState({
                    data: res.data
                })
            });
    }

    render() {
    return (
        <>
        <header className="header">
          <div className="header-title">
            <h1 className="title">
              <span>M.</span>
              <span>A.</span>
              <span>S.</span>
              <span>H.</span>
            </h1>
          </div>
          {/* <div className="header-lists">
                <ul className="header-list">
                    <li className="header-item"></li>
                </ul>
            </div> */}
        </header>

        <section className="main">
            <form className="form">
                <div className="form__card">
                    <label className="form__label" htmlFor="spouses" name="spouse">
                        Spouses
                    </label>
                    <select className="form__select" id="spouse"name="spouse" multiple>
                        <option className="form__option">Kim Kardashian</option>
                    </select>
                </div>
                <div className="form__card">
                    <label className="form__label" htmlFor="location" name="location">
                        Location
                    </label>
                    <select className="form__select" id="location" name="location" multiple>
                        <option className="form__option">Vancouver</option>
                    </select>
                </div>
                <div className="form__card">
                    <label className="form__label" htmlFor="jobs" name="jobs">
                        Jobs
                    </label>
                    <select className="form__select" id="jobs" name="jobs" multiple>
                        <option className="form__option">Banker</option>
                    </select>
                </div>
                <div className="form__card">
                    <label className="form__label" htmlFor="pet" name="pet">
                        Pet
                    </label>
                    <select className="form__select" id="pet" name="pet" multiple>
                        <option className="form__option">Dog</option>
                    </select>
                </div>
                <div className="form__card">
                    <label className="form__label" htmlFor="transport" name="transport">
                        Car
                    </label>
                    <select className="form__select" id="transport" name="transport" multiple>
                        <option className="form__option">Tesla</option>
                    </select>
                </div>
                <button className="form__button">Submit</button>
            </form>
        </section>
      </>
    );
  }
}
