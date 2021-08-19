import React from 'react'
import { DATA_VOLUMES } from '../constants';

export default function Switcher({ volume, buttonHandler }) {
  //const smallUrl = 'http://www.filltext.com/?rows=5&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone}&address={addressObject}&description={lorem|32}';
  //const bigUrl = 'http://www.filltext.com/?rows=10&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone}&address={addressObject}&description={lorem|32}';
  // return (
  //   <div className="d-grid gap-2 d-md-flex">
  //     {
  //       isButtonClick
  //         ? <button type="button" className="btn btn-danger mr-4" onClick={() => buttonHandler(smallUrl)}>1000</button>
  //         : <button type="button" className="btn btn-warning" onClick={() => buttonHandler(bigUrl)}>50</button>
  //     }
  //   </div>
  // )
  return (
    <div className="d-grid gap-2 d-md-flex mb-4" style={{ justifyContent: 'center' }}>
      <button type="button" className={"btn " + (volume === DATA_VOLUMES[0] ? "btn-warning" : "btn-outline-warning")} onClick={() => buttonHandler(DATA_VOLUMES[0])}>{DATA_VOLUMES[0] + " rows"}</button>
      <button type="button" className={"btn " + (volume === DATA_VOLUMES[1] ? "btn-danger" : "btn-outline-danger")} onClick={() => buttonHandler(DATA_VOLUMES[1])}>{DATA_VOLUMES[1] + " rows"}</button>
    </div>
  )

}
