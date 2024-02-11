import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CustTable from "@/components/Table/Table";
const CompanyData = () => {
  const breadcrumbs = [
    <Link underline='hover' key='1' color='inherit' href='/'>
      MUI
    </Link>,
    <Link
      underline='hover'
      key='2'
      color='inherit'
      href='/material-ui/getting-started/installation/'
    >
      Core
    </Link>,
    <Typography key='3' color='text.primary'>
      Breadcrumb
    </Typography>,
  ];
  return (
    <div className='p-8 flex flex-col gap-10'>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' />}
        aria-label='breadcrumb'
      >
        {breadcrumbs}
      </Breadcrumbs>
      <CustTable />
      <button className='w-full bg-blue-600 h-10'>Upload Invoice </button>
    </div>
  );
};

export default CompanyData;
