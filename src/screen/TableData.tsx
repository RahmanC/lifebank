import { useEffect, useState } from 'react';
import { listUsers } from '../redux/actions/userAction';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../components/pagination';
import  LinearLoader  from '../components/loader';
import TableComponent from '../components/Table';
import Search from '../components/search';

const TableData = () => {
  const dispatch: any = useDispatch();

  // states
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');


  const { records } = useSelector((state: any) => state.userList);

  const indexLastData = currentPage * dataPerPage;
  const indexFirstData = indexLastData - dataPerPage;
  

  // change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  // Dynamic table data
  const column = [
    { heading: 'Id', value: 'id'},
    { heading: 'First Name', value: 'firstName'},
    { heading: 'Last Name', value: 'lastName'},
    { heading: 'Age', value: 'age'},
    { heading: 'Gender', value: 'gender'},
    { heading: 'Email', value: 'email'},
    { heading: 'City', value: 'address.city'},
    { heading: 'Phone Number', value: 'phone'},
    { heading: 'Blood Group', value: 'bloodGroup'},
    { heading: 'Birth Date', value: 'birthDate'},
    { heading: 'Height', value: 'height'},
    { heading: 'Weight', value: 'weight'},
    { heading: 'Eye Color', value: 'eyeColor'},
  ]

// dispatching action from redux store
  useEffect(() => {
    setLoading(true);
    dispatch(listUsers());
    setLoading(false);
  }, [dispatch]);

  // Search handler
  useEffect(() => {
    setData(
      records?.users?.filter((user: any) => {
        return Object.values(user).some((name) =>
          String(name).toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [records?.users, search]);

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  // display 10 data per page
  const currentData = data?.slice(indexFirstData, indexLastData)

  return (
    <div>
      <section>
        <Search onChange={handleChange} />
      </section>

      <section style={{ maxWidth: '95%', margin: '20px auto' }}>
        {loading && <LinearLoader />}
        <TableComponent data={currentData} column={column} />

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
