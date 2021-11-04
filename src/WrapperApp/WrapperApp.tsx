import React, { SyntheticEvent, useState } from 'react';
import { css } from '@emotion/css';
import Box from '@mui/material/Box';
import LoginPanel from './components/LoginPanel';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import ThreeEditor from '../ThreeEditor/ThreeEditor';
import UserData from '../util/user/UserData';
import SimulationPanel from './components/SimulationPanel';
import { useStore } from '../services/StoreService';
import { DEMO_MODE } from '../util/Config';
import JsRootGraph from '../JsRoot/JsRootGraph';
interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
	persistent?: boolean;
}

const tabPanelCss = css({ display: 'flex', flexGrow: 1 });

function TabPanel(props: TabPanelProps) {
	const { children, value, index, persistent, ...other } = props;

	return (
		<div
			role="tabpanel"
			className={tabPanelCss}
			style={{ display: value !== index ? 'none' : '' }}
			{...other}
		>
			{(value === index || persistent) && <Box className={tabPanelCss}>
				{children}
			</Box>}
		</div>
	);
}


function WrapperApp() {
	const { editorRef } = useStore();

	const [tabsValue, setTabsValue] = useState(0);
	const [currentUser, setCurrentUser] = useState<UserData | null>(null);

	const handleChange = (event: SyntheticEvent, newValue: number) => {
		newValue === 5 && setCurrentUser(null);
		setTabsValue(newValue);
	};

	const [resultData, setResultData] = useState<{ data?: unknown }>({});

	return (
		<Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={tabsValue} onChange={handleChange} >
					<Tab label="Editor" />
					<Tab label="Run" disabled={DEMO_MODE} />
					<Tab label="Results" disabled={DEMO_MODE} />
					<Tab label="Projects" disabled />
					<Tab label="About" />
					<Tab sx={{ marginLeft: 'auto' }} label={currentUser ? "Logout" : "Login"} />
				</Tabs>
			</Box>
			<TabPanel value={tabsValue} index={0} persistent >
				<ThreeEditor onEditorInitialized={(editor) => editorRef.current = editor} focus={tabsValue === 0} />
			</TabPanel>
			{DEMO_MODE ||
				<>
					<TabPanel value={tabsValue} index={1}>
						<SimulationPanel
							onSuccess={(data) => {
								setTabsValue(2);
								setResultData({ data });
							}}

						/>
					</TabPanel>

					<TabPanel value={tabsValue} index={2}>
						<JsRootGraph data={resultData} />
					</TabPanel>
				</>
			}
			<TabPanel value={tabsValue} index={5} >
				<LoginPanel
					handleLogin={(data) => {
						setCurrentUser({ uuid: "", login: data.email })
						setTabsValue(0);
					}}
				/>
			</TabPanel>
		</Box>
	);
}
export default WrapperApp;
