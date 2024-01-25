import { ChatIcon, CloseIcon, EmailIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input, Textarea } from '@chakra-ui/react';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Chat = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setEmail('');
    setMessage('');
  };

  const validateAndSendMessage = async () => {
    if (!email.trim() || !message.trim()) {
      alert('Email and Message are required');
      return;
    }

    try {
      setIsSending(true);
      await emailjs.send(
        'service_geahi3p',
        'template_qm5990v',
        {
          email,
          message,
        },
        'RU3pEGLyhwASG2CXt'
      );

      console.log('Email sent successfully');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Flex
      direction="column-reverse"
      position="fixed"
      left="9"
      bottom="20"
      color="white"
    >
      <IconButton
            aria-label={isOpen ? 'Close Chat' : 'Open Chat'}
            colorScheme="blue"
            onClick={toggleChat}
            size="sm"
            backgroundColor="white"
            color="black"
            >
            {isOpen ? <CloseIcon /> : <ChatIcon />}
        </IconButton>

      {isOpen && (
        <>
          <Input
            placeholder="Your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb={2}
            backgroundColor="white" 
            color="black"
          />
          <Textarea
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            resize="none"
            width="250px"
            height="150px"
            mb={2}
            backgroundColor="white" 
            color="black"
          />
          <IconButton
            icon={<EmailIcon />}
            aria-label="Send"
            colorScheme="blue"
            onClick={validateAndSendMessage}
            size="sm"
            isDisabled={isSending}
            backgroundColor="white"
            color="black"
            marginBottom="0.5rem"
          />
        </>
      )}
    </Flex>
  );
};

export default Chat;
