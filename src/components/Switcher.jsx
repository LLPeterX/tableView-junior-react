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
    <div className="d-grid gap-2 d-md-flex">
      <button type="button" className={"btn btn-danger mr-4" + (volume === DATA_VOLUMES[1] ? " active" : "")} onClick={() => buttonHandler(DATA_VOLUMES[1])}>1000</button>
      <button type="button" className={"btn btn-warning" + (volume === DATA_VOLUMES[0] ? " active" : "")} onClick={() => buttonHandler(DATA_VOLUMES[0])}>50</button>
    </div>
  )

}
