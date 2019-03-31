import { connect } from "react-redux";
import SidbarComponent from '../components/Sidebar.js';

export const Sidebar = connect(state => ({
    users: state.users
}), {})(SidbarComponent);