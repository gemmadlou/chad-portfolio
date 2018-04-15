import React from 'react';
import ReactDOM from 'react-dom';

export const Project = () => {
    return <div className="h-100 overflow-y-auto">
        <ul className="relative dg gac-1 gar-1 gac-2-ns gtc-2-ns gtc-3-m gtr-2-m gar-2-m gac-3-m h-100 min-h-100-ns">
            <li className="relative">
                <img className="of-cover absolute top-0 left-0 h-100 w-100" src="http://unsplash.it/1000/1000?image=324" />
            </li>
            <li className="relative">
                <img className="of-cover absolute top-0 left-0 h-100 w-100" src="http://unsplash.it/1000/1000?image=326" />
            </li>
            <li className="relative overflow-hidden">
                <img className="of-cover absolute top-0 left-0 h-100 w-100" src="http://unsplash.it/1000/1000?image=364" />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black-90"></div>
                <div className="roboto white-90 sans-serif relative dt f3 w-100 h-100 ttu">
                    <div className="dtc tc v-mid">
                        <div className="mb4 fw8 ls4">Puma</div>
                        <button className="dim ls4 bg-black white bw0 fw8 ttu pl5 pr5 pt3 pb3 f6">Read</button>
                    </div>
                </div>
            </li>
            <li className="relative">
                <img className="of-cover absolute top-0 left-0 h-100 w-100" src="http://unsplash.it/1000/1000?image=356" />
                
            </li>
            <li className="relative">
                <img className="of-cover absolute top-0 left-0 h-100 w-100" src="http://unsplash.it/1000/1000?image=94" />
                
            </li>
            <li className="relative">
                <img className="of-cover absolute top-0 left-0 h-100 w-100" src="http://unsplash.it/1000/1000?image=104" />
            </li>
        </ul>
</div>;
}