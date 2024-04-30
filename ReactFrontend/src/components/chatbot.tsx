import React, { useState, useEffect, useCallback } from 'react';
import { Input, Button, Segment, Comment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

type Message = {
    text: string;
    sender: string;
};

const ChatBot: React.FC = () => {
    const [userInput, setUserInput] = useState<string>('');
    const [conversation, setConversation] = useState<Message[]>([]);

    const handleSendMessage = useCallback(async () => {
        if (!userInput.trim()) return;
        const message = userInput.trim();
        setUserInput('');

        const updatedConversation = [...conversation, { text: message, sender: 'You' }];
        setConversation(updatedConversation);

        try {
            const response = await fetch('http://localhost:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            if (!response.ok) throw new Error('Failed to fetch from the API');

            const { reply } = await response.json();
            setConversation(prev => [...prev, { text: reply, sender: 'Bot' }]);
        } catch (error) {
            console.error('Error sending message:', error);
            setConversation(prev => [...prev, { text: 'Error communicating with the bot.', sender: 'Bot' }]);
        }
    }, [userInput, conversation]);

    useEffect(() => {
        const handleEnter = (event: KeyboardEvent) => {
            if (event.key === 'Enter' && userInput) {
                handleSendMessage();
            }
        };

        window.addEventListener('keydown', handleEnter);
        return () => window.removeEventListener('keydown', handleEnter);
    }, [userInput, handleSendMessage]);

    return (
        <Segment inverted style={{ backgroundColor: 'black', color: 'white', minHeight: '400px', width: '300px' }}>
            <Comment.Group>
                {conversation.map((c, index) => (
                    <Comment key={index} style={{ textAlign: c.sender === 'You' ? 'right' : 'left' }}>
                        <Comment.Content>
                            <Comment.Author style={{ color: c.sender === 'You' ? 'blue' : 'red' }}>{c.sender}</Comment.Author>
                            <Comment.Text>{c.text}</Comment.Text>
                        </Comment.Content>
                    </Comment>
                ))}
            </Comment.Group>
            <Input
                action={
                    <Button color='blue' onClick={handleSendMessage}>
                        Send
                    </Button>
                }
                placeholder='Type a message...'
                value={userInput}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserInput(e.target.value)}
                fluid
                style={{ marginTop: '10px' }}
            />
        </Segment>
    );
};

export default ChatBot;
