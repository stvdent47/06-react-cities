import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div className='infoWeath'>
                {this.props.city &&
                    <div>
                        <p>location: {this.props.city}</p>
                        <p>temperature: {this.props.temp}</p>
                        <p>pressure: {this.props.pressure}</p>
                        <p>sunset: {this.props.sunset}</p>
                    </div>
                }
                <p className='error'>{this.props.error}</p>
            </div>
        )
    };
}

export default Weather;