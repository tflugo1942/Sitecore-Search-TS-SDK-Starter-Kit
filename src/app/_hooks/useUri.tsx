import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import { BASE_PATH } from '@/app/_data/constants';

const useUri = () => {
  const router = useRouter();
  const search = useSearchParams();
  const pathName = usePathname();

  console.log("ROUTER: " + router);
  console.log("search: " + search);
  console.log("pathname: " + pathName);

  return `${BASE_PATH}${pathName}${search}`;
};

export default useUri;
