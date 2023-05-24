import React, {useState, type FC} from 'react';
import styles from './App.module.css';
import {Typography} from 'antd';
import {colums, key} from './initial-data/report-config';
import {data} from './initial-data/data';
import ProTable from '@ant-design/pro-table';
const {Title} = Typography;

export const App: FC = () => (
	<>
		<Title level={3} className={styles.title}>{data.name} {data.code}</Title>
		<ProTable
			columns={colums}
			dataSource={data.items}
			rowKey={key}
			search={false}
		/>
	</>
);

