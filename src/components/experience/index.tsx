import Grid from '@material-ui/core/Grid';
import WorkIcon from '@material-ui/icons/Work';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import data from '../../data';
import { Title } from '../shared';
import { AppLang, ExperienceItem } from '../../types';
import Item from './Item';

const Experience = () => {
  const { t, lang } = useTranslation();

  const expData = data[lang as AppLang]?.experience;

  return (
    <Grid container>
      <Title icon={WorkIcon} text={`${t('common:experience.title')}`} />
      {expData?.map((exp: ExperienceItem, index: number) => (
        <Item
          key={index}
          company={exp.company}
          endDate={exp.endDate}
          startDate={exp.startDate}
          role={exp.role}
          list={exp.list}
          link={exp.link}
          location={exp.location}
        />
      ))}
    </Grid>
  );
};

export default Experience;
