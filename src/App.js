 
 

import React , {useState,useMemo}from 'react';

import DataTable from 'react-data-table-component';



const columns = [
  {
      name: 'Title',
      selector: row => row.title,
  },
  {
      name: 'Year',
      selector: row => row.year,
  },
];

const data = [
  {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
  },
  {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
  },
]




export default () => {
	const [filterText, setfilterText] = useState('');
	
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	
 

  const [filteredItems , setfilteredItems] = useState(data)

  
 
   


 
    const test2 = (e)=>{
      let restdata = [];
      setfilterText(e.target.value);
      console.log(filterText)
        restdata = data.filter(item => {
          if(item.title && item.title.toLowerCase().includes(e.target.value.toLowerCase())){
            return item
          }

          if(item.year && item.year.toLowerCase().includes(e.target.value.toLowerCase())){
            return item
          }
        }) 
        return setfilteredItems(restdata)
    }

	  const handleClear = () => {
      setfilteredItems(data);
      setResetPaginationToggle(!resetPaginationToggle);
      return setfilterText('');
    };
  
 
 
 


	return (
    <>
    <input  type="search" onInput={e=>test2(e)}  name="search"    value={filterText}    />
    <button  onClick={handleClear} >Clear</button>


		<DataTable title="Contact List" columns={columns} data={filteredItems} 
			paginationResetDefaultPage={resetPaginationToggle}  
      pagination
			subHeader
      persistTableHead
      // subHeaderComponent={subHeader  ComponentMemo}
			// selectableRows 
    
		/>

</>

	);
}