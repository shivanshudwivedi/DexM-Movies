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
            const response = await fetch('http://localhost:5001/chat', {
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
        <div style={{ padding: '20px 0', margin: 'auto', height: '100vh', width: '100vw', backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Segment style={{ height: '90%', width: '60%', border: 'none', margin: 'auto', padding: '20px', borderRadius: 0, overflow: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Comment.Group>
                    {conversation.map((c, index) => (
                        <div key={index} style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px' }}>
                            <Comment style={{ maxWidth: '100%', backgroundColor: c.sender === 'You' ? '#f0f0f5' : '#e0f7fa' }}>
                                <Comment.Content>
                                    <Comment.Author style={{ fontWeight: 'bold', color: c.sender === 'You' ? 'blue' : 'red' }}>{c.sender}</Comment.Author>
                                    <Comment.Text style={{ color: 'black' }}>{c.text}</Comment.Text>
                                </Comment.Content>
                            </Comment>
                        </div>
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
                    style={{ marginTop: 'auto', fontSize: '1.2rem' }}
                />
            </Segment>
        </div>
    );
};

export default ChatBot;
