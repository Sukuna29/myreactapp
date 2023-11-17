import React, { useState } from 'react';
// import '../../public/Images/images.jpg'
const Header = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <div>
      <ul className="tabs">
        <li className={selectedTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>
          Tab 1
        </li>
        <li className={selectedTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>
          Tab 2
        </li>
        <li className={selectedTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>
          Tab 3
        </li>
      </ul>
      <div className="tab-content">
        {selectedTab === 0 && <TabContent1 />}
        {selectedTab === 1 && <TabContent2 />}
        {selectedTab === 2 && <TabContent3 />}
      </div>
    </div>
  );
};

const TabContent1 = () => (
  <div>
    <h2>Tab 1 Content</h2>
    <img src='../../Images/images.jpg'/>
    <p>This is the content of Tab 1.</p>
  </div>
);

const TabContent2 = () => (
  <div>
    <h2>Tab 2 Content</h2>
    <p>This is the content of Tab 2.</p>
  </div>
);

const TabContent3 = () => (
  <div>
    <h2>Tab 3 Content</h2>
    <p>This is the content of Tab 3.</p>
  </div>
);

export default Header;







