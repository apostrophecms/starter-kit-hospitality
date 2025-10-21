// This is a custom layout column widget, 
// to redefine the available widgets within a layout columns.

import areaConfig from '../../../lib/area.js';

export default {
  fields: {
    add: {
      content: {
        type: 'area',
        options: {
          expanded: true,
          groups: {
            ...areaConfig.columnExpandedGroup
          }
        }
      }
    }
  }
};
