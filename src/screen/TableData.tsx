import { useEffect, useState } from 'react';
import { Record } from '../common/types';
import { Table } from 'react-bootstrap';
import { listUsers } from '../redux/actions/userAction';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';

const TableData = () => {
  // const url = 'https://dummyjson.com/users';
  // const [record, setRecord] = useState<any>();

  // useEffect(() => {
  //   axios.get(url).then((res) => setRecord(res.data));
  // }, []);

  const dispatch = useDispatch()

  const { users } = useSelector((state: any) => state.userList)

  useEffect(() => {
    dispatch(listUsers())
  },[dispatch])

  return (
    <>
      <Table bordered responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Maiden Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Blood Group</th>
            <th>Birth Date</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Eye Color</th>
          </tr>
        </thead>

        <tbody>
          {users?.users?.map((d: Record) => (
            <>
              <tr>
                <td>{d.id}</td>
                <td>{d.firstName}</td>
                <td>{d.lastName}</td>
                <td>{d.maidenName}</td>
                <td>{d.age}</td>
                <td>{d.gender}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>{d.bloodGroup}</td>
                <td>{d.birthDate}</td>
                <td>{d.height}</td>
                <td>{d.weight}</td>
                <td>{d.eyeColor}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableData;


