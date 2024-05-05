import React from 'react';
import { Menu, Button, Form, Input } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const isLoggedIn = localStorage.getItem('guest_session_id') !== null;
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const logout = () => {
    localStorage.removeItem('guest_session_id');
    navigate('/auth');
  };

  return (
    <Menu fixed="top" size="huge" style={{ width: '100%' }}>
      <Menu.Item as={Link} to="/" style={{ fontSize: '1.5rem' }}>
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/rated" style={{ fontSize: '1.5rem' }}>
        My List
      </Menu.Item>
      <Menu.Item as={Link} to="/perfect" style={{ fontSize: '1.5rem' }}>
        Suggestions
      </Menu.Item>
      <Menu.Item as={Link} to="/chatbot" style={{ fontSize: '1.5rem' }}>
        DexMBot
      </Menu.Item>
      <Menu.Item style={{ flexGrow: 1, display: 'flex' }}>
        <Form onSubmit={handleSearch} style={{ width: '100%' }}>
          <Input
            fluid
            size="big"
            placeholder="Search movies or TV shows..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            action={{
              type: 'submit',
              icon: 'search',
              color: 'black',
              size: 'big',
            }}
            style={{ fontSize: '1.2rem' }}
          />
        </Form>
      </Menu.Item>
      <Menu.Menu position="right">
        {isLoggedIn ? (
          <Menu.Item as={Button} onClick={logout} style={{ fontSize: '1.5rem' }}>
            Logout
          </Menu.Item>
        ) : (
          <Menu.Item as={Link} to="/auth" style={{ fontSize: '1.5rem' }}>
            Auth
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
};
