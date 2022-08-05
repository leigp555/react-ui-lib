import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Sider from '../lib/Layout/Sider';
import { ColumnMenu, ColumnSub, ItemGroup, Label, MenuItem } from '../lib';

const NavLinkP = styled(NavLink)`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  transition: all 250ms;
  font-size: 14px;
  color: #000000d9;
  &.active {
    color: #1890ff;
    border-right: 3px solid #1890ff;
  }
  &:hover {
    color: #1890ff;
  }
`;

const ComponentAside: React.FC = () => {
  const [order, setOrder] = useState<number>(1);
  return (
    <Sider style={{ width: '210px' }}>
      <div
        style={{
          height: '100%',
          color: '#000000d9'
        }}
      >
        <ColumnMenu
          defaultOrder={order}
          setOrder={setOrder}
          style={{
            width: '100%',
            height: '100%'
          }}
        >
          <ColumnSub>
            <ItemGroup>
              <Label>通用</Label>
              <MenuItem order={45}>
                <NavLinkP to="/">Typography 排版</NavLinkP>
              </MenuItem>
              <MenuItem order={47}>
                <NavLinkP to="button">Button 按钮</NavLinkP>
              </MenuItem>
              <MenuItem order={25}>
                <NavLinkP to="palette">Palette 色彩搭配</NavLinkP>
              </MenuItem>
              <Label>布局</Label>
              <MenuItem order={34}>
                <NavLinkP to="space">Space 间距</NavLinkP>
              </MenuItem>
              <MenuItem order={19}>
                <NavLinkP to="layout">Layout 布局</NavLinkP>
              </MenuItem>
              <MenuItem order={16}>
                <NavLinkP to="grid">Grid 栅格布局</NavLinkP>
              </MenuItem>
              <MenuItem order={11}>
                <NavLinkP to="divider">Divider 分割线</NavLinkP>
              </MenuItem>
              <Label>导航</Label>
              <MenuItem order={35}>
                <NavLinkP to="steps">Steps 步骤条</NavLinkP>
              </MenuItem>
              <MenuItem order={44}>
                <NavLinkP to="pagination">Pagination 分页</NavLinkP>
              </MenuItem>
              <MenuItem order={22}>
                <NavLinkP to="menu">Menu 菜单</NavLinkP>
              </MenuItem>
              <MenuItem order={13}>
                <NavLinkP to="dropdown">Dropdown 下拉菜单</NavLinkP>
              </MenuItem>
              <MenuItem order={5}>
                <NavLinkP to="breadcrumb">Breadcrumb 面包屑</NavLinkP>
              </MenuItem>
              <MenuItem order={49}>
                <NavLinkP to="affix">Affix 固钉</NavLinkP>
              </MenuItem>
              <Label>数据录入</Label>
              <MenuItem order={33}>
                <NavLinkP to="slider">Slider 滑动输入条</NavLinkP>
              </MenuItem>
              <MenuItem order={36}>
                <NavLinkP to="switch">Switch 开关</NavLinkP>
              </MenuItem>
              <MenuItem order={15}>
                <NavLinkP to="form">Form 表单</NavLinkP>
              </MenuItem>
              <MenuItem order={18}>
                <NavLinkP to="input">Input 输入框</NavLinkP>
              </MenuItem>
              <MenuItem order={29}>
                <NavLinkP to="radio">Radio 单选</NavLinkP>
              </MenuItem>
              <MenuItem order={50}>
                <NavLinkP to="checkBox">CheckBox 多选框</NavLinkP>
              </MenuItem>
              <MenuItem order={1}>
                <NavLinkP to="autoComplete">AutoComplete 自动完成</NavLinkP>
              </MenuItem>
              <MenuItem order={46}>
                <NavLinkP to="upload">Upload 上传</NavLinkP>
              </MenuItem>
              <Label>数据展示</Label>
              <MenuItem order={27}>
                <NavLinkP to="popover">Popover 气泡卡片</NavLinkP>
              </MenuItem>
              <MenuItem order={31}>
                <NavLinkP to="segmented">Segmented 分段控制</NavLinkP>
              </MenuItem>
              <MenuItem order={37}>
                <NavLinkP to="table">Table 表格</NavLinkP>
              </MenuItem>
              <MenuItem order={38}>
                <NavLinkP to="tabs">Tabs 标签页</NavLinkP>
              </MenuItem>
              <MenuItem order={39}>
                <NavLinkP to="tag">Tag 标签</NavLinkP>
              </MenuItem>
              <MenuItem order={40}>
                <NavLinkP to="timeline">Timeline 时间轴</NavLinkP>
              </MenuItem>
              <MenuItem order={42}>
                <NavLinkP to="tooltip">Tooltip 文字提示</NavLinkP>
              </MenuItem>
              <MenuItem order={43}>
                <NavLinkP to="tree">Tree 树</NavLinkP>
              </MenuItem>
              <MenuItem order={10}>
                <NavLinkP to="comment">Comment 评论</NavLinkP>
              </MenuItem>
              <MenuItem order={14}>
                <NavLinkP to="empty">Empty 空</NavLinkP>
              </MenuItem>
              <MenuItem order={17}>
                <NavLinkP to="image">Image 图片</NavLinkP>
              </MenuItem>
              <MenuItem order={20}>
                <NavLinkP to="list">List 列表</NavLinkP>
              </MenuItem>
              <MenuItem order={6}>
                <NavLinkP to="calendar">Calendar 日历</NavLinkP>
              </MenuItem>
              <MenuItem order={7}>
                <NavLinkP to="card">Card 卡片</NavLinkP>
              </MenuItem>
              <MenuItem order={8}>
                <NavLinkP to="carousel">Carousel 走马灯</NavLinkP>
              </MenuItem>
              <MenuItem order={9}>
                <NavLinkP to="collapse">Collapse 折叠面板</NavLinkP>
              </MenuItem>
              <MenuItem order={4}>
                <NavLinkP to="badge">Badge 徽标数</NavLinkP>
              </MenuItem>
              <MenuItem order={2}>
                <NavLinkP to="avatar">Avatar 头像</NavLinkP>
              </MenuItem>
              <Label>反馈</Label>
              <MenuItem order={12}>
                <NavLinkP to="drawer">Drawer 抽屉</NavLinkP>
              </MenuItem>
              <MenuItem order={21}>
                <NavLinkP to="loading">Loading 加载中</NavLinkP>
              </MenuItem>
              <MenuItem order={23}>
                <NavLinkP to="modal">Modal 对话框</NavLinkP>
              </MenuItem>
              <MenuItem order={24}>
                <NavLinkP to="notification">Notification 通知提醒</NavLinkP>
              </MenuItem>
              <MenuItem order={26}>
                <NavLinkP to="popConfirm">PopConfirm 气泡确认</NavLinkP>
              </MenuItem>
              <MenuItem order={28}>
                <NavLinkP to="progress">Progress 进度条</NavLinkP>
              </MenuItem>
              <MenuItem order={30}>
                <NavLinkP to="result">Result 结果</NavLinkP>
              </MenuItem>
              <MenuItem order={32}>
                <NavLinkP to="skeleton">Skeleton 骨架</NavLinkP>
              </MenuItem>
              <MenuItem order={41}>
                <NavLinkP to="tip">Tip 全局提示</NavLinkP>
              </MenuItem>
              <MenuItem order={48}>
                <NavLinkP to="alert">Alert 警告提示</NavLinkP>
              </MenuItem>
              <Label>其他</Label>
              <MenuItem order={3}>
                <NavLinkP to="backTop">BackTop 返回顶部</NavLinkP>
              </MenuItem>
            </ItemGroup>
          </ColumnSub>
        </ColumnMenu>
      </div>
    </Sider>
  );
};

export default ComponentAside;
