import React from 'react'

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <h2>Profile Page</h2>
                <table border="1px solid black">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>XYZ</td>
                            <td>POWERMSK</td>
                            <td>56</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}