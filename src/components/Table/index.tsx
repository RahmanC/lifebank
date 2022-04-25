import { FC } from 'react';
import { Table } from 'react-bootstrap';
import Styles from './Table.module.css';

interface TableProps {
  data: any;
  column: any;
}

const TableComponent: FC<TableProps> = ({ data, column }) => {

  const TableHeadItem = ({ item}: any) => <th>{item.heading}</th>;

  const TableRow = ({ item, column, index }: any) => (
    <tr key={index} className={Styles.column}>
      {column.map((columnItem: any, index: number) => {
        // accessing nested object
        if (columnItem.value.includes('.')) {
          const itemSplit = columnItem.value.split('.');
          return <td key={index}>{item[itemSplit[0]][itemSplit[1]]}</td>;
        }

        return <td key={index}>{item[`${columnItem.value}`]}</td>;
      })}
    </tr>
  );

  return (
    <div>
      <Table striped bordered hover responsive variant="dark">
        <thead>
          <tr className={Styles.column}>
            {column.map((item: string, index: number) => (
              <TableHeadItem item={item} key={index} />
            ))}
          </tr>
        </thead>

        <tbody>
          {data?.map((item: string, index: number) => (
            <TableRow item={item} column={column} key={index} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableComponent;
