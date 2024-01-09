
// src/App.tsx
import React from 'react';
import { Layout } from 'antd';
import BookSelector from './components/BookSelector';
import BookDetails from './components/BookDetails';

const { Sider, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Sider theme="light" width={300}>
        <BookSelector />
      </Sider>
      <Layout>
        <Content>
          <BookDetails />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;





