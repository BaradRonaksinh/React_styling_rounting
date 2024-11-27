import React, { useEffect, useState } from 'react'

const FakeApi = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => setData(json))
    })
    return (
        <>
            <div>Fake API CRUD</div>

            <table>
                <tbody>

                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Rate</th>
                    <th>Count</th>
                </tr>

                {
                    data.map((i) => {
                        return ( 
                            <tr>
                                <td width={100}>{i.id}</td>
                                <td width={100}>{i.title}</td>
                                <td width={100} align='center'>{i.price}</td>
                                <td width={100} >{i.description} </td>
                                <td>{i.category}</td>
                                <td><img src={i.image} height={50} width={50} /></td>
                                <td>{i.rating.rate}</td>
                                <td>{i.rating.count}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}

export default FakeApi
