import { useEffect, useState } from 'react';
import { Record } from '../common/types';
import { Table } from 'react-bootstrap';
import { listUsers } from '../redux/actions/userAction';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../components/pagination';
import { LinearLoader } from '../components/loader/LinearLoader';
import { BsSearch } from 'react-icons/bs';
import Styles from './Table.module.css';

const TableData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const dispatch: any = useDispatch();

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const { records } = useSelector((state: any) => state.userList);

  const indexLastData = currentPage * dataPerPage;
  const indexFirstData = indexLastData - dataPerPage;

  // change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  useEffect(() => {
    setLoading(true);
    dispatch(listUsers());
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    setData(
      records?.users?.filter((us: any) => {
        return Object.values(us).some((name) =>
          String(name).toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [records?.users, search]);

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <section>
        <form
          style={{ maxWidth: '95%', margin: ' 20px auto' }}
          className={`form-group pb-3 ${Styles.hasSearch}`}
        >
          <BsSearch className={`${Styles.formControlSearchIcon}`} />
          <input
            type="text"
            className={`form-control form-control-sm shadow-none ${Styles.SearchBox}`}
            placeholder="Search"
            aria-label="Search"
            onChange={handleChange}
          />
        </form>
      </section>

      <section style={{ maxWidth: '95%', margin: '20px auto' }}>
        {loading && <LinearLoader />}
        <Table striped bordered hover responsive variant="dark">
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
            {data?.slice(indexFirstData, indexLastData)?.map((d: Record) => (
              <>
                <tr key={d.id} className="table-secondary">
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

        <Pagination
          dataPerPage={dataPerPage}
          totalData={data?.length}
          paginate={paginate}
        />
      </section>
    </div>
  );
};

export default TableData;
