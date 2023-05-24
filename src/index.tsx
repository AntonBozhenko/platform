import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import {App} from './App';
import {ConfigProvider} from 'antd';
import ruRu from 'antd/locale/ru_RU';

const root = ReactDOM.createRoot(
	document.getElementById('root')!,
);
root.render(
	<ConfigProvider locale={ruRu}>
		<App />
	</ConfigProvider>,
);
