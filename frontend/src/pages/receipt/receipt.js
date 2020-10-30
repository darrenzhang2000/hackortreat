import { Button, Paper } from '@material-ui/core'
import React from 'react'
import "./style.css"
import Logo from "./images/logo.png"

export default function Receipt() {
    return (
        <div className="root">
            <h3 style={{marginTop: '50px'}}>Charitable Donation Receipt</h3>
            <div className="download"><p style={{ textAlign: 'center', color: 'black' }}>Download receipt</p></div>
            <div className="row">
                <p style={{ marginRight: '20px', paddingTop: '0' }}>File format: </p>
                <button>Word</button>
                <button>PDF</button>
            </div>

            <Paper className="pdf">
                <img src={Logo} />
                <h3>Charitable Donation Receipt</h3>

                <div>
                    <div className="row">
                        <h5>Date of donation</h5>
                        <p className="underline"></p>
                    </div>

                    <div className="row">
                        <h5>Name of donor</h5>
                        <p className="underline"></p>
                    </div>

                    <div className="row">
                        <h5>Donor address:</h5>
                        <p className="underline"></p>
                    </div>

                    <div className="row">
                        <h5>Email address:</h5>
                        <p className="underline"></p>
                    </div>

                    <div className="row">
                        <h5>Donation amount:</h5>
                        <p className="underline"></p>
                    </div>

                    <p>
                        Thank you for your generous donation. This receipt serves as acknowledgement of your donation of the items listed above to Pay It Forward. Controbution of goods are deductible for Income Tax to the extend allowed by law. Estimating the fair market value of in-kind donation is the privilege and responsibility of the donor. Pay It Forward has provided no goods nor services in consideration of this donation.
                    </p>
                </div>
            </Paper>

            <button style={{
                margin: '30px',
                width: '150px',
                height: '50px'
            }}>
                Autofill
            </button>
        </div>
    )
}
