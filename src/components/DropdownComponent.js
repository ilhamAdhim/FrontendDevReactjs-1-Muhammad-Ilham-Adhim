import React, { useEffect } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const DropdownComponent = props => {

    const handleOnChange = (item) => { props.customHandler(item.value) }

    const menu = (
        <Menu>
            {props.menu.map(item => (
                <Menu.Item key={item.id} onClick={() => handleOnChange(item)}>
                    {item.value}
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <Dropdown overlay={menu} arrow>
            <Button type="text">
                {props.name}
                <DownOutlined />
            </Button>
        </Dropdown>
    );
};


export default DropdownComponent;