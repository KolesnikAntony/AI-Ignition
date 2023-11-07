import React, {FC, ReactNode} from 'react';
import {Box, Divider, Stack, Typography} from '@mui/material';
import FbIcon from '@/components/icons/fb';
import GoogleIcon from '@/components/icons/google';
import TwitterIcon from '@/components/icons/twitter';
import {EnumPage} from '@/enums/enums';
import {PD} from '@/constants/pages-data';
import SocialButton from '@/components/buttons/SocialButton';
import Question from '@/components/common/Question';

type Props = {
  children: ReactNode;
  page: EnumPage;
};
const FormWrapper: FC<Props> = ({children, page}) => {
  const {title, link, href, question} = PD[page];
  const {fb, twitter, google} = PD.buttons;
  return (
    <Box>
      <Typography component='h3' className='text-[34px] mb-[14px]'>
        {title}
      </Typography>
      <Question className='mb-10' text={question} href={href} link={link}/>
      <Stack gap='10px' className='mb-9'>
        <SocialButton icon={<FbIcon />} text={fb} provider={'facebook'} />
        <SocialButton icon={<GoogleIcon />} text={google} provider={'google'} />
        <SocialButton icon={<TwitterIcon />} text={twitter} provider={'twitter'}/>
      </Stack>
      <Divider className='mb-9'>{PD.common.or}</Divider>
      {children}
      <Question className='mt-2 text-[12px] text-center' text={question} href={href} link={link}/>
    </Box>
  );
};

export default FormWrapper;
