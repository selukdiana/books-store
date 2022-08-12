import React from 'react';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.itbook.store/1.0/new',
  headers: { 'Content-Type: ': 'application/json' },
});
