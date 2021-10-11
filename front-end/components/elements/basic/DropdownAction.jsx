import React from 'react';
import { Dropdown, Menu } from 'antd';

const DropdownAction = ({ onPrint }) => {
    const menuView = (
        <Menu>
            <Menu.Item key={0}>
                <a className="dropdown-item" href="#">
                    <i className="icon-pencil mr-2"></i>
                    Edit
                </a>
            </Menu.Item>
            <Menu.Item key={1}>
                <a className="dropdown-item" href="#">
                    <i className="icon-trash2 mr-2"></i>
                    Delete
                </a>
            </Menu.Item>
            <Menu.Item key={2}>
                <a className="dropdown-item" onClick={onPrint}>
                    <i className="icon-printer mr-2"></i>
                    Print
                </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <Dropdown overlay={menuView} className="ps-dropdown">
            <a
                onClick={(e) => e.preventDefault()}
                className="ps-dropdown__toggle">
                <i className="icon-ellipsis"></i>
            </a>
        </Dropdown>
    );
};

export default DropdownAction;
