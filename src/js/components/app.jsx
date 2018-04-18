import React from 'react';
import { route } from './routes.jsx';
import { client, getProjects } from '../services/contentful';
import { store } from '../infrastructure/state';

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hash: window.location.hash,
            menu: 'closed', // open|closed
            store: store.getState()
        }

        window.addEventListener('hashchange', event => {
            let state = Object.assign(this.state);
                state.menu = 'closed';
                state.hash = window.location.hash
            this.setState(state);
        });

        getProjects()
            .then(projects => {
                store.dispatch({
                    type: 'SET_PROJECTS',
                    projects
                });
            });

        store.subscribe(() => {
            this.setState({
                store: store.getState()
            });
        });

        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick(e) {
        e.preventDefault();
        let state = Object.assign(this.state);
            state.menu = state.menu === 'open' ? 'closed' : 'open';
        this.setState(state);
    }

    render() {   

        return <div className="h-100">
            <a className="z-1 w3 h3 fixed top-1 left-1" href="#" title="Base Kulture: Home page">
                <svg xmlns="http://www.w3.org/2000/svg" className="grow w-100 h-100" viewBox="0 0 1080 1080">
                    <rect width="1080" height="1079.76"></rect>
                    <path className="fill-white" d="M350.21,183.28a28,28,0,0,1,8.43,20.6V438a12,12,0,0,1-3.28,8.9q-3.29,3.29-19.2,12.64L349.27,468q9.35,5.62,9.36,16.86V707.69a28.78,28.78,0,0,1-29,29H207.87V174.86H329.6A28,28,0,0,1,350.21,183.28Zm-84.28,49.63V408a11.28,11.28,0,0,0,2.34,7.49q2.33,2.81,15.45,11.24,11.24-7.48,14-10.77a11.79,11.79,0,0,0,2.81-8V232.92Zm34.65,276.25A12.18,12.18,0,0,0,294,497.93l-10.3-5.62-11.24,5.62a12.15,12.15,0,0,0-6.56,11.24v169.5h34.65Z"></path>
                    <path className="fill-white" d="M473.62,736.72V480.14l-29,17.79Q439,501.68,439,509.17V736.72H380.91V203.89q0-13.1,8.43-21.07a28.92,28.92,0,0,1,20.6-8h92.71q13.1,0,21.07,8t8,21.07V736.72ZM469.41,417.4a12,12,0,0,0,4.21-9.36V232.92H439V437.06Q465.18,421.15,469.41,417.4Z"></path>
                    <path className="fill-white" d="M704.73,484.82V707.69a28.92,28.92,0,0,1-8,20.6q-8,8.43-21.07,8.43H582.05q-13.12,0-20.6-7.49T554,708.63V508.23c0-4.36,1.87-5.62,5.62-3.75l48.7,27.16c2.49,1.87,3.75,3.75,3.75,5.62v141.4h34.65V509.17a12.18,12.18,0,0,0-6.55-11.24l-76.79-47.76Q554,444.55,554,433.31V203.89q0-13.1,8.43-21.07a28.92,28.92,0,0,1,20.6-8H675.7q13.1,0,21.07,8t8,21.07v206q0,6.56-5.62,3.75l-48.7-27.16q-3.75-2.81-3.75-5.62v-148H612V408a12.12,12.12,0,0,0,6.56,11.24L695.36,468Q704.71,473.58,704.73,484.82Z"></path>
                    <path className="fill-white" d="M819.71,380.87v-148H786V427.7h33.71v59H786v192h33.71V537.26q0-2.81,3.75-5.62l48.7-27.16c3.75-1.87,5.62-.61,5.62,3.75v200.4q0,13.13-7.49,20.6t-20.6,7.49H756a28.78,28.78,0,0,1-29-29V203.89q0-13.1,8.43-21.07a28.92,28.92,0,0,1,20.6-8h92.71q13.1,0,21.07,8t8,21.07v206q0,6.56-5.62,3.75l-48.7-27.16Q819.71,383.68,819.71,380.87Z"></path>
                    <path className="fill-white" d="M202.23,809.51h29.05V845l30.43-35.53h38.64L266,845l35.85,58.54H266.12l-19.83-38.67-15,15.72v22.94H202.23Z"></path>
                    <path className="fill-white" d="M370.63,809.51h29v56a47.17,47.17,0,0,1-2.6,15.73,34,34,0,0,1-8.15,12.95A32.49,32.49,0,0,1,377.24,902q-8.47,3.14-20.33,3.14a128,128,0,0,1-15-1,39.2,39.2,0,0,1-13.57-3.81,34,34,0,0,1-10-8.11,29.78,29.78,0,0,1-6.19-10.83,56.14,56.14,0,0,1-2.69-15.9v-56h29v57.35q0,7.69,4.27,12t11.83,4.33q7.5,0,11.77-4.26t4.27-12.08Z"></path>
                    <path className="fill-white" d="M416.84,809.51H445.9v70.87h45.35v23.15h-74.4Z"></path>
                    <path className="fill-white" d="M482,809.51H570.3v23.22H540.67v70.81H511.61V832.73H482Z"></path>
                    <path className="fill-white" d="M641.46,809.51h29v56a47.18,47.18,0,0,1-2.6,15.73,34,34,0,0,1-8.15,12.95A32.5,32.5,0,0,1,648.06,902q-8.47,3.14-20.33,3.14a128,128,0,0,1-15-1,39.2,39.2,0,0,1-13.56-3.81,34,34,0,0,1-10-8.11A29.77,29.77,0,0,1,583,881.43a56.14,56.14,0,0,1-2.69-15.9v-56h29v57.35q0,7.69,4.26,12t11.83,4.33q7.5,0,11.77-4.26t4.26-12.08Z"></path>
                    <path className="fill-white" d="M687.83,903.54v-94h48.42q13.47,0,20.59,2.31a21.92,21.92,0,0,1,11.48,8.56,26.55,26.55,0,0,1-8.15,37.94A35.12,35.12,0,0,1,750,862a29,29,0,0,1,7.56,3.47,29.36,29.36,0,0,1,4.65,4.94,37,37,0,0,1,4.07,5.84l14.07,27.25H747.48L732,874.81q-3-5.58-5.26-7.25a12.19,12.19,0,0,0-7.12-2.18H717v38.16ZM717,847.61h12.25a43.7,43.7,0,0,0,7.7-1.28,7.68,7.68,0,0,0,4.71-3,9.52,9.52,0,0,0-1.06-12.44q-2.89-2.44-10.84-2.44H717Z"></path>
                    <path className="fill-white" d="M788.57,809.51h77.86v20.08H817.68v14.94H862.9v19.18H817.68v18.54h50.16v21.29H788.57Z"></path>
                </svg>
            </a>   

            <a href="" 
                onClick={this.handleMenuClick} 
                className="z-2 w2 h2 fixed top-1 right-2">
                <svg className={`hamburger ${this.state.menu === 'open' ? 'active' : ''}`} version="1.1" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
                    <rect width="190" height="20" rx="3" ry="3" y="20" x="5" />
                    <rect width="190" height="20" rx="3" ry="3" y="70" x="5" />
                    <rect width="190" height="20" rx="3" ry="3" y="70" x="5" />
                    <rect width="190" height="20" rx="3" ry="3" y="120" x="5" />
                </svg>
            </a>

            <div className={`${this.state.menu === 'open' ? '' : 'dn'} fixed z-1 top-0 left-0 w-100 h-100 bg-black`}>
                <div className="dt h-100 w-100 roboto">
                    <div className="dtc tc v-mid">
                        <ul className="pa4 ttu fw8 ls4 f3">
                            <li className="mb5">
                                <a className="white link" href="#">Home</a>
                            </li>
                            <li className="mb5">
                                <a className="white link" href="#about">About</a>
                            </li>
                            <li className="mb5">
                                <a className="white link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {route(this.state.hash, this.state.store)}
        </div>
    }
}