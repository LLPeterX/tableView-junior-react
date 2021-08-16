import React, { useState } from 'react'

function Options({ volumes, volume, setVolume }) {

  const [currentVolume, setcurrentVolume] = useState(volume);

  const handleChangeVolume = (e) => {
    console.log(e.target.value, typeof setVolume);
    setcurrentVolume(+e.target.value);
    setVolume(+e.target.value);
  }
  return (
    <div className="row justify-content-between">
      <div>Объем данных</div>
      <div className="btn-group col-2" role="group" aria-label="Select data volume">
        {
          volumes.map(v =>
            <div className="form-check pe-4" key={v}>
              <input className="form-check-input" type="radio" name="vol" id={"vol" + v} checked={currentVolume === v} value={v}
                onChange={handleChangeVolume}

              />
              <label className="form-check-label" htmlFor={"vol" + v}>{v}</label>
            </div>
          )
        }
      </div>
      {/* <input type="radio" className="btn-check" name="vol" id={"vol" + v} checked={currentVolume === v} value={v} 
          //   // onClick={handleChangeVolume}
          //           onChange={(e) => console.log(e)}
          // />
          // <label className="btn btn-outline-primary" htmlFor="vol50">50</label>
      //   <label className="btn btn-outline-primary" htmlFor="vol50">50</label>

      //   <input type="radio" className="radio btn-check" name="vol" id="vol1000" checked={currentVolume === 1000} value="10"
      //     //onClick={handleChangeVolume}
      //     onChange={(e) => console.log(e)}
      //   />
      //   <label className="btn btn-outline-primary" htmlFor="vol1000">1000</label>
      // </div>
      */}
      <div className="btn-group col-4">
        <input type="text" className="form-control" id="filter" />
        <button type="button" className="btn btn-primary">Найти</button>
      </div>
    </div>
  )
}

export default Options
