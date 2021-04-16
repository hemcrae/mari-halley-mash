import React from 'react';
import './App.css';
import axios from 'axios';
import "./styles/global.scss";

const MASHUrl = 'http://localhost:8080'

export default class App extends React.Component{

    state = {
        data: [],
        fields: {},
        results: []
    };

    componentDidMount() { 
        axios
            .get(MASHUrl)
            .then(({ data }) => {
                const fields = {}

                Object.keys(data).forEach(key => {
                    fields[key] = []
                })

                this.setState({
                    data: data,
                    fields: fields
                })
            });
    }

    handleSelectChange(key, options) {
        const values = Array.from(options).map(option => option.value)
        const fields = { ...this.state.fields }
        fields[key] = values
        this.setState({
            fields: fields
        })
    }

    calculate () {
        const objects = Object.entries(this.state.fields).map(([key, ids]) => {
            const selectedIdIndex = this.randomNumber(0, ids.length)
            const selectedId = ids[selectedIdIndex];

            const found = this.state.data[key].find(option => option.id === selectedId)
            return { ...found, key: key }
        })

        this.setState({
            results: objects
        })
    }

    randomNumber (min, max) { 
        return Math.floor(Math.random() * max) + min
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
                {Object.entries(this.state.data).map(([key, options]) => (
                    <div className="form__card" key={key}>
                        <label className="form__label" htmlFor={key}>
                            {key}
                        </label>
                        <select className="form__select" id={key} name={key} multiple onChange={(event) => this.handleSelectChange(key, event.target.selectedOptions)}>
                            {options.map((option) => (
                                <option className="form__option" value={option.id}>{option.value}</option>
                            ))}
                        </select>
                    </div>
                ))}
                
                <button className="form__button" onClick={(event) => { event.preventDefault(); this.calculate() }}>Submit</button>
            </form>

            <div className="results">
                {this.state.results.length > 0 && this.state.results.map((r) => (
                    <div className="results__wrapper">
<<<<<<< HEAD
                        <h2 className="results__heading">{r.key}</h2>
=======
                        <h2 className="results__name">{r.key}</h2>
>>>>>>> af1fec290b0643b80136f359d6b9b09ba296245b
                        <img className="results__image" src={r.image} />
                    </div>
                ))}
            </div>
        </section>
        </>
    );
}
}
