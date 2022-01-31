import React from 'react';

import { ComicsView } from './style.ts';

export default function ComicsLayout({children}) {
  return (
      <ComicsView>
        {children}
      </ComicsView>
  );
}
