import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Chip, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import TabHeader from './TabHeader';

const summaryCards = [
  { label: 'Pedidos', value: 12, color: 'primary' },
  { label: 'Facturación', value: '3.200€', color: 'success' },
  { label: 'Pendientes', value: 2, color: 'warning' },
  { label: 'Devoluciones', value: 1, color: 'error' },
  { label: 'Productos', value: 18, color: 'info' },
  { label: 'Clientes', value: 7, color: 'secondary' },
];

const lastOrders = [
  { id: 1, cliente: 'Empresa A', fecha: '21/12/2025', total: '120,00€', estado: 'Enviado' },
  { id: 2, cliente: 'Empresa B', fecha: '20/12/2025', total: '80,00€', estado: 'Pendiente' },
  { id: 3, cliente: 'Empresa C', fecha: '19/12/2025', total: '45,00€', estado: 'Entregado' },
  { id: 4, cliente: 'Empresa D', fecha: '18/12/2025', total: '210,00€', estado: 'Cancelado' },
  { id: 5, cliente: 'Empresa E', fecha: '17/12/2025', total: '60,00€', estado: 'Enviado' },
];

const statusColor = {
  'Enviado': 'primary',
  'Pendiente': 'warning',
  'Entregado': 'success',
  'Cancelado': 'error',
};

const ProviderPanelTab: React.FC = () => (
  <Box sx={{ p: 0 }}>
    <TabHeader title="Panel de control" actions={null} />
    <Grid container spacing={2} sx={{ mt: 0, mb: 2 }}>
      {summaryCards.map((card) => (
        <Grid item xs={6} sm={4} md={2} key={card.label}>
          <Card sx={{ minHeight: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: `${card.color}.50` }}>
            <CardContent sx={{ p: 1, textAlign: 'center' }}>
              <Typography variant="h5" fontWeight={700} color={`${card.color}.main`}>
                {card.value}
              </Typography>
              <Typography variant="caption" color="text.secondary">{card.label}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
      <Typography variant="subtitle2" fontWeight={700} color="primary.main">Últimos pedidos</Typography>
      <Button size="small" variant="outlined">Ver todos</Button>
    </Box>
    <TableContainer component={Paper} sx={{ boxShadow: 'none', borderRadius: 2 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Cliente</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lastOrders.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.cliente}</TableCell>
              <TableCell>{row.fecha}</TableCell>
              <TableCell>{row.total}</TableCell>
              <TableCell>
                <Chip label={row.estado} size="small" color={statusColor[row.estado]} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

export default ProviderPanelTab;
