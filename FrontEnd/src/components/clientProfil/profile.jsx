import './clientProfil.css';

export default function Profile({showSettings, setShowSettings , userData}) {
    return (
        <div className="clientProfile">
            <h2>Client Profile</h2>
            <hr />
            <div className='profileDetails'>
                <table>
                    <tr>
                        <th>Full Name</th>
                        <td>{userData?.fullname}</td>
                    </tr>
                    <tr>
                        <th>UserName</th>
                        <td>{userData?.username}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{userData?.email}</td>
                    </tr>
                    <tr>
                        <th>Username</th>
                        <td>{userData?.username}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>{userData?.phone}</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>{userData?.address}</td>
                    </tr>
                    <tr>
                        <th>Password</th>
                        <td>********</td>
                    </tr>
                    <tr>
                        <th>Date of Birth</th>
                        <td>{userData?.dob}</td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>{userData?.city}</td>
                    </tr>
                    <tr>
                        <th>Country</th>
                        <td>{userData?.country}</td>
                    </tr>
                </table>
                <button onClick={() => setShowSettings(!showSettings)}>Edit</button>
            </div>
        </div>
    );
}
