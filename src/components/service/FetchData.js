import React, { useEffect } from 'react';
import { fetchData } from './api';

export default function FetchData() {
  useEffect(() => {
    fetchData().then((val) => val);
  }, []);
  return <div>FetchData</div>;
}
