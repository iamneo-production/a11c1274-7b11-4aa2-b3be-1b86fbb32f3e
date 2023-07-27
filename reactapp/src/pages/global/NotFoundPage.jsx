import React from 'react';

import { useNavigate } from 'react-router-dom';



import styled from 'styled-components';

const NotFoundPage = () => {

const navigate = useNavigate();



  return (
    <Wrapper>
      <Heading>404 - Page Not Found</Heading>
      <Text>Oops! The page you are looking for does not exist.</Text>
      <Button onClick={() => navigate('/user/dashboard')}>Go Back</Button>
      <br></br>
      <Button onClick={() => navigate('/login')}>Login</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #f00;
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #f00;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c00;
  }
`;

export default NotFoundPage;
