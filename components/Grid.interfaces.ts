export interface ISettings {
  dataSource: [];
}

export interface IColumn {
  dataPath: any;
  width?: number;
  render?: Function;
}

export type Grid = {
  children?: React.ReactNode;
  [key: string]: any;
};

export interface GridColumnProps {
  dataPath: string;
  width?: number;
  dataSource?: GridDataSourceProps[];
  render?: Function;
}

export interface GridDataSourceProps {
  [key: string]: string | Date | number;
}
