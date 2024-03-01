import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar"
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}
const columns: Column<DataType>[]=[
  {
    Header: 'User',
    accessor: 'user'
  },
  {
    Header: 'Amount',
    accessor: 'amount'
  },
  {
    Header: 'Discount',
    accessor: 'discount'
  },
  {
    Header: 'Quantity',
    accessor: 'quantity'
  },
  {
    Header: 'Status',
    accessor: 'status'
  },
  {
    Header: 'Action',
    accessor: 'action'
  },
]

const arr: DataType[] = [
  {
    user: 'Nikhil',
    amount: 42000,
    discount: 500,
    quantity: 11,
    status: <span className="red">Processing</span>,
    action: <Link to='/admin/transaction/sajknaskd'>Manage</Link>
  },
  {
    user: 'Gautam',
    amount: 101254,
    discount: 217,
    quantity: 59,
    status: <span className="green">Shipped</span>,
    action: <Link to='/admin/transaction/sajknaskd'>Manage</Link>
  },
  {
    user: 'Niku',
    amount: 696954,
    discount: 892,
    quantity: 8,
    status: <span className="purple">Delivered</span>,
    action: <Link to='/admin/transaction/sajknaskd'>Manage</Link>
  }
];

const Transaction = () => {
  const [data] = useState<DataType[]>(arr);

  const TransactionsTable = useCallback(
    TableHOC<DataType> (
      columns, 
      data, 
      'dashboard-transaction-box', 
      'Transactions', 
      true), []
  )
  
  return (
    <div className="admin-container">
      {/* sidebar */}
      <AdminSidebar/>
      {/* main */}
      <main>{TransactionsTable()}</main>
    </div>
  )
}

export default Transaction
