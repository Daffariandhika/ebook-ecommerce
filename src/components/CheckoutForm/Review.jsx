import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const formatNumber = (price) => {
  const newPrice = price * 1000;
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(newPrice);
};

const Review = ({ checkoutToken }) => (
  <>
    <Typography variant="h6" gutterBottom>Order summary</Typography>
    <List disablePadding>
      {checkoutToken.live.line_items.map((product) => (
        <ListItem style={{ padding: '10px 0' }} key={product.name}>
          <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
          <Typography variant="body2">{formatNumber(product.line_total.raw)}</Typography>
        </ListItem>
      ))}
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {formatNumber(checkoutToken.live.subtotal.raw)}
        </Typography>
      </ListItem>
    </List>
  </>
);

export default Review;