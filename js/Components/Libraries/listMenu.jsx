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
              primaryText="Klient indywidualny"
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem primaryText="Kredyt indywidualny"
                    rightIcon={<i className="fa fa-user-circle" aria-hidden="true"></i>}
                />,
                <MenuItem primaryText="Kredyt hipoteczny"
                    rightIcon={<i className="fa fa-home" aria-hidden="true"></i>}
                />,
                <MenuItem primaryText="Ubezpieczenia kredytu"
                    rightIcon={<i className="fa fa-diamond" aria-hidden="true"></i>}
                />,
              ]}
            />,
            <MenuItem primaryText="Klient biznesowy"
                rightIcon={<ArrowDropRight />}
                menuItems={[
                  <MenuItem primaryText="Kredyt inwestycyjny"
                      rightIcon={<i className="fa fa-line-chart" aria-hidden="true"></i>}
                  />,
                  <MenuItem primaryText="Ubezpieczenia kredytu"
                      rightIcon={<i className="fa fa-diamond" aria-hidden="true"></i>}
                  />,
                ]}
            />,
            <MenuItem primaryText="Oferta dla rolników"
                rightIcon={<ArrowDropRight />}
                menuItems={[
                  <MenuItem primaryText="Kredyt hipoteczny"
                      rightIcon={<i className="fa fa-home" aria-hidden="true"></i>}
                   />,
                  <MenuItem primaryText="Kredyt inwestycyjny"
                      rightIcon={<i className="fa fa-line-chart" aria-hidden="true"></i>}
                   />,
                  <MenuItem primaryText="Kredyt konsolidacyjny"
                      rightIcon={<i className="fa fa-balance-scale" aria-hidden="true"></i>}
                   />,
                  <MenuItem primaryText="Ubezpieczenia kredytu"
                      rightIcon={<i className="fa fa-diamond" aria-hidden="true"></i>}
                  />,
                ]}
            />,
          ]}
        />
      </Menu>
    </Paper>
  </div>
);

export default MenuExampleNested;
