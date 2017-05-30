import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const MenuExampleNested = () => (
  <div>
    <Paper style={style}>
      <Menu desktop={true} width={320}>
        <MenuItem
          primaryText="Oferta"
          rightIcon={<ArrowDropRight />}
          menuItems={[
            <MenuItem
              primaryText="Show"
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem primaryText="Show Level 2" />,
                <MenuItem primaryText="Grid lines" />,
                <MenuItem primaryText="Page breaks" />,
                <MenuItem primaryText="Rules" />,
              ]}
            />,
            <MenuItem primaryText="Grid lines" />,
            <MenuItem primaryText="Page breaks" />,
            <MenuItem primaryText="Rules" />,
          ]}
        />
        <Divider />
      </Menu>
    </Paper>
  </div>
);

export default MenuExampleNested;
