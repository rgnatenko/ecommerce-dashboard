import { Checkbox } from '@mui/material';
import React from 'react';
import Section from '../../types/Section';

type Props = {
  checkboxNeeded?: boolean,
  sections: Section[],
  tableClassToAdd?: string
}

const TableTop: React.FC<Props> = ({ checkboxNeeded, sections, tableClassToAdd }) => {
  return (
    <div className={`table-top ${tableClassToAdd}`}>
      {checkboxNeeded && (
        <div className="table-top__checkbox">
          <Checkbox
            sx={{
              color: '#CBD0DD',
              '&.Mui-checked': {
                color: '#2AABEE',
              },
            }}
          />
        </div>
      )}

      {sections.map(section => (
        <div
          key={section.title}
          className={`table-top__item table-top__item--${section.className}`}
        >
          {section.title}
        </div>
      ))}
    </div>
  );
};

export default TableTop;
