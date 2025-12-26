import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

interface TabHeaderProps {
  title: string;
  actions?: React.ReactNode;
}

const TabHeader: React.FC<TabHeaderProps> = ({ title, actions }) => (
  <Box
    sx={{
      position: 'sticky',
      top: 0,
      zIndex: 10,
      bgcolor: 'background.paper',
      borderBottom: '1px solid #e0e4ea',
      px: 2,
      py: 1.5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 48,
    }}
  >
    <Typography variant="h6" fontWeight={700} fontSize={15} color="primary.main">
      {title}
    </Typography>
    <Stack direction="row" spacing={1} alignItems="center">
      {actions}
    </Stack>
  </Box>
);

export default TabHeader;
