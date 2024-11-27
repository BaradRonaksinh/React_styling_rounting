import axios from 'axios'
import React, { useEffect, useState } from 'react'

const JsonServerApi = () => {
    const [data,setData] = useState({    // they have create bcz we store indivuzal data get and set .....*-*-*-*-*-*
        name:"",
        age:""
    })

    const [allData, setAllData] = useState([])

    const dispData = () => {
        axios.get("http://localhost:4000/users")
        .then((res) => setAllData(res.data))
    }

    useEffect(() => {  //if you display a data then try a useEffect Hooks to display data 
        dispData()

    },[])

    const [id,setId] = useState("") // actually the reason behind the set a id store is --> if we try to update a data that time we use {data}'s ID so that perpose store ID 
    //which data should be update --/\

    const editData = (id) => {
        axios.patch("http://localhost:4000/users/" + id) // dev try to Edit a data means we try to add only ' ID ' pass in AXIOS that time dev use patch method on edit data :)
        .then((res) => {
            setData(res.data)
            setId(id)
        })// dev del , and  deleting --> data bcz we dlete {...data...} into a data at setData....  {name,age}
        dispData()
    }

    const delData = (id) => {
        axios.delete("http://localhost:4000/users/" + id)     // dev try to delete a data means we try to add only ' ID ' pass in AXIOS
        .then((res) => console.log(res))// dev del , and  deleting --> data bcz we dlete {...data...} into a data at setData....  {name,age}
        dispData()
    }

    const handleChange = (e) => {  //if you use onChange Event then we complisory  use  as a handleChage Evenet it's Mendetory......
        const {name , value} = e.target  //if dev not craete a dif variable then use Distructuring Method
        setData({     //   set Data as a Object
            ...data,
            [name]:value
        })
    }
    const saveData = (e) => {   //we have ' e ' bcz onSubmit  event has page refreash and we don't do that
        //that why we use e.preventDefault() method

        e.preventDefault()

        if (id != '') {
            //Update logic implement for API
            axios.put("http://localhost:4000/users/" +id ,data)     // dev try to post a data means a we gives to data for server not use fakeAPI to geting data  ......
            .then((res) => console.log(res))// dev add , and  adding --> data bcz we store {...data...} into a data at setData....  name,age
        
        } else {
            //Insert logic implement for API
            axios.post("http://localhost:4000/users",data)     // dev try to post a data means a we gives to data for server not use fakeAPI to geting data  ......
            .then((res) => console.log(res))// dev add , and  adding --> data bcz we store {...data...} into a data at setData....  name,age
        }
        
        // we show the input section clear after thr enter the data ;then try to clear setData
        setData({
            name:"",
            age:""
        }) 
        setId("")
        dispData()
    }



  return (
    <>
      <div>JSON Server API </div>

      {/* create a form */}

      <form action="#" method='post' onSubmit={saveData}>
        <label htmlFor="iName">Name:</label>  //In a Label we can put id name in htmlFor section
        <input type="text" name="name" id="iName" onChange={handleChange} value={data.name}/>
        <label htmlFor="iAge">Age:</label>    //In a Label we can put id name in htmlFor section
        <input type="number" name="age" id="iAge" onChange={handleChange} value={data.age}/>
        <input type="submit" name="save" value="save" />
      </form>

      <br /><br />

      <table>
        <tbody>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>

            {
                allData.map((i) =>{
                    return(
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>
                                <button onClick={() => editData(i.id)}>Edit</button>
                                <button onClick={() => delData(i.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </>
  )
}

export default JsonServerApi
