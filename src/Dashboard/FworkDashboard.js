import React, { useState } from 'react';
import Dashboard from './Dashboard';
import ListDashboard from './ListDashboard';
import CreateDashboard from './CreateDashboard';

function FworkDashboard(props) {
  const [dashboardLayout, setDashboardLayout] = useState('dashboard');
  const [dashboardCreate, setDashboardCreate] = useState({});
  return (
    <>
      {dashboardLayout === 'dashboard' && <Dashboard service={props.service} listGadgets={props.listGadgets} setDashboardLayout={setDashboardLayout} setDashboardCreate={setDashboardCreate} />}
      {dashboardLayout === 'list-dashboard' && <ListDashboard service={props.service} setDashboardLayout={setDashboardLayout} />}
      {dashboardLayout === 'create-dashboard' && <CreateDashboard service={props.service} setDashboardLayout={setDashboardLayout} dashboardCreate={dashboardCreate} setDashboardCreate={setDashboardCreate} />}
    </>
  )
}


export default FworkDashboard;

