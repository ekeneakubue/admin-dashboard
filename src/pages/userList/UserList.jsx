import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function UserList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'Username', width: 200, renderCell: (params)=>{
      return(
        <div className='userListUser'>
          <img className='userListImg' src={params.row.avatar} alt="" />
          {params.row.userName}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 200 },
    {field: 'status', headerName: 'Status', width: 120}, 
    {field: 'transaction', headerName: 'Transaction Volume', width: 160}, 
    {
      field: "action", 
      headerName: "Action", 
      width: 150,
      renderCell: (params)=>{
        return(
          <>
            <button className="userListEdit">Edit</button>
            <DeleteOutlineIcon className="userListDelete" />
          </>          
        )
      }
    }    
  ];
  
  const rows = [
    { 
      id: 1, 
      userName: 'Ege Ntu', avatar: "https://ekene-portfolio.vercel.app/images/ekene.jpg",
      email: "ekene@gmail.com",
      status: "active",
      transaction: "$120.20",
    },
    { 
      id: 2, 
      userName: 'Ege Ntu', avatar: "https://ekene-portfolio.vercel.app/images/ekene.jpg",
      email: "ekene@gmail.com",
      status: "active",
      transaction: "$120.20",
    },
    { 
      id: 3, 
      userName: 'Ege Ntu', avatar: "https://ekene-portfolio.vercel.app/images/ekene.jpg",
      email: "ekene@gmail.com",
      status: "active",
      transaction: "$120.20",
    },
    { 
      id: 4, 
      userName: 'Ege Ntu', avatar: "https://ekene-portfolio.vercel.app/images/ekene.jpg",
      email: "ekene@gmail.com",
      status: "active",
      transaction: "$120.20",
    },
    { 
      id: 5, 
      userName: 'Ege Ntu', avatar: "https://ekene-portfolio.vercel.app/images/ekene.jpg",
      email: "ekene@gmail.com",
      status: "active",
      transaction: "$120.20",
    },
    
  ];

  return (
    <div className='userList'>      
      <DataGrid
        rows={rows}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
