import React, {useState} from "react"

const ExpandableList = props => {
  let values
  if (props.id === "quantity") {
    values = [1,2,3,4,5]
  } else {
    values = ["XS", "S", "M", "L", "XL"]
  }

  const [value, setValue] = useState("")
  const [listVisible, setListVisible] = useState(false)
  
  const openList = () => {
    setListVisible(!listVisible)
  }

  const chooseValue = (e) => {
    setValue(e.target.value)
    openList()

  }

  let listClasses 
  if (listVisible) {
    listClasses = "values-list visible"
  } else {
    listClasses ="values-list"
  }
  return(
    <div className="value-selection" style={{width:`${props.width}`}}>
      <button onClick={openList}><span>{value === ""? `CHOOSE ${props.id}` : value}</span><i className="fas fa-chevron-down"></i></button>
      <div className={listClasses}>
        {
          values.map((value,index) => (
            <input type="button" onClick={chooseValue} value={value} key={index} />
          ))
        }
      </div>
    </div>
    )
}

export default ExpandableList