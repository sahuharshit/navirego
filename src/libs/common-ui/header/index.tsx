import { Space } from "antd";
const Header = () => {
  return (
    <div className="header-container">
      <Space direction="horizontal" size={20} className="menu-container">
        <span className="header-title">Features</span>
        <span className="header-title">Solutions</span>
        <span className="header-title">Resources</span>
        <span className="header-title">Pricing</span>
      </Space>
      <Space direction="horizontal" size={30} className="menu-container">
        <span className="header-title">Sign in </span>
        <span className="header-title">Sign up</span>
      </Space>
    </div>
  );
};
export default Header;
