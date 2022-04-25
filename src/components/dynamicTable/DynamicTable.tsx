import { FC } from 'react';
import { Table } from 'react-bootstrap';

interface IMyProps {
  data: any;
  column: any;
}

const DynamicTable: FC<IMyProps> = ({ data, column }) => {
  return (
    <div>
      <Table striped bordered hover responsive variant="dark" >
        <thead>
          <tr>
            {column.map((item: any, index: number) => (
              <TableHeadItem item={item} />
            ))}
          </tr>
        </thead>

        <tbody>
          {data?.map((item: any, index: any) => (
            <TableRow item={item} column={column} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const TableHeadItem = ({ item }: any) => <th>{item.heading}</th>;
const TableRow = ({ item, column }: any) => (
  <tr>
    {column.map((columnItem: any, index: number) => {
      // accessing nested object 
      if (columnItem.value.includes('.')) {
        const itemSplit = columnItem.value.split('.');
        return <td>{item[itemSplit[0]][itemSplit[1]]}</td>;
      }
      return <td>{item[`${columnItem.value}`]}</td>;
    })}
  </tr>
);

export default DynamicTable;
