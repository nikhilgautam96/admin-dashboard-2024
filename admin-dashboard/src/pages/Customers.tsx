import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar"
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}
const columns: Column<DataType>[]=[
  {
    Header: 'Avatar',
    accessor: 'avatar'
  },
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Email',
    accessor: 'email'
  },
  {
    Header: 'Gender',
    accessor: 'gender'
  },
  {
    Header: 'Role',
    accessor: 'role'
  },
  {
    Header: 'Action',
    accessor: 'action'
  },
]

const img1 = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

const arr:DataType[] = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img1}
        alt="Shoes"
      />
    ),
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img2}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];


const Customers = () => {

  const [data] = useState<DataType[]>(arr);

  const CustomersTable = useCallback(
    TableHOC<DataType> (
      columns, 
      data, 
      'dashboard-customer-box', 
      'Products', 
      true), []
  )
  
  return (
    <div className="admin-container">
      {/* sidebar */}
      <AdminSidebar/>
      {/* main */}
      <main>{CustomersTable()}</main>
    </div>
  )
}

export default Customers