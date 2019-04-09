import { connect } from "react-redux";
import SidebarComponent from '../components/Sidebar.js';

export const Sidebar = connect(state => ({
    users: state.users
}), {})(SidebarComponent);