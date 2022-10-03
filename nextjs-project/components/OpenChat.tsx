import React from 'react';
import Vector from '../public/Vector.svg';
import Left from '../public/Left.svg';
import Right from '../public/Right.svg';
import Hide from '../public/Hide.svg';
import Ok from '../public/Ok.svg';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import mobchat from './ChatStore';
const Circle = styled.div`
  width: 50px;
  height: 50px;
  background: #0848c0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
  border-radius: 29px;
`;

const Animation: React.FC = () => {
  return (
    <div>
      <motion.div
        style={{ position: 'relative', bottom: '100%', left: '0%' }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, delay: 1, duration: 4, repeatDelay: 0 }}
      >
        <Vector />
      </motion.div>

      <motion.div
        style={{ position: 'relative', bottom: '35px', left: '0px' }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, delay: 2, duration: 2, repeatDelay: 10 }}
      >
        <Left />
      </motion.div>
      <motion.div
        style={{ position: 'relative', bottom: '55px', left: '6px' }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, delay: 6, duration: 2, repeatDelay: 10 }}
      >
        <Right />
      </motion.div>
      <motion.div
        style={{ position: 'relative', bottom: '80px', left: '3px' }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, delay: 10, duration: 2, repeatDelay: 10 }}
      >
        <Ok />
      </motion.div>
    </div>
  );
};

const OpenChat: React.FC = () => {
  const handler = () => {
    mobchat.makeVisible();
  };
  return (
    <>
      <Circle onClick={handler}>
        <div style={{ position: 'relative', top: '30%', left: '30%' }}>
          {mobchat.chatVisibility ? (
            <motion.div style={{ position: 'relative', bottom: '20%', left: '0%' }}>
              <Hide />
            </motion.div>
          ) : (
            <Animation />
          )}
        </div>
      </Circle>
    </>
  );
};

export default OpenChat;
