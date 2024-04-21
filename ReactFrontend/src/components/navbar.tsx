import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';

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
    <Menu fixed="top" size="huge">
      <Menu.Item as={Link} to="/" style={{ fontSize: '1.5rem' }}>
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/rated" style={{ fontSize: '1.5rem' }}>
        Rated
      </Menu.Item>
      <Menu.Item style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <Form onSubmit={handleSearch} style={{ width: '100%', maxWidth: '600px' }}>
          <Input
            fluid
            size="big"
            placeholder="Search movies or TV shows..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            action={{
              type: 'submit',
              icon: 'search',
              color: 'violet',
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