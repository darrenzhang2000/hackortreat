import React from 'react'
import { Button } from '@material-ui/core'
import Chart from './images/tokenusage.png'
import Pie from './images/tokenpie.png'
import "./home.css"

export default function Home() {
    return (
        <div className="root">
            <h3 style={{marginTop: '50px'}}>Token Usage</h3>
            <h5>Last Updated: Oct 24</h5>
            <div className="row">
                <img src={Chart} />
                <img className="pic" src={Pie} />
            </div>
            <div className="button-wrapper">
                <Button variant="contained" color="primary">Add another chart</Button>
            </div>
        </div>
    )
}
