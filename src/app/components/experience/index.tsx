import Grid from '@material-ui/core/Grid';
import WorkIcon from '@material-ui/icons/Work';
import React from 'react';

import { useTranslation } from '../../i18n';
import data from '../../data/data';
import { useLang } from '../../hooks';
import { Title } from '../shared';
import { ExperienceItem } from '../../ts-types';
import Item from './Item';

const Experience = () => {

  const {t} = useTranslation();

  const {currentLang} = useLang();

  const expData = data[currentLang] && data[currentLang].experience;

  return (
    <Grid container>
      <Title icon={WorkIcon} text={`${t('experience.title')}`}/>
      {expData && expData.map((exp: ExperienceItem, index: number) => (
        <Item
          key={index}
          company={exp.company}
          endDate={exp.endDate}
          startDate={exp.startDate}
          role={exp.role}
          list={exp.list}
          link={exp.link}
        />
      ))}
    </Grid>
  );
};

export default Experience;
