import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Table() {
    const navigate = useNavigate();

    const handleAddDataClick = () => {
        navigate('/form');
    };

    return (
        <>
            <div className='mt-5 '>
                <div className='Wdt container'>
                    <div className='add_btn mt-1 mb-2 d-flex justify-content-around'>
                        <button
                            className='btn btn-primary'
                            onClick={handleAddDataClick}
                            autoFocus
                        >
                            Add Data
                        </button>
                        <div className='tablestatus'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input mt-2'
                                    type='radio'
                                    name='userXender'
                                    id='malestatus'
                                    value='Male'
                                    onClick={(e) => filterUser(e)}
                                />
                                <label className='forn-check-label labelMale'>Male</label>
                            </div>
                            <div className='form-check'>
                                <input
                                    className='form-check-input mt-2'
                                    type='radio'
                                    id='femalestatus'
                                    name='userXender'
                                    value='Female'
                                    onClick={(e) => filterUser(e)}
                                />
                                <label className='forn-check-label labelFemale'>Female</label>
                            </div>
                        </div>
                    </div>
                    <table className='table'>
                        <thead>
                            <tr className='table-primary'>
                                <th scope='col'>Sr.no</th>
                                <th scope='col'>Id</th>
                                <th scope='col'>First Name</th>
                                <th scope='col'>Last Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>State</th>
                                <th scope='col'>Xender</th>
                                <th scope='col' id=''>
                                    <center>Action</center>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.unid}</td>
                                    <td>{item.firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.stateSelect}</td>
                                    <td>{item.xender}</td>
                                    <td className='headerStatus'>
                                        status
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}