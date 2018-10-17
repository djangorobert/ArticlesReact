import React from 'react';
import { List, Avatar, Icon } from 'antd';
import if_male3_403019 from '../css/if_male3_403019.svg';


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Articles = (props) => {
    return (
    <List
        itemLayout="vertical"
        size="large"
        pagination={{
        onChange: (page) => {
            console.log(page);
        },
        pageSize: 3,
        }}
        dataSource={props.data}
        renderItem={item => (
        <List.Item
            key={item.title}
            actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
            extra={<img width={272} alt="logo" src={if_male3_403019} />}
        >
            <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={`/${item.id}`}>{item.title}</a>}
            
            />
            {item.content}
        </List.Item>
        )}
    />
    )
}

export default Articles;