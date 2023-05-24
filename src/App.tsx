import React, {type FC} from 'react';
import styles from './App.module.css';
import {Table, Typography} from 'antd';
import {colums, key} from './initial-data/report-config';
import {data} from './initial-data/data';
const {Title} = Typography;

export const App: FC = () => (
	<>
		<Typography>
			<Title level={3} className={styles.title}>{data.name} {data.code}</Title>
		</Typography>
		<Table columns={colums} dataSource={data.items} rowKey={key} />
	</>
);

