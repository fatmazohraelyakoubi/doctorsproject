import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { HiStar } from "react-icons/hi";
export default function Testimentails() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} className='flex items-center justify-center mt-[60px]'>
      {/* <Typography>Page: {page}</Typography> */}
      <div className='py-[30px] px-5 rounded-3  '>
        <div className='flex items-center gap-[13px]'>
        {/* patien avatar fi img */}
          <img/>
          <div>
           <h4 className='text-[18px] leading-[30px] font-semibold text-black '>Abd Rahman</h4>
           <div className='flex items-center gap-[2px] '/>
            <HiStar className='text-yellow-500 w-[18px] h-5 '/>
          </div>
         
        </div>
        <p className='text-[16px] leading-7  mt-4 text-gray-500 font-[400] '>
        lorem iposem fzti kizol pyytyzhguy uusgt.
      </p>
      </div>
      
      <Pagination count={3} page={page} onChange={handleChange} />
    </Stack>
  );
}
