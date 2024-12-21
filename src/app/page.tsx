'use client';

import { BarGraph } from '@/components/Chart/bar';
import { LineGraph } from '@/components/Chart/line';
import { View } from '@/components/Chart/view';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { useEffect } from 'react';

// import styles from './page.module.scss';

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const dimensions = 'pagePath';
      const metrics = 'screenPageViews';

      // API の呼び出しにクエリパラメータを追加
      const res = await fetch(`/api/ga?dimensions=${dimensions}&metrics=${metrics}`);
      const data = await res.json();
      console.log(data);

      if (!Array.isArray(data)) {
        console.error('Data is not an array:', data);
        return;
      }
      console.log(data);
    };

    fetchData();
  }, []);

  const invoices = [
    {
      invoice: 'INV001',
      paymentStatus: 'Paid',
      totalAmount: '$250.00',
      paymentMethod: 'Credit Card',
    },
    {
      invoice: 'INV002',
      paymentStatus: 'Pending',
      totalAmount: '$150.00',
      paymentMethod: 'PayPal',
    },
    {
      invoice: 'INV003',
      paymentStatus: 'Unpaid',
      totalAmount: '$350.00',
      paymentMethod: 'Bank Transfer',
    },
    {
      invoice: 'INV004',
      paymentStatus: 'Paid',
      totalAmount: '$450.00',
      paymentMethod: 'Credit Card',
    },
    {
      invoice: 'INV005',
      paymentStatus: 'Paid',
      totalAmount: '$550.00',
      paymentMethod: 'PayPal',
    },
    {
      invoice: 'INV006',
      paymentStatus: 'Pending',
      totalAmount: '$200.00',
      paymentMethod: 'Bank Transfer',
    },
    {
      invoice: 'INV007',
      paymentStatus: 'Unpaid',
      totalAmount: '$300.00',
      paymentMethod: 'Credit Card',
    },
  ];

  return (
    <div className='flex flex-1 flex-col gap-4 pt-0'>
      <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
        <div className='rounded-xl bg-muted/50'>
          <View />
        </div>
        <div className='rounded-xl bg-muted/50'>
          <BarGraph />
        </div>
        <div className='rounded-xl bg-muted/50'>
          <LineGraph />
        </div>
      </div>
      <div className='min-h-[100vh] flex-1 rounded-xl border p-4 md:min-h-0'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className='text-right'>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className='font-medium'>{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className='text-right'>{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
