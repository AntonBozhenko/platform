import React, {useState, type FC} from 'react';
import styles from './App.module.css';
import {Modal, Typography} from 'antd';
import {colums, key} from './initial-data/report-config';
import {data, type Item} from './initial-data/data';
import ProTable from '@ant-design/pro-table';
import {closeModal, getDataForModal, showModal} from './App.functions';
const {Title} = Typography;

export const App: FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalData, setModalData] = useState<Item>();

	return (
		<>
			<Title level={3} className={styles.title}>{data.name} {data.code}</Title>
			<ProTable
				columns={colums}
				dataSource={data.items}
				rowKey={key}
				search={false}
				onRow={record => ({
					onDoubleClick() {
						showModal(setIsModalOpen, setModalData, record);
					},
				})}
			/>
			<Modal
				open={isModalOpen}
				title={modalData?.product}
				onOk={() => {
					closeModal(setIsModalOpen, setModalData);
				}}
				onCancel={() => {
					closeModal(setIsModalOpen, setModalData);
				}}
			>
				{modalData && getDataForModal(modalData).map(({key, value}) => (
					<p key={key}>{key} : {value}</p>
				))}
			</Modal>
		</>
	);
};

