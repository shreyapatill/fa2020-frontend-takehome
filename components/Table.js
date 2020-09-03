'use strict';

const Table = () => {

    const URL = 'https://founders-takehome-api.herokuapp.com/api/fetch'

    /*
        TODO:

        Make a GET request to `https://founders-takehome-api.herokuapp.com/api/fetch` (initialized as `URL`)
        Process response data into an HTML table

        Feel free to delegate to as many components as you like or make Table a class-based components.
    */

    return (
        <section>
            <table>
                {/* Table Contents */}
            </table>
        </section>
    )
}

const domContainer = document.querySelector('#table');
ReactDOM.render(<Table />, domContainer);