"use client"

import { JSX } from 'react';
import Logo from '@/app/components/Logo';
import PreviewSearch from '@/app/widgets/PreviewSearch';
import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
      <div className="w-full h-[100px] top-0 z-[500] flex justify-items-start fixed bg-white dark:bg-gray-700 shadow-md dark:shadow-gray-500">
        <div className="w-[80%] m-auto flex items-center text-gray-900 dark:text-white justify-around">
          <div className="flex items-center justify-between">
            <Link href="/" tabIndex={1}>
              <Logo /> 
            </Link>
            <PreviewSearch rfkId="rfkid_6" />
          </div>
        </div>
      </div>
  );
};

export default Header;