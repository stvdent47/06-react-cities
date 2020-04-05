import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = '83af098b729cad7f47412bcf97975441';
class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  };



  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    
    if (city) {
      const apiUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await apiUrl.json();

      const sunset = data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      const sunsetDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.country,
        pressure: data.main.pressure,
        sunset: sunsetDate,
        error: undefined
      })
    } else { this.setState({
      temp: undefined,
      city: undefined,
      country: undefined,
      pressure: undefined,
      sunset: undefined,
      error: 'enter a city name'
    })

    }
  };

  render() {
    return (
      <div className='wrapper'>
        <div className='main'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-5 info'>
                <Info />
              </div>

              <div className='col-sm-7 form'>
                <Form weatherMethod={this.gettingWeather} />
                <Weather 
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  pressure={this.state.pressure}
                  sunset={this.state.sunset}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;