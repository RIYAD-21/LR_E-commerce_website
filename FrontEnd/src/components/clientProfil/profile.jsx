import './clientProfil.css';

export default function Profile() {
    return (
        <div className="clientProfile">
            <h2>Client Profile</h2>
            <hr />
            <div className='profileDetails'>
                <table>
                    <tr>
                        <th>Full Name</th>
                        <td>John</td>
                    </tr>
                    <tr>
                        <th>UserName</th>
                        <td>Doe</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>john.doe@example.com</td>
                    </tr>
                    <tr>
                        <th>Username</th>
                        <td>johndoe</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>+123456789</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>123 Main St, Anytown, USA</td>
                    </tr>
                    <tr>
                        <th>Password</th>
                        <td>********</td>
                    </tr>
                    <tr>
                        <th>Date of Birth</th>
                        <td>01/01/1990</td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>Anytown</td>
                    </tr>
                    <tr>
                        <th>Country</th>
                        <td>USA</td>
                    </tr>
                </table>
                <button>Edit</button>
            </div>
        </div>
    );
}
