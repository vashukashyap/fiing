import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function CreateAccount() {
  return (
    <>
      <div className="p-8 text-black ">
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            home
          </Breadcrumbs>
          <Breadcrumbs separator="-" aria-label="breadcrumb">
            dashboard
          </Breadcrumbs>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            createacount
          </Breadcrumbs>
        </Stack>
        lkml
      </div>
    </>
  );
}
