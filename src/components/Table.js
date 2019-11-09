import React from 'react'

export default props => (
    <table className ="table">
        <thead>
            <tr>
                <th>User ID</th>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map(item => (
                <tr key={item.id}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>
            ))}
        </tbody>
    </table>    
)