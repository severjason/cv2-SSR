import React from 'react';
import Grid from '@material-ui/core/Grid';
import SchoolIcon from '@material-ui/icons/School';
import useTranslation from 'next-translate/useTranslation';

import { Title } from '../shared';
import Item from './Item';
import type { AppLang, EducationItem } from '../../types';
import data from '../../data';

const Education = () => {
  const { t, lang } = useTranslation();

  const educationData = data[lang as AppLang]?.education;

  return (
    <Grid container>
      <Title icon={SchoolIcon} text={`${t('common:education.title')}`} />
      {educationData?.map((exp: EducationItem, index: number) => (
        <Item
          key={index}
          company={exp.company}
          endDate={exp.endDate}
          startDate={exp.startDate}
          role={exp.role}
          addition={exp.addition}
        />
      ))}
    </Grid>
  );
};

export default Education;
