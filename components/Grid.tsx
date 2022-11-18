import * as React from 'react';
import { GridColumnProps, GridDataSourceProps } from './Grid.interfaces';
import './Grid.css';

const Grid = (props: { children: any }) => {
  const { children } = props;

  const childComponent = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      dataSource: children[0].props.dataSource,
    })
  );
  delete childComponent[0];
  return <div className="container">{childComponent}</div>;
};
const Column: React.FC<GridColumnProps> = (props) => {
  return (
    <div className="column">
      <div className="title" style={{ width: `${props?.width}px` }}>
        {props.dataPath}
      </div>
      <div>
        {props?.dataSource?.map((item: GridDataSourceProps) => (
          <div className="list" style={{ width: `${props?.width}px` }}>
            {props.render
              ? props.render(item[props.dataPath])
              : item[props.dataPath]}
          </div>
        ))}
      </div>
    </div>
  );
};

const Settings: React.FC<{ dataSource: GridDataSourceProps[] }> = () => {
  return <div></div>;
};

Grid.Settings = Settings;
Grid.Column = Column;

export default Grid;
