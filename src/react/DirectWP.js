import React, { useEffect, useState } from 'react'

export default function DirectWP() {
  const [cpt, setcpt] = useState('book')
  const [acf, setacf] = useState([])
  const [bcf, setbcf] = useState([])
  const [fields, setfields] = useState([])
  const url = JSON.parse(localStorage.getItem('settings')).wp_url + 'wp-json/wp/v2/'
  const [data, setdata] = useState(null)
  const [list, setlist] = useState([])
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setdata(json)
        let newlist = Object.keys(json.routes)
        newlist.forEach((e, i) => {
          newlist[i] = newlist[i].split('/')[3]
        })
        setlist(removeDuplicates(newlist))
      })
  }, [])
  useEffect(() => {
    let params = {
      per_page: 1,
      // _fields: 'acf'
    }
    const str = new URLSearchParams(params).toString()
    fetch(url + cpt + '?' + str)
      .then(res => res.json())
      .then(json => {
        setbcf(Object.keys(json[0]))
        // console.log(data.routes['/wp/v2/' + cpt].endpoints[0].args);
        if (json[0].acf) {
          setacf(Object.keys(json[0].acf))
        }
      })
  }, [cpt])
  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
  }
  return (
    <>
      <div>
        <label htmlFor="">Post Types:</label>
        <select value={cpt} onChange={(e) => { setcpt(e.target.value) }}>
          {
            list.map((item, index) => {
              return (
                <option key={index}>{item}</option>
              )
            })
          }
        </select>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault()
        let obj = []
        for (let x = 0; x < e.target.elements.length - 1; x++) {
          if (e.target.elements[x].checked) {
            obj.push(e.target.elements[x].name)
          }
        }
        setfields(obj)
        console.log(obj);
      }}>

        <label htmlFor="">BCF:</label>
        {bcf.map((item, index) => {
          return (
            <div>
              <input type='checkbox' key={index} name={item} value={item} /> {item}
            </div>
          )
        }
        )}
        <label htmlFor="">ACF:</label>
        {acf.map((item, index) => {
          return (
            <div>
              <input type='checkbox' key={index} name={item} value={item} checked /> {item}
            </div>
          )
        }
        )}
        <button>OK</button>
      </form>
    </>
  )
}
