// src/components/BookDetails.tsx
import React from 'react';
import { Form, Input, Rate, Button } from 'antd';

const { TextArea } = Input;

const BookDetails: React.FC = () => {
  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ width: '800px', padding: '40px', height: '100%' }}
    >
      <Form.Item
        label="Reviewer Name"
        name="reviewerName"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>

      <Form.Item label="Tags" name="tags">
        <Input placeholder="Enter tags" />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <TextArea rows={6} placeholder="Enter book description" />
      </Form.Item>

      <Form.Item label="Rating" name="rating">
        <Rate />
      </Form.Item>

      <Form.Item label="Review" name="review">
        <TextArea rows={6} cols={350}  placeholder="Write your review" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit Review
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BookDetails;

