import React, {FC, ReactNode} from 'react';
import connectDB from '@/configs/db_conntecor';

type Props = {
  children: ReactNode;
};
const DbProvider: FC<Props> = async ({children}) => {
  await connectDB();
  return <>{children}</>;
};

export default DbProvider;
