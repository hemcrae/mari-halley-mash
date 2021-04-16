import logo from './logo.svg';
import './App.css';

function App() {
  return ( 
    <>
    <header class="header">
        <div class="header-title">
            <h1>
                <span>M.</span>
                <span>A.</span>
                <span>S.</span>
                <span>H.</span>
            </h1>
        </div>
        <div class="header-lists">
            <ul class="header-list">
                <li class="header-item"></li>
                <li class="header-item"></li>
                <li class="header-item"></li>
                <li class="header-item"></li>
            </ul>
        </div>
    </header>

    <section class="main">
        <form class="form">
            <label class="form__label" for="spouses" name="spouse">
                Spouses
            </label>
            <select class="form__select" id="spouse"name="spouse" multiple>
                <option class="form__option">Kim Kardashian</option>
            </select>
            <button class="form__button">Submit</button>
        </form>
    </section>
    </>
  );
}

export default App;
