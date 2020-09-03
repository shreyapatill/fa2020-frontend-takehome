'use strict';

const Table = () => {

    const URL = 'https://founders-takehome-api.herokuapp.com/api/fetch'

    /*
        TODO:

        Make a GET request to `https://founders-takehome-api.herokuapp.com/api/fetch` (initialized as `URL`)
        Process response data into an HTML table
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