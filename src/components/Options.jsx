import React, { useState, useEffect } from 'react'

const INPUT_TIMEOUT = 300;

function Options({ volumes, volume, setVolume, filter, setFilter }) {

  const [currentVolume, setcurrentVolume] = useState(volume);
  const [currentFilter, setCurrentFilter] = useState(filter);
  // state for timer for enter filter string. filter value will pass up to App after 300 ms after incativity
  const [inputTimerId, setInputTimerId] = useState(null);

  const handleChangeVolume = (e) => {
    console.log(e.target.value, typeof setVolume);
    setcurrentVolume(+e.target.value);
    setVolume(+e.target.value);
  }

  const handleChangeFilter = (e) => {
    if (e) {
      let filterStr = e.target.value.trim();
      setCurrentFilter(filterStr);
    }
  }

  useEffect(() => {
    if (inputTimerId) {
      clearTimeout(inputTimerId);
    }

    setInputTimerId(
      setTimeout(() => {
        setFilter(currentFilter);
      }, INPUT_TIMEOUT),
    );

    return () => clearTimeout(inputTimerId);
  }, [currentFilter]);


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
      <div className="btn-group col-4">
        <input
          type="text"
          className="form-control"
          id="filter"
          value={currentFilter}
          onChange={handleChangeFilter}
        />
        <button type="button" className="btn btn-primary">Найти</button>
      </div>
    </div>
  )
}

export default Options
