import React, {FC, ReactNode} from 'react';
import mongoose from 'mongoose';


type Props = {
  children: ReactNode;
};
const DbProvider: FC<Props> = async ({children}) => {

  return <>{children}</>;
};

export default DbProvider;
