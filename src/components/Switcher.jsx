import React from 'react'

export default function Switcher({ isButtonClick, buttonHandler }) {
  const smallUrl = 'http://www.filltext.com/?rows=5&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone}&address={addressObject}&description={lorem|32}';
  const bigUrl = 'http://www.filltext.com/?rows=10&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone}&address={addressObject}&description={lorem|32}';
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
      <button type="button" className={"btn btn-danger mr-4" + (isButtonClick ? " active" : "")} onClick={() => buttonHandler(bigUrl)}>1000</button>
      <button type="button" className={"btn btn-warning" + (!isButtonClick ? " active" : "")} onClick={() => buttonHandler(smallUrl)}>50</button>
    </div>
  )

}
