import React from 'react';
import ReactDOM from 'react-dom';

export const Project = ({routeParams, data}) => {
    return <div className="h-100 overflow-y-auto roboto">

        <div className="h-100 relative cover bga-fixed" style={{backgroundImage: 'url(http://unsplash.it/1000/1000)'}}>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black-10"></div>
            <div className=" white-90 sans-serif relative dt f3 w-100 h-100 ttu">
                <div className="dtc tc v-mid">
                    <span className="mb4 fw8 ls4">Puma</span>
                </div>
            </div>
        </div>

        <div className="min-h-100 relative bg-light-gray">
            <div className="fl-m h-50 relative left-0 top-0 absolute-m w-60-m w-two-thirds-l h-100-m">
                <img className="of-cover absolute top-0 left-0 h-100 w-100" src='http://unsplash.it/1000/1000' />
            </div>
            <div className="lh-copy fr-m f5 relative m-50-m pa3 pa4-m pl5-l pr5-l w-40-m w-third-l">
                <h1>What we do</h1>

                <p className="mb4">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p className="mb4">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
            </div>
        </div>

        <div className="h-100 relative">
            <div className="black sans-serif relative dt f3 w-100 h-100 ttu">
                <div className="dtc tc v-mid">
                    <span className="ma4 fw8 ls4">Lorem ipsum dolor sit amet</span>
                </div>
            </div>
        </div>

        <ul className="relative dg gac-1 gar-1 gac-2-ns gtc-2-ns gtr-2-ns gar-2-ns gtc-3-m gtr-2-m gar-2-m gac-3-m min-h-100">
            <li className="relative">
                <img className="of-cover absolute-ns top-0 left-0 h-100 w-100" src="http://unsplash.it/1000/1000" />
            </li>
            <li className="relative">
                <img className="of-cover absolute-ns top-0 left-0 h-100 w-100" src="http://unsplash.it/1000/1000" />
            </li>
            <li className="relative">
                <img className="of-cover absolute-ns top-0 left-0 h-100 w-100" src="http://unsplash.it/1000/1000" />
            </li>
            <li className="relative">
                <img className="of-cover absolute-ns top-0 left-0 h-100 w-100" src="http://unsplash.it/1000/1000" />
            </li>
            <li className="relative">
                <img className="of-cover absolute-ns top-0 left-0 h-100 w-100" src="http://unsplash.it/1000/1000" />
            </li>
            <li className="relative">
                <img className="of-cover absolute-ns top-0 left-0 h-100 w-100" src="http://unsplash.it/1000/1000" />
            </li>
        </ul>

        <div className="h-100 relative cover bga-fixed" style={{backgroundImage: 'url(http://unsplash.it/1000/1000)'}}>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black-10"></div>
            <div className=" white-90 sans-serif relative dt f3 w-100 h-100 ttu">
                <div className="dtc tc v-mid">
                    <span className="mb4 fw8 ls4">Something wonderful</span>
                </div>
            </div>
        </div>

    </div>
}